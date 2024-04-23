"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import "../../../globals.css";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";

import EditModal from "./editModal";
import AddModal from "./addModal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Projects() {
  const [loading, setLoading] = useState(false);
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
      setModal(1);
      setLoading(true);
      const response = await axios.get(`/api/create-project/${projectId}`);
      setCurrentProject(response.data.projects[0]);
      setLoading(false);
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

  const ButtonTemplate = ({ project }) => {
    return (
      <div className="flex flex-col content-center text-center items-center gap-2">
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              project and the data
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button
                type="button"
                variant="secondary"
                onClick={() => accept(project.project_id)}
              >
                Delete
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
        <DialogTrigger className="bg-red-800 p-2 rounded-xl hover:bg-red-600 transition-colors w-full text-center justify-center">
          Delete
        </DialogTrigger>

        <Button
          onClick={() => editProjectModal(project.project_id)}
          className="bg-yellow-800 p-2 rounded-xl hover:bg-yellow-600 transition-colors w-full text-center justify-center"
        >
          Edit
        </Button>
      </div>
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
    <>
      <Dialog>
        <div>
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
            {modal === 1 ? (
              <EditModal
                current_project={current_project}
                handleChangeEdit={handleChangeEdit}
                loading={loading}
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

            <Table>
              <TableCaption>A list of your projects.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Title</TableHead>
                  <TableHead>Content</TableHead>
                  <TableHead>Github Link</TableHead>
                  <TableHead>Web Link</TableHead>
                  <TableHead>Pinned</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {projects.map((project, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">
                      {project.title}
                    </TableCell>
                    <TableCell>{project.content}</TableCell>
                    <TableCell>
                      <a
                        href={project.githublink}
                        className="text-blue-500 hover:underline"
                      >
                        {project.githublink}
                      </a>
                    </TableCell>
                    <TableCell>{project.weblink}</TableCell>
                    <TableCell>
                      {project.pinned ? <TiTick size={25} /> : <ImCross />}
                    </TableCell>
                    <TableCell>
                      <ButtonTemplate project={project}></ButtonTemplate>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            <button
              onClick={() => addProjectModal()}
              className="bg-blue-500 text-white px-4 py-2 rounded m-4 "
            >
              Add Project
            </button>
          </div>
        </div>
      </Dialog>
    </>
  );
}
