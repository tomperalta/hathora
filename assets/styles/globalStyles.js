// Libraries
import { createGlobalStyle } from "styled-components"

// Utils
import breakpoint from "utils/breakpoints/"

export default createGlobalStyle`
  body {
    font-family: "Space Grotesk", sans-serif;

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
  }
`
