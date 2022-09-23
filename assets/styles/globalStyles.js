// Libraries
import { createGlobalStyle } from "styled-components"

// Utils
import breakpoint from "utils/breakpoints/"
import { colors } from "utils/variables"

export default createGlobalStyle`
  body {
    background-color: ${colors.grey__700};
    color: ${colors.grey__200};
    font-family: "Space Grotesk", sans-serif;
    font-size: 1.25rem;
    line-height: 1.4em;

    .heading--s {
      font-size: 1.5rem;
      line-height: 1.33em;

      ${breakpoint.medium`
        font-size: 2rem;
      `}
    }

    .heading--m {
      font-size: 2rem;
      line-height: 1.4em;

      ${breakpoint.medium`
        font-size: 3rem;
      `}
    }

    .heading--l {
      font-size: 3rem;
      line-height: 1.4em;

      ${breakpoint.medium`
        font-size: 3.5rem;
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
      font-size: 1.5rem;
      line-height: 1.33em;
    }

    a {
      color: inherit;
      display: inline-block;
      text-decoration: none;
      box-sizing: border-box;
    }

    button {
      font: inherit;
      background: 0;
      border: 0;
      color: inherit;
    }

    svg {
      max-width: 100%;
      height: auto;
      display: inline-block;
    }
  }
`
