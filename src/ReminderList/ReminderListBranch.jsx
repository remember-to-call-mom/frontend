import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import {
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Typography,
} from '@material-ui/core';

import EmailIcon from '@material-ui/icons/Email';
import PushIcon from '@material-ui/icons/Notifications';
import WebhookIcon from '@material-ui/icons/Cloud';
import DeleteIcon from '@material-ui/icons/Delete';

import { CHANNELS } from '../constants';
import ReminderListEmpty from './ReminderListEmpty';

const Icon = ({ channel }) => {
  if (channel === CHANNELS.PUSH) {
    return <PushIcon />;
  }

  if (channel === CHANNELS.EMAIL) {
    return <EmailIcon />;
  }

  if (channel === CHANNELS.WEBHOOK) {
    return <WebhookIcon />;
  }

  throw new Error(`Unsupported channel ${channel}`);
};

Icon.propTypes = {
  channel: PropTypes.oneOf(Object.values(CHANNELS)).isRequired,
};

const ReminderListBranch = ({ reminders, onDelete }) => {
  if (reminders.length < 1) {
    return <ReminderListEmpty />;
  }

  return (
    <Fragment>
      <Typography variant="display1">
        Your reminders
      </Typography>

      <List>
        {reminders.map(reminder => (
          <ListItem key={reminder.id}>
            <Avatar>
              <Icon channel={reminder.channel} />
            </Avatar>

            <ListItemText
              primary={reminder.title}
              secondary={
                `Min: ${reminder.min} ${reminder['min-unit']}, max: ${reminder.max} ${reminder['max-unit']}`
              }
            />

            <ListItemSecondaryAction>
              <IconButton aria-label="Delete" onClick={onDelete(reminder.id)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Fragment>
  );
};

ReminderListBranch.propTypes = {
  reminders: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ReminderListBranch;
