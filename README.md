# Checkboxes Challenge

Get directly to the solution [in the App.tsx file](./src/App.tsx)

This guide will walk you through the requirements and implementation of a checkbox selection feature in a React application.

## Requirements

1. Individual Country Selection: You should be able to individually select each country.

2. Select All: There should be a "Select All" checkbox that, when checked, selects all countries. If it's unchecked, all countries should be deselected.

3. Deselecting a Country: If "Select All" is checked (and therefore all other checkboxes are also checked), and you deselect one of the countries, "Select All" should be automatically unchecked.

4. Selecting All Countries: If you select all countries individually and "Select All" is not checked, "Select All" should be automatically checked.

## Solution

The application allows for individual selection of countries and a "Select All" option for selecting all countries at once. The state of the checkboxes is managed using React's `useState` hook.

Implementation:

The `handleSelectAll` function is used to handle the case where the "Select All" checkbox is checked or unchecked. It updates the state of all checkboxes to match the state of the "Select All" checkbox.

The `handleIndividualCheckbox` function is used to handle the case where an individual country's checkbox is checked or unchecked. It checks if all countries are selected, and if so, it checks the "Select All" checkbox.

The `handleCheckboxChange` function is the main function for handling checkbox state changes. It updates the state based on whether the changed checkbox is the "Select All" checkbox or an individual country's checkbox.

The checkboxes are rendered using the Checkbox component from `Shadcdn UI`

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
