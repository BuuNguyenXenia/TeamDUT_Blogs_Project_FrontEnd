import styled from "styled-components"

export const ProfileStyle = styled.div`
  margin-bottom: 50px;
  .profile-title {
    font-size: 1.1em;
    font-weight: 500;
    color: var(--post-title-color);
    margin-bottom: 30px;
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
  .profile-avatar {
    img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }
  }
  .profile-user {
    align-items: center;
    padding-bottom: 10px;
    border-bottom: 1px solid var(--border-color);
  }
  .profile-body {
    font-size: 1.3em;
    .profile-gmail {
      color: #5488c7;
      font-weight: 600;
      margin-bottom: 10px;
    }
    .profile-name {
      color: #9b9b9b;
      margin: 0;
    }
  }
  .form-user {
    display: none;
  }
  .active {
    display: block;
  }
  .error {
    color: var(--red);
  }
  .change-avatar {
    position: absolute;
    right: 8px;
    bottom: 0px;
    background-color: white;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    cursor: pointer;
    i {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .form-label {
    color: var(--meta-color);
  }

  @media (max-width: 576px) {
    //profile
    img.avatar {
      width: 60px;
      height: 60px;
    }

    .change-avatar {
      position: absolute;
      right: 13px;
      bottom: 0px;
      background-color: white;
      width: 25px;
      height: 25px;
      border-radius: 50%;
      cursor: pointer;
    }

    .profile-body {
      font-size: 1em;
    }
  }
`
