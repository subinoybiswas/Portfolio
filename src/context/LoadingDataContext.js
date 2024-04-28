import React, { createContext, useState, useEffect } from "react";
const LoadingDataContext = createContext({
  isLoading: false,
  data: null,
  setLoading: () => {},
  setData: () => {},
});

export { LoadingDataContext };
