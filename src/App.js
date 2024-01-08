import React, { Suspense, lazy, useContext, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
import About from './components/About';
import Contact from './components/Contact';
// import Grocery from './components/Grocery';
import Error from './components/Error';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import '../index.css';
import RestaurantMenu from './components/RestaurantMenu';
import UserContext from './utils/UserContext';

//Chunking 
//Code Splitting 
//Dynamic Bundling
//Lazy loading
//On demond loading

const Grocery = lazy(() => import('./components/Grocery'));

const AppLayout = () => {
  const [userName, setUserName] = useState();
  const { logedInUser } = useContext(UserContext);

  useEffect(() => {
    const data = {
      name: 'Beer'
    }
    setUserName(data.name);
  }, []);

  console.log('11');//step1 - will be executed during the initial render.
  React.useEffect(() => {
    console.log('12');//step3 - will be registered to run after the initial render, but since it has an empty dependency array ([]), it will run only once after the component is mounted.
  }, []);
  console.log('123');//step2

  return(
    <div className='app container m-auto'>
      {/* overriding the value={{logedInUser: userName, setUserName} */}
      <UserContext.Provider value={{logedInUser: userName, setUserName}}>
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      }, {
        path: "/about",
        element: <About />
      }, {
        path: '/contact',
        element: <Contact />
      }, {
        path: '/restaurants/:resId',
        element: <RestaurantMenu />
      }, {
        path: '/grocery',
        element: <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>
      }
    ],
    errorElement: <Error />
  }
])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);



// function App() {
//   return (
//     <div className='container'>
//       <Header />
//       <Body />
//       <Footer />
//     </div>
//   )
// }


// import React, { useEffect } from 'react'
// import Header from './components/Header'
// import Footer from './components/Footer'
// import Body from './components/Body'
// import About from './components/About'

// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import '../index.css';
// const AppLayout = () => {
//   return(
//     <div className='app'>
//       <Header />
//       <Body />
//       <Footer />
//     </div>
//   )
// }

// const appRouter = createBrowserRouter([
//   {
//     path: '/',
//     element: <AppLayout />
//   }, {
//     path: '/about',
//     element: <About />
//   }
// ])

// function App() {
//   return (
//     <div className='container'>
//       <RouterProvider router={appRouter} />
//     </div>
//   )
// }

// export default App