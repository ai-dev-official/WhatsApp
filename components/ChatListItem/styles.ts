import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: "100%",
    justifyContent: 'space-between',
    padding: 10,
  },
  lefContainer: {
    flexDirection: 'row',
  },
  midContainer: {
    justifyContent: 'space-around'
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginRight: 15,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  lastMessage: {
    fontSize: 16,
    color: 'grey',
    flex: 1, 
    flexWrap: 'wrap',
    flexShrink: 1,
  },
  time: {
    fontSize: 14,
    color: 'grey'
  },
  userTime: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  userPings: {
    width: '100%',
    flex: 1, 
    flexWrap: 'wrap',
    flexShrink: 1,
  }
});

export default styles;
