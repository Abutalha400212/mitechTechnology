import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./signup.css";
import { AuthProvider } from "../../../layout/Auth/AuthContext";
import toast from "react-hot-toast";
const Signup = () => {
  const { createUser, updateUserProfile, emailVerification } =
    useContext(AuthProvider);
  const [userInfo, setUserInfo] = useState("");
  const [checked, setChecked] = useState(false);
  const [errors, setError] = useState("");
  //................Handle Submit User Creation.............//
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    if (
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        email
      )
    ) {
      setError("Please enter an valid email");
    } else {
      setError("");
    }
    if (password.length < 8) {
      setError("Password must be minimum 8 characters");
    } else {
      setError("");
    }
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError("");
        toast.success("Sign up Successfully");
        updateProfileInformation(name, photo);
        emailVerification()
          .then(() => {
            toast.success("Verification email has sent");
          })
          .catch((error) => console.error(error));
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  //...................Function Of Update Profile...............//
  const updateProfileInformation = (name, photo) => {
    const profile = {
      displayName: name,
      photoURL: photo,
    };

    updateUserProfile(profile)
      .then(() => {
        toast.success("update profile");
      })
      .catch((error) => console.error(error));
  };

  return (
    <Form onSubmit={handleSignUp} className="signup mt-2">
      <h3 className="fw-bold text-center underline lh-1">
        <span className="fs-2 text-primary">Sign</span>Up
      </h3>
      <Form.Group className="mb-2" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          name="name"
          type="text"
          placeholder="Enter name"
          required
        />
      </Form.Group>
      <Form.Group className="mb-2" controlId="formBasicPhoto">
        <Form.Label>Photo URL</Form.Label>
        <Form.Control
          name="photo"
          type="text"
          placeholder="Enter Photo Link"
          required
        />
      </Form.Group>
      <Form.Group className="mb-2" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          name="email"
          type="email"
          placeholder="Enter email"
          required
        />
      </Form.Group>
      <Form.Group className="mb-2" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-2" controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          onClick={(e) => setChecked(e.target.checked)}
          label={
            <>
              Accept <Link to="/terms">Terms and conditions</Link>
            </>
          }
        />
      </Form.Group>
      {errors && <p className="wrong text-danger">{errors}</p>}
      <Form.Text className="text-muted">
        Already have an accout? <Link to="/login">Login</Link>
      </Form.Text>{" "}
      <br />
      <Button disabled={!checked} variant="primary" type="submit">
        Sign Up
      </Button>
    </Form>
  );
};
export default Signup;
