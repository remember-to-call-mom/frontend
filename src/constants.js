import RemindersIcon from '@material-ui/icons/List';
import ProfileIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';

export const INPUT_UNITS = [
  'hours',
  'days',
  'weeks',
  'months',
];

export const CHANNELS = {
  PUSH: 'push',
  EMAIL: 'email',
  WEBHOOK: 'webhook',
};

export const STATES = {
  ADD_REMINDER: 'ADD_REMINDER',
  DELETE_REMINDER: 'DELETE_REMINDER',
  UPDATE_NAVIGATION: 'UPDATE_NAVIGATION',
};

export const ROUTES_MAPPING = {
  LIST: {
    url: '/',
    label: 'Reminders',
    index: 0,
    iconComponent: RemindersIcon,
  },

  ADD: {
    url: '/add',
    label: 'Add',
    index: 1,
    iconComponent: ProfileIcon,
  },

  PROFILE: {
    url: '/profile',
    label: 'Profile',
    index: 2,
    iconComponent: AddIcon,
  },
};
