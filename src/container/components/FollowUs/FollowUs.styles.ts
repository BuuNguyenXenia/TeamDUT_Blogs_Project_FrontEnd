import styled from "styled-components"

export const Follow = styled.div`
  .social-icons {
    padding: 16px;
    .facebook {
      background-color: #3b5999;
    }
    .twitter {
      background-color: #00acee;
    }
    .youtube {
      background-color: #f50000;
    }
    .instagram {
      background: linear-gradient(15deg, #ffb13d, #dd277b, #4d5ed4);
    }
    .btn {
      position: relative;
      border: 0;
      border-radius: var(--radius);
    }
    a {
      position: relative;
      display: flex;
      height: 34px;
      font-size: 16px;
      color: #fff;
      font-weight: 400;
      align-items: center;
      i {
        padding: 0 10px;
      }
      span {
        font-size: 14px;
        line-height: 1;
        padding: 0 10px;
        border-left: 1px solid rgba(255, 255, 255, 0.2);
      }
      :hover {
        opacity: 0.9;
      }
    }
  }
`
