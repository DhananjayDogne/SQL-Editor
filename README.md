# SQL Query Runner

## 📌 Overview  
SQL Query Runner is a web-based application that allows users to execute SQL queries on predefined datasets and visualize the results. It provides a user-friendly interface for running queries and exporting results in CSV format.

## Features
- Dropdown for predifined query
- Editor for sql with auto completion
- Download the result of query as CSV file
- Toast notification to make application user friendly

## Deployed link  (try it)-> https://sql-editor-sable.vercel.app/
  
## 🛠️ Technology Stack  
### **Frontend:**  
- **React (v19.1.0)** – JavaScript framework for building UI  

### **Major Libraries & Packages:**  
- **PapaParse** – Efficient CSV parsing  
- **react-csv** – Enables CSV export  
- **react-toastify** – Provides notifications and alerts  
- **react-icons** – Used for UI icons  

## ⏳ Page Load Time  
The page load time was measured using **Google Chrome DevTools (Performance Tab)**.  
- **Initial Load Time:** ~0.5s (on a local development server)
- ![Screenshot from 2025-03-30 20-57-13](https://github.com/user-attachments/assets/b7cf5676-5d3d-481e-9d9d-c6ccb8acfb80)


## 🚀 Performance Optimizations  
To enhance performance, the following optimizations were implemented:  

### **3️⃣ Optimized CSV Parsing**  
- `Papa.parse` with `header: true` ensures efficient CSV data handling.  

### **4️⃣ Minimized Bundle Size**  
- Removed unused dependencies and optimized production builds using `npm run build`.  

These optimizations improve responsiveness, reduce load time, and enhance the overall user experience. 🚀  

---



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

