const pagePaths = {
  Dashboard: "/admin/dashboard",
  Projects: "/admin/dashboard/projects",
  contact: "/contact",
};
const getPageName = (path) => {
  const pageName = Object.keys(pagePaths).find(
    (key) => pagePaths[key] === path
  );
  return pageName || "";
};

export default getPageName;
