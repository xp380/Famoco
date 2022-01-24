import React from "react";
import { BrowserRouter as Router, useHistory } from "react-router-dom";
import { PageHeader, Button } from "antd";
import "./Header.css";

const Header = () => {
  let history = useHistory();
  const handleClick = () => {
    history.push("/mylist");
  };
  const Titre = <div className="HeadLine">MovieDB App</div>;

  return (
    <Router>
      <div className="header-ghost-wrapper">
        <PageHeader
          ghost={true}
          title={Titre}
          extra={[
            <Button className="Button" key="3">
              <a href="/">TOUS LES FILMS</a>
            </Button>,
            <Button className="ButtonList" key="2" onClick={handleClick}>
              MA LISTE
            </Button>,
            <Button className="Button" key="1">
              TRIER PAR DATE
            </Button>,
          ]}
        />
      </div>
    </Router>
  );
};

export default Header;
