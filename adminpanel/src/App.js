import "./App.css";
import Home from "./pages/home";
import SignUp from "./pages/signup";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
{
    path: "/signup",
    element: <SignUp />,
  },
]);
function App() {
  return (
    <div className='app'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
