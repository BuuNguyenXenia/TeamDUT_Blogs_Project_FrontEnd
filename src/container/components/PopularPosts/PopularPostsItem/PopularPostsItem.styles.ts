import styled from "styled-components"

export const PostsItem = styled.div`
  padding: 12px;
  :nth-child(2) {
    padding: 15px 12px;
  }
  .posts-item-image {
    height: 65px;
    width: 100%;
    img {
      height: 100%;
      width: 100%;
    }
  }
  .posts-item-body {
    padding: 0 0 0 12px;
  }
  .posts-item-title {
    margin-top: 0px;
  }

  @media (max-width: 1200px) {
    .posts-item-image {
      height: 60px;
      width: 100%;
      img {
        height: 100%;
        width: 100%;
      }
    }
  }

  @media (max-width: 992px) {
    .posts-item-image {
      height: 95px;
      width: 100%;
      img {
        height: 100%;
        width: 100%;
      }
    }
  }
  @media (max-width: 768px) {
    .posts-item-image {
      height: 90px;
      width: 100%;
      img {
        height: 100%;
        width: 100%;
      }
    }
  }
  @media (max-width: 576px) {
    .posts-item-image {
      height: 60px;
      width: 100%;
      img {
        height: 100%;
        width: 100%;
      }
    }
  }
`
