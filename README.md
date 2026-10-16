# Website Headers

This project generates a JavaScript file to be uploaded to our CDN. This file automatically generates metadata, favicons, styles, and scripts for all of our production pages.

To work on the file locally, use `pnpm dev`. This command will compile the TypeScript into JavaScript and simultaneously run the resulting dev server in `src/develop.ts`. This allows you to iterate over changes quickly and watch them update in real time.

When building the file, it is important to use `pnpm build` so that the minification step is run. Running `tsc` directly will bypass this step - while this is perfectly acceptable for debugging locally, the file MUST be minified before uploading to our CDN.

## Design System

The injected stylesheet is the shared visual language for every page, and it matches the company site at [nhcarrigan.com](https://nhcarrigan.com/). Read the [style guide](https://nhcarrigan.com/style/) for the reasoning. It uses the official palette, system fonts for text, and Griffy for the wordmark only. Everything is lit from the upper right by one Witch Rose light.

- **Design tokens** (`--witch-*` colours, `--font-*`, `--radius`, `--surface`, `--foreground`, `--link` and more) load on every page. The site is light only, so there is no dark theme and no theme toggle. Pages should still use the tokens (for example `var(--surface)`) rather than hard-coded colours.
- **The header** is a floating glass bar with the same logo and links as the company site. The text beside the logo is the page title. Set it with `data-nhcarrigan-title` on the `html` element, or leave it and it is taken from the page's `<title>` without the NHCarrigan name or its separators.
- **The footer** is a replica of the company site footer, with the same columns and links.
- **The background** is the artwork, frosted over by the same rose and lavender light as the company site. Frosting is dropped on phones and when the reader asks for reduced transparency.
- **Page chrome and element defaults** style `main`, headings, links, buttons, forms, lists, tables, blockquotes, code and HubSpot form buttons. `main` is a centred, lit, frosted card with a rose edge glow, and the footer sits at the end of the page rather than being fixed to the viewport.
- **The community popup** has the same lit surface, rose glow and glowing button.
- **Components** are opt-in classes, all prefixed `nhc-` so they cannot collide with an app's own styles: `nhc-card`, `nhc-quote`, `nhc-notice`, `nhc-grid-2`, `nhc-grid-3`, `nhc-eyebrow`, `nhc-section-head`, `nhc-pill`, `nhc-accent`, `nhc-feature`, `nhc-faq-grid` with `nhc-faq-card`, and `nhc-chip`. Buttons use `nhc-btn` with `nhc-btn-primary`, `nhc-btn-ghost`, `nhc-btn-outline`, `nhc-btn-dark` and `nhc-btn-small`.

### Upgrading to v6

Version 6 is a visual change for every page that loads the script:

- The dark theme and the footer theme toggle are gone. The `is-dark` class is no longer added, and its token overrides are removed.
- Every page gets the header, unless it excludes it or already has a `header.site-header` of its own.
- The footer is now the company site footer, and the old footer ids (`footer-inner-container`, `footer-legal`, `theme-select-button`) no longer exist.
- `main` is a lit, frosted card, and plain `button` elements are rose pills with a glow.
- The `--page-overlay` token is removed.

## Opting Out

Bespoke pages, such as the company landing page, can opt out of parts of this library by listing features in a space-separated `data-nhcarrigan-exclude` attribute on the `html` element:

```html
<html lang="en-GB" data-nhcarrigan-exclude="layout footer cta ads">
```

| Feature  | Effect                                                                                        |
| -------- | --------------------------------------------------------------------------------------------- |
| `layout` | Skips the shared page chrome, header and element styles. Design tokens still load.            |
| `header` | Skips the shared header.                                                                      |
| `footer` | Skips the shared footer.                                                                      |
| `cta`    | Skips the community popup.                                                                    |
| `ads`    | Skips the advertising script.                                                                 |

A page that already has its own `header.site-header` never gets a second header. Metadata, icons, consent, analytics and HubSpot always load. Any meta tag or icon a page already declares is left alone, so pages can ship their own for crawlers that do not run scripts.

## HubSpot

HubSpot pages do not load this script by default, and they use HubSpot's own theme header and footer. To bring them in line, the script is added to each page and post. The script hides HubSpot's theme header and footer (`header.hs-elevate-header` and `footer.hs-elevate-footer`) and shows its own. It also sets HubSpot's link colour variables to ours, and left aligns blog posts, because long articles read better that way.

## Live Version

This page is currently deployed. [View the live website.]

## Feedback and Bugs

If you have feedback or a bug report, please [log a ticket on our forum](https://support.nhcarrigan.com).

## Contributing

If you would like to contribute to the project, you may create a Pull Request containing your proposed changes and we will review it as soon as we are able! Please review our [contributing guidelines](CONTRIBUTING.md) first.

## Code of Conduct

Before interacting with our community, please read our [Code of Conduct](CODE_OF_CONDUCT.md).

## License

This software is licensed under our [global software license](https://docs.nhcarrigan.com/#/license).

Copyright held by Naomi Carrigan.

## Contact

We may be contacted through our [Chat Server](http://chat.nhcarrigan.com) or via email at `contact@nhcarrigan.com`.
