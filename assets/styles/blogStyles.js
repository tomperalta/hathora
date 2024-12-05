// Libraries
import { createGlobalStyle, css } from "styled-components"

// Utils
import breakpoint from "utils/breakpoints/"
import helpers from "utils/helpers"
import { colors, blogColors } from "utils/variables"

// Icons
import IconDottedSeparator from "assets/icons/icon-dotted-separator.svg"

export default createGlobalStyle`
  :root {
    ${Object.entries(colors).map(
			([name, color]) => css`
      --${name}: ${color};
    `
		)}
  }

  .no-scroll {
    overflow: hidden;
  }

  html {
    height: -webkit-fill-available;
  }

  [data-theme='light'] {
    /* Base colors */
    --bg-primary: #f8fafc;
    --text-primary: ${colors.grey__700};
    --text-secondary: ${blogColors.grey__600};
    --text-tertiary: ${colors.grey__400};

    /* Accent colors */
    --accent-primary: ${colors.purple__600};
    --accent-secondary: ${colors.purple__500};

    /* Interactive elements */
    --hover-color: ${colors.purple__600};
    --btn-primary-bg: ${colors.purple__600};
    --btn-primary-text: ${colors.grey__200};

    /* Borders and dividers */
    --border-color: rgba(94, 94, 125, 0.30);

    /* Component specific */
    --badge-bg: transparent;
    --badge-text: ${colors.grey__700};
    --badge-accent: ${colors.purple__500};

    /* Navigation */
    --nav-text: ${blogColors.grey__600};
    --nav-text-active: ${colors.purple__600};
    --nav-icon: ${blogColors.grey__600};

    /* Footer */
    --footer-text: ${colors.grey__400};
    --footer-link: ${colors.grey__500};
  }

  [data-theme='dark'] {
    /* Base colors */
    --bg-primary: ${colors.grey__700};
    --text-primary: ${colors.grey__200};
    --text-secondary: ${colors.grey__400};
    --text-tertiary: ${colors.grey__300};

    /* Accent colors */
    --accent-primary: ${colors.green__500};
    --accent-secondary: ${colors.purple__400};

    /* Interactive elements */
    --hover-color: ${colors.green__500};
    --btn-primary-bg: ${colors.green__500};
    --btn-primary-text: black;

    /* Borders and dividers */
    --border-color: rgba(94, 94, 125, 0.30);

    /* Component specific */
    --badge-bg: ${colors.grey__550};
    --badge-text: ${colors.white};
    --badge-accent: ${colors.green__500};

    /* Navigation */
    --nav-text: ${colors.grey__400};
    --nav-text-active: ${colors.green__500};
    --nav-icon: ${colors.grey__200};

    /* Footer */
    --footer-text: ${colors.grey__300};
    --footer-link: ${colors.grey__300};
  }

  body {
    width: 100vw;
    min-height: 100vh;
    min-height: -webkit-fill-available;
    background-color: var(--bg-primary);
    color: var(--text-primary);
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

    .heading--sm {
      font-size: 1.25rem;
      line-height: 1.75rem;

      ${breakpoint.medium`
        font-size: 2.2rem;
        line-height: 2.8rem;
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

    .text--xl {
      font-size: 1.5rem;
      line-height: 1.45em;

      ${breakpoint.medium`
        font-size: 1.8rem;
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
        margin-top: 16px;
        margin-bottom: 16px;
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
      text-align: inherit;
    }

    svg {
      max-width: 100%;
      height: auto;
      display: inline-block;
    }

    input {
      // -webkit-appearance: none;
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
