import React from 'react';
import { Blur, LRPopupWrap,SignInBtn, RegisterForm, Label, Input, RegisterBtn,SeparateDiv,RegisterGoogleBtn } from './LoginRegisterPopupSty';

const LoginRegisterPopup = ({clickBlur}) => {



    
    return(
        <>
        <Blur onClick={clickBlur} ></Blur>
            <LRPopupWrap>

                <SignInBtn>Sign In</SignInBtn>

                <RegisterForm>
                    <h2>Sign Up</h2>
                    <Label htmlFor="username">Username</Label>
                    <Input id="username" type="text" />
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="mail" />
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="text" />
                    <RegisterBtn type="submit">Sign Up</RegisterBtn>
                </RegisterForm>

                <SeparateDiv>
                    <hr />
                    <p>or</p>
                    <hr />
                </SeparateDiv>
                
                <RegisterGoogleBtn>
                    Sign up with Google
                </RegisterGoogleBtn>

            </LRPopupWrap>
        

        </>
    )
}

export default LoginRegisterPopup;