"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import EditModal from "./editModal";
import AddModal from "./addModal";
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
  const [modal, setModal] = useState(0);
  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch("/api/get-projects", {
        method: "POST",
        headers: {
          "Cache-Control": "private, no-cache, no-store", // Disable caching
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setProjects(data.projects);
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
      closeModal();
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
      setModal(1);
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
      closeModal();
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
  const closeModal = () => {
    setModal(0);
  };
  const addProjectModal = () => {
    setModal(2);
  };
  return (
    <div className="content-center justify-center items-center flex flex-col">
      <h1 className="text-2xl font-bold mb-4">Projects Page</h1>

      {modal === 1 ? (
        <EditModal
          current_project={current_project}
          handleChangeEdit={handleChangeEdit}
          editProject={editProject}
          closeModal={closeModal}
        />
      ) : modal === 2 ? (
        <AddModal
          project={formData}
          handleChange={handleChange}
          addProject={addProject}
          closeModal={closeModal}
        />
      ) : (
        <></>
      )}

      <table className="min-w-full bg-black border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Title</th>
            <th className="border border-gray-300 px-4 py-2">Content</th>
            <th className="border border-gray-300 px-4 py-2">GitHub Link</th>
            <th className="border border-gray-300 px-4 py-2">Web Link</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.project_id}>
              <td className="border border-gray-300 px-4 py-2">
                {project.title}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {project.content}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <a
                  href={project.githublink}
                  className="text-blue-500 hover:underline"
                >
                  GitHub Link
                </a>
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <a
                  href={project.weblink}
                  className="text-blue-500 hover:underline"
                >
                  Web Link
                </a>
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <button
                  onClick={() => deleteProject(project.project_id)}
                  className="bg-red-500 text-white px-4 py-2 rounded mr-2"
                >
                  Delete
                </button>
                <button
                  onClick={() => editProjectModal(project.project_id)}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button
        onClick={() => addProjectModal()}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
      >
        Add Project
      </button>
    </div>
  );
}
