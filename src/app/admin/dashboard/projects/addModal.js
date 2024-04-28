import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { InputTextarea } from "primereact/inputtextarea";
import { Switch } from "@/components/ui/switch";
import { Select, SelectSection, SelectItem } from "@nextui-org/react";
import { useState } from "react";

export default function AddModal(props) {
  const handleChange = props.handleChange;
  const addProject = props.addProject;
  const modal = props.modal;
  const closeModal = props.closeModal;
  const [checked, setChecked] = useState(false);
  const setFormData = props.setFormData;
  const formData = props.project;
  const menus = [
    { value: 1, label: "Fullstack" },
    { value: 2, label: "Frontend" },
    { value: 3, label: "Packages" },
    { value: 4, label: "Others" },
  ];
  const check = (e) => {
    setChecked(e);
    setFormData({ ...formData, pinned: e ? 1 : 0 });
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
        <InputText
          type="text"
          name="imagelink"
          placeholder="Image Link"
          className="rounded-xl p-2 bg-slate-800 text-xl "
          onChange={handleChange}
        />
        <InputText
          type="text"
          name="tags"
          placeholder="Tags"
          className="rounded-xl p-2 bg-slate-800 text-xl "
          onChange={handleChange}
        />
        <Select
          isRequired
          label="Type"
          placeholder="Enter Type"
          className="max-w-xs"
          color="bg-slate-800"
          name="type"
          onChange={handleChange}
        >
          {menus.map((menu) => (
            <SelectItem key={menu.value} value={menu.value}>
              {menu.label}
            </SelectItem>
          ))}
        </Select>
        <div className="flex flex-row justify-start content-center items-center gap-2 mx-3">
          <div className="card flex justify-center content-center ">
            <Switch checked={checked} onCheckedChange={(e) => check(e)} />
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
