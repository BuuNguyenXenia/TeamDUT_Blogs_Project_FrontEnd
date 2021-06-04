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
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: auto;
  }

  .main-navbar {
    font-size: 0.875em;
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
  .dropdown-toggle {
    cursor: pointer;
    ::after {
      content: "";
      border: none;
    }
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
  .dropdown-user_menu {
    background-color: var(--post-card-bg);
    padding: 0;
    .user {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.75rem 1rem;
      background-color: var(--post-card-bg);
      img {
        width: 55px;
        height: 55px;
        border-radius: 50%;
      }
      .user-infor {
        font-size: 16px;
        padding-left: 15px;
      }
      .user-email {
        color: #5488c7;
        font-weight: 700;
        margin: 0;
      }
      .user-name {
        color: #9b9b9b;
        margin: 0;
      }
    }
    .dropdown-divider {
      border-top: 1px solid var(--border-color);
    }
  }

  .link {
    font-size: 16px;
    font-weight: 600;
    display: block;
    padding: 0.75rem 1rem;
    margin: 0;
    outline: none;
    color: #606266;
    i {
      padding-right: 15px;
    }
    a {
      padding: 0;
      text-decoration: none;
      color: #606266;
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
