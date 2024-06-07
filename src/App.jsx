import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import socketIO from "socket.io-client";
import { StyleSheetManager } from "styled-components";
import Spinner from "./ui/Spinner";
import { URL } from "./utils/constants";
import Login from "./pages/Login";
import ProtectedRoute from "./ui/ProtectedRoute";
import ResetPassword from "./pages/ResetPassword";

const GlobalStyles = lazy(() => import("./styles/GlobalStyles"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const AppLayout = lazy(() => import("./ui/AppLayout"));
const Hours = lazy(() => import("./pages/Hours"));
const ChatHome = lazy(() => import("./pages/ChatHome"));
const ChatPage = lazy(() => import("./pages/ChatPage"));
const Signup = lazy(() => import("./pages/Signup"));

const socket = socketIO.connect(URL);

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 0 } },
});

const shouldForwardProp = (prop) => !["variation"].includes(prop);

function App() {
  return (
    <StyleSheetManager shouldForwardProp={shouldForwardProp}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Suspense fallback={<Spinner />}>
          <GlobalStyles />

          <BrowserRouter>
            <Routes>
              <Route
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route path="hours" element={<Hours />} />
                <Route
                  path="chat-home"
                  element={<ChatHome socket={socket} />}
                />
                <Route
                  path="chat-page"
                  element={<ChatPage socket={socket} />}
                />
              </Route>

              <Route path="" element={<Login />} />
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
              <Route path="reset-password/:token" element={<ResetPassword />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </BrowserRouter>
        </Suspense>

        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "var(--color-slate-50)",
              color: "var(--color-slate-700)",
            },
          }}
        />
      </QueryClientProvider>
    </StyleSheetManager>
  );
}

export default App;
