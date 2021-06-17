import styled from "styled-components"

export const MainSearch = styled.div`
  .search {
    &__container {
      padding-top: 64px;
    }

    &__input {
      width: 300px;
      padding: 10px 20px;
      transition: transform 250ms ease-in-out;
      font-size: 14px;
      line-height: 18px;

      color: var(--black);
      background-color: transparent;
      background-image: var(--url);
      background-repeat: no-repeat;
      background-size: 18px 18px;
      background-position: 95% center;
      border-radius: 50px;
      border: 1px solid var(--black);
      transition: all 250ms ease-in-out;
      backface-visibility: hidden;
      transform-style: preserve-3d;

      &::placeholder {
        color: color(var(--black) a(0.8));
        text-transform: uppercase;
        letter-spacing: 1.5px;
      }

      &:hover,
      &:focus {
        padding: 12px 0;
        outline: 0;
        border: 1px solid transparent;
        border-bottom: 1px solid var(--black);
        border-radius: 0;
        background-position: 100% center;
      }
    }
  }
`
