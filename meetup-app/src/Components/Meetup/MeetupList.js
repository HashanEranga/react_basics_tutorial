import React from "react";
import MeetupItem from "./MeetupItem";
import Card from "../ui/Card";
import classes from "./MeetupList.module.css";

function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => {
        return (
          <li key={meetup.id}>
            <Card>
              <MeetupItem
                key={meetup.id}
                id={meetup.id}
                title={meetup.title}
                image={meetup.image}
                address={meetup.address}
                description={meetup.description}
              />
            </Card>
          </li>
        );
      })}
    </ul>
  );
}

export default MeetupList;
