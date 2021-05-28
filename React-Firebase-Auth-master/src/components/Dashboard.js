import React, { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import Post from "./post";

export default function Dashboard() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  {
    /* <Card>
    <Card.Body>
      <h2 className="text-center mb-4">Profile</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <strong>Email:</strong> {currentUser.email}
      <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
        Update Profile
      </Link>
    </Card.Body>
  </Card> */
  }
  return (
    <div>
      <div className="leftside">
        <ul>
          <li>
            <a href="#">provide food</a>
          </li>
          <li>
            <a href="#">provide food</a>
          </li>
          <li>
            <a href="#">provide food</a>
          </li>
        </ul>
      </div>

      <div className="main">
        <div className="navbar">
          <div>dashboard</div>

          <div className="search-container">
            <form action="">
              <input type="text" placeholder="Search.." name="search"></input>
              <button type="submit">Search</button>
            </form>
          </div>

          <Button variant="link" onClick={handleLogout}>
            Log Out
          </Button>
        </div>
      </div>
      <div className="main">
        <div className="feed">
          <Post />
          <Post />

          <Post />
        </div>
      </div>
    </div>
  );
}
