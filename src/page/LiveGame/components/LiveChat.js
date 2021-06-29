import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import iconSend from '../../../images/icon/send.png';
import db from '../../../firebase/firestore';
import {primary, fontGrey, fontWhite, fontWaring} from '../../../public_component/globalStyle';

const LiveChatWrap = styled.div`
    display:flex;
    min-width:100%;
    height:460px;
    justify-content:space-around;
    color:#fff;
`

const StreamDiv = styled.div`
    width:800px;
    border:1px solid yellow;
`

const ChatDiv = styled.div`
    width:380px;
    border:4px solid #5C2088;


`

const ChatTitle = styled.div`
    background:#5c2088;
    height:40px;
    text-align:center;
    vertical-align:middle;
    line-height:40px;
    color:rgb(173,173,173)
`

const ChatSpace = styled.div`
    background:rgb(38,4,64);
    height:320px;
    border-bottom:4px solid #5C2088;
    padding:16px;
    overflow:scroll;
    overflow-x:hidden;
    word-wrap:normal;

    -webkit-scrollbar-thumb{  //need fix not working
        -webkit-box-shadow:inset 0 0 6px ${primary}
    }
`

const ChatType = styled.form`
    display:flex;
    padding:8px 16px;
    
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

const Li = styled.li`
    color:${fontGrey};
    margin-bottom:8px;
    line-height:1.3em;
`
const LeftDiv = styled.div`
    margin-right:24px;
`

const ChatInput = styled.input`
    // opacity:1;
    // border:none;
    // border-bottom:1px solid #ccc;
    width:300px;
    height:30px;
    outline:0;
    border-width:0 0 2px;
    background:rgba(1,1,1,0);
    color:#fff;
    margin-bottom:8px;


    :focus{
        border:1px solid #A849ED;
        
    }

`

const LimitP = styled.p`
    font-size:8px;
    color:${props => props.color || fontGrey};
`

const SendBtn = styled.button`

    :hover{
        transform:scale(1.3)
    }
`

const LiveChat = () => {

    const [allMessages, setAllMessages] = useState([])
    const [newMessage, setNewMessage] = useState({
        text:'',
        username:'',
        key:'',
        team:'',
        timestamp:''  //Date.now()
    })
    const [wordLimitColor, setWordLimitColor] = useState('')

    const chat_user = document.getElementById('chat_user');
    const chat_input = document.getElementById('chat_input');
    const send_btn = document.getElementById('send_btn');
    const board = document.getElementById('showMessage');

    // show first entry message board & listener send
    useEffect(()=>{
        const texts = []
        db.collection('chat_room/WePlay_0614_PSGLGD/messages').orderBy('timestamp','asc').get().then(res => {
            res.forEach(message => {
                if(message.data().text){
                    texts.push({
                        username: message.data().username,
                        text: message.data().text,
                        key:message.data().timestamp, // need fix uid
                        team:message.data().user_team
                    })
                }
            })
            setAllMessages(texts)
        })
    }
    ,[])

    // listen new message
    const onTypeEvent = e => { 

        if(e.target.value.length > 5){
            setWordLimitColor(fontWaring)
            // console.log(limitColor)
            return
        };

        setWordLimitColor('');

        setNewMessage({
            username: 'Raiybow', // need fix
            text: e.target.value,
            key:Date.now(), // need fix uid
            team:'', // need fix
            timestamp:Date.now()
        })

    }


    // send new message
    const onSendNew = e => {
        e.preventDefault()
        if(!newMessage.text) {return alert('空白個屁')}
        db.collection('chat_room/WePlay_0614_PSGLGD/messages').add(newMessage)
        .then(()=>{
            chat_input.value = '';
            const allTexts = [...allMessages, newMessage]
            setAllMessages(allTexts)
            setNewMessage({
                text:'',
                username:'',
                key:'',
                team:'',
                timestamp:''
            })
        })
        .catch(err => console.error(err))
    }



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
                                    <Li key={list.key}>{list.username}：{list.text}</Li>
                                )
                            ) : <li>還沒有人發言呢！趕緊成為第一個留言者！</li>
                        }
                    </ul>
                </ChatSpace>

                <ChatType onSubmit={onSendNew}>
                    <LeftDiv>
                        <p id="chat_user">Username</p>
                    
                        <ChatInput 
                            id="chat_input" 
                            onChange={e => onTypeEvent(e)}
                            value={newMessage.text}
                            type="text" 
                            placeholder="Write a message..." />
                        <LimitP color={wordLimitColor}>( limit 100 words )</LimitP>
                    </LeftDiv>
                    <SendBtn type="submit"><img id="send_btn"  src={iconSend} alt="send" /></SendBtn>
                </ChatType>

            </ChatDiv>

        </LiveChatWrap>
    )
}

export default LiveChat;