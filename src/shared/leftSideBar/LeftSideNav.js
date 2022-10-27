import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./left.css";
import { Button, ListGroup } from "react-bootstrap";
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
      {category.map((e) => (
        <Link key={e.id} to={`/discover/${e.id}`} className='link-style'>
          <ListGroup>
            <Button id="button"  className={`mb-2`} variant="outline-primary">
              {e.name}
            </Button>
          </ListGroup>
        </Link>
      ))}
    </div>
  );
};

export default LeftSideNav;
