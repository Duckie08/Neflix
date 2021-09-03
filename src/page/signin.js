import React, {useState} from 'react';
import { FooterContainer } from '../container/footer';
import { HeaderContainer } from '../container/header';
import { Form } from '../components';

export default function Signin() {
    const [emailAddress, setemailAddress] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState('');
    
    const isInValid = password === '' || emailAddress === '';

    const handleSignin = (event) => {
        event.preventDefault();
         //firebase work here
    }
    //check form input element are valid
    //email and password

    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign In</Form.Title>
                  {error && <Form.Error>{error}</Form.Error>}  
                  <Form.Base onSubmit={handleSignin} method="POST">
                      <Form.Input
                        placeholder="Email Address"
                        value={emailAddress}
                        onChange={({ target }) => setemailAddress(target.value)} />
                      <Form.Input
                        placeholder="Password"
                        autoComplete="off"
                        type="password"
                        value={password}
                        onChange={({ target }) => setPassword(target.value)} />
                        <Form.Submit disabled={isInValid} type="submit">
                            Sign In
                        </Form.Submit>
                        <Form.Text>
                            New to Netflix ? <Form.Link to="/signup">Sign up now.</Form.Link>
                        </Form.Text>
                        <Form.TextSmall>
                            This page is protected by Google reCAPCHA to ensure you are not a bot. Learn more.
                        </Form.TextSmall>
                  </Form.Base>
                </Form>
            </HeaderContainer>
            <FooterContainer />)
        </>
    )
}