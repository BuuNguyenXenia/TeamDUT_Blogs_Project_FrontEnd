import styled from "styled-components"

export const Item = styled.div`
  position: relative;
  float: left;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  img {
    width: 100%;
    position: relative;
    border-radius: 8px;
  }
  .item-images {
    ::before {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 100%;
      border-radius: 8px;
      background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0) 30%,
        rgba(0, 0, 0, 0.5)
      );
      z-index: 1;
      opacity: 1;
      margin: 0;
      transition: opacity 0.25s ease;
    }
  }
  .entry-header {
    z-index: 5;
    position: absolute;
    left: 10px;
    bottom: 15px;
    margin: 5px 0px;
  }
  .entry-info {
    padding-left: 15px;
    padding-right: 15px;
    color: #fff;
  }
  .entry-category {
    font-size: 0.8em;
    width: 30px;
    height: 30px;
    padding: 4px 10px;
    background-color: var(--main-color);
    border-radius: 20px;
  }
  .entry-title {
    margin: 5px 0;
    font-size: 20px;
    font-weight: 700;
    z-index: 5;
  }
  .entry-meta {
    text-shadow: 0 1px 2px rgb(0 0 0 / 35%);
    display: flex;
    font-size: 12px;
    color: #f5f5f5;
    font-weight: 400;
    .sp {
      margin: 0 3px 0 0;
    }
    .symbol {
      padding: 3px;
    }
    .author-name {
    }
  }
`
