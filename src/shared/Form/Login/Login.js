import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthProvider } from '../../../layout/Auth/AuthContext';
import '../SignUp/signup.css'
const Login = () => {
  const {loginExistUser} = useContext(AuthProvider)



  const handleLoginUser = (e)=>{
e.preventDefault()
const form = e.target
const email = form.email.value
const password = form.password.value
loginExistUser(email,password)
.then(result=>{
  const user = result.user
  form.reset()
  console.log(user) 
})
.catch(error => console.log(error))
  }
    return (
        <Form onSubmit={handleLoginUser} className='w-50 mx-auto mt-2'>
        <h3 className='fw-bold text-center underline'><span className='fs-2 text-primary' >Log</span>In</h3>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name='email' type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name='password' type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      </Form.Group>
      <Form.Text className="text-muted">
          Don't have an account? <Link to='/signup'>SignUp</Link>
        </Form.Text>
        <br />
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
    );
};

export default Login;