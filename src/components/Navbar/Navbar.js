import React, { useState } from "react";
import './Navbar.css'
import { Col, Row } from "antd";
import {
  HomeOutlined,
  LikeOutlined,
  MailOutlined,
  PhoneOutlined,
  UnorderedListOutlined,
  UsergroupAddOutlined,
  UserOutlined,
} from "@ant-design/icons";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <div className="wrapper-nav">
        <Row>
          <nav className="navbar">
            <Col span={6}>THAI NGOC LE DUY</Col>
            <Col span={6} className="infomation">
              <div className="info information-phone">
                <PhoneOutlined />
                <div>+84 982 162 934</div>
              </div>
              <div className="info information-mail">
                <MailOutlined />
                <div>thaingocleduy@gmail.com</div>
              </div>
            </Col>
            <Col span={12}>
              <div onClick={handleOpenMenu} className="burger-menu">
                <div className={openMenu ? "line line-1" : "line"}></div>
                <div className={openMenu ? "line line-2" : "line"}></div>
                <div className={openMenu ? "line line-3" : "line"}></div>
              </div>
            </Col>
          </nav>
        </Row>
        <Row>
          <ul className={openMenu ? "menu-bar menu-bar-opened" : "menu-bar"}>
            <li>
              <HomeOutlined />
              Home
            </li>
            <li>
              <UserOutlined />
              About me
            </li>
            <li>
              <LikeOutlined />
              Skills
            </li>
            <li>
              <UnorderedListOutlined />
              Projects
            </li>
            <li>
              <UsergroupAddOutlined />
              Hire Me
            </li>
          </ul>
        </Row>
      </div>
    </>
  );
};

export default Navbar;
