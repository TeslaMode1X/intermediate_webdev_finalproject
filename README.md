# Interest Rate Calculator

A small web app that calculates the **simple interest** and the **total payable amount** for a loan from the principal, yearly rate and duration.

The project is split into three parts:

- **Part A - Fix the existing errors.** `src/index.html` now references the favicon, stylesheet and script correctly, and `src/script.js` converts every input to a number before calculating so no `TypeError` can occur.
- **Part B - Make it testable.** The business logic lives in pure functions that are unit-tested with [Jasmine](https://jasmine.github.io/) (`spec/scriptSpec.js`).
- **Part C - Webpack and SEO.** [Webpack](https://webpack.js.org/) bundles the app into `dist/`, and the page has a descriptive `<title>`, `<meta name="description">` and a single `<h1>`.

## Project structure

```
interest-rate-calculator/
├── src/
│   ├── index.html      # markup with favicon, CSS, JS and SEO tags
│   ├── script.js       # calculate(), calculateSimpleInterest(), calculateTotalPayableAmount()
│   ├── style.css
│   └── favicon.ico
├── spec/
│   ├── scriptSpec.js   # Jasmine specs
│   └── support/jasmine.mjs
├── webpack.config.js
├── no-spec             # terminal output: npx jasmine right after jasmine init
├── both-tests-passed   # terminal output: npx jasmine with 2 passing specs
└── dist-directory      # terminal output: npx webpack + the dist/ listing
```

## Setup

```bash
git clone https://github.com/TeslaMode1X/interest-rate-calculator.git
cd interest-rate-calculator
npm install
```

## Usage

| Command | What it does |
| --- | --- |
| `npx jasmine` (or `npm test`) | runs the unit tests |
| `npx webpack` (or `npm run build`) | builds the distributable into `dist/` |
| `npm start` | serves `dist/` with webpack-dev-server and opens the browser |

Open `src/index.html` directly in a browser for development, or `dist/index.html` after a build.

## Formulas

- Simple interest = principal × rate × time / 100
- Total payable amount = principal + simple interest
