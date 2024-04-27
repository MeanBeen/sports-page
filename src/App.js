import React from "react";
import { Layout } from "antd";
import HomePage from "./Container/HomePage";
import GlobalStyle from "./globalStyles";
import { Route, Routes } from "react-router-dom";

import AflUi from "./Container/UISelection/AflUi";
import NrlUi from "./Container/UISelection/NrlUi";
import AflScore from "./Container/ScorePage/AflScore";
import NrlScore from "./Container/ScorePage/NrlScore";

const { Content } = Layout;

const App = () => {
  return (
    <Content>
      <GlobalStyle />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="homepage" element={<HomePage />} />
        <Route path="aflui" element={<AflUi />} />
        <Route path="nrlui" element={<NrlUi />} />
        <Route path="aflscore" element={<AflScore />} />
        <Route path="nrlscore" element={<NrlScore />} />
      </Routes>
    </Content>
  );
};

export default App;
