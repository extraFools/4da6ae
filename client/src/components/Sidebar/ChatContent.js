import React, { useMemo } from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems:'center',
    marginLeft: 20,
    marginRight:20,
    flexGrow: 1,
  },
  username: {
    fontWeight: 'bold',
    letterSpacing: -0.2,
  },
  previewText: {
    fontSize: 12,
    color: '#9CADC8',
    letterSpacing: -0.17,
  },
  flex: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  unreadBubble: {
    backgroundColor: '#3f92ff',
    color: 'white',
    height: '20px',
    borderRadius: '10px',
    display: 'flex',
    justifyContent:'center',
    alignItems:'center'

  },
  unreadText:{
    lineHeight:'14px',
    letterSpacing:'-0.5px',
    fontSize:'10px',
    fontWeight: '700',
    paddingLeft:'7px',
    paddingRight:'7px'
  }
}));

const ChatContent = ({ conversation }) => {
  const classes = useStyles();

  const { otherUser } = conversation;
  const latestMessageText = conversation.id && conversation.latestMessageText;
  const getUnreadMessages = useMemo(() => {
    let unreadCount = 0;
    conversation.messages.forEach((message) => {
      if (message.senderId === otherUser.id) {
        if (message.readStatus === (false || null)) {
          // false or null because seed data is null;
          unreadCount++;
        }
      }
    });
    return unreadCount;
  }, [conversation, otherUser.id]);

  return (
    <Box className={classes.root}>
      <Box>
        <Typography className={classes.username}>
          {otherUser.username}
        </Typography>
        <Typography className={classes.previewText}>
          {latestMessageText}
        </Typography>
      </Box>
      {getUnreadMessages > 0 ? (
        <Box className={classes.unreadBubble}>
          <Typography className={classes.unreadText}>
          {getUnreadMessages}
          </Typography>
        </Box>
      ) : null}
    </Box>
  );
};

export default ChatContent;
