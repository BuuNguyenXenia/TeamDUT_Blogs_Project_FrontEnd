import styled from "styled-components"

export const TopReview = styled.div`
  .card-review-top {
    height: 322.66px;
    border: 1px solid var(--border-color);
    background-color: var(--post-card-bg);
    border-radius: var(--radius);
  }
  .card-review-image {
    cursor: pointer;
    border-top-right-radius: var(--radius);
    border-top-left-radius: var(--radius);
  }
  .card-review-body {
    border-bottom-left-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
    background-color: var(--post-card-bg);
  }

  .card-title {
    color: var(--black);
    font-weight: 700;
    a {
      color: var(--post-title-color);
      :hover {
        color: var(--main-color);
      }
    }
  }
  .card-text {
    color: var(--meta-color);
    span {
      color: var(--main-color);
    }
  }
`
