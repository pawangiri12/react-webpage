import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './Main';
import Home from './Home';
import Test from './Components/Test';

const App = () => {

    const Routes = createBrowserRouter([
        {
            path: "/",
            element: <Main />,
            children: [
                {
                    path: ""
                    , element: <Home />
                },
                {
                    path: "test"
                    , element: <Test />
                }
            ]
        }]
    )

    return (
        <RouterProvider router={Routes} />
    );
}

export default App;
