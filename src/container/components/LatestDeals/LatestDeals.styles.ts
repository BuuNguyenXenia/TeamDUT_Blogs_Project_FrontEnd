import styled from "styled-components"

export const Deals = styled.div`
  .deal-card-body {
    padding: 8px 15px;
  }
  @media (max-width: 992px) {
    .deals-item-title {
      font-size: 1.1em;
      display: block;
      color: var(--post-title-color);
      font-weight: 700;
      line-height: 1.3em;
    }
    .deals-item-time {
      font-size: 1em;
    }
  }
  @media (max-width: 768px) {
    .deals-item-title {
      font-size: 1em;
    }
    .deals-item-time {
      font-size: 0.875em;
    }
  }
`
