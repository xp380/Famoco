import React, { useEffect } from "react";
import Header from "../Header/index";
import { Layout, Row } from "antd";
import "./MainPage.css";

const { Content, Footer } = Layout;
const MainPage = (props) => {
  const { all_movies, apiMovies } = props;

  console.log("demo", all_movies);
  useEffect(() => {
    apiMovies();
  }, []);

  return (
    <div>
      <Header />
      <Content className="content">
        <Row gutter={15}></Row>
      </Content>
      <Footer className="foot"></Footer>
    </div>
  );
};

export default MainPage;
