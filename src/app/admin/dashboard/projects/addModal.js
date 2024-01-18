export default function AddModal(props) {
  const project = props.formData;
  const handleChange = props.handleChange;
  const addProject = props.addProject;
  const closeModal = props.closeModal;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none ">
      <div className="bg-slate-50 md:h-[80vh] md:w-[90vw] flex md:flex-col rounded-xl">
        <div className="text-red-800 flex justify-end m-4">
          <button onClick={closeModal}>X</button>
        </div>
        <div className="text-black flex justify-center text-3xl">
          Add Project
        </div>
        <div className="flex flex-col flex-grow justify-center ">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              addProject();
            }}
            className="mt-4 text-black flex flex-col justify-center gap-2 mx-4 "
          >
            <input
              type="text"
              name="title"
              placeholder="Title"
              required
              className="border border-gray-300 rounded px-2 py-1 mt-2 "
              onChange={handleChange}
            />
            <textarea
              name="content"
              placeholder="Content"
              required
              className="border border-gray-300 rounded px-2 py-1 mt-2"
              onChange={handleChange}
            ></textarea>
            <input
              type="text"
              name="githublink"
              placeholder="GitHub Link"
              className="border border-gray-300 rounded px-2 py-1 mt-2"
              onChange={handleChange}
            />
            <input
              type="text"
              name="weblink"
              placeholder="Web Link"
              className="border border-gray-300 rounded px-2 py-1 mt-2"
              onChange={handleChange}
            />
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded mt-2 w-32"
            >
              Add Project
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
