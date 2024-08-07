# Autocomplete Challenge

## How to run

### Install dependencies:

```sh
npm install
```

### Run in dev mode

```sh
npm run dev
```

### Build for Production

```sh
npm run build
```

### Run unit tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run end-to-end tests with [Playwright](https://playwright.dev)

Installing playwright if it wasn't installed before: 

```sh
npx playwright install
````

Then just run:

```sh
npm run test:e2e
```

## Checklist

Here are the things I need to do:

- two search inputs for books and cities, focused by default
- results are shown differently for different inputs
- inputs listen to key presses
- to see result there should be at least 3 characters in the input
- use store to show results, show message if no results available
- at least three unit tests
- fuzzy search
- include dist files

I decided to make a step-by-step checklist of all the thing that I'm planning to do to implement the challenge:

- [ ] create template for input component
  - [X] styles for input border
  - [X] clear button
  - [X] hint
  - [ ] results list with templates
- [ ] implement store
- [ ] search method with optional accessor method
- [ ] tests for search method
- [ ] bind search logic to input component

## Additional thoughts

- I'm going to use Levenstein's distance, as it allows me to make typos and still get results. I will use substrings (from the beginning of the string) of the same length as search input string to make results more fair
- for styling, I prefer tailwind
- default eslint config removes trailing semicolons. I am not used to this, but I decided to leave it as is
- for icons I've used Heroicons library