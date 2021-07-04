import React from 'react';
import styled from 'styled-components';
import {primary, secondary, fontGrey, fontWhite, fontWaring, fontYellow} from '../../public_component/globalStyle';


const Blur = styled.div`
    width:1200px;
    height:1200px;
    background:rgba(0,0,0,0.73);
    position:fixed;
    z-index:2;
`

const LRPopupWrap = styled.div`
    display:flex;
    flex-direction:column;
    background:${secondary};
    padding:16px 32px;
    width:336px;
    border-radius:10px;
    position:relative;
`

const SignInBtn = styled.button`
    position:absolute;
    color:${fontYellow};
    font-size:16px;
    top:30px;
    right:20px;
    // cursor:pointer;
`

const RegisterForm = styled.form`
    display:flex;
    flex-direction:column;

    h2{
        font-size:24px;
        color:${fontWhite};
        margin-bottom:40px;
    }
`

const Label = styled.label`
    color:${fontWhite};
    margin-bottom:12px;
`

const Input = styled.input`
    width:276px;
    height:40px;
    color:${fontWhite};
    padding-inline-start:10px;
    margin-bottom:32px;
    background:rgba(0,0,0,0);
    border:2px solid ${fontGrey};
    border-radius:10px;

    :focus{
        border:2px solid ${primary};
    }

    :hover{
        border:2px solid ${primary};
    }
`

const RegisterBtn = styled.button`
    width:276px;
    height:40px;
    font-size:16px;
    color:${fontWhite};
    background:${primary};
    border-radius:10px;
    margin-bottom:48px;

`

const SeparateDiv = styled.div`
    color:${fontWhite};
    width:276px;
    display:flex;
    justify-content:space-around;
    align-items:center;
    margin-bottom:40px;

    hr{
        width:92px;
        height:1px;
    }
`

const RegisterGoogleBtn = styled.button`
    width:276px;
    height:40px;
    color:${fontGrey};
    border:2px solid ${fontGrey};
    border-radius:10px;
`

const LoginRegisterPopup = () => {
    
    return(
        <>
        <Blur>
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
        </Blur>

        </>
    )
}

export default LoginRegisterPopup;