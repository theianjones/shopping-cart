# Shopping Cart

This project is going to implement shopping cart functionality inspired by [use-shopping-cart](https://github.com/dayhaysoos/use-shopping-cart) with [xstate](https://github.com/statelyai/xstate)

## State Machine Design

Here are the states for the machine:

- shopping (initial state)
- purchasing

The state machine will have these actions

- ADD_ITEM
- CLEAR_CART
- CHECKOUT

The context of the machine will have: 

- allItemIds: number[]
- itemByIds: { string: Item }

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
