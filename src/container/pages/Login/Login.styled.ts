import styled from "styled-components"

export const Wrapper = styled.div`
  .container-login {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .el-card {
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
    border-radius: 4px;
    border-top: 1px solid rgba(155, 155, 155, 0.15);
    background-color: var(--post-card-bg);
    overflow: hidden;
    color: #303133;
    transition: 0.3s;
    &__body {
      padding: 20px;
    }
  }
  img {
    width: 180px;
  }
  .error {
    border: 1px solid var(--red);
    :focus {
      border-color: #ff8080;
      box-shadow: 0 0 0 0.2rem rgb(255 0 0 / 25%);
    }
  }
  .back-login {
    float: right;
    font-size: 1em;
    margin: 10px 0px;
    ::after {
      content: "\f054";
      font-family: "Font Awesome 5 Free";
      font-size: 10px;
      font-weight: 900;
      line-height: 1;
      margin: 2px 0 0 3px;
    }
    :hover {
      text-decoration: underline;
    }
  }
  .card-title {
    color: var(--post-title-color);
  }
`
