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
        />
        <InputTextarea
          name="content"
          placeholder="Content"
          required
          onChange={handleChange}
          className="min-h-[100px]"
        />
        <InputText
          type="text"
          name="githublink"
          placeholder="GitHub Link"
          onChange={handleChange}
        />
        <InputText
          type="text"
          name="weblink"
          placeholder="Web Link"
          onChange={handleChange}
        />
        <div className="flex flex-row justify-start content-center items-center gap-2 mx-3">
          <div className="card flex justify-center content-center ">
            <InputSwitch checked={checked} onChange={(e) => check(e)} />
          </div>
          <div>Pinned</div>
        </div>

        <Button type="submit" severity="success" label="Add" />
      </form>
    </Dialog>
  );
}
