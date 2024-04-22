import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { InputTextarea } from "primereact/inputtextarea";
import { InputSwitch } from "primereact/inputswitch";

import { useState } from "react";
export default function AddModal(props) {
  const handleChange = props.handleChange;
  const addProject = props.addProject;
  const modal = props.modal;
  const closeModal = props.closeModal;
  const [checked, setChecked] = useState(false);
  const setFormData = props.setFormData;
  const formData = props.project;
  const check = (e) => {
    setChecked(e.value);
    setFormData({ ...formData, pinned: e.value ? 1 : 0 });
  };
  return (
    <Dialog
      header="Add Project"
      visible={modal === 2}
      style={{ width: "50vw" }}
      onHide={closeModal}
      draggable={false}
      className="bg-slate-700 p-5 rounded-3xl text-xl gap-1"
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addProject();
        }}
        className="flex flex-col justify-center gap-2"
      >
        <InputText
          type="text"
          name="title"
          placeholder="Title"
          required
          onChange={handleChange}
          className="rounded-xl p-2 bg-slate-800 text-xl"
        />
        <InputTextarea
          name="content"
          placeholder="Content"
          required
          onChange={handleChange}
          className="rounded-xl p-2 bg-slate-800 text-xl min-h-[200px]"
        />
        <InputText
          type="text"
          name="githublink"
          placeholder="GitHub Link"
          onChange={handleChange}
          className="rounded-xl p-2 bg-slate-800 text-xl"
        />
        <InputText
          type="text"
          name="weblink"
          placeholder="Web Link"
          className="rounded-xl p-2 bg-slate-800 text-xl "
          onChange={handleChange}
        />
        <div className="flex flex-row justify-start content-center items-center gap-2 mx-3">
          <div className="card flex justify-center content-center ">
            <InputSwitch
              checked={checked}
              onChange={(e) => check(e)}
              className=""
            />
          </div>
          <div>Pinned</div>
        </div>

        <Button
          type="submit"
          className="bg-slate-800 p-2 w-[100px] self-center rounded-xl text-xl hover:bg-slate-900 transition-colors"
          label="Add"
        />
      </form>
    </Dialog>
  );
}
