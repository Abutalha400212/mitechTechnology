import React, { useEffect, useState } from "react";
import { Card, ListGroup } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./left.css";
import { Button } from "react-bootstrap";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
} from "react-icons/fa";
const LeftSideNav = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/tech")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);
  return (
    <div>
      <h3 className="fw-bold ms-1">Discovers</h3>
      <Card style={{ width: "18rem" }}>
        <ListGroup variant="flush">
          {category.map((e) => (
            <ListGroup.Item key={e.id}>
              <NavLink
                className={`link-style ${({ isActive }) =>
                  isActive ? "text-white" : undefined}}`}
                to={`/courses/${e.id}`}
              >
                {e.name}
              </NavLink>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card>
      <Card style={{ width: "18rem" }} className='mt-3'>
        <ListGroup variant="flush">
         <Button className="mb-2" variant="outline-primary">
          {" "}
          <FaGoogle></FaGoogle> Login with Google
        </Button>
         <Button className="mb-2" variant="outline-success">
          {" "}
          <FaFacebook></FaFacebook> Login with Facebook
        </Button>
        <Button variant="outline-dark">
          {" "}
          <FaGithub></FaGithub> Login with Github
        </Button>
        </ListGroup>
      </Card>
    </div>
  );
};

export default LeftSideNav;
