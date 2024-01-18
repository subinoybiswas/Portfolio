"use client";
import { useState, useEffect } from "react";
import axios from "axios";
export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [current_project, setCurrentProject] = useState({
    title: "",
    content: "",
    githublink: "",
    weblink: "",
  });
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    githublink: "",
    weblink: "",
  });
  const [modal, setModal] = useState(false);
  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get("/api/get-projects", {
        cache: "no-store", // Disable caching
      });
      //   console.log(response.data.projects);
      setProjects(response.data.projects);
      //   console.log(projects);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };
  //   console.log(formData);

  const addProject = async () => {
    try {
      const response = await axios.post("/api/create-project", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      fetchProjects();
    } catch (error) {
      console.error("Error adding project:", error);
    }
  };

  const deleteProject = async (projectId) => {
    try {
      await axios.delete(`/api/create-project/${projectId}`);
      setProjects(
        projects.filter((project) => project.project_id !== projectId)
      );
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };

  const editProjectModal = async (projectId) => {
    try {
      // console.log(projectId);
      const response = await axios.get(`/api/create-project/${projectId}`);
      setCurrentProject(response.data.projects[0]);
      console.log(response.data.projects);
      setModal(true);
    } catch (error) {
      console.error("Error editing project:", error);
    }
  };
  const editProject = async (projectId) => {
    try {
      // console.log(projectId);
      const response = await axios.put(
        `/api/create-project/${projectId}`,
        current_project
      );
      setModal(false);
      fetchProjects();
    } catch (error) {
      console.error("Error editing project:", error);
    }
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleChangeEdit = (e) => {
    console.log();
    setCurrentProject({
      ...current_project,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 content-center">Projects Page</h1>
      {/* Render projects list */}
      {modal ? (
        <div>
          <form
            key={current_project.project_id}
            onSubmit={(e) => {
              e.preventDefault();
              editProject(current_project.project_id);
            }}
            className="mt-4 text-black"
          >
            <input
              type="text"
              name="title"
              value={current_project.title}
              required
              className="border border-gray-300 rounded px-2 py-1"
              onChange={handleChangeEdit}
            />
            <textarea
              name="content"
              value={current_project.content}
              required
              className="border border-gray-300 rounded px-2 py-1 mt-2"
              onChange={handleChangeEdit}
            ></textarea>
            <input
              type="text"
              name="githublink"
              placeholder="GitHub Link"
              value={current_project.githublink}
              className="border border-gray-300 rounded px-2 py-1 mt-2"
              onChange={handleChangeEdit}
            />
            <input
              type="text"
              name="weblink"
              placeholder="Web Link"
              value={current_project.weblink}
              className="border border-gray-300 rounded px-2 py-1 mt-2"
              onChange={handleChangeEdit}
            />
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded mt-2"
            >
              Edit Project
            </button>
          </form>
        </div>
      ) : (
        <></>
      )}

      {projects.map((project) => (
        <div key={project.project_id} className="mb-4 flex flex-row gap-4">
          <h2 className="text-xl font-bold">
            {project.title},{project.project_id}
          </h2>
          <p>{project.content}</p>
          <a
            href={project.githublink}
            className="text-blue-500 hover:underline"
          >
            GitHub Link
          </a>
          <a href={project.weblink} className="text-blue-500 hover:underline">
            Web Link
          </a>
          <button
            onClick={() => deleteProject(project.project_id)}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Delete
          </button>
          <button
            onClick={() => editProjectModal(project.project_id)}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Edit
          </button>
        </div>
      ))}

      {/* Add project form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addProject(formData);
        }}
        className="mt-4 text-black"
      >
        <input
          type="text"
          name="title"
          placeholder="Title"
          required
          className="border border-gray-300 rounded px-2 py-1"
          onChange={handleChange}
        />
        <textarea
          name="content"
          placeholder="Content"
          required
          className="border border-gray-300 rounded px-2 py-1 mt-2"
          onChange={handleChange}
        ></textarea>
        <input
          type="text"
          name="githublink"
          placeholder="GitHub Link"
          className="border border-gray-300 rounded px-2 py-1 mt-2"
          onChange={handleChange}
        />
        <input
          type="text"
          name="weblink"
          placeholder="Web Link"
          className="border border-gray-300 rounded px-2 py-1 mt-2"
          onChange={handleChange}
        />
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded mt-2"
        >
          Add Project
        </button>
      </form>
    </div>
  );
}
