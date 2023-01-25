import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./Component/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ResturantMenu from "./Component/ResturantMenu";
import { Header } from "./Component/Header";
import { Footer } from "./Component/Footer";
import { OuterBody } from "./Component/OuterBody";
import Offers from "./Component/Offers";

// import { Helmet } from "react-helmet";
const AppLayout = () => {
	return (
		<>
			<Header />
			{/* <Helmet>
				<script src="assets/vendor/sidebar/hc-offcanvas-nav.js"></script>
			</Helmet> */}
			<Outlet />
			<Footer />
		</>
	);
};
const router = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		children: [
			{
				path: "/",
				element: <OuterBody />,
			},
			{
				path: "/offers",
				element: <Offers />,
			},
			{
				path: "/restaurant/:id",
				element: <ResturantMenu />,
			},
			{
				path: "/:id",
				element: <OuterBody />,
			},
		],
	},
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(container);
root.render(<RouterProvider router={router} />);
