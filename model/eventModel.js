const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  type: {
    type: String,
  },
  to_whom: {
    type: String,
  },
  date: {
    type: String,
  },
  time: {
    type: String,
  },
  venue: {
    type: String,
  },
  resourcePerson: {
    type: String,
  },
  modeOfConduct: {
    type: String,
  },
  resourcesRequired: {
    type: String,
  },
  conductedBy: {
    type: String,
  },
  no_of_volunteers: {
    type: Number,
  },
  prize_money: {
    type: Number,
  },
  budget: {
    type: Number,
  },
  remarks: {
    type: String,
  },
  created_date: {
    type: String,
  },
  registration_link: {
    type: String,
  },
  feedback_link: {
    type: String,
  },
  after_event_report: {
    type: String,
  },
});

const eventModel = new mongoose.model("events", eventSchema);
module.exports = eventModel;
