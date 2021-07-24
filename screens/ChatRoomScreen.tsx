import React, { Component } from 'react'
import {ImageBackground, StyleSheet, FlatList, Text} from 'react-native';
import { useRoute } from '@react-navigation/native';
import chatRoomData from '../data/Chats';
/* import BG from '../assets/images/BG.png'; */
// @ts-ignore
import * as BG from '../assets/images/bgimages/BG.png';
import ChatMessage from '../components/ChatMessage';


const ChatRoomScreen = () => {

    const route = useRoute();

        return (
            <ImageBackground style={{width: '100%', height: '100%'}} source={BG}>
            <FlatList
                data={chatRoomData.messages}
                renderItem={({ item }) => <ChatMessage message={item} />}
                inverted
            />
         </ImageBackground>
        );
    }

export default ChatRoomScreen;


