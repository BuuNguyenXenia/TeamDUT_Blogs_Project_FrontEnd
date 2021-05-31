import React, { useEffect, useState } from "react"
import { HeaderBlogs, Logo, ThemeSwitch } from "./Header.styles"
import logo from "../../assets/images/logo.png"
import Search from "../Search/Search"
import { Container } from "react-bootstrap"
import { Link } from "react-router-dom"
const Header: React.FC = () => {
  const [toogle, setToggle] = useState<boolean>(false)
  const [scrollHeader, setScrollHeader] = useState<string>("notShadow")

  const handleScroll = () => {
    if (document.documentElement.scrollTop > 80) {
      setScrollHeader("withShadow")
    } else {
      setScrollHeader("notShadow")
    }
  }

  const nightMode = () => {
    setToggle(!toogle)
  }

  useEffect(() => {
    toogle
      ? document.body.classList.add("dark")
      : document.body.classList.remove("dark")
  }, [toogle])

  useEffect(() => {
    window.onscroll = () => handleScroll()
  }, [scrollHeader])

  return (
    <HeaderBlogs className="header">
      <div className={scrollHeader}>
        <Container>
          <div className="header-inner show row">
            <Logo
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="logo"
            >
              <img src={logo} alt="Blogs Technology" />
            </Logo>
            <Search />
            <div className="main-navbar">
              <ThemeSwitch>
                <span
                  className={toogle ? "themeSwitch active" : "themeSwitch"}
                  onClick={nightMode}
                ></span>
              </ThemeSwitch>
              <Link to="/login">
                <button
                  type="button"
                  className="el-button el-button--text ml-3"
                >
                  <i className="fas fa-sign-in-alt mr-1"></i>
                  <span>Sign In/Sign up</span>
                </button>
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </HeaderBlogs>
  )
}

export default Header
