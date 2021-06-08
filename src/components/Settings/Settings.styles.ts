import styled from "styled-components"

export const SettingsPage = styled.div`
  .settings-title {
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
  .error {
    color: var(--red);
  }
`
