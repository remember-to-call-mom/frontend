import React from "react";
import ReminderFormBranch from "./ReminderFormBranch";

const withReminderForm = (Component) => class extends React.Component {
  render() {
    return (
      <Component />
    )
  }
}

export default withReminderForm(ReminderFormBranch);
