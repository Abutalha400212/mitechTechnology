import React, { useContext } from "react";
import { Card, Image } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { AuthProvider } from "../../layout/Auth/AuthContext";
import "./Profile.css";
const Profile = () => {
  const { user } = useContext(AuthProvider);
  return (
    <div className="profileCard">
        <Card className="text-center bg-primary ">
      <Image thumbnail className="photo" variant="top" src={ user.photoURL} />
      <Card.Body>
        <Card.Title>{user.displayName}</Card.Title>
        <Card.Text>
          <p><small>Email:{user.email}</small></p>
          <p><small>UserId:{user.uid}</small></p>
          <p><small>Email Verification:{user.emailVerified ? 'Verified' :'Not Verified'}</small></p>
        </Card.Text>
      </Card.Body>
      <div className="d-flex justify-content-center mb-2">
        <FaFacebook className="fa"/>
        <FaTwitter className="mx-4 fa"/>
        <FaLinkedin className="fa"/>
        <FaInstagram className="ms-4 fa"/>
      </div>
    </Card>
    </div>
  );
};

export default Profile;
