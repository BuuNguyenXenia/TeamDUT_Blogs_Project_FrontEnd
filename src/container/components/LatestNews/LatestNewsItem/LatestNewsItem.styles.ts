import styled from "styled-components"

export const LastsNewsItemPage = styled.div`
  padding: 10px 0px;
  .card-lastsNews-item {
    border-radius: var(--radius);
    border: 1px solid var(--border-color);
    background-color: var(--post-card-bg);
  }
  .card-lastsNews-item {
    display: flex;
    padding: 5px 15px;
  }
  .lastsNews-image {
    display: flex;
    align-items: center;
  }
  .lastsNews-item {
    padding: 10px;
  }
  .card-lastsNews-image {
    height: 130px;
    width: 100%;
    display: block;
    border-radius: 12px;
    img {
      height: 100%;
      width: 100%;
      border-radius: var(--radius);
    }
    :hover {
      opacity: 0.8;
    }
  }
  .card-lastsNews-body {
    padding: 10px 10px 5px;
    span {
      color: var(--meta-color);
    }
  }
  .card-lastsNews-title {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

    font-size: 1.2em;
    color: var(--post-title-color);
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
  .card-lastsNews-text {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

    font-size: 0.875em;
    color: var(--text-color);
    margin: 8px 0px;
    p span {
      color: var(--post-text-color) !important;
    }
  }
  .card-lastsNews-author {
    font-size: 0.875em;
    color: var(--meta-color);
    span {
      color: var(--main-color);
    }
  }

  @media (max-width: 768px) {
    .card-lastsNews-image {
      height: 110px;
      width: 100%;
      display: block;
      border-radius: 12px;
      img {
        height: 100%;
        width: 100%;
        border-radius: var(--radius);
      }
      :hover {
        opacity: 0.8;
      }
    }
  }

  @media (max-width: 576px) {
    .card-lastsNews-image {
      height: 200px;
      width: 100%;
      display: block;
      border-radius: 12px;
      img {
        height: 100%;
        width: 100%;
        border-radius: var(--radius);
      }
      :hover {
        opacity: 0.8;
      }
    }
  }
`
