import React from "react";
import { Layout } from "antd";
import HomePage from "./Container/HomePage";
import GlobalStyle from "./globalStyles";

const { Content } = Layout;

const App = () => {
  return (
    <Content>
      <GlobalStyle />
      <HomePage />
    </Content>
  );
};

export default App;
