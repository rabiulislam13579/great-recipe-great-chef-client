import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle, FaGithub } from 'react-icons/fa';

import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase-config';
import { AuthContext } from '../providers/AuthProvider';



const Login = () => {
    const [error,setError]=useState('');
    const [success , setSuccess]=useState('');

    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'


    const handleGoogleLogin = () => {
       
        setError('');
        setSuccess('');
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })
                setSuccess('log in successfully')

            }).catch((error) => {
                setError (error.message)
                
            });

    }

    const handleGithubLogin = () => {
        setError('');
        setSuccess('');
        signInWithPopup(auth, githubProvider)
            .then((result) => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })
                setSuccess('log in successfully')
            }).catch((error) => {
                setError (error.message)
            });
    }

    const { signIn } = useContext(AuthContext);

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;

        setError('');
        setSuccess('');
        signIn(email, password)
            .then(result => {
                const signInnedUser = result.user;
                console.log(signInnedUser);
                navigate(from, { replace: true })
                form.reset()
                setSuccess('log in successfully')
            })
            .catch(error => {
                setError (error.message)
            })
    }

    return (
        <Container className='mx-auto,mt-5 w-25'>
            <h2 className='text-success text-center'>Please Log In</h2>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Button variant="success" type="submit">
                    Login
                </Button> <br />

                <Form.Text >
                    Don't have an account? please <Link to='/resister'> Resister</Link>
                </Form.Text>
                <Form.Text className="text-success">
                    {success}

                </Form.Text>
                <Form.Text className="text-danger">
                    {error}

                </Form.Text>
            </Form>
            <Button onClick={handleGoogleLogin} className='my-3' variant="outline-primary"> <FaGoogle /> Login with Google</Button>
            <br />
            <Button onClick={handleGithubLogin} variant="outline-secondary"> <FaGithub></FaGithub> Login with Github</Button>
        </Container>
    );
};

export default Login;