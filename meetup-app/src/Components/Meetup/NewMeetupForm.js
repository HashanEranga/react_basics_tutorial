import React from "react";
import Card from "../ui/Card";
import classes from './NewMeetupForm.module.css'

function NewMeetupForm() {
  return (
    <section>
      <h1>Add New Meetup</h1>
      <Card>
        <form className={classes.form}>
          <div className={classes.control}>
            <label htmlFor="title">Title</label>
            <input required id="title" type="text" />
          </div>
          <div className={classes.control}>
            <label htmlFor="image">Meetup Image</label>
            <input required id="image" type="url" />
          </div>
          <div className={classes.control}>
            <label htmlFor="address">Address</label>
            <input required id="address" type="text" />
          </div>
          <div className={classes.control}>
            <label htmlFor="description">Description</label>
            <textarea required id="description" type="text" rows='5'/>
          </div>
          <div className={classes.actions}>
            <button>Add Meetup</button>
          </div>

        </form>
      </Card>
    </section>
  );
}

export default NewMeetupForm;
