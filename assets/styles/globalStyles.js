// Libraries
import { createGlobalStyle } from "styled-components"

// Utils
import breakpoint from "utils/breakpoints/"
import helpers from "utils/helpers"
import { colors } from "utils/variables"

// Icons
import IconDottedSeparator from "assets/icons/icon-dotted-separator.svg"

export default createGlobalStyle`
  .no-scroll {
    overflow: hidden;
  }

  html {
    height: -webkit-fill-available;
  }

  body {
    width: 100vw;
    min-height: 100vh;
    min-height: -webkit-fill-available;
    background-color: ${colors.grey__700};
    color: ${colors.grey__200};
    font-family: "Space Grotesk", sans-serif !important;
    font-size: 1.25rem;
    line-height: 1.4em;
    overflow-x: hidden;

    h1,
    h2,
    h3,
    h4,
    h5 {
      font-weight: 400;
    }

    .heading--s {
      font-size: 1.25rem;
      line-height: 1.75rem;

      ${breakpoint.medium`
        font-size: 1.5rem;
        line-height: 2.75rem;
      `}
    }

    .heading--m {
      font-size: 1.5rem;
      line-height: 2rem;

      ${breakpoint.medium`
        font-size: 3rem;
        line-height: 4rem;
      `}
    }

    .heading--l {
      font-size: 2rem;
      line-height: 2.75rem;

      ${breakpoint.medium`
        font-size: 3.5rem;
        line-height: 4.5rem;
      `}
    }

    .text--xs {
      font-size: 0.875rem;
      line-height: 1.42em;
    }

    .text--s {
      font-size: 1rem;
      line-height: 1.5em;
    }

    .text--m {
      font-size: 1.25rem;
      line-height: 1.4em;
    }

    .text--l {
      font-size: 1.25rem;
      line-height: 1.33em;

      ${breakpoint.medium`
        font-size: 1.5rem;
      `}
    }

    .dotted-separator {
      &::before {
        content: '';
        max-width: 500px;
        width: 100%;
        height: 4px;
        display: block;
        margin-right: auto;
        margin-bottom: 24px;
        margin-left: auto;
        background-image: url('${IconDottedSeparator}');
        background-repeat: no-repeat;
        background-size: 100% auto;
        background-position: center;

      }
    }

    a {
      color: inherit;
      display: inline-block;
      text-decoration: none;
      box-sizing: border-box;
      transition: all 0.2s ease;
    }

    button {
      padding: 0;
      margin: 0;
      font: inherit;
      background: 0;
      border: 0;
      color: inherit;
      cursor: pointer;
    }

    svg {
      max-width: 100%;
      height: auto;
      display: inline-block;
    }

    input {
      -webkit-appearance: none;
      padding: 0;
      margin: 0;
      background: 0;
      border: 0;
      font: inherit;
      box-sizing: border-box;
      outline: 0;
    }
  }

  ${helpers};
`
