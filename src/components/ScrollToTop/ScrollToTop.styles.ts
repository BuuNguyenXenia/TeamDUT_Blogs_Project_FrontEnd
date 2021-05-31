import styled from "styled-components"

export const Scroll = styled.div`
  .btn {
    order: 0;
    border-radius: var(--radius);
  }
  .on-footer {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #back-top {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 34px;
    height: 34px;
    background-color: var(--button-bg);
    cursor: pointer;
    overflow: hidden;
    font-size: 15px;
    color: var(--button-color);
    text-align: center;
    line-height: 34px;
    z-index: 50;
    margin: 0;
    transition: background 0.17s ease, color 0.17s ease;
    i {
      font-weight: 900;
      color: #fff;
    }
  }
`
