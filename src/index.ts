/**
 * @copyright nhcarrigan
 * @license Naomi's Public License
 * @author Naomi Carrigan
 */

// #region Version
const nhcarriganHeadersVersion = "{{ version }}";
console.log(`
========================================
Loading SpellWare library v${nhcarriganHeadersVersion}.
Copyright (c) ${new Date().getFullYear().
  toString()} SpellWare
Changelog: https://github.com/spellware/website-headers/releases
Licensed under our public license: https://docs.spellware.dev/legal/license
Questions? Contact us at https://docs.spellware.dev/about/contact
========================================
`);
// #endregion

// #region Query Selectors
const nhcarriganHeadersHead = document.querySelector("head");
const nhcarriganHeadersBody = document.querySelector("body");
const nhcarriganHeadersTitle = document.querySelector("title");
const nhcarriganHeadersDescription = document.querySelector(
  `meta[name="description"]`,
);

const {
  href: nhcarriganHeadersUrl,
  hostname: nhcarriganHeadersHostname,
} = window.location;

// #endregion

// #region Exclusions

/**
 * Bespoke pages can opt out of parts of this library by listing features in
 * a space-separated data-nhcarrigan-exclude attribute on the html element,
 * for example: <html data-nhcarrigan-exclude="layout footer cta ads">.
 * The supported features are "layout" (the shared page chrome, header and
 * element styles, while design tokens still load), "header" (the shared
 * header), "footer" (the shared footer), "cta" (the community popup) and
 * "ads" (the advertising script). A page with its own header, such as the
 * company site, is left alone either way.
 */
const nhcarriganHeadersExclusions = new Set(
  (document.documentElement.dataset.nhcarriganExclude ?? "").
    split(" ").
    filter((feature) => {
      return feature.length > 0;
    }),
);
const nhcarriganHeadersIsExcluded = (feature: string): boolean => {
  return nhcarriganHeadersExclusions.has(feature);
};

// #endregion

// #region Metadata and Open Graph

/**
 * The title and description are set by each website. This should
 * only load things like open graph data and favicons.
 */
const nhcarriganHeadersCharacterSet = document.createElement("meta");
nhcarriganHeadersCharacterSet.setAttribute("charset", "UTF-8");
const nhcarriganHeadersViewport = document.createElement("meta");
nhcarriganHeadersViewport.setAttribute("name", "viewport");
nhcarriganHeadersViewport.setAttribute(
  "content",
  "width=device-width, initial-scale=1.0",
);
const nhcarriganHeadersThemeColor = document.createElement("meta");
nhcarriganHeadersThemeColor.setAttribute("name", "theme-color");
nhcarriganHeadersThemeColor.setAttribute("content", "#2B1B3D");
const nhcarriganHeadersReferrer = document.createElement("meta");
nhcarriganHeadersReferrer.setAttribute("name", "referrer");
nhcarriganHeadersReferrer.setAttribute(
  "content",
  "strict-origin-when-cross-origin",
);
const nhcarriganHeadersOpenGraphTitle = document.createElement("meta");
nhcarriganHeadersOpenGraphTitle.setAttribute("property", "og:title");
nhcarriganHeadersOpenGraphTitle.setAttribute(
  "content",
  nhcarriganHeadersTitle?.innerText ?? "SpellWare",
);
const nhcarriganHeadersOpenGraphDescription = document.createElement("meta");
nhcarriganHeadersOpenGraphDescription.setAttribute(
  "property",
  "og:description",
);
nhcarriganHeadersOpenGraphDescription.setAttribute(
  "content",
  nhcarriganHeadersDescription?.getAttribute("content")
  ?? "We are a software engineering and community management consulting firm.",
);
const nhcarriganHeadersOpenGraphImage = document.createElement("meta");
nhcarriganHeadersOpenGraphImage.setAttribute("property", "og:image");
nhcarriganHeadersOpenGraphImage.setAttribute(
  "content",
  "https://cdn.spellware.dev/brand/v3/og-image.png",
);
const nhcarriganHeadersOpenGraphUrl = document.createElement("meta");
nhcarriganHeadersOpenGraphUrl.setAttribute("property", "og:url");
nhcarriganHeadersOpenGraphUrl.setAttribute("content", nhcarriganHeadersUrl);
const nhcarriganHeadersOpenGraphType = document.createElement("meta");
nhcarriganHeadersOpenGraphType.setAttribute("property", "og:type");
nhcarriganHeadersOpenGraphType.setAttribute("content", "website");
const nhcarriganHeadersOpenGraphSiteName = document.createElement("meta");
nhcarriganHeadersOpenGraphSiteName.setAttribute("property", "og:site_name");
nhcarriganHeadersOpenGraphSiteName.setAttribute("content", "SpellWare");
const nhcarriganHeadersOpenGraphLocale = document.createElement("meta");
nhcarriganHeadersOpenGraphLocale.setAttribute("property", "og:locale");
nhcarriganHeadersOpenGraphLocale.setAttribute("content", "en_US");
const nhcarriganHeadersOpenGraphImageAlt = document.createElement("meta");
nhcarriganHeadersOpenGraphImageAlt.setAttribute("property", "og:image:alt");
nhcarriganHeadersOpenGraphImageAlt.setAttribute(
  "content",
  "SpellWare logo with the tagline Thoughtfully built. Wonderfully human.",
);
const nhcarriganHeadersOpenGraphImageWidth = document.createElement("meta");
nhcarriganHeadersOpenGraphImageWidth.setAttribute("property", "og:image:width");
nhcarriganHeadersOpenGraphImageWidth.setAttribute("content", "1200");
const nhcarriganHeadersOpenGraphImageHeight = document.createElement("meta");
nhcarriganHeadersOpenGraphImageHeight.
  setAttribute("property", "og:image:height");
nhcarriganHeadersOpenGraphImageHeight.setAttribute("content", "630");

const nhcarriganHeadersTwitterCard = document.createElement("meta");
nhcarriganHeadersTwitterCard.setAttribute("name", "twitter:card");
nhcarriganHeadersTwitterCard.setAttribute("content", "summary_large_image");
const nhcarriganHeadersTwitterDomain = document.createElement("meta");
nhcarriganHeadersTwitterDomain.setAttribute("name", "twitter:domain");
nhcarriganHeadersTwitterDomain.setAttribute(
  "content",
  nhcarriganHeadersHostname,
);
const nhcarriganHeadersTwitterUrl = document.createElement("meta");
nhcarriganHeadersTwitterUrl.setAttribute("name", "twitter:url");
nhcarriganHeadersTwitterUrl.setAttribute("content", nhcarriganHeadersUrl);
const nhcarriganHeadersTwitterTitle = document.createElement("meta");
nhcarriganHeadersTwitterTitle.setAttribute("name", "twitter:title");
nhcarriganHeadersTwitterTitle.setAttribute(
  "content",
  nhcarriganHeadersTitle?.innerText ?? "SpellWare",
);
const nhcarriganHeadersTwitterDescription = document.createElement("meta");
nhcarriganHeadersTwitterDescription.setAttribute("name", "twitter:description");
nhcarriganHeadersTwitterDescription.setAttribute(
  "content",
  nhcarriganHeadersDescription?.getAttribute("content")
  ?? "We are a software engineering and community management consulting firm.",
);
const nhcarriganHeadersTwitterImage = document.createElement("meta");
nhcarriganHeadersTwitterImage.setAttribute("name", "twitter:image");
nhcarriganHeadersTwitterImage.setAttribute(
  "content",
  "https://cdn.spellware.dev/brand/v3/og-image.png",
);
const nhcarriganHeadersTwitterSite = document.createElement("meta");
nhcarriganHeadersTwitterSite.setAttribute("name", "twitter:site");
nhcarriganHeadersTwitterSite.setAttribute("content", "@nhcarrigan1");
const nhcarriganHeadersTwitterCreator = document.createElement("meta");
nhcarriganHeadersTwitterCreator.setAttribute("name", "twitter:creator");
nhcarriganHeadersTwitterCreator.setAttribute("content", "@nhcarrigan1");

const nhcarriganHeadersFormatDetection = document.createElement("meta");
nhcarriganHeadersFormatDetection.setAttribute("name", "format-detection");
nhcarriganHeadersFormatDetection.setAttribute("content", "telephone=no");
const nhcarriganHeadersRobots = document.createElement("meta");
nhcarriganHeadersRobots.setAttribute("name", "robots");
nhcarriganHeadersRobots.setAttribute("content", "index, follow");
const nhcarriganHeadersAuthor = document.createElement("meta");
nhcarriganHeadersAuthor.setAttribute("name", "author");
nhcarriganHeadersAuthor.setAttribute("content", "Naomi Carrigan");

// #endregion

// #region Favicon

const nhcarriganHeadersFavicon = document.createElement("link");
nhcarriganHeadersFavicon.rel = "icon";
nhcarriganHeadersFavicon.type = "image/x-icon";
nhcarriganHeadersFavicon.href
  = "https://cdn.spellware.dev/brand/v2/favicon/favicon.ico";
const nhcarriganHeadersAppleTouchIcon = document.createElement("link");
nhcarriganHeadersAppleTouchIcon.rel = "apple-touch-icon";
nhcarriganHeadersAppleTouchIcon.href
  = "https://cdn.spellware.dev/brand/v2/favicon/apple-touch-icon.png";
const nhcarriganHeadersSmallIcon = document.createElement("link");
nhcarriganHeadersSmallIcon.rel = "icon";
nhcarriganHeadersSmallIcon.href
  = "https://cdn.spellware.dev/brand/v2/favicon/favicon-16x16.png";
const nhcarriganHeadersLargeIcon = document.createElement("link");
nhcarriganHeadersLargeIcon.rel = "icon";
nhcarriganHeadersLargeIcon.href
  = "https://cdn.spellware.dev/brand/v2/favicon/favicon-32x32.png";

// #endregion

// #region Styles

/**
 * Design tokens. These load on every page, including pages that opt out of
 * the shared layout, so bespoke pages can build on the same palette. The site
 * is light only and lit from the upper right, so there is no dark theme.
 */
const nhcarriganHeadersTokens = document.createElement("style");
nhcarriganHeadersTokens.id = "nhcarrigan-global-tokens";
nhcarriganHeadersTokens.innerHTML = `
@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght,SOFT@72,600,50&display=swap');

:root {
  /* Official palette (https://spellware.dev/style/) */
  --witch-purple: #2B1B3D;
  --witch-plum: #44275A;
  --witch-rose: #A8577E;
  --witch-rose-deep: #8E4268;
  --witch-rose-light: #F2B6D3;
  --witch-mauve: #D4A5C7;
  --witch-lavender: #E8D5E8;
  --witch-black: #0A0009;
  --witch-silver: #C0C0C0;
  --witch-moon: #F5F5F5;
  --witch-shadow: rgba(10, 0, 9, 0.7);

  /* Typography. Fraunces is reserved for the wordmark. The variation settings match the logo artwork. */
  --font-brand: 'Fraunces', Georgia, 'Times New Roman', serif;
  --font-brand-variation: 'opsz' 72, 'SOFT' 50, 'WONK' 0;
  --font-body: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  --font-heading: var(--font-body);
  --font-mono: ui-monospace, SFMono-Regular, Menlo, Consolas, 'Liberation Mono', monospace;

  /* Shape */
  --radius: 16px;
  --radius-small: 10px;
  --nhc-header-height: 68px;

  /* Theme variables. The site is light only, lit from the upper right. */
  --foreground: var(--witch-purple);
  --foreground-muted: var(--witch-plum);
  --heading: var(--witch-purple);
  --background: var(--witch-moon);
  --page-background: var(--witch-moon);
  --surface: #FFFFFF;
  --accent: var(--witch-rose-deep);
  --border: var(--witch-plum);
  --border-subtle: rgba(68, 39, 90, 0.16);
  --highlight: var(--witch-mauve);
  --link: var(--witch-plum);
  --link-hover: var(--witch-rose-deep);
  --input-background: #FFFFFF;
  --input-border: rgba(68, 39, 90, 0.45);
  --code-background: rgba(43, 27, 61, 0.07);
  --row-alternate: rgba(212, 165, 199, 0.12);
  --row-hover: rgba(168, 87, 126, 0.1);
  --card-shadow: 0 30px 52px -28px rgba(68, 39, 90, 0.5), 10px -8px 32px -10px rgba(168, 87, 126, 0.58);
  --lit-surface: radial-gradient(130% 100% at 100% 0%, rgba(255, 255, 255, 0.97) 0%, rgba(255, 255, 255, 0.74) 40%, rgba(236, 208, 229, 0.62) 100%);
  --lit-border: rgba(168, 87, 126, 0.38);
  --lit-shadow:
    inset -1px 1px 0 rgba(255, 255, 255, 0.95),
    inset -2px 2px 16px -3px rgba(168, 87, 126, 0.34),
    0 0 0 1px rgba(168, 87, 126, 0.08),
    10px -8px 32px -10px rgba(168, 87, 126, 0.58),
    0 30px 52px -26px rgba(68, 39, 90, 0.5);
  --lit-shadow-hover:
    inset -1px 1px 0 rgba(255, 255, 255, 0.95),
    inset -2px 2px 20px -3px rgba(168, 87, 126, 0.5),
    0 0 0 1px rgba(168, 87, 126, 0.55),
    0 0 38px rgba(168, 87, 126, 0.45),
    14px -10px 46px -10px rgba(168, 87, 126, 0.65),
    0 34px 60px -22px rgba(68, 39, 90, 0.5);
}
`;

/**
 * Page chrome, element defaults and the opt-in nhc-* components. Pages opt out
 * with data-nhcarrigan-exclude="layout".
 */
const nhcarriganHeadersStyles = document.createElement("style");
nhcarriganHeadersStyles.id = "nhcarrigan-global-styles";
nhcarriganHeadersStyles.innerHTML = `
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-family: var(--font-body);
  font-size: 100%;
  line-height: 1.65;
  -webkit-text-size-adjust: 100%;
  scroll-padding-top: calc(var(--nhc-header-height) + 28px);
  scrollbar-color: var(--witch-plum) var(--witch-lavender);
}

body {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  color: var(--foreground);
  background: var(--page-background);
}

/* Background artwork, frosted over by the same rose light as the company site */
body::before,
body::after {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}

body::before {
  background: url(https://cdn.spellware.dev/background.png);
  background-size: cover;
  background-position: center;
  z-index: -2;
}

body::after {
  z-index: -1;
  background:
    radial-gradient(64% 76% at 100% 0%, rgba(168, 87, 126, 0.34) 0%, rgba(212, 165, 199, 0.28) 36%, transparent 74%),
    radial-gradient(56% 64% at 0% 100%, rgba(212, 165, 199, 0.42) 0%, rgba(232, 213, 232, 0.22) 46%, transparent 76%),
    radial-gradient(34% 40% at 52% 52%, rgba(255, 255, 255, 0.34) 0%, transparent 70%),
    rgba(245, 245, 245, 0.40);
  -webkit-backdrop-filter: blur(14px) saturate(140%);
  backdrop-filter: blur(14px) saturate(140%);
}

/* The page content sits on a lit, frosted card, with a rose edge glow thrown towards the light */
main {
  flex: 0 0 auto;
  width: 95%;
  max-width: 1080px;
  margin: 24px auto 48px auto;
  padding: 40px;
  color: var(--foreground);
  background: var(--lit-surface);
  text-align: center;
  border: 1px solid var(--lit-border);
  border-radius: var(--radius);
  box-shadow: var(--lit-shadow);
  -webkit-backdrop-filter: blur(16px) saturate(150%);
  backdrop-filter: blur(16px) saturate(150%);
}

/* Typography */
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.015em;
  color: var(--heading);
  margin-bottom: 0.5em;
  overflow-wrap: break-word;
}

h1 { font-size: clamp(1.9rem, 7vw, 2.6rem); letter-spacing: -0.025em; }
h2 { font-size: clamp(1.55rem, 5.5vw, 2.1rem); }
h3 { font-size: 1.5rem; }
h4 { font-size: 1.2rem; }
h5, h6 { font-size: 1rem; }

p {
  line-height: 1.7;
  margin-bottom: 1.1em;
}

a {
  color: var(--link);
  text-decoration: underline;
  text-decoration-color: var(--witch-rose);
  text-decoration-thickness: 1px;
  text-underline-offset: 3px;
  transition: color 0.2s ease;
}

a:hover {
  color: var(--link-hover);
}

a:focus-visible,
button:focus-visible,
summary:focus-visible {
  outline: 3px solid var(--witch-rose);
  outline-offset: 3px;
  border-radius: 4px;
}

img {
  max-width: 100%;
}

hr {
  height: 2px;
  margin: 2rem 0;
  border: 0;
  background: linear-gradient(90deg, transparent, rgba(168, 87, 126, 0.7) 50%, transparent);
  box-shadow: 0 0 14px 1px rgba(168, 87, 126, 0.35);
}

/* Form elements */
input, textarea, select {
  font: inherit;
  padding: 0.7rem 0.9rem;
  border: 1px solid var(--input-border);
  border-radius: var(--radius-small);
  background: var(--input-background);
  color: var(--foreground);
  box-shadow: inset 0 1px 2px rgba(43, 27, 61, 0.06);
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  outline: none;
}

input[type="checkbox"], input[type="radio"] {
  padding: 0;
  accent-color: var(--witch-rose-deep);
}

input:focus, textarea:focus, select:focus {
  border-color: var(--witch-rose);
  box-shadow: 0 0 0 3px rgba(168, 87, 126, 0.30), 0 0 22px rgba(168, 87, 126, 0.30);
}

button, input[type="submit"], input[type="button"], .hs-button {
  font: inherit;
  font-weight: 600;
  line-height: 1.2;
  padding: 0.8rem 1.6rem;
  background: linear-gradient(180deg, var(--witch-rose) 0%, var(--witch-rose-deep) 100%);
  color: #FFFFFF;
  border: 2px solid transparent;
  border-radius: 999px;
  cursor: pointer;
  box-shadow:
    0 0 0 1px rgba(212, 165, 199, 0.55),
    0 8px 24px -6px rgba(168, 87, 126, 0.70),
    inset 0 1px 0 rgba(255, 255, 255, 0.30);
  transition: box-shadow 0.2s ease, transform 0.2s ease;
}

button:hover, input[type="submit"]:hover, input[type="button"]:hover, .hs-button:hover {
  background: linear-gradient(180deg, var(--witch-rose) 0%, var(--witch-rose-deep) 100%);
  transform: translateY(-1px);
  box-shadow:
    0 0 0 1px rgba(232, 213, 232, 0.8),
    0 0 32px rgba(212, 165, 199, 0.7),
    0 10px 30px -6px rgba(168, 87, 126, 0.75),
    inset 0 1px 0 rgba(255, 255, 255, 0.4);
}

button:disabled, input[type="submit"]:disabled, input[type="button"]:disabled {
  opacity: 0.55;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

/* Lists */
ul, ol {
  margin-left: 1.5em;
  margin-bottom: 1em;
  text-align: left;
}

ul li::marker {
  color: var(--accent);
}

/* Tables */
table {
  width: 100%;
  border-collapse: collapse;
  margin: 1em 0;
  border: 1px solid var(--lit-border);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 8px -6px 24px -10px rgba(168, 87, 126, 0.45);
}

th, td {
  padding: 0.75rem 1rem;
  text-align: left;
  border-bottom: 1px solid var(--border-subtle);
}

th {
  background: linear-gradient(180deg, var(--witch-plum), var(--witch-purple));
  color: var(--witch-moon);
  font-weight: 600;
}

tr:nth-child(even) {
  background: var(--row-alternate);
}

tr:hover {
  background: var(--row-hover);
}

/* Blockquotes, with the rose edge that marks quotes across the site */
blockquote {
  margin: 1.25em 0;
  padding: 0.9rem 1.25rem;
  border: 1px solid var(--lit-border);
  border-left: 4px solid var(--witch-rose);
  border-radius: var(--radius-small);
  color: var(--foreground-muted);
  text-align: left;
  background: var(--lit-surface);
  box-shadow: -12px 0 30px -10px rgba(168, 87, 126, 0.55), 0 20px 36px -26px rgba(68, 39, 90, 0.4);
}

/* Code */
code {
  font-family: var(--font-mono);
  font-size: 0.92em;
  background: var(--code-background);
  color: var(--foreground);
  padding: 0.15em 0.45em;
  border-radius: 4px;
}

pre {
  font-family: var(--font-mono);
  font-size: 0.92em;
  margin: 1em 0;
  padding: 1rem 1.25rem;
  overflow-x: auto;
  text-align: left;
  color: var(--witch-lavender);
  background: var(--witch-black);
  border: 1px solid rgba(212, 165, 199, 0.3);
  border-radius: 12px;
  box-shadow: 8px -6px 28px -10px rgba(168, 87, 126, 0.5);
}

pre code {
  padding: 0;
  color: inherit;
  background: none;
}

/* Scrollbar */
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

::-webkit-scrollbar-track {
  background: var(--witch-lavender);
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, var(--witch-rose), var(--witch-plum));
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--witch-rose-deep);
}

/* Selection */
::selection {
  background: var(--witch-rose);
  color: #FFFFFF;
}

::-moz-selection {
  background: var(--witch-rose);
  color: #FFFFFF;
}

/* Brand typography. Legacy decorative classes now share the wordmark face. */
.witchy-accent,
.mystical-text,
.spooky-title {
  font-family: var(--font-brand);
  font-weight: 600;
  font-variation-settings: var(--font-brand-variation);
}

/* HubSpot pages bring their own theme header and footer, which this script replaces */
header.hs-elevate-header,
footer.hs-elevate-footer {
  display: none !important;
}

/* Long articles read better left aligned than centred. */
body.hs-blog-post main {
  text-align: left;
}

/* HubSpot's theme takes its link colours from these variables, so set them to ours. Links stay underlined. */
:root {
  --hsElevate--link--primary__fontColor: var(--witch-plum);
  --hsElevate--link--primary__textDecoration: underline;
  --hsElevate--link--primary__textDecorationColor: var(--witch-rose);
  --hsElevate--link--primary__hover--fontColor: var(--witch-rose-deep);
  --hsElevate--link--primary__hover--textDecoration: underline;
  --hsElevate--link--primary__hover--textDecorationColor: var(--witch-rose-deep);
}

@media screen and (max-width: 850px) {
  main {
    padding: 24px 20px;
  }
}

/* Phones: no blur on the large surfaces, which is costly on low-end devices */
@media (max-width: 700px) {
  body::after {
    -webkit-backdrop-filter: none;
    backdrop-filter: none;
    background:
      radial-gradient(75% 40% at 100% 0%, rgba(168, 87, 126, 0.30) 0%, rgba(212, 165, 199, 0.28) 40%, transparent 74%),
      radial-gradient(70% 40% at 0% 100%, rgba(212, 165, 199, 0.55) 0%, transparent 74%),
      rgba(245, 245, 245, 0.84);
  }

  main {
    background: radial-gradient(130% 100% at 100% 0%, rgba(255, 255, 255, 0.97) 0%, rgba(255, 255, 255, 0.9) 46%, rgba(240, 226, 240, 0.9) 100%);
    -webkit-backdrop-filter: none;
    backdrop-filter: none;
  }
}

@supports not ((backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px))) {
  body::after { background: rgba(245, 245, 245, 0.84); }
  main { background: var(--surface); }
}

@media (prefers-reduced-transparency: reduce) {
  body::after {
    -webkit-backdrop-filter: none;
    backdrop-filter: none;
    background: rgba(245, 245, 245, 0.94);
  }

  main {
    background: var(--surface);
    -webkit-backdrop-filter: none;
    backdrop-filter: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  * {
    transition: none !important;
    animation: none !important;
  }
}

@media print {
  .nhc-header,
  .nhc-footer,
  #community-cta,
  #modal-bg,
  body::before,
  body::after {
    display: none;
  }

  body {
    background: #FFFFFF;
  }

  main {
    background: #FFFFFF;
    border: 0;
    box-shadow: none;
  }

  button, input[type="submit"], input[type="button"] {
    box-shadow: none;
  }
}

/* ---------- Components: opt-in classes that match the company site ---------- */
.nhc-grid-2,
.nhc-grid-3 {
  display: grid;
  gap: 24px;
  text-align: left;
}
.nhc-grid-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.nhc-grid-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
@media (max-width: 900px) { .nhc-grid-3 { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
@media (max-width: 700px) { .nhc-grid-2, .nhc-grid-3 { grid-template-columns: 1fr; } }

.nhc-card,
.nhc-quote,
.nhc-notice {
  padding: 28px 30px;
  color: var(--foreground);
  text-align: left;
  background: var(--lit-surface);
  border: 1px solid var(--lit-border);
  border-radius: var(--radius);
  box-shadow: var(--lit-shadow);
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}
.nhc-card:hover {
  transform: translateY(-2px);
  border-color: rgba(168, 87, 126, 0.9);
  box-shadow: var(--lit-shadow-hover);
}
.nhc-quote,
.nhc-notice {
  border-left: 4px solid var(--witch-rose);
  box-shadow: inset -1px 1px 0 rgba(255, 255, 255, 0.95), -12px 0 30px -10px rgba(168, 87, 126, 0.70), 0 28px 48px -26px rgba(68, 39, 90, 0.45);
}
.nhc-card > :last-child,
.nhc-quote > :last-child,
.nhc-notice > :last-child { margin-bottom: 0; }
.nhc-card h3, .nhc-card h4 { color: var(--witch-purple); }

.nhc-eyebrow {
  display: inline-block;
  margin: 0 0 1rem;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--witch-rose-deep);
}
.nhc-eyebrow::before {
  content: "";
  display: inline-block;
  width: 26px;
  height: 2px;
  margin-right: 0.7rem;
  vertical-align: middle;
  border-radius: 2px;
  background: linear-gradient(90deg, var(--witch-rose-deep), var(--witch-rose));
  box-shadow: 0 0 10px rgba(168, 87, 126, 0.55);
}
.nhc-section-head { max-width: 46rem; margin: 0 auto 2rem; }
.nhc-section-head h2 { color: var(--witch-purple); }

/* A glass pill, for status or availability. The dot is static. */
.nhc-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  margin: 0 0 1.25rem;
  padding: 0.45rem 1.05rem 0.45rem 0.85rem;
  border: 1px solid rgba(212, 165, 199, 0.6);
  border-radius: 999px;
  background: linear-gradient(180deg, rgba(168, 87, 126, 0.42), rgba(168, 87, 126, 0.16)), var(--witch-purple);
  box-shadow: 0 0 28px rgba(168, 87, 126, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.2);
  color: #FFFFFF;
  font-size: 0.9rem;
  font-weight: 600;
  line-height: 1.2;
}
.nhc-pill::before {
  content: "";
  flex: none;
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 50%;
  background: var(--witch-rose-light);
  box-shadow: 0 0 0 3px rgba(242, 182, 211, 0.28), 0 0 14px 3px rgba(242, 182, 211, 0.85);
}

/* Lighter Witch Rose with a glow. For large type on dark backgrounds only. */
.nhc-accent {
  color: var(--witch-rose-light);
  text-shadow: 0 0 22px rgba(168, 87, 126, 0.95), 0 0 56px rgba(168, 87, 126, 0.55);
}

/* A dark, rose-lit panel for the one thing on a page that matters most */
.nhc-feature {
  position: relative;
  padding: clamp(28px, 5vw, 64px);
  color: var(--witch-lavender);
  text-align: left;
  border: 1px solid rgba(212, 165, 199, 0.55);
  border-radius: 28px;
  background:
    radial-gradient(70% 90% at 100% 0%, rgba(168, 87, 126, 0.58) 0%, rgba(168, 87, 126, 0.18) 46%, transparent 74%),
    radial-gradient(50% 60% at 0% 100%, rgba(68, 39, 90, 0.9) 0%, transparent 70%),
    linear-gradient(200deg, var(--witch-purple) 0%, var(--witch-black) 100%);
  box-shadow:
    inset -1px 1px 0 rgba(255, 255, 255, 0.28),
    inset -3px 3px 34px -6px rgba(212, 165, 199, 0.38),
    0 0 0 1px rgba(168, 87, 126, 0.40),
    0 0 64px rgba(168, 87, 126, 0.48),
    26px -20px 90px -20px rgba(168, 87, 126, 0.75),
    0 50px 90px -30px rgba(68, 39, 90, 0.75);
}
.nhc-feature h2, .nhc-feature h3, .nhc-feature strong { color: #FFFFFF; text-shadow: 0 0 26px rgba(168, 87, 126, 0.85); }
.nhc-feature a { color: var(--witch-rose-light); }
.nhc-feature > :last-child { margin-bottom: 0; }

/* Question cards that link to an answer */
.nhc-faq-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
  text-align: left;
}
@media (max-width: 700px) { .nhc-faq-grid { grid-template-columns: 1fr; gap: 16px; } }
a.nhc-faq-card,
.nhc-faq-card {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 22px 24px;
  color: var(--witch-purple);
  text-decoration: none;
  background: var(--lit-surface);
  border: 1px solid var(--lit-border);
  border-radius: var(--radius);
  box-shadow: var(--lit-shadow);
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}
.nhc-faq-card:hover,
.nhc-faq-card:focus-visible {
  color: var(--witch-purple);
  transform: translateY(-3px);
  border-color: rgba(168, 87, 126, 0.9);
  box-shadow: var(--lit-shadow-hover);
}
.nhc-faq-badge {
  flex: none;
  display: grid;
  place-items: center;
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 50%;
  font-size: 1.15rem;
  font-weight: 800;
  color: #FFFFFF;
  background: linear-gradient(180deg, var(--witch-rose), var(--witch-rose-deep));
  box-shadow: 0 0 0 1px rgba(212, 165, 199, 0.7), 0 0 18px rgba(168, 87, 126, 0.7), inset 0 1px 0 rgba(255, 255, 255, 0.35);
}
.nhc-faq-card h3 { margin: 0 0 0.6rem; font-size: 1.12rem; line-height: 1.3; }
.nhc-faq-cta { font-size: 0.95rem; font-weight: 700; color: var(--witch-rose-deep); }

/* A pill-shaped chip, for topics and tags */
a.nhc-chip,
.nhc-chip {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.5rem 1.1rem;
  font-weight: 700;
  color: var(--witch-purple);
  text-decoration: none;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.92), rgba(236, 208, 229, 0.6));
  border: 1px solid rgba(168, 87, 126, 0.45);
  border-radius: 999px;
  box-shadow: inset 0 1px 0 #FFFFFF, 0 8px 22px -10px rgba(168, 87, 126, 0.55);
}
.nhc-chip:hover {
  color: var(--witch-purple);
  border-color: rgba(168, 87, 126, 0.9);
  box-shadow: 0 0 0 1px rgba(168, 87, 126, 0.5), 0 0 26px rgba(168, 87, 126, 0.45);
}

@media (prefers-reduced-motion: reduce) {
  .nhc-card:hover, .nhc-faq-card:hover, .nhc-faq-card:focus-visible { transform: none; }
}
@media (prefers-reduced-transparency: reduce) {
  .nhc-card, .nhc-quote, .nhc-notice, .nhc-faq-card { background: var(--surface); }
}
@media print {
  .nhc-card, .nhc-quote, .nhc-notice, .nhc-faq-card, .nhc-chip { background: #FFFFFF !important; box-shadow: none !important; }
  .nhc-feature { color: #000000; background: #FFFFFF !important; box-shadow: none !important; border-color: #000000; }
  .nhc-feature h2, .nhc-feature h3, .nhc-feature strong, .nhc-accent { color: #000000; text-shadow: none !important; }
  .nhc-pill { box-shadow: none; }
}
`;

/**
 * The header and footer. These load whenever either is shown, even when a page
 * has opted out of the shared layout.
 */
const nhcarriganHeadersChromeStyles = document.createElement("style");
nhcarriganHeadersChromeStyles.id = "nhcarrigan-chrome-styles";
nhcarriganHeadersChromeStyles.innerHTML = `
.nhc-container {
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 24px;
}

.nhc-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* Buttons, shared by the header, the footer and the popup */
.nhc-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.85rem 1.5rem;
  font: 600 1rem/1.2 var(--font-body);
  text-decoration: none;
  border-radius: 999px;
  border: 2px solid transparent;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
}
.nhc-btn:hover { transform: translateY(-1px); }
.nhc-btn-small { padding: 0.55rem 1.1rem; font-size: 0.95rem; }

.nhc-btn.nhc-btn-primary {
  background: linear-gradient(180deg, var(--witch-rose) 0%, var(--witch-rose-deep) 100%);
  color: #FFFFFF;
  box-shadow:
    0 0 0 1px rgba(212, 165, 199, 0.55),
    0 0 24px rgba(168, 87, 126, 0.75),
    0 0 64px rgba(168, 87, 126, 0.40),
    inset 0 1px 0 rgba(255, 255, 255, 0.30);
}
.nhc-btn.nhc-btn-primary:hover {
  background: linear-gradient(180deg, var(--witch-rose) 0%, var(--witch-rose-deep) 100%);
  color: #FFFFFF;
  box-shadow:
    0 0 0 1px rgba(232, 213, 232, 0.8),
    0 0 32px rgba(212, 165, 199, 0.7),
    0 0 80px rgba(168, 87, 126, 0.5),
    inset 0 1px 0 rgba(255, 255, 255, 0.4);
}

.nhc-btn.nhc-btn-ghost {
  background: transparent;
  border-color: rgba(212, 165, 199, 0.8);
  color: var(--witch-lavender);
  box-shadow: 0 0 18px rgba(168, 87, 126, 0.40), inset 0 0 12px rgba(168, 87, 126, 0.18);
}
.nhc-btn.nhc-btn-ghost:hover {
  background: rgba(212, 165, 199, 0.15);
  color: #FFFFFF;
}

.nhc-btn.nhc-btn-outline {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0.35));
  border-color: var(--witch-plum);
  color: var(--witch-plum);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.9), 0 8px 22px -10px rgba(168, 87, 126, 0.45);
}
.nhc-btn.nhc-btn-outline:hover {
  background: var(--witch-plum);
  color: #FFFFFF;
  box-shadow: 0 0 0 1px rgba(168, 87, 126, 0.35), 0 12px 30px -8px rgba(168, 87, 126, 0.55);
}

.nhc-btn.nhc-btn-dark {
  background: linear-gradient(180deg, var(--witch-plum) 0%, var(--witch-purple) 100%);
  color: #FFFFFF;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.18), 0 10px 26px -10px rgba(168, 87, 126, 0.60);
}
.nhc-btn.nhc-btn-dark:hover {
  color: #FFFFFF;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.24), 0 0 0 1px rgba(168, 87, 126, 0.4), 0 14px 34px -8px rgba(168, 87, 126, 0.65);
}

/* ---------- Header: a floating glass bar ---------- */
.nhc-header {
  position: sticky;
  top: 12px;
  z-index: 100;
  order: -1;
  flex: none;
  width: calc(100% - 32px);
  max-width: 1200px;
  height: var(--nhc-header-height);
  margin: 12px auto 0;
  border: 1px solid rgba(212, 165, 199, 0.28);
  border-top-color: rgba(212, 165, 199, 0.45);
  border-radius: 20px;
  font-family: var(--font-body);
  color: var(--witch-lavender);
  background: rgba(10, 0, 9, 0.72);
  -webkit-backdrop-filter: blur(18px) saturate(160%);
  backdrop-filter: blur(18px) saturate(160%);
  box-shadow:
    0 10px 36px rgba(0, 0, 0, 0.35),
    0 18px 50px -18px rgba(168, 87, 126, 0.45),
    inset 0 1px 0 rgba(212, 165, 199, 0.4);
}

.nhc-header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
  max-width: 1120px;
  height: 100%;
  margin: 0 auto;
  padding: 0 24px;
}

.nhc-header .nhc-brand,
.nhc-footer .nhc-brand {
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  flex: 0 1 auto;
  min-width: 0;
  color: #FFFFFF;
  text-decoration: none;
  font-family: var(--font-brand);
  font-size: 1.45rem;
  font-weight: 600;
  font-variation-settings: var(--font-brand-variation);
  letter-spacing: 0;
}
.nhc-header .nhc-brand:hover,
.nhc-footer .nhc-brand:hover { color: var(--witch-mauve); }
.nhc-brand img { flex: none; width: 38px; height: 38px; object-fit: cover; border-radius: 8px; }
.nhc-brand span {
  min-width: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.nhc-header .nhc-brand img.nhc-wordmark {
  width: auto;
  height: 48px;
  border-radius: 0;
  object-fit: contain;
}
.nhc-header .nhc-brand #nhc-header-title {
  padding-left: 0.85rem;
  border-left: 1px solid rgba(212, 165, 199, 0.4);
  font-family: var(--font-body);
  font-size: 1rem;
  font-weight: 500;
  font-variation-settings: normal;
  color: var(--witch-lavender);
}
.nhc-header .nhc-brand #nhc-header-title[hidden] { display: none; }
@media (max-width: 480px) {
  .nhc-header-inner { padding: 0 14px; }
  .nhc-header .nhc-brand img.nhc-wordmark { height: 36px; }
  .nhc-header .nhc-brand #nhc-header-title { display: none; }
}

.nhc-nav-links {
  display: flex;
  flex: none;
  align-items: center;
  gap: 1.75rem;
}
.nhc-nav-links .nhc-btn { white-space: nowrap; }
.nhc-nav-links a:not(.nhc-btn) {
  color: var(--witch-lavender);
  text-decoration: none;
  font-size: 0.97rem;
  font-weight: 500;
  white-space: nowrap;
}
.nhc-nav-links a:not(.nhc-btn):hover { color: #FFFFFF; text-decoration: underline; }

.nhc-menu-toggle {
  display: none;
  padding: 0.45rem 0.8rem;
  font: 600 0.92rem var(--font-body);
  color: var(--witch-lavender);
  background: none;
  border: 1px solid rgba(212, 165, 199, 0.5);
  border-radius: 8px;
  box-shadow: none;
  cursor: pointer;
}
.nhc-menu-toggle:hover {
  background: rgba(212, 165, 199, 0.12);
  box-shadow: none;
  transform: none;
}

@media (max-width: 860px) {
  .nhc-menu-toggle { display: inline-flex; }
  .nhc-nav-links {
    display: none;
    position: absolute;
    top: calc(100% + 8px);
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    padding: 8px 24px 24px;
    border: 1px solid rgba(212, 165, 199, 0.28);
    border-radius: 20px;
    background: rgba(10, 0, 9, 0.97);
    box-shadow: 0 10px 36px rgba(0, 0, 0, 0.4);
  }
  .nhc-nav-links.is-open { display: flex; }
  .nhc-nav-links a:not(.nhc-btn) { padding: 0.9rem 0; border-bottom: 1px solid rgba(212, 165, 199, 0.12); }
  .nhc-nav-links .nhc-btn { margin-top: 1rem; }
}

/* ---------- Footer ---------- */
.nhc-footer {
  position: relative;
  order: 1;
  flex-shrink: 0;
  width: 100%;
  margin-top: auto;
  padding: 64px 0 32px;
  font-family: var(--font-body);
  font-size: 0.95rem;
  line-height: 1.65;
  text-align: left;
  color: var(--witch-lavender);
  background:
    radial-gradient(56% 92% at 100% 0%, rgba(168, 87, 126, 0.46) 0%, rgba(168, 87, 126, 0.14) 50%, transparent 76%),
    radial-gradient(46% 72% at 0% 100%, rgba(68, 39, 90, 0.85) 0%, transparent 70%),
    linear-gradient(200deg, var(--witch-purple) 0%, var(--witch-black) 64%);
}
.nhc-footer::before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 2px;
  background: linear-gradient(90deg, rgba(168, 87, 126, 0.55), var(--witch-rose) 28%, var(--witch-mauve) 72%, rgba(168, 87, 126, 0.55));
  box-shadow: 0 0 26px 3px rgba(168, 87, 126, 0.75);
}
.nhc-footer::after {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: repeating-linear-gradient(112deg, transparent 0 54px, rgba(212, 165, 199, 0.06) 54px 56px, transparent 56px 130px);
  -webkit-mask-image: radial-gradient(60% 100% at 100% 0%, #000 0%, transparent 72%);
  mask-image: radial-gradient(60% 100% at 100% 0%, #000 0%, transparent 72%);
}
.nhc-footer > .nhc-container { position: relative; z-index: 1; }
.nhc-footer a { color: var(--witch-lavender); text-decoration: none; }
.nhc-footer ul { margin: 0; padding: 0; list-style: none; }
.nhc-footer li { padding: 0.25rem 0; }

.nhc-footer-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) repeat(3, minmax(0, 1fr));
  gap: 40px;
}
.nhc-footer-brand p { margin: 1rem 0 0; max-width: 20rem; color: var(--witch-silver); }
.nhc-footer-brand p.nhc-footer-tagline { margin-top: 1.1rem; font-family: var(--font-brand); font-size: 1.2rem; font-weight: 600; font-variation-settings: var(--font-brand-variation); line-height: 1.3; text-wrap: balance; color: var(--witch-lavender); }
.nhc-footer-brand .nhc-brand img { border-radius: 10px; box-shadow: 0 0 26px rgba(168, 87, 126, 0.7); }
.nhc-footer h2 {
  margin-bottom: 1rem;
  font-family: var(--font-body);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--witch-lavender);
  text-shadow: 0 0 14px rgba(212, 165, 199, 0.45);
}
.nhc-footer h2::after {
  content: "";
  display: block;
  width: 34px;
  height: 2px;
  margin-top: 0.6rem;
  background: linear-gradient(90deg, var(--witch-rose), var(--witch-mauve));
  box-shadow: 0 0 12px rgba(168, 87, 126, 0.85);
}

.nhc-footer-links a {
  position: relative;
  display: inline-block;
  padding: 0.1rem 0 0.2rem 1.15rem;
  color: var(--witch-lavender);
  text-shadow: 0 0 10px rgba(212, 165, 199, 0.55), 0 0 26px rgba(168, 87, 126, 0.55);
  background: linear-gradient(90deg, var(--witch-rose), var(--witch-mauve)) 1.15rem 100% / 0 2px no-repeat;
  transition: color 0.2s ease, background-size 0.25s ease, text-shadow 0.2s ease;
}
.nhc-footer-links a::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.82em;
  width: 0.55rem;
  height: 3px;
  border-radius: 2px;
  background: linear-gradient(90deg, var(--witch-rose), var(--witch-mauve));
  box-shadow: none;
  transition: width 0.25s ease, box-shadow 0.25s ease;
}
.nhc-footer-links a:hover,
.nhc-footer-links a:focus-visible {
  color: #FFFFFF;
  text-decoration: none;
  text-shadow: 0 0 6px rgba(255, 255, 255, 0.55), 0 0 18px rgba(212, 165, 199, 0.95), 0 0 40px rgba(168, 87, 126, 0.95);
  background-size: calc(100% - 1.15rem) 2px;
}
.nhc-footer-links a:hover::before,
.nhc-footer-links a:focus-visible::before {
  width: 0.9rem;
  box-shadow: 0 0 10px 2px rgba(255, 255, 255, 0.7), 0 0 24px 5px rgba(242, 182, 211, 0.95), 0 0 40px 8px rgba(168, 87, 126, 0.8);
}
.nhc-footer-links a:focus-visible { outline: 2px solid var(--witch-mauve); outline-offset: 4px; border-radius: 4px; }
.nhc-footer-links a[target="_blank"]::after {
  content: "\\2197";
  content: "\\2197" / "";
  margin-left: 0.35em;
  font-size: 0.85em;
  color: var(--witch-mauve);
  text-shadow: 0 0 10px rgba(212, 165, 199, 0.9);
}
.nhc-footer-address { font-style: normal; color: var(--witch-silver); }

.nhc-footer-base {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-top: 48px;
  padding-top: 24px;
  border-top: 1px solid transparent;
  border-image: linear-gradient(90deg, transparent, rgba(212, 165, 199, 0.55) 50%, transparent) 1;
  color: var(--witch-silver);
  font-size: 0.88rem;
}
.nhc-footer-base p { margin: 0; }
#tree-nation-offset-website { display: flex; align-items: center; min-height: 40px; }

@media (max-width: 860px) {
  .nhc-footer-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .nhc-footer-brand { grid-column: 1 / -1; }
}
@media (max-width: 480px) {
  .nhc-footer-grid { grid-template-columns: 1fr; }
}

@media (prefers-reduced-transparency: reduce) {
  .nhc-header { background: rgba(10, 0, 9, 0.98); -webkit-backdrop-filter: none; backdrop-filter: none; }
}
@supports not ((backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px))) {
  .nhc-header { background: rgba(10, 0, 9, 0.96); }
}
@media print {
  .nhc-header, .nhc-footer { display: none; }
}
`;

/**
 * The community popup. These load only when the popup is shown.
 */
const nhcarriganHeadersCtaStyles = document.createElement("style");
nhcarriganHeadersCtaStyles.id = "nhcarrigan-cta-styles";
nhcarriganHeadersCtaStyles.innerHTML = `
/* The community popup: the same lit surface and rose glow as the company site */
#community-cta {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 95%;
  max-width: 460px;
  padding: 36px 32px 32px;
  overflow: visible;
  transform: translate(-50%, -50%);
  text-align: center;
  font-family: var(--font-body);
  color: var(--foreground);
  background: var(--lit-surface), #FFFFFF;
  border: 1px solid rgba(168, 87, 126, 0.6);
  border-radius: 24px;
  box-shadow:
    inset -1px 1px 0 rgba(255, 255, 255, 0.95),
    inset -2px 2px 20px -3px rgba(168, 87, 126, 0.45),
    0 0 0 1px rgba(168, 87, 126, 0.4),
    0 0 56px rgba(168, 87, 126, 0.5),
    20px -16px 80px -16px rgba(168, 87, 126, 0.75),
    0 40px 80px -24px rgba(43, 27, 61, 0.7);
}
#community-cta::backdrop { background: transparent; }
#community-cta .nhc-cta-eyebrow {
  display: inline-block;
  margin: 0 0 0.75rem;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--witch-rose-deep);
}
#community-cta .nhc-cta-eyebrow::before {
  content: "";
  display: inline-block;
  width: 22px;
  height: 2px;
  margin-right: 0.6rem;
  vertical-align: middle;
  border-radius: 2px;
  background: linear-gradient(90deg, var(--witch-rose-deep), var(--witch-rose));
  box-shadow: 0 0 10px rgba(168, 87, 126, 0.55);
}
#community-cta h2 { margin: 0 0 1.25rem; font-size: 1.7rem; color: var(--witch-purple); }
#community-cta .nhc-cta-body {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 1.5rem;
  text-align: left;
}
#community-cta .nhc-cta-body img {
  flex: none;
  width: 80px;
  height: 80px;
  border-radius: 14px;
  box-shadow: 0 0 0 1px rgba(212, 165, 199, 0.8), 0 0 32px rgba(168, 87, 126, 0.6);
}
#community-cta .nhc-cta-body p { flex: 1; margin: 0; line-height: 1.6; color: var(--witch-plum); }
#community-cta .nhc-cta-close {
  position: absolute;
  top: 14px;
  right: 14px;
  width: 36px;
  height: 36px;
  padding: 0;
  font-size: 1.4rem;
  line-height: 1;
  color: var(--witch-plum);
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(168, 87, 126, 0.45);
  border-radius: 50%;
  box-shadow: inset 0 1px 0 #FFFFFF, 0 6px 16px -6px rgba(168, 87, 126, 0.5);
}
#community-cta .nhc-cta-close:hover {
  background: #FFFFFF;
  color: var(--witch-rose-deep);
  box-shadow: 0 0 0 1px rgba(168, 87, 126, 0.5), 0 0 22px rgba(168, 87, 126, 0.5);
  transform: none;
}
#community-cta a.nhc-btn { text-decoration: none; }
#modal-bg {
  background:
    radial-gradient(70% 70% at 100% 0%, rgba(168, 87, 126, 0.35) 0%, transparent 70%),
    rgba(43, 27, 61, 0.62);
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
}
@media (max-width: 480px) {
  #community-cta { padding: 32px 22px 26px; }
  #community-cta .nhc-cta-body { flex-direction: column; text-align: center; }
}
@media (prefers-reduced-transparency: reduce) {
  #community-cta { background: #FFFFFF; }
  #modal-bg { -webkit-backdrop-filter: none; backdrop-filter: none; background: rgba(43, 27, 61, 0.9); }
}
`;

// #endregion

// #region Components

const nhcarriganHeadersCurrentYear = new Date().getFullYear().
  toString();
const nhcarriganHeadersHomeUrl = "https://spellware.dev/";
const nhcarriganHeadersDefaultTitle = "SpellWare";

/**
 * Works out the text shown beside the logo. A page can set it with a
 * data-nhcarrigan-title attribute on the html element. Otherwise it is taken
 * from the page title, without the SpellWare name or its separators.
 * @returns The text for the header.
 */
const nhcarriganHeadersTitleText = (): string => {
  const requested = document.documentElement.dataset.nhcarriganTitle?.trim();
  if (requested !== undefined && requested.length > 0) {
    return requested;
  }
  const parts = document.title.
    split(/\s+[|\u2013\u2014-]\s+|:\s+/u).
    map((part) => {
      return part.trim();
    }).
    filter((part) => {
      return part.length > 0 && part.toLowerCase() !== "nhcarrigan";
    });
  return parts[0] ?? nhcarriganHeadersDefaultTitle;
};

const nhcarriganHeadersHeader = document.createElement("header");
nhcarriganHeadersHeader.setAttribute("class", "nhc-header");
nhcarriganHeadersHeader.innerHTML = `
<div class="nhc-header-inner">
  <a class="nhc-brand" href="${nhcarriganHeadersHomeUrl}">
    <img class="nhc-wordmark" src="https://cdn.spellware.dev/wordmark.png" alt="${nhcarriganHeadersDefaultTitle}" width="194" height="48">
    <span id="nhc-header-title" hidden></span>
  </a>
  <button class="nhc-menu-toggle" type="button" aria-expanded="false" aria-controls="nhc-primary-navigation">Menu</button>
  <nav aria-label="Primary">
    <div class="nhc-nav-links" id="nhc-primary-navigation">
      <a href="https://spellware.dev/#services">Services</a>
      <a href="https://spellware.dev/#approach">Approach</a>
      <a href="https://spellware.dev/#evidence">Evidence</a>
      <a href="https://spellware.dev/#about">About</a>
      <a href="https://spellware.dev/#faq">FAQ</a>
      <a class="nhc-btn nhc-btn-primary nhc-btn-small" href="https://spellware.dev/#contact">Get in touch</a>
    </div>
  </nav>
</div>
`;

const nhcarriganHeadersFooter = document.createElement("footer");
nhcarriganHeadersFooter.setAttribute("class", "nhc-footer");
nhcarriganHeadersFooter.innerHTML = `
      <div class="nhc-container">
        <div class="nhc-footer-grid">
          <div class="nhc-footer-brand">
            <a class="nhc-brand" href="https://spellware.dev/">
              <img src="https://cdn.spellware.dev/brand/v2/logo.png" alt="" width="38" height="38">
              <span>SpellWare</span>
            </a>
            <p class="nhc-footer-tagline">Thoughtfully built. Wonderfully human.</p>
            <p>Software engineering and community management for developer-facing companies.</p>
            <p>Hours: Monday to Friday, 09:00 to 21:00 Pacific Time.</p>
          </div>

          <nav aria-label="Company">
            <h2>Company</h2>
            <ul class="nhc-footer-links">
              <li><a href="https://spellware.dev/#services">Services</a></li>
              <li><a href="https://spellware.dev/products/">Products</a></li>
              <li><a href="https://spellware.dev/work/">Past work</a></li>
              <li><a href="https://spellware.dev/#approach">Approach</a></li>
              <li><a href="https://spellware.dev/#about">About</a></li>
              <li><a href="https://spellware.dev/#contact">Contact</a></li>
              <li><a href="tel:+19713038662">Call (971) 303-8662</a></li>
              <li><a href="https://spellware.dev/meet/">Book a meeting</a></li>
              <li><a href="https://spellware.dev/donate/">Support us</a></li>
            </ul>
          </nav>

          <nav aria-label="Resources">
            <h2>Resources</h2>
            <ul class="nhc-footer-links">
              <li><a href="https://docs.spellware.dev" target="_blank" rel="noopener noreferrer">Documentation</a></li>
              <li><a href="https://mktg.spellware.dev/blog" target="_blank" rel="noopener noreferrer">Blog</a></li>
              <li><a href="https://spellware.dev/#newsletter">Newsletter</a></li>
              <li><a href="https://spellware.dev/faq/">FAQs</a></li>
              <li><a href="https://github.com/spellware" target="_blank" rel="noopener noreferrer">Open source</a></li>
              <li><a href="https://spellware.dev/testimonials/">Testimonials</a></li>
              <li><a href="https://spellware.dev/events/">Events and talks</a></li>
              <li><a href="https://spellware.dev/experience/">Founder experience</a></li>
              <li><a href="https://spellware.dev/socials/">Socials</a></li>
              <li><a href="https://spellware.dev/style/">Style guide</a></li>
              <li><a href="https://chat.spellware.dev" target="_blank" rel="noopener noreferrer">Community</a></li>
            </ul>
          </nav>

          <nav aria-label="Legal">
            <h2>Legal</h2>
            <ul class="nhc-footer-links">
              <li><a href="https://docs.spellware.dev/legal/privacy/" target="_blank" rel="noopener noreferrer">Privacy policy</a></li>
              <li><a href="https://docs.spellware.dev/legal/terms/" target="_blank" rel="noopener noreferrer">Terms of service</a></li>
              <li><a href="https://docs.spellware.dev/community/coc" target="_blank" rel="noopener noreferrer">Code of conduct</a></li>
              <li><a href="https://docs.spellware.dev/legal/license/" target="_blank" rel="noopener noreferrer">Software licence</a></li>
            </ul>
          </nav>
        </div>

        <div class="nhc-footer-base">
          <p>
            &copy; ${nhcarriganHeadersCurrentYear} SpellWare. All rights reserved.
            <span class="nhc-footer-address">15640 NE Fourth Plain Blvd, Ste 106 #923, Vancouver, WA 98682, United States</span>
          </p>
          <div id="tree-nation-offset-website" data-widget-type="offset-website" data-tree-nation-code="a17464e0cd351220" data-lang="en" data-theme="dark"></div>
        </div>
      </div>
    
`;

// #endregion

// #region Scripts

const nhcarriganHeadersTreeNation = document.createElement("script");
nhcarriganHeadersTreeNation.src
  = "https://widgets.tree-nation.com/js/widgets/v3/widgets.min.js";
const nhcarriganHeadersTreeNationBottom = document.createElement("script");
nhcarriganHeadersTreeNationBottom.defer = true;
nhcarriganHeadersTreeNationBottom.async = true;
nhcarriganHeadersTreeNationBottom.innerHTML = `
let attempts = 0;
const interval = setInterval(() => {
  attempts += 1;
  const tree = document.querySelector("#tree-nation-offset-website");
  if (!tree) {
    console.log("DOM has not hydrated yet, cannot load TreeNation badge.");
    if (attempts >= 15) {
      clearInterval(interval);
    }
    return;
  }
  TreeNationOffsetWebsite({
    code: "a17464e0cd351220",
    lang: "en",
    theme: "dark",
  }).render("#tree-nation-offset-website");
  clearInterval(interval);
}, 1000);
`;
const nhcarriganHeadersFontAwesome = document.createElement("script");
nhcarriganHeadersFontAwesome.src
  = "https://cdn.spellware.dev/font-awesome/all.min.js";

const nhcarriganHeadersConsentBanner = document.createElement("script");
nhcarriganHeadersConsentBanner.src
  = "https://app.secureprivacy.ai/script/6ac55f2e4c3ac856868750c3.js";

const nhcarriganHeadersGoogleTag = document.createElement("script");
nhcarriganHeadersGoogleTag.async = true;
nhcarriganHeadersGoogleTag.src
  = "https://www.googletagmanager.com/gtag/js?id=G-86HKPXSJCX";

const nhcarriganHeadersGoogleTagConfig = document.createElement("script");
nhcarriganHeadersGoogleTagConfig.innerHTML = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-86HKPXSJCX');
`;
const nhcarriganHeadersHubspot = document.createElement("script");
nhcarriganHeadersHubspot.id = "hs-script-loader";
nhcarriganHeadersHubspot.async = true;
nhcarriganHeadersHubspot.defer = true;
nhcarriganHeadersHubspot.src = "https://js-na2.hs-scripts.com/247600308.js";
const nhcarriganHeadersGoogleAdsense = document.createElement("script");
nhcarriganHeadersGoogleAdsense.async = true;
nhcarriganHeadersGoogleAdsense.src
  // eslint-disable-next-line stylistic/max-len -- big boi string
  = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3569924701890974";
nhcarriganHeadersGoogleAdsense.setAttribute("crossorigin", "anonymous");

// #endregion

// #region Inject Elements

/**
 * Pages may declare their own metadata and icons (for example, so that
 * crawlers that do not run scripts can read them). Anything a page has
 * already declared is left alone.
 * @param meta - The meta element to add when the page has not declared it.
 */
const nhcarriganHeadersAppendMeta = (meta: HTMLMetaElement): void => {
  const property = meta.getAttribute("property");
  const name = meta.getAttribute("name");
  let selector = "meta[charset]";
  if (property !== null) {
    selector = `meta[property="${property}"]`;
  } else if (name !== null) {
    selector = `meta[name="${name}"]`;
  }
  if (document.querySelector(selector) === null) {
    nhcarriganHeadersHead?.appendChild(meta);
  }
};

/**
 * Adds an icon link unless the page already links the same file.
 * @param icon - The icon link element to add.
 */
const nhcarriganHeadersAppendIcon = (icon: HTMLLinkElement): void => {
  const href = icon.getAttribute("href");
  if (document.querySelector(`link[href="${href ?? ""}"]`) === null) {
    nhcarriganHeadersHead?.appendChild(icon);
  }
};

const nhcarriganHeadersMetaTags = [
  nhcarriganHeadersCharacterSet,
  nhcarriganHeadersViewport,
  nhcarriganHeadersThemeColor,
  nhcarriganHeadersReferrer,
  nhcarriganHeadersOpenGraphTitle,
  nhcarriganHeadersOpenGraphDescription,
  nhcarriganHeadersOpenGraphImage,
  nhcarriganHeadersOpenGraphUrl,
  nhcarriganHeadersOpenGraphType,
  nhcarriganHeadersOpenGraphSiteName,
  nhcarriganHeadersOpenGraphLocale,
  nhcarriganHeadersOpenGraphImageAlt,
  nhcarriganHeadersOpenGraphImageWidth,
  nhcarriganHeadersOpenGraphImageHeight,
  nhcarriganHeadersTwitterCard,
  nhcarriganHeadersTwitterDomain,
  nhcarriganHeadersTwitterUrl,
  nhcarriganHeadersTwitterTitle,
  nhcarriganHeadersTwitterDescription,
  nhcarriganHeadersTwitterImage,
  nhcarriganHeadersTwitterSite,
  nhcarriganHeadersTwitterCreator,
  nhcarriganHeadersFormatDetection,
  nhcarriganHeadersRobots,
  nhcarriganHeadersAuthor,
];
for (const meta of nhcarriganHeadersMetaTags) {
  nhcarriganHeadersAppendMeta(meta);
}

const nhcarriganHeadersIcons = [
  nhcarriganHeadersFavicon,
  nhcarriganHeadersAppleTouchIcon,
  nhcarriganHeadersSmallIcon,
  nhcarriganHeadersLargeIcon,
];
for (const icon of nhcarriganHeadersIcons) {
  nhcarriganHeadersAppendIcon(icon);
}

nhcarriganHeadersHead?.appendChild(nhcarriganHeadersTokens);
if (!nhcarriganHeadersIsExcluded("layout")) {
  nhcarriganHeadersHead?.appendChild(nhcarriganHeadersStyles);
}

/*
 * The header is part of the shared layout, so it follows the layout opt-out as
 * well as its own. The footer has its own opt-out. The chrome styles load when
 * either is shown.
 */
const nhcarriganHeadersShowHeader = !nhcarriganHeadersIsExcluded("header")
  && !nhcarriganHeadersIsExcluded("layout");
const nhcarriganHeadersShowFooter = !nhcarriganHeadersIsExcluded("footer");
if (nhcarriganHeadersShowHeader || nhcarriganHeadersShowFooter) {
  nhcarriganHeadersHead?.appendChild(nhcarriganHeadersChromeStyles);
}

nhcarriganHeadersHead?.appendChild(nhcarriganHeadersTreeNation);
nhcarriganHeadersHead?.appendChild(nhcarriganHeadersFontAwesome);
nhcarriganHeadersHead?.appendChild(nhcarriganHeadersConsentBanner);
nhcarriganHeadersHead?.appendChild(nhcarriganHeadersGoogleTag);
nhcarriganHeadersHead?.appendChild(nhcarriganHeadersGoogleTagConfig);
if (!nhcarriganHeadersIsExcluded("ads")) {
  nhcarriganHeadersHead?.appendChild(nhcarriganHeadersGoogleAdsense);
}
nhcarriganHeadersHead?.appendChild(nhcarriganHeadersHubspot);

/**
 * Runs a function once the page has been parsed. This script is often loaded
 * with async, so it can run before the page's own content exists.
 * @param callback - What to run.
 */
const nhcarriganHeadersWhenParsed = (callback: ()=> void): void => {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", callback);
    return;
  }
  callback();
};

if (nhcarriganHeadersShowFooter) {
  nhcarriganHeadersBody?.appendChild(nhcarriganHeadersFooter);

  /*
   * Re-append the footer once parsing finishes so it always ends up after the
   * content rather than before it.
   */
  nhcarriganHeadersWhenParsed(() => {
    document.body.appendChild(nhcarriganHeadersFooter);
  });
}
nhcarriganHeadersBody?.appendChild(nhcarriganHeadersTreeNationBottom);
// #endregion

// #region Header

/**
 * Opens or closes the menu on narrow screens.
 * @param open - Whether the menu should be open.
 */
const nhcarriganHeadersSetMenu = (open: boolean): void => {
  const toggle = nhcarriganHeadersHeader.querySelector(".nhc-menu-toggle");
  const links = nhcarriganHeadersHeader.querySelector(".nhc-nav-links");
  links?.classList.toggle("is-open", open);
  toggle?.setAttribute("aria-expanded", String(open));
  if (toggle !== null) {
    toggle.textContent = open
      ? "Close"
      : "Menu";
  }
};

/**
 * Puts the page's title beside the wordmark, unless it is just the company
 * name, and keeps it current when a page changes its title without reloading.
 */
const nhcarriganHeadersShowTitle = (): void => {
  const title = nhcarriganHeadersTitleText();
  const isDefaultTitle
    = title.toLowerCase() === nhcarriganHeadersDefaultTitle.toLowerCase();
  const target = nhcarriganHeadersHeader.querySelector("#nhc-header-title");
  const brand = nhcarriganHeadersHeader.querySelector(".nhc-brand");
  if (target instanceof HTMLElement) {
    target.textContent = isDefaultTitle
      ? ""
      : title;
    target.hidden = isDefaultTitle;
  }
  brand?.setAttribute(
    "aria-label",
    isDefaultTitle
      ? `${nhcarriganHeadersDefaultTitle} home`
      : `${title}, ${nhcarriganHeadersDefaultTitle} home`,
  );
};

/**
 * Adds the header at the start of the page, unless the page has its own.
 */
const nhcarriganHeadersInjectHeader = (): void => {
  const hasOwnHeader
    = document.querySelector("header.site-header, header.nhc-header") !== null;
  if (hasOwnHeader) {
    return;
  }
  document.body.prepend(nhcarriganHeadersHeader);
  nhcarriganHeadersShowTitle();

  const toggle = nhcarriganHeadersHeader.querySelector(".nhc-menu-toggle");
  const links = nhcarriganHeadersHeader.querySelector(".nhc-nav-links");
  toggle?.addEventListener("click", () => {
    nhcarriganHeadersSetMenu(toggle.getAttribute("aria-expanded") !== "true");
  });
  links?.addEventListener("click", (event) => {
    if (event.target instanceof Element && event.target.closest("a") !== null) {
      nhcarriganHeadersSetMenu(false);
    }
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      nhcarriganHeadersSetMenu(false);
    }
  });

  const titleElement = document.querySelector("title");
  if (titleElement !== null) {
    new MutationObserver(nhcarriganHeadersShowTitle).observe(titleElement, {
      characterData: true,
      childList:     true,
      subtree:       true,
    });
  }
};

if (nhcarriganHeadersShowHeader) {
  nhcarriganHeadersWhenParsed(nhcarriganHeadersInjectHeader);
}

// #endregion

// #region CTA

const nhcarriganNoModalUrls = new Set([
  "https://forms.spellware.dev/o/docs/forms/7LNb8jFoN4SPBvP7vRxDi2/4",
]);

/**
 * Builds the community popup dialog. Its look lives in the popup styles.
 * @returns The dialog, not yet attached to the page.
 */
const nhcarriganHeadersCreateCta = (): HTMLDialogElement => {
  const dialog = document.createElement("dialog");
  dialog.id = "community-cta";
  dialog.setAttribute("aria-labelledby", "community-cta-title");
  dialog.innerHTML = `
  <button type="button" class="nhc-cta-close" aria-label="Close">&times;</button>
  <p class="nhc-cta-eyebrow">Community</p>
  <h2 id="community-cta-title">Join the SpellWare community</h2>
  <div class="nhc-cta-body">
    <img src="https://cdn.spellware.dev/brand/v2/logo.png" alt="SpellWare logo">
    <p>Stay connected with our latest projects, get help with our products and meet the people behind them.</p>
  </div>
  <a class="nhc-btn nhc-btn-primary" href="https://chat.spellware.dev" target="_blank" rel="noreferrer">Join us on Discord</a>
`;
  return dialog;
};

/**
 * Builds the blurred backdrop shown behind the popup.
 * @returns The backdrop, not yet attached to the page.
 */
const nhcarriganHeadersCreateModalBackground = (): HTMLDivElement => {
  const background = document.createElement("div");
  Object.assign(background.style, {
    display:  "none",
    height:   "100vh",
    left:     "0",
    position: "fixed",
    top:      "0",
    width:    "100vw",
    zIndex:   "4999",
  });
  background.id = "modal-bg";
  return background;
};

/**
 * Whether the popup was shown within the last week.
 * @returns True when the popup should stay hidden.
 */
const nhcarriganHeadersWasShownRecently = (): boolean => {
  const lastShown = Number.parseInt(
    localStorage.getItem("naomi-community-cta") ?? "0",
    10,
  );
  const diff = Date.now() - new Date(lastShown).getTime();
  // We only want to show this once a week.
  return diff < 1000 * 60 * 60 * 24 * 7;
};

/**
 * Attaches the popup to the page and shows it, at most once a week.
 */
const nhcarriganHeadersInitialiseCta = (): void => {
  nhcarriganHeadersHead?.appendChild(nhcarriganHeadersCtaStyles);
  const dialog = nhcarriganHeadersCreateCta();
  const background = nhcarriganHeadersCreateModalBackground();
  const closeModal = (): void => {
    dialog.close();
    background.style.display = "none";
  };

  nhcarriganHeadersBody?.appendChild(dialog);
  nhcarriganHeadersBody?.appendChild(background);

  if (
    nhcarriganNoModalUrls.has(nhcarriganHeadersUrl)
    || nhcarriganHeadersWasShownRecently()
  ) {
    return;
  }

  dialog.showModal();
  background.style.display = "block";
  background.addEventListener("click", closeModal);
  dialog.addEventListener("close", () => {
    background.style.display = "none";
  });
  dialog.querySelector("button")?.addEventListener("click", closeModal);
  dialog.addEventListener("click", (event) => {
    event.stopPropagation();
    if (event.target === dialog) {
      closeModal();
    }
  });
  localStorage.setItem("naomi-community-cta", Date.now().toString());
};

if (!nhcarriganHeadersIsExcluded("cta")) {
  nhcarriganHeadersInitialiseCta();
}

// #endregion
