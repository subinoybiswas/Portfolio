export default function EditModal(props) {
  const current_project = props.current_project;
  const handleChangeEdit = props.handleChangeEdit;
  const editProject = props.editProject;
  return (
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
  );
}
