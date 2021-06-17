import styled from "styled-components"

export const NotificationPage = styled.div`
  margin: 0px 5px 0px 15px;
  .dropdown-menu {
    width: 300px;
    padding: 0;
  }
  .dropdown-toggle {
    font-size: 18px;
    i {
      color: var(--black);
    }
  }
  .dropdown-item {
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: inherit;
    padding: 10px 20px 10px 10px;
    color: var(--post-title-color);
    .image {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin-right: 10px;
    }
  }

  .notification-content {
    h5 {
      font-size: 0.9em;
      margin: 0;
    }
    span {
      font-weight: 500;
    }
    time {
      font-size: 0.8em;
    }
  }
  .notification-status {
    position: absolute;
    height: 10px;
    width: 10px;
    background-color: #2e89ff;
    border-radius: 50%;
    right: 10px;
  }
  .notification-count {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    font-weight: 500;
    color: #fff;
  }

  .notification-icon {
    cursor: pointer;
    position: absolute;
    top: -5px;
    right: -3px;
    width: 17px;
    height: 17px;
    background-color: red;
    border-radius: 50%;
  }
  .see-more {
    cursor: pointer;
    color: var(--main-color);
    float: right;
    margin: 0px 10px 10px;
    span {
      ::after {
        content: "\f054";
        font-family: "Font Awesome 5 Free";
        font-size: 10px;
        font-weight: 600;
        line-height: 1;
        margin: 2px 0 0 3px;
      }
    }
  }
  .dropdown-menu.show {
    max-height: 500px;
    overflow-x: hidden;
    background-color: var(--post-card-bg);
  }
  .see-all {
    cursor: pointer;
    display: flex;
    justify-content: flex-end;
    padding: 10px 20px 10px 10px;
    font-weight: 600;
    color: var(--main-color);
    :hover {
      text-decoration: underline;
    }
  }
  .dropdown-divider {
    margin: 0;
  }
`
