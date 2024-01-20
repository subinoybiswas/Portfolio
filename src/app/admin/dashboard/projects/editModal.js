import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { InputTextarea } from "primereact/inputtextarea";
export default function EditModal(props) {
  const current_project = props.current_project;
  const handleChangeEdit = props.handleChangeEdit;
  const editProject = props.editProject;
  const closeModal = props.closeModal;
  const modal = props.modal;
  return (
    <Dialog
      header={current_project.title}
      visible={modal === 1}
      style={{ width: "50vw" }}
      onHide={closeModal}
      draggable={false}
    >
      <form
        key={current_project.project_id}
        onSubmit={(e) => {
          e.preventDefault();
          editProject(current_project.project_id);
        }}
        className="mt-4  flex flex-col justify-center gap-2 mx-4 "
      >
        <InputText
          type="text"
          name="title"
          placeholder="Title"
          value={current_project.title}
          required
          onChange={handleChangeEdit}
        />
        <InputTextarea
          name="content"
          value={current_project.content}
          placeholder="Content"
          required
          onChange={handleChangeEdit}
        />
        <InputText
          type="text"
          name="githublink"
          placeholder="GitHub Link"
          value={current_project.githublink}
          onChange={handleChangeEdit}
        />
        <InputText
          type="text"
          name="weblink"
          placeholder="Web Link"
          value={current_project.weblink}
          onChange={handleChangeEdit}
        />
        <Button className="inline-flex content-center" label="Edit" severity="danger" type="submit">
        </Button>
      </form>
    </Dialog>
  );
}
