import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import ExplorePage from "./pages/ExplorePage";
import LikesPage from "./pages/LikesPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Sidebar from "./components/Sidebar";
import { useAuthContext } from "./context/AuthContext";

function App() {
  const { authUser, loading } = useAuthContext();
  console.log("Authuser is", authUser);

  if (loading) return null;

  return (
    <div className="flex text-white">
      <Sidebar />
      <div className="max-w-5xl my-5 mx-auto text-white flex-1 transition-all duration-300">
        <Routes>
          <Route
            path="/signup"
            element={!authUser ? <SignupPage /> : <Navigate to={"/"} />}
          />
          <Route
            path="/login"
            element={!authUser ? <LoginPage /> : <Navigate to={"/"} />}
          />
          <Route
            path="/"
            element={authUser ? <HomePage /> : <Navigate to={"/login"} />}
          />
          <Route
            path="/likes"
            element={authUser ? <LikesPage /> : <Navigate to={"/login"} />}
          />
          <Route
            path="/explore"
            element={authUser ? <ExplorePage /> : <Navigate to={"/login"} />}
          />
        </Routes>
        <Toaster />
      </div>
    </div>
  );
}

export default App;
