# A Next.Js Boilerplate

[![ESLint Code Base](https://github.com/SeGl1990/next-boilerplate/actions/workflows/eslint.yml/badge.svg)](https://github.com/SeGl1990/tk-blog/actions/workflows/eslint.yml)
[![Prettier and ESLint Code Base](https://github.com/SeGl1990/next-boilerplate/actions/workflows/prettier.yml/badge.svg)](https://github.com/SeGl1990/tk-blog/actions/workflows/prettier.yml)

This is a next.js boilerplate with pre-commits and simple github actions.

## Getting Started

Install the dependencies

```bash
# start the development server
npm i
```

Run the development server:

```bash
# start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### esLint commands

```bash
# check the project for eslint errors and run the --fix command
npm run lint
# fix eslint errors by running prettier
npm run format
```

### Github actions

- In order to follow best practices, very simple github actions have been implemented.
- We check for EsLint errors (according to our .eslintrs.json rules)
- We check the code for prettier violations (according to our .prettierrc file)

### Basic Frontend Libraries

|                                                    | Stars                                                                                      | Bundle size | Maintained |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------ | ----------- | ---------- |
| [next: 10.0.7](https://www.npmjs.com/package/next) | ![GitHub stars](https://img.shields.io/github/stars/vercel/next.js.svg?label=%F0%9F%8C%9F) | N/A         | ✅         |

### Automated Workflow Libraries

|                                                                                               | Stars                                                                                          | Bundle size                                                                                                                                                                | Maintained | Dev- Mode |
| --------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | --------- |
| [prettier: ^2.2.1](https://www.npmjs.com/package/prettier)                                    | ![GitHub stars](https://img.shields.io/github/stars/prettier/prettier.svg?label=%F0%9F%8C%9F)  | [![Bundle size](https://badgen.net/bundlephobia/minzip/prettier/?label=%F0%9F%92%BE)](https://bundlephobia.com/result?p=prettier@2.2.1)                                    | ✅         | ✅        |
| [eslint: ^7.21.0](https://www.npmjs.com/package/eslint)                                       | ![GitHub stars](https://img.shields.io/github/stars/eslint/eslint.svg?label=%F0%9F%8C%9F)      | [![Bundle size](https://badgen.net/bundlephobia/minzip/eslint/?label=%F0%9F%92%BE)](https://bundlephobia.com/result?p=eslint@7.21.0)                                       | ✅         | ✅        |
| [eslint-config-airbnb-base: ^14.2.1](https://www.npmjs.com/package/eslint-config-airbnb-base) | ![GitHub stars](https://img.shields.io/github/stars/airbnb/javascript.svg?label=%F0%9F%8C%9F)  | [![Bundle size](https://badgen.net/bundlephobia/minzip/eslint-config-airbnb-base/?label=%F0%9F%92%BE)](https://bundlephobia.com/result?p=eslint-config-airbnb-base@14.2.1) | ⚠️         | ✅        |
| [husky: ^4.3.4](https://www.npmjs.com/package/husky)                                          | ![GitHub stars](https://img.shields.io/github/stars/typicode/husky.svg?label=%F0%9F%8C%9F)     | [![Bundle size](https://badgen.net/bundlephobia/minzip/husky?label=%F0%9F%92%BE)](https://bundlephobia.com/result?p=husky)                                                 | ✅         | ✅        |
| [lint-staged: ^10.5.4](https://www.npmjs.com/package/lint-staged)                             | ![GitHub stars](https://img.shields.io/github/stars/okonet/lint-staged.svg?label=%F0%9F%8C%9F) | [![Bundle size](https://badgen.net/bundlephobia/minzip/lint-staged?label=%F0%9F%92%BE)](https://bundlephobia.com/result?p=lint-staged@10.5.4)                              | ✅         | ✅        |
