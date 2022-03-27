import React, { useMemo } from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
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
  previewTextUnread:{
    fontWeight: 'bold',
    fontSize:12 ,
    letterSpacing: -0.17,
  },
  flex: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
}));

const ChatContent = ({ conversation, unreadCount }) => {
  const classes = useStyles();

  const { otherUser } = conversation;
  const latestMessageText = conversation.id && conversation.latestMessageText;

  return (
    <Box className={classes.root}>
      <Box>
        <Typography className={classes.username}>
          {otherUser.username}
        </Typography>
        {unreadCount > 0 ? (
          <Typography className={classes.previewTextUnread}>
          {latestMessageText}
          </Typography>
        ) : (
          <Typography className={classes.previewText}>
            {latestMessageText}
          </Typography>
        )}
      </Box>
      <Badge badgeContent={unreadCount} color="primary" />
    </Box>
  );
};

export default ChatContent;
