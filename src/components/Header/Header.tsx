import React, { useEffect, useState } from "react"
import { HeaderBlogs, Logo, ThemeSwitch } from "./Header.styles"
import logo from "../../assets/images/logo.png"
import Search from "../Search/Search"
// import { Login } from "../Login/Login"

export default function Header() {
  const [toogle, setToggle] = useState<Boolean>(false)

  const nightMode = () => {
    setToggle(!toogle)
  }
  useEffect(() => {
    toogle
      ? document.body.classList.add("dark")
      : document.body.classList.remove("dark")
  }, [toogle])
  return (
    <HeaderBlogs className="header">
      <div className="header-inner show">
        <Logo
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="logo"
        >
          <img src={logo} alt="Blogs Technology" />
        </Logo>
        <Search />
        <ThemeSwitch>
          <span
            className={toogle ? "themeSwitch active" : "themeSwitch"}
            onClick={nightMode}
          ></span>
        </ThemeSwitch>
      </div>
    </HeaderBlogs>
  )
}
