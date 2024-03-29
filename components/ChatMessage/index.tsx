import React, { Component } from 'react';
import { Text, View } from "react-native";
import { Message } from "../../types";
import moment from 'moment';
import styles from '../ChatMessage/styles';

export type ChatMessageProps = {
    message: Message;
}

const ChatMessage = (props: ChatMessageProps) => {
    const { message } = props;

    const isMyMessage = () => {
        return message.user.id ==='u1';
    }

        return (

            <View style={styles.container}>
                
                <View style={[
                    styles.messageBox, {
                    backgroundColor: isMyMessage() ? '#DCF8CS' : '#FFFFFF',
                    marginRight: isMyMessage() ? 0 : 50,
                    marginLeft: isMyMessage() ? 50 : 0,
                   
                    }
                  ]}>

                    {!isMyMessage() && <Text>{message.user.name}</Text>}
                    <Text style={styles.message}>{message.content}</Text>
                    <Text style={styles.time}>{moment(message.createdAt).fromNow()}</Text>
                </View>
                
            </View>
        )
    }


export default ChatMessage;

