import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import '../index.css';

const AppLayout = () => {
  return(
    <div className='app container'>
      <Header />
      <Outlet />
      <Footer />
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