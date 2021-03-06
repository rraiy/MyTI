import React, { useState, useEffect, useRef, useCallback } from 'react';
import iconSend from '../../../images/icon/send.png';
import { db } from '../../../firebase/firestore';
import logo from '../../../images/team_logo/LGD.png';
import minimize from '../../../images/icon/minimize.png';
import closeI from '../../../images/icon/close.png';
import {
  LiveChatWrap,
  StreamSelectDiv,
  StreamSelectBtn,
  StreamChatWrap,
  StreamDiv,
  ChatDiv,
  ChatTitle,
  MiniI,
  ChatSpace,
  ChatType,
  Li,
  LeftDiv,
  ChatInput,
  LimitP,
  SendBtn,
  SendImg,
  StreamFrameDiv,
  StreamDragLayer,
  UserLogoNameDiv,
} from './css/LiveChatSty';

const dbChatRoomPath = 'chat_room/WePlay_0614_PSGLGD/messages';
const channelDefault = {
  youtube: 'none',
  twitch: 'block',
  huya: 'none',
};

const test123 = '456';

const LiveChat = ({ isSigned, user, userTeamLogo }) => {
  const [allMessages, setAllMessages] = useState([]);
  const [newMessage, setNewMessage] = useState({
    text: '',
    username: user,
    key: '',
    team: userTeamLogo,
    timestamp: 0,
  });
  const [wordLimitColor, setWordLimitColor] = useState('');
  const [sendIconDisabled, setSendIconDisabled] = useState(true);
  const [chatHide, setChatHide] = useState(false);
  const [showStream, setShowStream] = useState(channelDefault);
  const [smallMod, setSmallMod] = useState(false);
  const [stopSmallMod, setStopSmallMod] = useState(false);

  const streamRef = useRef();

  const isDragging = useRef(false);
  const dragRef = useRef();
  const [dragPosition, setDragPosition] = useState(false);

  const onChangeChannel = (channel) => {
    switch (channel) {
      case 'twitch':
        setShowStream({ youtube: 'none', twitch: 'block', huya: 'none' });
        break;
      case 'huya':
        setShowStream({ youtube: 'none', twitch: 'none', huya: 'block' });
        break;
      case 'youtube':
        setShowStream({ youtube: 'block', twitch: 'none', huya: 'none' });
        break;
      default:
    }
  };

  console.log(test123);
  const updateChatMes = () => {
    const texts = [];
    db.collection(dbChatRoomPath)
      .orderBy('timestamp', 'asc')
      .limit(30)
      .get()
      .then((res) => {
        res.forEach((message) => {
          if (message.data().text) {
            texts.push({
              username: message.data().username,
              text: message.data().text,
              key: message.data().timestamp, // need fix uid
              team: message.data().team,
            });
          }
        });

        setAllMessages(texts);
      });
  };

  const onMinimize = () => {
    setChatHide(!chatHide);
  };

  const switchToMod = () => {
    if (streamRef) {
      if (streamRef.current.getBoundingClientRect().bottom < 150) {
        setSmallMod(true);
      }
      if (streamRef.current.getBoundingClientRect().bottom >= 150) {
        setSmallMod(false);
        setDragPosition(false);
        setStopSmallMod(false);
      }
    }
  };

  // deal stream drag
  const onMouseDown = useCallback((e) => {
    if (dragRef.current && dragRef.current.contains(e.target)) {
      isDragging.current = true;
      setDragPosition(true);
    }
  }, []);

  const onMouseUp = useCallback(() => {
    if (isDragging.current) {
      isDragging.current = false;
    }
  }, []);

  const onMouseMove = useCallback((e) => {
    const x = e.clientX;
    const y = e.clientY;
    if (isDragging.current) {
      dragRef.current.style.top = `${y + 5}px`;
      dragRef.current.style.left = `${x + 5}px`;
    }
  }, []);

  // listen new message
  const onTypeEvent = (e) => {
    if (e.target.value.length > 100) {
      setWordLimitColor('red');
      return;
    }
    setWordLimitColor('');

    setNewMessage({
      username: user,
      text: e.target.value,
      key: user + Date.now(),
      team: userTeamLogo,
      timestamp: parseInt(Date.now(), 10),
    });
    setSendIconDisabled(false);
  };

  // send new message
  const onSendNew = (e) => {
    e.preventDefault();
    if (!newMessage.text) {
      // eslint-disable-next-line no-alert
      return alert('????????????'); // bug fix use alert
    }
    return db
      .collection('chat_room/WePlay_0614_PSGLGD/messages')
      .add(newMessage)
      .then(() => {
        const allTexts = [...allMessages, newMessage];
        setAllMessages(allTexts);
        setNewMessage({
          text: '',
          username: user,
          key: '',
          team: userTeamLogo,
          timestamp: '',
        });
      })
      .catch((err) => console.error(err));
  };

  const getStreamFrameDivClass = () => {
    if (stopSmallMod) {
      return '';
    }
    if (smallMod && dragPosition) {
      return 'mod-small mod-drag';
    }
    if (smallMod) {
      return 'mod-small';
    }
    return '';
  };

  // show first entry message board & listener send
  useEffect(() => {
    updateChatMes();

    const unsubscribe = db.collection(dbChatRoomPath).onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((item) => {
        if (item.type === 'added') {
          updateChatMes();
        }
      });
    });

    window.addEventListener('scroll', switchToMod);

    return () => {
      window.removeEventListener('scroll', switchToMod);
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (dragPosition) {
      isDragging.current = true;
    }
  }, [dragPosition]);

  useEffect(() => {
    switchToMod();
  }, [stopSmallMod]);

  useEffect(() => {
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mousemove', onMouseMove);

    return () => {
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mousemove', onMouseMove);
    };
  }, [onMouseDown, onMouseUp, onMouseMove]);

  return (
    <LiveChatWrap>
      <StreamSelectDiv onClick={(e) => onChangeChannel(e.target.id)}>
        <StreamSelectBtn id="twitch" className={showStream.twitch} selected={showStream.twitch}>
          English
        </StreamSelectBtn>
        <StreamSelectBtn id="huya" className={showStream.huya} selected={showStream.huya}>
          Chinese
        </StreamSelectBtn>
      </StreamSelectDiv>

      <StreamChatWrap>
        <StreamDiv ref={streamRef} dragPosition={dragPosition || 0} bigger={chatHide}>
          <StreamFrameDiv className={getStreamFrameDivClass()} ref={dragRef} mod={smallMod}>
            <StreamDragLayer mod={smallMod}>
              <p>drag video here</p>
              <img src={closeI} alt="close" onClick={() => setStopSmallMod(true)} />
            </StreamDragLayer>
            {/* twitch */}
            <iframe
              title="twitch"
              style={{ display: `${showStream.twitch}` }}
              frameBorder="0"
              allow="fullscreen"
              scrolling="no"
              width="100%"
              height="100%"
              src="https://player.twitch.tv/?channel=beyondthesummit&amp;parent=myti-171bb.web.app&amp;autoplay=false"
            />

            {/* huya */}
            <div style={{ display: `${showStream.huya}` }}>Coming Soon</div>
            {/* <Iframe width="100%" height="100%"  frameborder="0" scrolling="no" style={{
                        display:`${showStream.huya}`}}
                    src="http://liveshare.huya.com/iframe/825801"></Iframe> */}
          </StreamFrameDiv>
        </StreamDiv>

        <ChatDiv hide={chatHide}>
          <ChatTitle>
            <p>Chat Room</p>
            <MiniI src={minimize} alt="minimize" onClick={onMinimize} />
          </ChatTitle>

          <ChatSpace id="showMessage" hide={chatHide ? 'none' : 'flex'}>
            <ul>
              {allMessages ? (
                allMessages.map((list) => (
                  <Li key={list.key}>
                    <img src={list.team} alt="" />
                    {list.username}???{list.text}
                  </Li>
                ))
              ) : (
                <li>No comment have been left yet, become the first!</li>
              )}
            </ul>
          </ChatSpace>

          <ChatType onSubmit={onSendNew} hide={chatHide ? 'none' : 'flex'}>
            <LeftDiv>
              <UserLogoNameDiv>
                {!userTeamLogo ? null : <img src={userTeamLogo} alt="favorite team" />}
                <p id="chat_user">{user}</p>
              </UserLogoNameDiv>

              {isSigned === false ? (
                <ChatInput
                  placeholder="Please sign in to chat."
                  onChange={(e) => onTypeEvent(e)}
                  value={newMessage.text}
                  style={{ cursor: 'not-allowed' }}
                  disabled
                />
              ) : (
                <ChatInput
                  id="chat_input"
                  onChange={(e) => onTypeEvent(e)}
                  value={newMessage.text}
                  type="text"
                  placeholder="Write a message..."
                />
              )}
              <LimitP color={wordLimitColor}>( limit 100 words )</LimitP>
            </LeftDiv>
            <SendBtn type="submit">
              <SendImg id="send_btn" disabled={sendIconDisabled} src={iconSend} alt="send" />
            </SendBtn>
          </ChatType>
        </ChatDiv>
      </StreamChatWrap>
    </LiveChatWrap>
  );
};

export default LiveChat;
