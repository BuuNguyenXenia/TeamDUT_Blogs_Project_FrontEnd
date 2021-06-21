import styled from "styled-components"

export const Posts = styled.div`
  .posts-card-body {
    padding: 8px 20px;
  }
  @media (max-width: 992px) {
    .posts-item-title {
      font-size: 1.1em;
      display: block;
      color: var(--post-title-color);
      font-weight: 700;
      line-height: 1.3em;
    }
    .posts-item-time {
      font-size: 1em;
    }
  }
  @media (max-width: 768px) {
    .posts-item-title {
      font-size: 1em;
    }
    .posts-item-time {
      font-size: 0.875em;
    }
  }
`
