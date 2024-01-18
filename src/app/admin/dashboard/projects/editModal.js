export default function EditModal(props) {
  const current_project = props.current_project;
  const handleChangeEdit = props.handleChangeEdit;
  const editProject = props.editProject;
  const closeModal = props.closeModal;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
      <div className="bg-slate-50 md:h-[80vh] md:w-[90vw] flex md:flex-col rounded-xl">
        <div className="text-red-800 flex justify-end m-4">
          <button onClick={closeModal}>X</button>
        </div>
        <div className="text-black flex justify-center text-3xl">Edit Project ID: {current_project.project_id}</div>
        <div className="flex flex-col flex-grow justify-center ">
          <form
            key={current_project.project_id}
            onSubmit={(e) => {
              e.preventDefault();
              editProject(current_project.project_id);
            }}
            className="mt-4 text-black flex flex-col justify-center gap-2 mx-4 "
          >
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={current_project.title}
              required
              className="border border-gray-300 rounded px-2 py-1 mt-2 "
              onChange={handleChangeEdit}
            />
            <textarea
              name="content"
              value={current_project.content}
              placeholder="Content"
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
              className="bg-green-500 text-white px-4 py-2 rounded mt-2 w-32"
            >
              Edit Project
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
