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
  .lastsNews-item {
    padding: 10px;
  }
  .card-lastsNews-image {
    display: block;
    border-radius: 12px;
    img {
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
    font-size: 1.2em;
    display: block;
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
    font-size: 0.875em;
    color: var(--text-color);
    margin: 8px 0px;
  }
  .card-lastsNews-author {
    font-size: 0.875em;
    color: var(--meta-color);
    span {
      color: var(--main-color);
    }
  }
`
