# Project Overview

The SpaceX Data Sharing App is a React-based web application that allows users to explore information about SpaceX rockets and capsules. It provides a modern and responsive user interface, along with a search form and a data grid for easy navigation and browsing of the SpaceX data.
Project Structure

### In this structure:

    public/: Contains the public assets and the main index.html file.
    src/: Contains the source code of the React app.
        components/: Reusable components like Loading, Button, etc.
        hooks/: Custom hooks like useFetch for data fetching.
        pages/: Main components that represent different sections of the app.
    App.js: The entry point of the app that sets up routing and layout.
    index.js: The main file that renders the React app.

### File Overview
Rockets.js and RocketPopup.js

    Rockets.js is the main page for displaying SpaceX rockets.
    It fetches data from the SpaceX API using the useFetch hook and displays it in a data grid format.
    Each rocket is rendered as a card with basic information and a "Read More" button.
    Clicking the "Read More" button opens a popup (RocketPopup.js) that displays detailed information about the selected rocket.

Capsules.js and CapsulePopup.js

    Similarly, Capsules.js displays SpaceX capsules information.
    It follows a similar pattern to Rockets.js, showing capsule data in a data grid.
    Clicking the "Read More" button opens a popup (CapsulePopup.js) to show capsule details.

RocketPopup.js and CapsulePopup.js

    Both popup components (RocketPopup.js and CapsulePopup.js) follow a similar structure.
    They display detailed information about a selected rocket or capsule.
    Information such as name, type, cost, company, success rate, etc., is displayed.
    Users can toggle between metric and imperial units for measurements.
    Popup also includes a photo gallery with clickable images and a Wikipedia link.
    The "Back to Rockets" or "Back to Capsules" link allows users to return to the main page.

### Conclusion

The SpaceX Data Sharing App aims to provide an intuitive and visually appealing way for users to explore information about SpaceX rockets and capsules. It uses React to create a seamless user experience, fetches data from the SpaceX API, and displays it using reusable components and responsive design techniques.

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

