import React from 'react';
import './Blog.css'
const Blog = () => {
    return (
        <div className='blog'>
            <div>
                <h5>Question no-1: what is cors?</h5>
                <p><small>Cross-origin resource sharing (CORS) is a browser security feature that restricts cross-origin HTTP requests that are initiated from scripts running in the browser. If your REST API's resources receive non-simple cross-origin HTTP requests, you need to enable CORS support.</small></p>
            </div>
            <div>
                <h5>Question no-2:Why are you using firebase? What other options do you have to implement authentication?</h5>
                <p><small>
                The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience. <br />
                    Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.</small></p>
            </div>
            <div>
                <h5>Question no-3: How does the private route work?</h5>
                <p><small>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in)</small></p>
            </div>
            <div>
                <h5>Question no-4: What is Node? How does Node work?</h5>
                <p><small>As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications.
                    <br />
                    It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</small></p>
            </div>
        </div>
    );
};

export default Blog;