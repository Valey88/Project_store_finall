import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import { useState } from "react";
import { Button, Dropdown, Space } from "antd";

export default function Header() {
  const [isOpen, setOpen] = useState(false);
  const items = [
    {
      key: "1",
      label: (
        <Link className="items_login_nav" to="/login">
          Login
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link className="items_login_nav" to="/registration">
          Create Account
        </Link>
      ),
    },
  ];

  return (
    <>
      <header className="header">
        <div className="headerLogo">
          <Link to="/">iHarmony Hub</Link>
        </div>
        <nav
          className={`headerNav ${isOpen ? "active" : ""}`}
          onClick={() => setOpen(false)}
        >
          <ul className="headerNavList">
            <li className="headerNavItem">
              <Link to="/products">Магазин </Link>
            </li>
            <li className="headerNavItem">
              <Link to="/contacts">Преимущества</Link>
            </li>
            <li className="headerNavItem">
              <Link to="/Booking">Бронирование </Link>
            </li>
            <li className="headerNavItem">
              <Link to="https://t.me/coworking_orgmu">Контакты</Link>
            </li>
          </ul>

          <div className="headerNavItemLogin">
            <Space direction="vertical">
              <Space wrap>
                <Dropdown
                  menu={{
                    items,
                  }}
                  placement="top"
                  arrow
                >
                  <Button className="headerNavItemLoginButton">
                    <img src="/public/Group 1088.png" alt="" />
                  </Button>
                </Dropdown>
              </Space>
            </Space>
          </div>
        </nav>
        <div className="headerMenu">
          <button onClick={() => setOpen(!isOpen)}>
            <img src="/public/Category.svg" width={40} height={40} alt="" />
          </button>
        </div>
      </header>
    </>
  );
}
