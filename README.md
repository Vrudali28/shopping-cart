# Project Name: Online Shopping Cart

Description:
The Online Shopping Cart project is a web application that allows users to browse and purchase products online. It includes features such as displaying a list of products, adding products to a cart, updating the quantity of products in the cart, and calculating the total amount for the items in the cart.

Technologies Used:

React: The frontend of the application is built using React, a JavaScript library for building user interfaces.
Redux: Redux is used for state management, allowing the application to manage the state of the shopping cart and products.
Redux Thunk: Redux Thunk middleware is used to handle asynchronous actions in Redux, such as fetching products from an API.
JavaScript (ES6+): The project utilizes modern JavaScript features for writing clean and concise code.
HTML/CSS: HTML and CSS are used for structuring and styling the user interface of the application.
JSON Server: JSON Server is used as a mock REST API to simulate fetching products from a backend server.
Axios: Axios is used for making HTTP requests to fetch data from the API.
Key Features:

Display Products: Users can view a list of products available for purchase, including details such as product name, description, price, and images.
Add to Cart: Users can add products to their shopping cart by specifying the quantity.
Update Quantity: Users can update the quantity of products in their cart, allowing them to increase or decrease the number of items.
Calculate Total: The application calculates the total amount for the items in the cart based on the quantity and price of each product.
Responsive Design: The user interface is designed to be responsive, ensuring a seamless shopping experience across different devices and screen sizes.
Project Structure:

components: Contains React components for different parts of the application, such as ProductList, Cart, and App.
actions: Contains action creators for fetching products and updating quantity in the Redux store.
reducers: Contains Redux reducers for handling actions and updating the state of the application.
store.js: Configures the Redux store with middleware and combines reducers.
App.js: The main entry point of the application where Redux Provider is used to provide the store to all components



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
