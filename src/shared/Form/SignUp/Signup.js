import React, {  useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./signup.css";
import { AuthProvider } from "../../../layout/Auth/AuthContext";
import toast from 'react-hot-toast';
const Signup = () => {
  const { createUser, updateUserProfile,emailVerification } = useContext(AuthProvider);
  const [userInfo, setUserInfo] = useState({
    name: "",
    photo: "",
    email: "",
    password: ""
  });
  const [checked,setChecked] = useState(false)

  const [errors, setError] = useState({
    email: "",
    password: "",
    main:""
  });
  const handleUserEmail = (e) => {
    const email = e.target.value
    if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
      setError({...errors,email:'Please enter an valid email'})
      setUserInfo({ ...userInfo, email: e.target.value });
    }
    else{
      setError({...errors,email:''})
      setUserInfo({ ...userInfo, email: e.target.value });

    }
    
  };

  const handleUserPassword = (e) => {
    const password = e.target.value;

    if (password.length < 8) {
      setError({...errors, password: 'Password must be minimum 8 characters'})
      setUserInfo({ ...userInfo, password: e.target.value });
    }
    else{
      setError({...errors,password:''})
      setUserInfo({ ...userInfo, password: e.target.value });
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    createUser(userInfo.email, userInfo.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset()
       updateProfileInformation(userInfo.name,userInfo.photo)
       
       .then(()=>{
        form.reset()
        toast.success('Profile update')
        emailVerification()
        .then(()=> toast.success('Verification email has sent'))
        .catch(error => console.log(error))
       })
       .catch(error =>console.log(error) )
      })
      .catch((error) => {
        setError({...errors , main: error.message})
        
      });
  };
  const updateProfileInformation =(name,photo)=>{
    const profile = {
        displayName:name,
        photoURL:photo
    }
    updateUserProfile(profile)

  }

  return (
    <Form  onSubmit={handleSignUp} className="signup">
      <h3 className="fw-bold text-center underline lh-1">
        <span className="fs-2 text-primary">Sign</span>Up
      </h3>
      <Form.Group className="mb-2" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
          value={userInfo.name}
          type="text"
          placeholder="Enter name"
          required
        />
      </Form.Group>
      <Form.Group className="mb-2" controlId="formBasicPhoto">
        <Form.Label>Photo URL</Form.Label>
        <Form.Control
          onChange={(e) => setUserInfo({ ...userInfo, photo: e.target.value })}
          value={userInfo.photo}
          type="text"
          placeholder="Enter Photo Link"
          required
        />
      </Form.Group>
      <Form.Group className="mb-2" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          onChange={handleUserEmail}
          type="email"
          placeholder="Enter email"
          required
        />
      </Form.Group>
      {errors.email && <p className="wrong text-danger">{errors.email}</p>}
      <Form.Group className="mb-2" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          onChange={handleUserPassword}
          type="password"
          placeholder="Password"
        />
      </Form.Group>
      {errors.password && <p className="wrong text-danger">{errors.password}</p>}
      <Form.Group className="mb-2" controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          onClick={(e)=>setChecked(e.target.checked)}
          label={
            <>
              Accept <Link to="/terms">Terms and conditions</Link>
            </>
          }
        />
      </Form.Group>
      {errors.main && <p className="wrong text-danger">{errors.main}</p>}
      <Form.Text className="text-muted">
        Already have an accout? <Link to="/login">Login</Link>
      </Form.Text>{" "}
      <br />
      <Button disabled={!checked}  variant="primary" type="submit">
        Sign Up
      </Button>
    </Form>
  );
};

export default Signup;
