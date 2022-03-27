import React from 'react';
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

  const lastIndexOfUserMessage = () => {
    const index = messages.findLastIndex((n) => n.senderId === userId);
    return index;
  };
  return (
    <Box>
      {messages.map((message, index) => {
        const time = moment(message.createdAt).format('h:mm');

        return message.senderId === userId ? (
          <>
            <SenderBubble key={message.id} text={message.text} time={time} />
            {index === lastIndexOfUserMessage() &&
            message.readStatus === true ? (
              <Box className={classes.readStatusBubbleContainer}>
                <Avatar
                  alt={otherUser.username}
                  src={otherUser.photoUrl}
                  className={classes.avatar}
                />
              </Box>
            ) : null}
          </>
        ) : (
          <OtherUserBubble
            key={message.id}
            text={message.text}
            time={time}
            otherUser={otherUser}
          />
        );
      })}
    </Box>
  );
};

export default Messages;
