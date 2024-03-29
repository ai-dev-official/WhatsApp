import React from 'react';
import {  View, Text, Image, TouchableWithoutFeedback} from "react-native";
import Users from '../../data/Users';
import { ChatRoom } from "../../types";
import styles from './styles';
import moment from "moment";
import { useNavigation } from '@react-navigation/native';



export type ChatListItemProps = {
  chatRoom: ChatRoom;
}

const ChatListItem = (props: ChatListItemProps) => {
    const  { chatRoom } = props;

    const navigation = useNavigation();

    const user = chatRoom.users[1];

    const onClick = () =>  {
        navigation.navigate('ChatRoom', { 
            id: chatRoom.id,
            name: user.name,
        })
    }

   /*  const ImageUri = Image.resolveAssetSource(Users).uri */

    return (
        <TouchableWithoutFeedback onPress={onClick}>
        <View style={styles.container}>
            <View style={styles.lefContainer}>
            <Image source={{ uri: user.imageUri }} style={styles.avatar}/>

            <View style={styles.midContainer}>
                <Text style={styles.username}>{user.name}</Text>
                <Text
                numberOfLines={2}
                style={styles.lastMessage}>
                {chatRoom.lastMessage 
                ? `${chatRoom.lastMessage.user.name}: ${chatRoom.lastMessage.content}`  
                : ""}
                </Text>
            </View>

            </View>

            <Text style={styles.time}>
            {moment(chatRoom.lastMessage.createdAt).format('LT') }
            </Text>
        </View>
    </TouchableWithoutFeedback>
        
    )
  };

export default ChatListItem;
