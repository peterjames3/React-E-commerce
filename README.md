# E-commerce with a  Shopping Cart
welcome to this mockup of an e-commerce website! Our website utilizes the [fake store API](https://fakestoreapi.com/) to showcase a wide range of products. The main goal of this project was to solidify the utilization of tools and components like React Router, type checking, API fetching, and the testing of UI elements using the React Testing Library and Vitest.

 ## Table of content

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- Navigate from one page to another
- filter products
- select products
- Add items to the cart
- View the cart and remove items from it


## Features 🎯
- Home page
- Contact Page
- Collection page
- Search tool
- Shopping Cart
- Product Sorting Filter
- Pagination Navigation
- Category Selection

## Build With 🛠️

- React + Vite
- Javascript
- tailwind css
- Unit Testing: vites
- Prime React library

## Goal and Challenges 🔥

I went into this project with the goal of mastering essential React concepts, including hooks, contexts, routers, and implementing key functionalities such as filtering, pagination navigation, search capabilities, and other user-friendly tools.

During development, I encountered challenges in integrating the different sorting/filtering functionality as each search query, category selector, filter tool, and pagination called in a certain order to fully bring about a smooth user experience. While leveraging useful hooks like useSearchParams for URL querying and data retrieval, I faced further issues of filtering resets with each search. To overcome this, I established a shared context that facilitated seamless logic integration between components, ensuring a coherent flow and abstracting complexities. I also broke apart the logic behind pagination from the rest of the store page to work with a already filtered list of displayed items.

## Libraries 📚

```
   npm install uuidv4
   npm install primereact
   npm install react-icons
   npm install  Toastify
   npm install --save prop-types
   npm install react-router-dom
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   npm install react-paginate
```

> Don't forget to modify tailwind.config

## Unit Test Installation Setups ⚙️

```
   npm install vitest --save-dev
   npm install jsdom --save-dev
   npm install @testing-library/react @testing-library/jest-dom --save-dev
   npm install @testing-library/user-event --save-dev
```

> TESTING: npm test FileName.test.tsx

### Useful resources
- [Example resource 1](https://www.robinwieruch.de/react-testing-library/) - This helped me to grasp the concept of testing using vitest and React testing library.
- [Example resource 2](https://dev.to/anne46/cart-functionality-in-react-with-context-api-2k2f) - This is an amazing article which helped me finally understand context API and add to cart functionality.

## Image Sources 🌅

- https://www.Fontendmentor.com/

## Author


- Twitter - [@Hanzo_q](https://www.twitter.com/@Hanzo_q)