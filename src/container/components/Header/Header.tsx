import React, { useEffect, useState } from "react"
import { HeaderBlogs, ThemeSwitch } from "./Header.styles"
import logo from "../../../assets/images/logo.png"
import Search from "../Search/Search"
import { Container, Dropdown } from "react-bootstrap"
import { Link, useHistory } from "react-router-dom"
import { useAppSelector, useAppDispatch } from "../../../redux/store/hooks"
import {
  currentUser,
  logoutUser,
  userSelector
} from "src/redux/slices/userSlice/User.slice"
import { PATH } from "src/services/constants/path"
import LocalStorageService from "src/services/LocalStorageService/Storage.service"
import { clearState } from "../../../redux/slices/allPostsSlice/Posts.slice"
import Notification from "../Notification/Notification"

const Header = () => {
  const [toogle, setToggle] = useState<boolean>(false)
  const [scrollHeader, setScrollHeader] = useState<string>("notShadow")
  const history = useHistory()
  const dispatch = useAppDispatch()
  let accessToken: any = LocalStorageService.getItem<string>("accessToken")

  const [token, setToken] = useState<string>(accessToken)

  const user = useAppSelector(userSelector)
  const { email, name, isSuccess, role, avatar } = user

  const handleScroll = () => {
    if (document.documentElement.scrollTop > 80) {
      setScrollHeader("withShadow")
    } else {
      setScrollHeader("notShadow")
    }
  }

  const nightMode = () => {
    setToggle(!toogle)
    LocalStorageService.setItem("check", !toogle)
  }

  const LogOutUser = () => {
    dispatch(logoutUser())
    dispatch(clearState())

    history.push(PATH.HOME)
  }
  let checkToggle: any = LocalStorageService.getItem("check")
  useEffect(() => {
    checkToggle
      ? document.body.classList.add("dark")
      : document.body.classList.remove("dark")
  }, [checkToggle])

  useEffect(() => {
    window.onscroll = () => handleScroll()
  }, [scrollHeader])

  useEffect(() => {
    setToken(accessToken)
    if (token) {
      dispatch(currentUser())
    }
  }, [])

  return (
    <HeaderBlogs className="header">
      <div className={scrollHeader}>
        <Container>
          <div className="header-inner row">
            <Link to={PATH.HOME} className="logo">
              <img src={logo} alt="Blogs Technology" />
            </Link>
            <Search />
            <div className="main-navbar">
              <ThemeSwitch>
                <span
                  className={checkToggle ? "themeSwitch active" : "themeSwitch"}
                  onClick={nightMode}
                ></span>
              </ThemeSwitch>
              {role === "admin" && <Notification />}
              {isSuccess ? (
                <Dropdown className="ml-3">
                  <Dropdown.Toggle as="div" id="dropdown-user">
                    <img src={avatar} alt="user avatar" />
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="dropdown-user_menu">
                    <div className="user">
                      <img src={avatar} alt="user avatar" />
                      <div className="user-infor">
                        <p className="user-email">{email}</p>
                        <p className="user-name">@{name}</p>
                      </div>
                    </div>
                    <Dropdown.Divider className="mt-0" />
                    {role === "user" ? (
                      <>
                        <Link to={PATH.USER_PROFILE}>
                          <Dropdown.Item as="span" className="link link-plain">
                            <i className="fa fa-user"></i>
                            Profile
                          </Dropdown.Item>
                        </Link>
                        <Link to={PATH.USER_SETTINGS}>
                          <Dropdown.Item as="span" className="link link-plain">
                            <i className="fas fa-cog"></i>
                            Settings
                          </Dropdown.Item>
                        </Link>
                      </>
                    ) : (
                      <>
                        <Link to={PATH.USER_PROFILE}>
                          <Dropdown.Item as="span" className="link link-plain">
                            <i className="fa fa-user"></i>
                            Profile
                          </Dropdown.Item>
                        </Link>
                        <Link to={PATH.USER_SETTINGS}>
                          <Dropdown.Item as="span" className="link link-plain">
                            <i className="fas fa-cog"></i>
                            Settings
                          </Dropdown.Item>
                        </Link>
                        <Link to={PATH.MANAGE_POST}>
                          <Dropdown.Item as="span" className="link link-plain">
                            <i className="fas fa-tasks"></i>
                            Posts Management
                          </Dropdown.Item>
                        </Link>
                      </>
                    )}
                    <Dropdown.Divider />
                    <Dropdown.Item
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
