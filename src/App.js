import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./Pages/Home";
import Match from "./Pages/Match";

function ProtectedRoute({ isUser, children }) {
  if (!isUser) {
    return <Navigate to="/" />;
  }
  return children;
}

function App() {
  const [isUser, setIsUser] = React.useState(true);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home isUser={isUser} />} />
          <Route
            path="/match/me"
            element={
              <ProtectedRoute isUser={isUser}>
                <Match />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
