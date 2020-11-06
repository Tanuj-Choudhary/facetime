/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';
import LiveChatView from './LiveChatView';
import io from 'socket.io-client';
import Peer from 'simple-peer';

function LiveChatContainer(props) {
  const id = new URLSearchParams(props.location.search).get('id') || null;

  // Video state
  const [userVideo, setuserVideo] = useState(null);
  const [partnerVideo, setpartnerVideo] = useState(null);

  // Error  state
  const [error, seterror] = useState(null);

  // Call and user  state
  const [yourID, setYourID] = useState('');
  const [users, setUsers] = useState({});
  const [receivingCall, setReceivingCall] = useState(false);
  const [caller, setCaller] = useState('');
  const [callerSignal, setCallerSignal] = useState();
  const [callAccepted, setCallAccepted] = useState(false);
  const [callRejected, setCallRejected] = useState(false);

  // Modal state
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  // Socket and peer ref
  const socket = useRef(null);
  const myPeer = useRef();

  useEffect(() => {
    // Only run if not connected
    if (!socket.current) {
      socket.current = io.connect('http://localhost:8000');

      socket.current.on('yourID', (yourid) => {
        setYourID(yourid);
      });
    }

    // Get all users
    socket.current.on('allUsers', (users) => {
      setUsers(users);
    });

    socket.current.on('hey', (data) => {
      setReceivingCall(true);
      setCaller(data.from);
      setCallerSignal(data.signal);
    });

    /**
     * If there is caller
     * Your id is rendered or loaded
     * More than 1 user is connected
     */
    if (id && yourID !== '' && Object.keys(users).length > 1) {
      callPeer(id);
    }
  }, [id, yourID, users]);

  const handleModalAction = () => {
    setModalVisible(false);
  };

  async function callPeer(id) {
    if (id !== '' && users[id] && id !== yourID) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: true });

        setCaller(id);
        setuserVideo(stream);

        const peer = new Peer({
          initiator: true,
          trickle: false,
          config: {
            iceServers: [
              {
                urls: 'stun:numb.viagenie.ca',
                username: 'sultan1640@gmail.com',
                credential: '98376683',
              },
              {
                urls: 'turn:numb.viagenie.ca',
                username: 'sultan1640@gmail.com',
                credential: '98376683',
              },
            ],
          },
          stream: stream,
        });

        myPeer.current = peer;

        peer.on('signal', (data) => {
          socket.current.emit('callUser', { userToCall: id, signalData: data, from: yourID });
        });

        peer.on('stream', (stream) => {
          setpartnerVideo(stream);
        });

        peer.on('error', (err) => {
          endCall();
        });

        socket.current.on('callAccepted', (signal) => {
          setCallAccepted(true);
          peer.signal(signal);
        });

        socket.current.on('close', () => {
          window.location.reload();
        });

        socket.current.on('rejected', () => {
          window.location.reload();
        });
      } catch (err) {
        setModalMessage(
          'You cannot place/ receive a call without granting video and audio permissions! Please change your settings to use FaceTime.',
        );
        setModalVisible(true);
        seterror(true);
      }
    } else {
      setModalMessage('We think the username entered is wrong. Please check again and retry!');
      setModalVisible(true);
      seterror(true);
      return;
    }
  }

  async function acceptCall() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: true });

      setuserVideo(stream);
      setCallAccepted(true);
      const peer = new Peer({
        initiator: false,
        trickle: false,
        stream: stream,
      });

      myPeer.current = peer;

      peer.on('signal', (data) => {
        socket.current.emit('acceptCall', { signal: data, to: caller });
      });

      peer.on('stream', (stream) => {
        setpartnerVideo(stream);
      });

      peer.on('error', (err) => {
        endCall();
      });

      peer.signal(callerSignal);

      socket.current.on('close', () => {
        window.location.reload();
      });
    } catch (err) {
      setModalMessage(
        'You cannot place/ receive a call without granting video and audio permissions! Please change your settings to use Cuckoo.',
      );
      setModalVisible(true);
      seterror(true);
    }
  }

  function rejectCall() {
    setCallRejected(true);
    socket.current.emit('rejected', { to: caller });
    window.location.reload();
  }

  function endCall() {
    myPeer.current.destroy();
    socket.current.emit('close', { to: caller });
    window.location.reload();
  }

  return (
    <>
      <LiveChatView
        userVideo={userVideo}
        partnerVideo={partnerVideo}
        modalMessage={modalMessage}
        modalVisible={modalVisible}
        handleModalAction={handleModalAction}
        receivingCall={receivingCall}
        acceptCall={acceptCall}
        rejectCall={rejectCall}
        callAccepted={callAccepted}
        callRejected={callRejected}
        caller={caller}
        yourID={yourID}
        error={error}
      />
    </>
  );
}

export default LiveChatContainer;
