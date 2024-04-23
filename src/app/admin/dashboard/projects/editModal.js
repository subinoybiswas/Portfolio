import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { InputTextarea } from "primereact/inputtextarea";
import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { LoaderIcon } from "lucide-react";

export default function EditModal(props) {
  const current_project = props.current_project;
  const handleChangeEdit = props.handleChangeEdit;
  const editProject = props.editProject;
  const closeModal = props.closeModal;
  const setCurrentProject = props.setCurrentProject;
  const modal = props.modal;
  const loading = props.loading;
  const [checked, setChecked] = useState(current_project.pinned ? true : false);
  const check = (e) => {
    setChecked(e);
    setCurrentProject({ ...current_project, pinned: e ? 1 : 0 });
  };
  return (
    <Dialog
      visible={modal === 1}
      style={{ width: "50vw" }}
      onHide={closeModal}
      draggable={false}
      className="bg-slate-700 p-5 rounded-3xl text-xl gap-1 "
    >
      {loading ? (
        <div className="grid place-items-center h-[80vh]">
          <div className="grid place-items-center">
            <LoaderIcon className="animate-spin" size={50} />
          </div>
        </div>
      ) : (
        <form
          key={current_project.project_id}
          onSubmit={(e) => {
            e.preventDefault();
            editProject(current_project.project_id);
          }}
          className="flex flex-col justify-center gap-2"
        >
          <InputText
            type="text"
            name="title"
            placeholder="Title"
            value={current_project.title}
            required
            onChange={handleChangeEdit}
            className="rounded-xl p-2 bg-slate-800 text-xl"
          />
          <InputTextarea
            name="content"
            value={current_project.content}
            placeholder="Content"
            required
            onChange={handleChangeEdit}
            className="rounded-xl p-2 bg-slate-800 text-xl min-h-[200px]"
          />
          <InputText
            type="text"
            name="githublink"
            placeholder="GitHub Link"
            value={current_project.githublink}
            onChange={handleChangeEdit}
            className="rounded-xl p-2 bg-slate-800 text-xl"
          />
          <InputText
            type="text"
            name="weblink"
            placeholder="Web Link"
            value={current_project.weblink}
            onChange={handleChangeEdit}
            className="rounded-xl p-2 bg-slate-800 text-xl"
          />
          <div className="flex flex-row justify-start content-center items-center gap-2 mx-3">
            <div className="card flex justify-center content-center ">
              <Switch checked={checked} onCheckedChange={(e) => check(e)} />
            </div>
            <div>Pinned</div>
          </div>

          <Button
            label="Edit"
            className="bg-slate-800 p-2 w-[100px] self-center rounded-xl text-xl hover:bg-slate-900 transition-colors"
            type="submit"
          ></Button>
        </form>
      )}
    </Dialog>
  );
}
