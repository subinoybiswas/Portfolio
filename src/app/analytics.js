import ReactGA from "react-ga";

export const initGA = () => {
  ReactGA.initialize("G-6NQ6P5JBNG"); 
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};
