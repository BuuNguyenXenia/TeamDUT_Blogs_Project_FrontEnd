import styled from "styled-components"

export const FooterBlogs = styled.div`
  background-color: var(--header-bg);
  .primary-footer {
    position: relative;
    width: 100%;
    border-top: 1px solid var(--border-color);
    border-bottom: 1px solid var(--border-color);
    margin-bottom: 10px;
  }
  .flex-center {
    display: flex;
    align-items: center;
  }
  .footer-logo {
    img {
      width: 130px;
    }
  }
  .footer-info {
    color: var(--black);
    font-weight: 600;
    .footer-title {
      font-size: 14px;
      color: var(--footer-color);
      margin: 0;
    }
  }
  .linkList {
    .social-icons {
      .facebook a {
        :hover {
          background-color: #3b5999;
          color: #fff;
        }
      }
      .twitter a {
        :hover {
          background-color: #00acee;
          color: #fff;
        }
      }
      .youtube a {
        :hover {
          background-color: #f50000;
          color: #fff;
        }
      }
      .instagram a {
        :hover {
          background: linear-gradient(15deg, #ffb13d, #dd277b, #4d5ed4);
          color: #fff;
        }
      }
      .rss a {
        :hover {
          background-color: #ffc200;
          color: #fff;
        }
      }
    }
    ul {
      list-style-type: none;
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
    li {
      margin: 0 0 0 10px;
      a {
        display: flex;
        width: 34px;
        height: 34px;
        background-color: var(--rgba-gray);
        font-size: 16px;
        color: var(--footer-color);
        align-items: center;
        justify-content: center;
        text-decoration: none;
        position: relative;
        border: 0;
        border-radius: 8px;
        :hover {
          transition: color 0.2s, background-color 0.2s;
        }
      }
    }
  }
`
