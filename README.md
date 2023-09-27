# React Headless UI components

## Introduction

This repository is the practical demonstration of React Headless UI components discussed in the article on Medium:  [Medium: Separating logic from UI Component - part I](https://medium.com/@valdenir/separating-logic-from-ui-component-part-i-587476b561e).


## Table of Contents
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Getting Started](#getting-started)

## Project Structure

This project is organized into different components that follow best practices for clean and maintainable code:

- **Presentational Components**: Components primarily concerned with how things look. They take in data and display it.
    - `products.jsx`: Defines the look and structure of the product page, which includes a grid of items and buttons for Add New, Edit, Update, and Delete.

- **Business Logic**: Contains core processes, rules, and operations that make the software functional.
    - `productPageLogic.ts`: Houses rules and computations related to product page logic, such as Add, Edit, Delete, or Fetch products.

- **Implementation Logic**: Acts as a bridge, connecting business logic to presentational components. Handles tasks like DOM manipulations, state changes, and network requests.
    - `useProducts.ts`: Serves as a bridge between business logic and the presentational component. Integrates business logic for user actions like editing or deleting a product.



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
\
### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
