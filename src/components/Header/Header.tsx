import React, { useEffect, useState } from "react"
import { HeaderBlogs, Logo, ThemeSwitch } from "./Header.styles"
import logo from "../../assets/images/logo.png"
import Search from "../Search/Search"
import { Container, Dropdown } from "react-bootstrap"
import { Link, useHistory } from "react-router-dom"
import { useAppSelector, useAppDispatch } from "../../store/hooks"
import {
  clearState,
  currentUser,
  logoutUser,
  userSelector
} from "src/pages/User/User.slice"
import { PATH } from "src/constants/path"
import LocalStorageService from "src/services/LocalStorageService/Storage.service"

const Header = () => {
  const [toogle, setToggle] = useState<boolean>(false)
  const [scrollHeader, setScrollHeader] = useState<string>("notShadow")
  const history = useHistory()
  const dispatch = useAppDispatch()

  const user = useAppSelector(userSelector)
  const { email, name, isSuccess, role } = user
  console.log(user)

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

  const LogOutUser = () => {
    dispatch(logoutUser())
    dispatch(clearState())
    history.push("/")
  }

  useEffect(() => {
    toogle
      ? document.body.classList.add("dark")
      : document.body.classList.remove("dark")
  }, [toogle])

  useEffect(() => {
    window.onscroll = () => handleScroll()
  }, [scrollHeader])

  useEffect(() => {
    dispatch(currentUser())
  }, [dispatch])

  return (
    <HeaderBlogs className="header">
      <div className={scrollHeader}>
        <Container>
          <div className="header-inner row">
            <Logo
              href=""
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
              {isSuccess ? (
                <Dropdown className="ml-3">
                  <Dropdown.Toggle as="div" id="dropdown-user">
                    <img
                      src="https://images.viblo.asia/120x120/a2ac1e41-bc36-48b4-b572-f2c1252a7e7a.jpg"
                      alt="user avatar"
                    />
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="dropdown-user_menu">
                    <div className="user">
                      <img
                        src="https://images.viblo.asia/120x120/a2ac1e41-bc36-48b4-b572-f2c1252a7e7a.jpg"
                        alt="user avatar"
                      />
                      <div className="user-infor">
                        <p className="user-email">{email}</p>
                        <p className="user-name">@{name}</p>
                      </div>
                    </div>
                    <Dropdown.Divider className="mt-0" />
                    {role === "user" ? (
                      <>
                        <Dropdown.Item href="" className="link link-plain">
                          <i className="fa fa-user"></i>
                          Profile
                        </Dropdown.Item>
                        <Dropdown.Item href="" className="link link-plain">
                          <i className="fas fa-bell"></i>
                          Notification
                        </Dropdown.Item>
                      </>
                    ) : (
                      <Dropdown.Item as="p" className="link link-plain">
                        <Link to="/admin/addPost" className="link link-plain">
                          <i className="fas fa-tasks"></i>
                          Posts Management
                        </Link>
                      </Dropdown.Item>
                    )}
                    <Dropdown.Divider />
                    <Dropdown.Item
                      href=""
                      className="link link-plain"
                      onClick={LogOutUser}
                    >
                      <i className="fa fa-sign-out-alt"></i>
                      Sign out
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                <Link to="/login">
                  <button
                    type="button"
                    className="el-button el-button--text ml-3"
                  >
                    <i className="fas fa-sign-in-alt mr-1"></i>
                    <span>Sign In/Sign up</span>
                  </button>
                </Link>
              )}
            </div>
          </div>
        </Container>
      </div>
    </HeaderBlogs>
  )
}

export default Header
