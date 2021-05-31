import styled from "styled-components"

export const ReviewsList = styled.div`
  .header-reviews {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .header-title {
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
`
