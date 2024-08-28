const mongoose = require("mongoose");

const guestSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  groupId: { type: mongoose.Schema.Types.ObjectId, ref: "Group" },
  isInvited: Boolean,
});

const Guest = mongoose.model("Guest", guestSchema);

const groupSchema = new mongoose.Schema({
  groupName: String,
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: "Guest" }],
  rsvpStatus: String, // e.g. "pending"
});

const Group = mongoose.model("Group", groupSchema);

const rsvpSchema = new mongoose.Schema({
  groupId: { type: mongoose.Schema.Types.ObjectId, ref: "Group" },
  guests: [
    {
      guestId: { type: mongoose.Schema.Types.ObjectId, ref: "Guest" },
      attending: Boolean,
      mealPreference: String,
      specialRequests: String
    },
  ],
});

const RSVP = mongoose.model("RSVP", rsvpSchema);
