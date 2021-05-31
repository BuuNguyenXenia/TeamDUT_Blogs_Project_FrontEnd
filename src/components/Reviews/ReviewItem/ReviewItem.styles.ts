import styled from "styled-components"

export const ItemReview = styled.div`
  :nth-child(2) {
    padding: 17px 0px;
  }
  .card-review-item {
    border-radius: var(--radius);
    border: 1px solid var(--border-color);
    background-color: var(--post-card-bg);
  }
  .card-item {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
  }
  .card-image {
    display: block;
    border-radius: 12px;
    img {
      width: 100%;
      padding: 4px 5px;
      border-radius: 15px;
    }
    :hover {
      opacity: 0.8;
    }
  }
  .card-body {
    padding: 0;
    margin-left: 10px;
    small {
      color: var(--meta-color);
    }
  }
  .card-title {
    font-size: 15px;
    display: block;
    font-weight: 700;
    line-height: 1.3em;
    a {
      color: var(--post-title-color);
      :hover {
        text-decoration: none;
        color: var(--main-color);
      }
    }
  }
`
