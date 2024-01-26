"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import "../../../globals.css";
import "primereact/resources/themes/md-dark-deeppurple/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import EditModal from "./editModal";
import AddModal from "./addModal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [current_project, setCurrentProject] = useState({
    title: "",
    content: "",
    githublink: "",
    weblink: "",
    pinned: "",
  });
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    githublink: "",
    weblink: "",
    pinned: "",
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
      toast.error("Error Fetching Projects!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  const addProject = async () => {
    try {
      const response = await axios.post("/api/create-project", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setFormData({ title: "", content: "", githublink: "", weblink: "" });
      closeModal();
      toast.success("Added Project!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      fetchProjects();
    } catch (error) {
      toast.error("Couldn't Create Project!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  const deleteProject = async (projectId) => {
    try {
      await axios.delete(`/api/create-project/${projectId}`);
      setProjects(
        projects.filter((project) => project.project_id !== projectId)
      );
      toast.warn("Deleted Project!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } catch (error) {
      toast.error("Couldn't Delete Project!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  const editProjectModal = async (projectId) => {
    try {
      const response = await axios.get(`/api/create-project/${projectId}`);
      setCurrentProject(response.data.projects[0]);
      setModal(1);
    } catch (error) {}
  };

  const editProject = async (projectId) => {
    try {
      const response = await axios.put(
        `/api/create-project/${projectId}`,
        current_project
      );
      setCurrentProject({
        title: "",
        content: "",
        githublink: "",
        weblink: "",
      });
      closeModal();
      fetchProjects();
      toast.warn("Edited Project!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      toast.warn("Couldn't Delete Project!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };
  const accept = (id) => {
    deleteProject(id);
  };

  const reject = () => {};
  const confirm = (id) => {
    confirmDialog({
      message: "Do you want to delete this project?",
      header: "Delete Confirmation",
      icon: "pi pi-info-circle",
      defaultFocus: "reject",
      acceptClassName: "p-button-danger",
      accept: () => accept(id),
      reject,
    });
  };
  const ButtonTemplate = (project) => {
    return (
      <div className="flex flex-row gap-2">
        <Button onClick={() => confirm(project.project_id)} severity="danger">
          Delete
        </Button>
        <Button
          onClick={() => editProjectModal(project.project_id)}
          severity="warning"
        >
          Edit
        </Button>
      </div>
    );
  };
  const GitHubLinkTemplate = (project) => {
    return (
      <a href={project.githublink} className="text-blue-500 hover:underline">
        {project.githublink}
      </a>
    );
  };
  const pinnedTemplate = (project) => {
    if (project.pinned) {
      return <Button icon="pi pi-check"></Button>;
    }
    return <Button icon="pi pi-times"></Button>;
  };
  const WebLinkTemplate = (project) => {
    return (
      <a href={project.weblink} className="text-blue-500 hover:underline">
        {project.weblink}
      </a>
    );
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleChangeEdit = (e) => {
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
    <PrimeReactProvider>
      <div>
        <ConfirmDialog />{" "}
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <div className="content-center justify-center items-center flex flex-col">
          <h1 className="text-4xl font-bold m-4">Projects Page</h1>

          {modal === 1 ? (
            <EditModal
              current_project={current_project}
              handleChangeEdit={handleChangeEdit}
              editProject={editProject}
              closeModal={closeModal}
              modal={modal}
              setCurrentProject={setCurrentProject}
            />
          ) : modal === 2 ? (
            <AddModal
              project={formData}
              handleChange={handleChange}
              addProject={addProject}
              closeModal={closeModal}
              modal={modal}
              setFormData={setFormData}
            />
          ) : (
            <></>
          )}
          <DataTable
            value={projects}
            showGridlines
            tableStyle={{ minWidth: "50rem" }}
            className="p4"
          >
            <Column field="title" header="Name"></Column>
            <Column field="content" header="Category"></Column>
            <Column body={GitHubLinkTemplate} header="GitHub Link"></Column>
            <Column body={WebLinkTemplate} header="Web Link"></Column>
            <Column body={pinnedTemplate} header="Pinned"></Column>
            <Column body={ButtonTemplate} header="Actions"></Column>
          </DataTable>

          <button
            onClick={() => addProjectModal()}
            className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
          >
            Add Project
          </button>
        </div>
      </div>
    </PrimeReactProvider>
  );
}
