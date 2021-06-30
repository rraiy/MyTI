import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import iconSend from '../../../images/icon/send.png';
import db from '../../../firebase/firestore';
import logo from '../../../images/team_logo/LGD.png';
import minimize from '../../../images/icon/minimize.png';
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

`

const ChatTitle = styled.div`
    position:relative;
    background:#5c2088;
    height:40px;
    text-align:center;
    vertical-align:middle;
    line-height:40px;
    color:${fontGrey};
    font-size:18px;
`

const MiniI = styled.img`
    width:20px;
    height:20px;
    position:absolute;
    top:10px;
    right:16px;

    :hover{
        background:#fff;
    }
`

const ChatSpace = styled.div`
    background:rgb(38,4,64);
    height:320px;
    border:4px solid #5C2088;
    border-top:none;
    padding:16px;
    overflow:scroll;
    overflow-x:hidden;
    word-wrap:normal;
    display:${props=>props.hide};

    -webkit-scrollbar-thumb{  //need fix not working
        -webkit-box-shadow:inset 0 0 6px ${primary}
    }
`

const ChatType = styled.form`
    display:${props=>props.hide};
    padding:8px 16px;
    border:4px solid #5C2088;
    border-top:none;
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

    img{
        
    }
    // &:hover{
    //     transform:scale(1.3)
    // }
`

const SendImg = styled.img`
    opacity:${props => props.disabled ? '0.2':'1'}
`


const LiveChat = () => {

    const [allMessages, setAllMessages] = useState([]);
    const [newMessage, setNewMessage] = useState({
        text:'',
        username:'',
        key:'',
        team:logo,
        timestamp:0  //Date.now()
    });
    const [wordLimitColor, setWordLimitColor] = useState('');
    const [sendIconDisabled, setSendIconDisabled] = useState(true);
    const [chatHide, setChatHide] = useState('flex');

    const chat_user = document.getElementById('chat_user');
    const chat_input = document.getElementById('chat_input');
    const send_btn = document.getElementById('send_btn');
    const board = document.getElementById('showMessage');
    const dbChatRoomPath = 'chat_room/WePlay_0614_PSGLGD/messages';

    const updateChatMes = () =>{
        const texts = []
        db.collection(dbChatRoomPath).orderBy('timestamp','asc').get().then(res => {
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

    const onMinimize = () => {
        chatHide === 'flex' ? setChatHide('none'):setChatHide('flex')
    }

    // show first entry message board & listener send
    useEffect(()=>{
        
        updateChatMes();

        const listenMessage = db.collection(dbChatRoomPath)
        .onSnapshot(snapshot => {
                snapshot.docChanges().forEach(item => {
                if (item.type === "added"){
                    updateChatMes();
                }
            })
        })

        
        return () => listenMessage.unsubscribe()
    },[])

    // listen new message
    const onTypeEvent = e => { 
        if(e.target.value.length > 100){
            setWordLimitColor(fontWaring)
            // console.log(limitColor)
            return
        }
        setWordLimitColor('');

        setNewMessage({
            username: 'Raiybow', // need fix
            text: e.target.value,
            key:Date.now(), // need fix uid
            team:'', // need fix
            timestamp:parseInt(Date.now())
        })
        setSendIconDisabled(false)   
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

    console.log(allMessages.team)

    return (
        <LiveChatWrap>

            <StreamDiv>
                {/* <iframe width="100%" height="100%" src="https://www.youtube.com/embed/RFHj_vjVxqM" >
                    
                </iframe> */}
                {/* <iframe src="https://player.twitch.tv/?channel=moonstudio_en" frameborder="0" allowfullscreen="true" allow="autoplay; fullscreen" scrolling="no" width="100%" height="100%"></iframe> */}
            </StreamDiv>

            <ChatDiv>
                
                <ChatTitle>
                    <p>Chat Room</p> 
                    <MiniI src={minimize} alt="minimize" onClick={onMinimize} />
                </ChatTitle>

                <ChatSpace id="showMessage" hide={chatHide} >
                    <ul>
                        {
                            allMessages ?
                            allMessages.map(list => 
                                (
                                    <Li key={list.key}>
                                        <img src={list.team} alt="" />
                                        {list.username}：{list.text}{list.team}</Li>
                                )
                            ) : <li>還沒有人發言呢！趕緊成為第一個留言者！</li>
                        }
                    </ul>
                </ChatSpace>

                <ChatType onSubmit={onSendNew} hide={chatHide}>
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
                    <SendBtn type="submit" >
                        <SendImg id="send_btn" disabled={sendIconDisabled} src={iconSend}  alt="send" />
                    </SendBtn>
                </ChatType>

            </ChatDiv>

        </LiveChatWrap>
    )
}

export default LiveChat;