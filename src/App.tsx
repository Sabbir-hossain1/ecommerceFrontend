import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Registration from "./components/Login/Registration";
import MyAccount from "./components/MyAccount/Home";
import ProfileInfo from "./components/MyAccount/ProfileInfo";
import ManageAddress from "./components/MyAccount/ManageAddress";
import ChangePassword from "./components/MyAccount/ChangePassword";
import MyReturns from "./components/OrderHistory/MyReturns";
import MyReviews from "./components/OrderHistory/MyReviews";
import WriteReview from "./components/OrderHistory/WriteReviews";
import Voucher from "./components/PaymentMethods/Voucher";
import Wishlist from "./components/WishList/Wishlist";
import Login from "./components/Login/Login";
import MyOrders from "./components/MyAccount/MyOrders";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "product/",
        element: <Product />,
      },
      {
        path: "registration/",
        element: <Registration />,
      },
      {
        path: "login/",
        element: <Login/>,
      },
      {
        path: "account/",
        element: <MyAccount />,
        children: [
          {
            path: "",
            element: <ProfileInfo />,
          },
          {
            path: "manage-address/",
            element: <ManageAddress />,
          },
          {
            path: "change-password/",
            element: <ChangePassword />,
          },
          {
            path: "my-returns/",
            element: <MyReturns />,
          },
          {
            path: "my-reviews/",
            element: <MyReviews/>,            
          },
          {
            path: "write-review/",
            element: <WriteReview/>,
          },
          {
            path: "voucher/",
            element: <Voucher/>,
          },
          {
            path:'wishlist/',
            element:<Wishlist/>,
          },
          {
            path:'my-orders/',
            element:<MyOrders/>,
          },

        ],
      },
      
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
