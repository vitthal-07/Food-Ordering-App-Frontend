import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./Layouts/Layout";
import "./global.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AuthProviderWithNavigate from "./auth/AuthProviderWithNavigate";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        },
    },
});
const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/user-profile",
                element: <div>Welcome to User Profile Page</div>,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <AuthProviderWithNavigate>
                <RouterProvider router={router} />
            </AuthProviderWithNavigate>
        </QueryClientProvider>
    </React.StrictMode>
);
