import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import iconSend from '../../../images/icon/send.png';
import db from '../../../firebase/firestore';
import logo from '../../../images/team_logo/LGD.png';
import minimize from '../../../images/icon/minimize.png';
import {primary, fontGrey, fontWhite, fontWaring} from '../../../public_component/globalStyle';

const LiveChatWrap = styled.div`
    display:flex;
    flex-direction:column;
    min-width:100%;
    justify-content:space-around;
    color:#fff;

    @media (max-width:1199px){
        height:auto;
    }

    @media (max-width:699px) and (min-width:360px){
        margin-bottom:20px;
    }
`
const StreamSelectDiv = styled.div`
    :first-child{
        margin-left:100px;
    }

    .block{
        color:#fff;
        background:${primary};
        transform:none;
    }

    @media (max-width:699px){
        :first-child{
            margin-left:30%;
        }

    }
`

const StreamSelectBtn = styled.button`
    width:120px;
    height:48px;
    font-size:16px;
    margin-bottom:20px;
    margin-right:20px;
    border:1px solid ${primary};
    border-radius:5px;
    color:${primary};
    cursor:pointer;

    :hover{
        transform:scale(1.1);
    }

    :focus{
        color:#fff;
        background:${primary};
        transform:none;
    }

    @media (max-width:699px){
        width:60px;
        height:36px;
        font-size:12px;
    }
`

const StreamChatWrap = styled.div`
    display:flex;
    justify-content:space-around;

    @media (max-width:1199px) {
        flex-direction:column;
        align-items:center;
    }

    @media (max-width:699px) and (min-width:360px){
        width:98%;

    }
`

const StreamDiv = styled.div`
    width:800px;
    height:468px;
    border:1px solid yellow;

    @media (max-width:1199px) and (min-width:700px){
        width:680px;
        height:360px;
        margin-bottom:20px;
    }

    @media (max-width:699px) and (min-width:360px){
        width:360px;
        height:240px;
        margin-bottom:20px;
    }
`

const Iframe = styled.iframe`
    // display:none;
`

const ChatDiv = styled.div`
    width:380px;

    @media (max-width:699px){
        width:95%;
    }
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

    @media (max-width:699px){
        font-size:14px;
    }
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

    @media (max-width:699px){
        width:16px;
        height:16px;
    }

`

const ChatSpace = styled.div`
    background:rgb(38,4,64);
    height:320px;
    border:4px solid #5C2088;
    border-top:none;
    padding:8px 20px;
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

    @media (max-width:699px){
        font-size:12px;
    }
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
    const [showStream, setShowStream] = useState(
        {
            youtube:'none',
            twitch:'block',
            huya:'none'
        }
    ) 

    const dbChatRoomPath = 'chat_room/WePlay_0614_PSGLGD/messages';

    const onChangeStream = (e) => {

        switch(e.target.id){
            case 'twitch':
                setShowStream({youtube:'none',twitch:'block',huya:'none'});
                break;
            case 'huya':
                setShowStream({youtube:'none',twitch:'none',huya:'block'});
                break;
            case 'youtube':
                setShowStream({youtube:'block',twitch:'none',huya:'none'});
                break;    
        }
    }
    const updateChatMes = () => {
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

    return (
        <LiveChatWrap>

            <StreamSelectDiv onClick={e=>onChangeStream(e)}>
                <StreamSelectBtn id="twitch" className={showStream.twitch} selected={showStream.twitch}>English
                </StreamSelectBtn>
                <StreamSelectBtn id="huya" className={showStream.huya} selected={showStream.huya}>Chinese
                </StreamSelectBtn>
            </StreamSelectDiv>

            <StreamChatWrap>
                <StreamDiv>
                    {/* youtube */}
                    {/* <iframe width="100%" height="100%"  display={showStream.youtube}
                    src="https://www.youtube.com/embed/RFHj_vjVxqM" allowfullscreen="true" allow="fullscreen" >
                    </iframe> */}

                    {/* twitch */}
                    <iframe  style={{display:`${showStream.twitch}`}}
                    frameborder="0"  allow="fullscreen" scrolling="no" width="100%" height="100%" 
                    src="https://player.twitch.tv/?channel=beyondthesummit&amp;parent=localhost&amp;autoplay=false"></iframe>

                    {/* huya */}
                    {/* <Iframe width="100%" height="100%"  frameborder="0" scrolling="no" style={{
                        display:`${showStream.huya}`}}
                    src="http://liveshare.huya.com/iframe/825801"></Iframe> */}
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
            </StreamChatWrap>               
        </LiveChatWrap>
    )
}

export default LiveChat;