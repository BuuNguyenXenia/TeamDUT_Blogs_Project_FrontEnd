import styled from "styled-components"

export const ViewItem = styled.div`
  .post-item {
    display: flex;
    flex-direction: column;
  }
  .post-item-header {
    margin-top: 10px;
    margin-bottom: 20px;
    font-size: 0.875em;
    .header {
      ::after {
        content: "\f054";
        font-family: "Font Awesome 5 Free";
        font-size: 9px;
        font-weight: 900;
        font-style: normal;
        vertical-align: middle;
        margin: 0 4px;
      }
    }
    span {
      color: var(--meta-color);
    }
  }
  .post-item-title {
    position: relative;
    float: left;
    width: 100%;
    font-size: 1.9em;
    font-weight: 700;
    margin: 0;
    margin-bottom: 12px;
    display: block;
    color: var(--post-title-color);
    font-weight: 700;
    line-height: 1.3em;
  }
  .post-item-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .post-item-author {
    font-size: 1em;
    img {
      margin-right: 15px;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: 1px solid var(--main-color);
    }
    .author {
      color: var(--main-color);
      font-weight: 700;
    }
    span {
      color: var(--post-text-color);
    }
    time {
      color: var(--post-text-color);
    }
  }
  .post-item-countComment {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    font-size: 14px;
    i {
      color: var(--main-color);
      font-weight: 400;
      margin: 0 4px 0 0;
    }
    span {
      color: var(--post-title-color);
      font-weight: 500;
    }
  }
  .post-item-body {
    margin: 40px 0;
    .body-image {
      img {
        width: 100%;
      }
    }
    .body-content {
      font-size: 14px;
      color: var(--post-text-color);
      line-height: 1.6em;
      margin-top: 20px;
    }
  }
  .comments-posts {
    font-size: 14px;
    margin-top: 50px;
    .header-comment {
      font-weight: 600;
      padding-bottom: 5px;
      border-bottom: 1px solid var(--border-color);
      color: var(--post-text-color);
      ::after {
        content: "\f054";
        font-family: "Font Awesome 5 Free";
        font-size: 10px;
        font-weight: 900;
        line-height: 1;
        margin: 2px 0 0 3px;
      }
    }
  }
`
