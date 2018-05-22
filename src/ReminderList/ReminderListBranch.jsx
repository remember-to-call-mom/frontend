import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

import EmailIcon from '@material-ui/icons/Email';
import PushIcon from '@material-ui/icons/Notifications';
import WebhookIcon from '@material-ui/icons/Cloud';
import { CHANNELS } from '../constants';

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

const ReminderListBranch = ({ reminders }) => (
  <Fragment>
    <Typography variant="display1">
      Your reminders
    </Typography>

    <List>
      {reminders.map(reminder => (
        <ListItem key={uuidv4()}>
          <Avatar>
            <Icon channel={reminder.channel} />
          </Avatar>
          <ListItemText
            primary={reminder.title}
            secondary={
              `Min: ${reminder.min} ${reminder['min-unit']}, max: ${reminder.max} ${reminder['max-unit']}`
            }
          />
        </ListItem>
      ))}
    </List>
  </Fragment>
);

ReminderListBranch.propTypes = {
  reminders: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ReminderListBranch;
