import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginPage from "./components/LoginPage.jsx";
import SignupPage from "./components/SignupPage.jsx";
import TasksPage from "./components/TasksPage.jsx";

import ProtectedRoute from "./components/ProtectedRoute.jsx";
import PublicRoute from "./components/PublicRoute.jsx";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute is_logged={false}>
              <TasksPage />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/login"
          element={
            <PublicRoute is_logged={false}>
              <LoginPage />
            </PublicRoute>
          }
        ></Route>
        <Route
          path="/signup"
          element={
            <PublicRoute is_logged={false}>
              <SignupPage />
            </PublicRoute>
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
