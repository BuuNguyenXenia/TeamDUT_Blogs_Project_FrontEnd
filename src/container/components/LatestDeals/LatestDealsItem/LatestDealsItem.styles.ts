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
  .deals-item-image {
    height: 90px;
    width: 100%;
    img {
      height: 100%;
      width: 100%;
    }
  }
  .deals-item-body {
    margin-top: 8px;
  }

  @media (max-width: 1200px) {
    .deals-item-image {
      height: 70px;
      width: 100%;
      img {
        height: 100%;
        width: 100%;
      }
    }
  }
  @media (max-width: 992px) {
    .deals-item-image {
      height: 120px;
      width: 100%;
      img {
        height: 100%;
        width: 100%;
      }
    }
  }
  @media (max-width: 768px) {
    .deals-item-image {
      height: 120px;
      width: 100%;
      img {
        height: 100%;
        width: 100%;
      }
    }
  }

  @media (max-width: 576px) {
    .deals-item-image {
      height: 80px;
      width: 100%;
      img {
        height: 100%;
        width: 100%;
      }
    }
  }
`
