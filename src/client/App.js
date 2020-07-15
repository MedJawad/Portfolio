import React, { useState, useEffect } from "react";
import Header from "./components/header/Header";
import { renderRoutes } from "react-router-config";
import Body from "./components/body/Body";
import { useDispatch } from "react-redux";
import { fetchData } from "./actions";
import Footer from "./components/footer/Footer";

export const ThemeContext = React.createContext("dark");

const App = ({ route }) => {
  const [theme, setTheme] = useState("dark");

  return (
    <div>
      <ThemeContext.Provider value={theme}>
        <Header
          toggleTheme={() => setTheme(theme == "dark" ? "light" : "dark")}
        />
        <Body>{renderRoutes(route.routes)}</Body>
        <Footer />
      </ThemeContext.Provider>
    </div>
  );
};

export default {
  component: App,
  loadData: ({ dispatch }) => dispatch(fetchData()),
};
