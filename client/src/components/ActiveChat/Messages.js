import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import { SenderBubble, OtherUserBubble } from '.';
import moment from 'moment';

const useStyles = makeStyles(() => ({
  readStatusBubbleContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  unreadStatusBubble: {
    marginTop: 9,
    border: '1px solid black',
    borderRadius: '50%',
    height: 20,
    width: 20,
  },
  avatar: {
    height: 20,
    width: 20,
    marginTop: 9,
  },
}));
const Messages = (props) => {
  const classes = useStyles();
  const { messages, otherUser, userId } = props;

  const lastMessageInConversation = () => {
    if (messages.length > 0) {
      if (messages[messages.length - 1].senderId === userId) {
        if (messages[messages.length - 1].readStatus === true) {
          return { isUsers: true, isRead: true };
        }
        return { isUsers: true, isRead: false };
      } else {
        return { isUsers: false, isRead: false };
      }
    }
    return;
  };

  return (
    <Box>
      {messages.map((message) => {
        const time = moment(message.createdAt).format('h:mm');

        return message.senderId === userId ? (
          <SenderBubble key={message.id} text={message.text} time={time} />
        ) : (
          <OtherUserBubble
            key={message.id}
            text={message.text}
            time={time}
            otherUser={otherUser}
          />
        );
      })}
      {lastMessageInConversation() && lastMessageInConversation().isUsers ? (
        lastMessageInConversation().isRead ? (
          <Box className={classes.readStatusBubbleContainer}>
            <Avatar
              alt={otherUser.username}
              src={otherUser.photoUrl}
              className={classes.avatar}
            />
          </Box>
        ) : (
          <Box className={classes.readStatusBubbleContainer}>
            <Box className={classes.unreadStatusBubble}></Box>
          </Box>
        )
      ) : null}
    </Box>
  );
};

export default Messages;
