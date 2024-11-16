import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./Pages/Home";
import Match from "./Pages/Match";
import { UseAppContext } from "./context/context";
import MateList from "./components/MateCard";
import Navbar from "./components/Navbar";

function ProtectedRoute({ children }) {
  const { User } = UseAppContext();
  if (!User) {
    return <Navigate to="/" />;
  }
  return children;
}

function App() {

  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/match/me"
            element={
              <ProtectedRoute >
                <Match />
              </ProtectedRoute>
            }
          />
          <Route
            path="/match/mates"
            element={
              <ProtectedRoute >
                <MateList />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
