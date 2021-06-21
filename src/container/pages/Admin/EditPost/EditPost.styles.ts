import styled from "styled-components"

export const EditPostPage = styled.div`
  margin-top: 40px;
  min-height: 100vh;
  .text-editor {
    background-color: white;
  }
  .ql-editor {
    height: 300px;
  }
  .form-label {
    font-size: 1em;
    color: var(--widget-title-color);
    font-weight: 600;
  }
  .form-file-label {
    font-size: 1em;
    color: var(--widget-title-color);
    font-weight: 600;
  }

  .image-post {
    max-width: 100%;
    width: 300px;
  }
  .quill {
    background-color: white;
  }
  .form-control-file {
    color: var(--widget-title-color);
  }
`
