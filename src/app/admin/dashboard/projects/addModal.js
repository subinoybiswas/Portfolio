import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { InputTextarea } from "primereact/inputtextarea";
export default function AddModal(props) {
  const handleChange = props.handleChange;
  const addProject = props.addProject;
  const modal = props.modal;
  const closeModal = props.closeModal;
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
        <Button type="submit" severity="success" label="Add" />
      </form>
    </Dialog>
  );
}
