import React from "react";

import AttendeeTable from "../dashboard/AttendeeTable";
import RosterTable from "../dashboard/RosterTable";
import { Link } from "react-router-dom";

import moment from "moment";

const projectDashboardContainer = (props) => {
  console.log('ROSTER', props.roster);

  return (
    <div>
      {props.attendeeOrRoster ? (
        <AttendeeTable
          attendees={props.attendees}
          setRoster={props.setRoster}
          roster={props.roster}
          activeMeeting={true}
          projectId={props.projectId}
        ></AttendeeTable>
      ) : (
        <RosterTable
          attendees={props.roster}
          activeMeeting={true}
        ></RosterTable>
      )}
    </div>
  );
};
export default projectDashboardContainer;
