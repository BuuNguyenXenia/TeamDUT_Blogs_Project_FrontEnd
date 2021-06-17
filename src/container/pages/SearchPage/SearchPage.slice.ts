import styled from "styled-components"

export const SearchStyle = styled.div`
  min-height: 100vh;
  .query-info {
    position: relative;
    float: left;
    width: 100%;
    display: flex;
    align-items: center;
    font-family: var(--title-font);
    font-size: 16px;
    color: var(--widget-title-color);
    font-weight: 700;
    margin: 0 0 20px;
    ::after {
      content: "\f054";
      font-family: "Font Awesome 5 Free";
      font-size: 10px;
      font-weight: 900;
      line-height: 1;
      margin: 1px 0 0 3px;
    }
  }
  .found {
    color: var(--post-title-color);
  }
`
