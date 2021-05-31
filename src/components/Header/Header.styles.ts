import styled from "styled-components"

export const HeaderBlogs = styled.div`
  position: fixed;
  top: 0;
  z-index: 9999999;
  float: left;
  width: 100%;
  height: 80px;
  background-color: var(--header-bg);
  border-bottom: 1px solid rgba(155, 155, 155, 0.15);
  .withShadow {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
    transition: box-shadow 0.3s;
  }
  .header-inner {
    max-width: 100%;
  }
  .show {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: auto;
  }
  .main-navbar {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .el-button {
    outline: none !important;
    &--text {
      color: var(--main-color);
      padding-left: 0px;
      padding-right: 0px;
      border-color: transparent;
      background: transparent;
      font-size: 1.1em;
      font-weight: 500;
    }
  }
`
export const Logo = styled.a`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ThemeSwitch = styled.div`
  .themeSwitch {
    width: 25px;
    height: 25px;
    position: relative;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    &::before {
      content: "\f186";
      font-family: FontAwesome;
      color: var(--black);
      font-size: 20px;
    }
  }
  .active::before {
    content: "\f185";
  }
`
