import React from "react";
import { Layout } from "antd";
import HomePage from "./Container/HomePage";
import GlobalStyle from "./globalStyles";
import { Route, Routes } from "react-router-dom";
import UiSelection from "./Container/UISelection";

const { Content } = Layout;

const App = () => {
  return (
    <Content>
      <GlobalStyle />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="homepage" element={<HomePage />} />
        <Route path="ui" element={<UiSelection />} />
      </Routes>
    </Content>
  );
};

export default App;
