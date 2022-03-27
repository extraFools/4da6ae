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

  // const lastIndexOfUserMessage = () => {
  //   const index = messages.findLastIndex((n) => n.senderId === userId); //cypress doesnt recognize findLastIndex https://v8.dev/features/finding-in-arrays
  //   return index;
  // };
  const lastIndexOfUserMessage = () => {
    let index = -1;
    messages.forEach((message,idx) => {
      if(message.senderId === userId)
      {
        index = idx;
      }
    })
    return index;
  }
  return (
    <Box>
      {messages.map((message, index) => {
        const time = moment(message.createdAt).format('h:mm');

        return message.senderId === userId ? (
          <div key={message.id}>
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
          </div>
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
