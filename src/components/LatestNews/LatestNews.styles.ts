import styled from "styled-components"

export const LatestNewsPage = styled.div`
  .lasts-news-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .lasts-news-title {
    font-size: 16px;
    color: var(--widget-title-color);
    font-weight: 700;
    margin: 0;
    :after {
      content: "\f054";
      font-family: "Font Awesome 5 Free";
      font-size: 10px;
      font-weight: 900;
      line-height: 1;
      margin: 2px 0 0 3px;
    }
  }
  .view-all {
    font-size: 12px;
    color: var(--meta-color);
    font-weight: 600;
    line-height: 1;
    :hover {
      text-decoration: none;
      color: var(--main-color);
    }
  }
  .button-load-more {
    background-color: var(--button-bg);
    font-size: 14px;
    color: #fff;
    padding: 8px 30px;
    font-weight: 600;
    border-radius: var(--radius);
    :after {
      content: "\f078";
      display: inline-block;
      font-family: "Font Awesome 5 Free";
      font-size: 10px;
      font-weight: 900;
      margin: 0 0 0 4px;
    }
  }
`
