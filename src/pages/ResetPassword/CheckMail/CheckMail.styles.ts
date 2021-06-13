import styled from "styled-components"

export const CheckMailPage = styled.div`
  .container-checkMail {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .el-card {
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
    border-radius: 4px;
    border-top: 1px solid rgba(155, 155, 155, 0.15);
    background-color: var(--post-card-bg);
    overflow: hidden;
    color: #303133;

    &__body {
      padding: 20px;
    }
  }
  .card-title {
    color: var(--post-title-color);
  }
  .card-subtitle {
    color: var(--text-color);
    font-size: 0.875em;
  }
  .el-alert--success.is-light {
    background-color: #f0f9eb;
    color: #67c23a;
  }
  .el-alert {
    width: 100%;
    padding: 8px 16px;
    margin: 0;
    box-sizing: border-box;
    border-radius: 4px;
    position: relative;
    background-color: #fff;
    overflow: hidden;
    opacity: 1;
    display: flex;
    align-items: center;
    transition: opacity 0.2s;
  }
`
