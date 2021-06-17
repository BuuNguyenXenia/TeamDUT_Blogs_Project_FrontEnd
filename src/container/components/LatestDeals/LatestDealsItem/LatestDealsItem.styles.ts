import styled from "styled-components"

export const DealsItem = styled.div`
  :nth-child(odd) {
    padding-left: 16px;
    padding-right: 10px;
  }
  :nth-child(even) {
    padding-left: 10px;
    padding-right: 16px;
  }
  .deals-item-body {
    margin-top: 8px;
  }
`
