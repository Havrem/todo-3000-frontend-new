import { createRootRoute, createRoute, createRouter, Outlet } from "@tanstack/react-router";
import { Background } from "./layouts/Background";
import { Public } from "./layouts/Public";
import { Login } from "./pages/Login";
import { Bounce, ToastContainer } from "react-toastify";
import { AuthProvider } from "./contexts/AuthContext";
import "react-toastify/dist/ReactToastify.css";
import { Protected } from "./layouts/Protected";
import { Dashboard } from "./pages/Dashboard";

const rootRoute = createRootRoute({
    component: () => (
        <AuthProvider>
            <ToastContainer
                position='top-right'
                autoClose={3000}
                style={{padding:"0.5rem"}}
                transition={Bounce}
            />
            <Background>
                <Outlet/>
            </Background>
        </AuthProvider>
    )
});

const publicRoute = createRoute({
    getParentRoute: () => rootRoute,
    id: 'public',
    component: Public
});

const protectedRoute = createRoute({
    getParentRoute: () => rootRoute,
    id: 'protected',
    component: Protected
})

const loginRoute = createRoute({
    getParentRoute: () => publicRoute,
    path: '/login',
    component: Login
});

const dashboardRoute = createRoute({
    getParentRoute: () => protectedRoute,
    path: '/dashboard',
    component: Dashboard
})

export const routeTree = rootRoute.addChildren([
    publicRoute.addChildren([loginRoute]),
    protectedRoute.addChildren([dashboardRoute])
]);

export const router = createRouter({routeTree});