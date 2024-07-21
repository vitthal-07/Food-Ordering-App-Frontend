import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import { Toaster } from "./@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import AuthProviderWithNavigate from "./auth/AuthProviderWithNavigate";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        },
    },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <AuthProviderWithNavigate>
                    <AppRoutes />
                    <Toaster
                        visibleToasts={1}
                        position="top-right"
                        richColors
                    />
                </AuthProviderWithNavigate>
            </QueryClientProvider>
        </BrowserRouter>
    </React.StrictMode>
);
