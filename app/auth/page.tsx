"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from "../../db/firebase_init";

// import {Container, Row, Col, Button, Form, FormGroup, Label, Input, Alert} from 'reactstrap';

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [passwordOne, setPasswordOne] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");
  const router = useRouter();
  const [error, setError] = useState(null);

  const onSubmitFunc = (event: any) => {
    event.preventDefault()
    setError(null);
    //check if passwords match. If they do, create user in Firebase
    // and redirect to your logged in page.
    if (passwordOne === passwordTwo)
      createUserWithEmailAndPassword(auth, email, passwordOne)
        .then((authUser) => {
          console.log("Success. The user is created in Firebase");
          router.push("/");
        })
        .catch((error) => {
          // An error occurred. Set error message to be displayed to user
          setError(error.message);
        });
    // setError("Password do not match")
    else event.preventDefault();
  };

  return (
    <div className="text-center custom-container">
      <div>
        <div>
          <form className="custom-form" onSubmit={onSubmitFunc}>
            {error && <div color="danger">{error}</div>}
            <div>
              <div>Email</div>
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  name="email"
                  id="signUpEmail"
                  placeholder="Email"
                />
              </div>
            </div>
            <div>
              <div>Password</div>
              <div>
                <input
                  type="password"
                  name="passwordOne"
                  value={passwordOne}
                  onChange={(event) => setPasswordOne(event.target.value)}
                  id="signUpPassword"
                  placeholder="Password"
                />
              </div>
            </div>
            <div>
              <div>Confirm Password</div>
              <div>
                <input
                  type="password"
                  name="password"
                  value={passwordTwo}
                  onChange={(event) => setPasswordTwo(event.target.value)}
                  id="signUpPassword2"
                  placeholder="Password"
                />
              </div>
            </div>
            <div>
              <div>
                <button>Sign Up</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
