import styled from "styled-components"

export const CommentsPostItem = styled.div`
  margin: 30px 0;
  .user-avatar {
    width: 50px !important;
    height: 50px !important;
  }
  .user-comments-content {
    margin-left: 65px !important;
  }
  .user-comments-author {
    font-size: 1em;
    color: var(--post-text-color) !important;
    line-height: 1.6em;
  }
  .metadata {
    color: var(--date-color) !important;
  }
  p {
    font-size: 14px;
    color: var(--post-text-color) !important;
  }
`
