import React from "react";
import MeetupItem from "./MeetupItem";

function MeetupList(props) {
  return (
    <div>
      <ul>
        {props.meetups.map((meetup) => {
          return (
            <MeetupItem
              key={meetup.id}
              id={meetup.id}
              title={meetup.title}
              image={meetup.image}
              address={meetup.address}
              description={meetup.description}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default MeetupList;
