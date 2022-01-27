import React, { useEffect } from "react";
import Header from "../Header/index";
import { Layout, Table } from "antd";
import { PlusCircleTwoTone, MinusCircleTwoTone } from "@ant-design/icons";
import "./MainPage.css";

const { Content } = Layout;
const MainPage = (props) => {
  const { all_movies, apiMovies } = props;

  console.log("demo", all_movies);
  useEffect(() => {
    apiMovies();
  }, []);

  const columns = [
    {
      title: "Title",
      dataIndex: "original_title",
      key: "original_title",
      className: "data",
    },
    {
      title: "Date",
      dataIndex: "release_date",
      key: "release_date",
      className: "data",
    },
    {
      title: "Vote",
      dataIndex: "vote_average",
      key: "vote_average",
      className: "data",
    },
  ];
  return (
    <div>
      <Header />
      <Content className="content">
        <Table
          bordered={true}
          columns={columns}
          dataSource={all_movies}
          pagination={{ pageSize: 5, position: ["bottomCenter"] }}
          expandable={{
            expandedRowRender: (all_movies) => (
              <p style={{ margin: 0, fontWeight: "bold" }}>
                Synopsis:
                <br />
                <span>{all_movies.overview}</span>
              </p>
            ),
            expandIcon: ({ expanded, onExpand, record }) =>
              expanded ? (
                <MinusCircleTwoTone onClick={(e) => onExpand(record, e)} />
              ) : (
                <PlusCircleTwoTone onClick={(e) => onExpand(record, e)} />
              ),
          }}
          scroll={{ y: 340 }}
        />
      </Content>
    </div>
  );
};

export default MainPage;
