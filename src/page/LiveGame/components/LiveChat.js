import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import iconSend from '../../../images/icon/send.png';
import db from '../../../firebase/firestore';

const LiveChatWrap = styled.div`
    display:flex;
    width:1200px;
    height:460px;
    justify-content:space-around;
    color:#fff;
`

const StreamDiv = styled.div`
    width:840px;
    border:1px solid yellow;
`

const ChatDiv = styled.div`
    width:340px;
    border:4px solid #5C2088;


`

const ChatTitle = styled.div`
    background:#5c2088;
    height:48px;
    text-align:center;
    vertical-align:middle;
    line-height:48px;
    color:rgb(173,173,173)
`

const ChatSpace = styled.div`
    background:rgb(38,4,64);
    height:320px;
    border-bottom:4px solid #5C2088;
    padding:8px;
`

const ChatType = styled.div`

    padding:8px;

    p{
        margin-bottom:8px;
    };

    img{
        width:20px;
        
    }

`
// const TeamLogo = styled.img`
//     width:40px;
//     margin-right:8px;
// `

const ChatInput = styled.input`
    // opacity:1;
    // border:none;
    // border-bottom:1px solid #ccc;
    width:250px;
    height:40px;
    margin-right:20px;
    outline:0;
    border-width:0 0 2px;
    background:rgba(1,1,1,0);
    color:#fff;


    :focus{
        border:1px solid #A849ED;
        
    }

    
`

const LiveChat = () => {

    const [allMessages, setAllMessages] = useState([])
    /* allMessage = {
        text:'',
        username:'',
        key:timestamp+uid
        team:''
    } */

    const chat_user = document.getElementById('chat_user');
    const chat_input = document.getElementById('chat_input');
    const send_btn = document.getElementById('send_btn');
    const board = document.getElementById('showMessage');

    // show first entry message board
    useEffect(()=>{
        const texts = []
        db.collection('chat_room/WePlay_0614_PSGLGD/messages').get().then(res => {
            res.forEach(message => {
                
                texts.push({
                    username: message.data().username,
                    text: message.data().text,
                    key:message.data().timestamp+message.data().uid,
                    team:message.data().user_team
                })
            })
            setAllMessages(texts)
        })
    }
    ,[])


    return (
        <LiveChatWrap>

            <StreamDiv>
                Stream
            </StreamDiv>

            <ChatDiv>
                
                <ChatTitle>Chat room</ChatTitle>
                <ChatSpace id="showMessage" >
                    <ul>
                        {
                            allMessages ?
                            allMessages.map(list => 
                                (
                                    <li key={list.key}>{list.username}:{list.text}</li>
                                )
                            ) : <li>成為第一個留言者！</li>
                        }
                    </ul>
                </ChatSpace>
                <ChatType>
                    <p id="chat_user">Username</p>
                    <ChatInput id="chat_input" type="text" placeholder="Write a message..." />
                    <img id="send_btn"  src={iconSend} alt="send" />
                </ChatType>

            </ChatDiv>

        </LiveChatWrap>
    )
}

export default LiveChat;