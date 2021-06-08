import styled from "styled-components"

export const HeaderBlogs = styled.div`
  position: relative;
  float: left;
  width: 100%;
  height: 80px;
  border-bottom: 1px solid rgba(155, 155, 155, 0.15);
  .header-inner {
    width: 1058px;
    max-width: 100%;
  }
  .show {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: auto;
  }
`
export const Logo = styled.a`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100px;
    height: 50px;
  }
`

export const ThemeSwitch = styled.div`
  .themeSwitch {
    position: relative;
    width: 40px;
    height: 40px;
    background: var(--black);
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    &::before {
      content: "\f186";
      font-family: FontAwesome;
      color: var(--white);
      font-size: 20px;
    }
  }
  .active::before {
    content: "\f185";
  }
`