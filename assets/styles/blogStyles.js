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
    // Import all base colors
    ${Object.entries(colors).map(
			([name, color]) => css`
      --${name}: ${color};
    `
		)}

    // Global Colors
    --text-primary: ${colors.grey__200};
    --text-secondary: ${colors.grey__400};
    --text-hover: ${colors.green__500};
    --link-color: ${colors.green__500};
    --background-primary: ${colors.grey__700};

    // Navigation & Header
    --menu-text-active: ${colors.green__500};
    --nav-border: rgba(94, 94, 125, 0.30);
    --nav-badge: ${blogColors.grey__350};
    --nav-badge-circle: ${colors.green__500};
    --nav-badge-circle-hover: ${colors.grey__700};
    --hamburger-menu-color: ${colors.grey__200};
    --logo-color: ${colors.white};

    // Hero Section
    --hero-sub-heading: ${colors.grey__300};
    --hero-subscribe-btn: ${colors.green__500};
    --hero-subscribe-text: black;

    // Category & Tags
    --category-title: ${colors.purple__400};
    --category-background: ${colors.grey__550};
    --category-badge-color: ${colors.white};
    --category-chevron: ${colors.grey__200};
    --tag-color: ${colors.green__500};
    --tag-color-hover: ${colors.grey__700};

    // Blog Cards & Articles
    --blog-card-background: ${blogColors.grey__600};
    --blog-card-border: none;
    --blog-card-reading-time: ${colors.grey__400};
    --blog-date: ${colors.purple__400};
    --article-text-color: ${colors.grey__300};
    --article-reading-time-color: ${colors.grey__400};
    --article-reading-time-bg: ${blogColors.grey__600};
    --continue-reading-text: ${colors.purple__400};
    --share-article-bg: ${colors.grey__600};
    --share-article-text: ${colors.grey__300};
    --image-caption: ${colors.grey__400};

    // Footer
    --footer-email: ${colors.green__500};
    --footer-privacy-link: ${colors.grey__300};
    --footer-address: ${colors.grey__300};
    --footer-background: ${colors.grey__700};

    // Login Button
    --button-login: ${colors.green__500};

    // Theme Toggle
    --theme-toggle-bg: ${colors.grey__200};
    --theme-toggle-color: ${colors.grey__700};
    --theme-toggle-knob: ${colors.grey__700};

    // Banner
    --banner-text-color: ${colors.green__500};
    --banner-border: ${colors.green__500};
    --fundraiser-banner-border: ${colors.green__500};
  }

  [data-theme='light'] {
    // Global Colors
    --text-primary: ${colors.grey__700};
    --text-secondary: ${blogColors.grey__600};
    --text-hover: ${colors.purple__600};
    --link-color: ${colors.purple__500};
    --background-primary: #f8fafc;

    // Navigation & Header
    --menu-text-active: ${colors.purple__600};
    --nav-border: rgba(94, 94, 125, 0.30);
    --nav-badge: ${blogColors.grey__600};
    --nav-badge-circle: ${colors.purple__600};
    --nav-badge-circle-hover: ${colors.white};
    --hamburger-menu-color: ${blogColors.grey__600};
    --logo-color: var(--text-primary);

    // Hero Section
    --hero-sub-heading: ${blogColors.grey__600};
    --hero-subscribe-btn: ${colors.purple__600};
    --hero-subscribe-text: ${colors.grey__200};

    // Category & Tags
    --category-title: ${colors.grey__700};
    --category-background: invisible;
    --category-badge-color: ${colors.grey__700};
    --category-chevron: ${colors.grey__200};
    --tag-color: ${colors.purple__600};
    --tag-color-hover: ${blogColors.white};

    // Blog Cards & Articles
    --blog-card-background: ${blogColors.white};
    --blog-card-border: rgba(0, 0, 0, 0.25);
    --blog-card-reading-time: ${colors.grey__700};
    --blog-date: ${colors.purple__600};
    --blog-article-font: "Lora", Georgia, Times, serif;
    --article-text-color: ${colors.grey__700};
    --article-reading-time-color: ${colors.grey__700};
    --article-reading-time-bg: ${colors.grey__200};
    --continue-reading-text: ${colors.purple__600};
    --share-article-bg: ${colors.grey__200};
    --share-article-text: ${colors.grey__700};
    --image-caption: ${colors.grey__500};

    // Footer
    --footer-email: ${colors.grey__700};
    --footer-privacy-link: ${colors.grey__500};
    --footer-address: ${colors.grey__400};
    --footer-background: #F5F5FC;

    // Login Button
    --button-login: ${colors.grey__700};

    // Theme Toggle
    --theme-toggle-bg: ${colors.grey__500};
    --theme-toggle-color: ${blogColors.white};
    --theme-toggle-knob: ${colors.grey__200};

    // Fundraiser Banner
    --banner-text-color: ${blogColors.grey__600};
    --banner-border: rgba(94, 94, 125, 0.30);
  }

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
    background-color: var(--background-primary);
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
