import React, {useState, useEffect} from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import db from '../../firebase/firestore';
import { Blur, LRPopupWrap,SignInBtn, RegisterForm, Label, Input, RegisterBtn,SeparateDiv,RegisterGoogleBtn } from './css/LoginRegisterPopupSty';

const LoginRegisterPopup = ({clickBlur}) => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const insertToMember = (uid) => {
        db.collection('member').doc(uid).set({
            uid:uid,
            email:email,
            username:username,
            nickname:username,
            user_option:{
                user_subscribe:false,
                user_team:'',
                user_tour:[]
            }
        },{merge:true}).then(()=>{
            alert('註冊成功')
        })
        .catch(err=>console.log(err));
    }

    const onRegister = e => {
        e.preventDefault();
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential)=>{
            const user = userCredential.user;
            insertToMember(user.uid)
        })
        .catch(err=>console.log(err));
    }

    const onRegisterWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(res=>{
            const credential = res.credential;
            const token = credential.accessToken;
            const user = res.user; // uid here

            insertToMember(user.uid)

            console.log(user)
            console.log(credential)
            console.log(token)

        })
        .catch(err=>console.log(err));
    }


    
    return(
        <>
        <Blur onClick={clickBlur} ></Blur>
            <LRPopupWrap>

                <SignInBtn>Sign In</SignInBtn>

                <RegisterForm onSubmit={onRegister}>
                    <h2>Sign Up</h2>
                    <Label htmlFor="username">Username</Label>
                    <Input 
                    id="username" type="text" 
                    onChange={e=>setUsername(e.target.value)} 
                    value={username}/>

                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="mail" 
                    onChange={e=>setEmail(e.target.value)} 
                    value={email}/>

                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="text" 
                    onChange={e=>setPassword(e.target.value)} 
                    value={password}/>
                    
                    <RegisterBtn type="submit">Sign Up</RegisterBtn>
                </RegisterForm>

                <SeparateDiv>
                    <hr />
                    <p>or</p>
                    <hr />
                </SeparateDiv>
                
                <RegisterGoogleBtn onClick={onRegisterWithGoogle}>
                    Sign up with Google
                </RegisterGoogleBtn>

            </LRPopupWrap>
        

        </>
    )
}

export default LoginRegisterPopup;