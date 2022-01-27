import React, { useEffect } from "react";
import Header from "../Header/index";
import { Layout, Table } from "antd";
import "./MainPage.css";

const { Content } = Layout;
const MainPage = (props) => {
  const { all_movies, apiMovies } = props;

  console.log("demo", all_movies);
  useEffect(() => {
    apiMovies();
  }, []);

  const columns = [
    { title: "Title", dataIndex: "original_title", key: "original_title" },
    { title: "Date", dataIndex: "release_date", key: "release_date" },
    { title: "Vote", dataIndex: "vote_average", key: "vote_average" },
  ];
  return (
    <div>
      <Header />
      <Content className="content">
        <Table
          columns={columns}
          dataSource={all_movies}
          pagination={{ pageSize: 5, position: ["bottomCenter"] }}
          expandable={{
            expandedRowRender: (all_movies) => (
              <p style={{ margin: 0 }}>
                Synopsis:
                <br />
                <span>{all_movies.overview}</span>
              </p>
            ),
          }}
          scroll={{ y: 340 }}
        />
      </Content>
    </div>
  );
};

export default MainPage;
