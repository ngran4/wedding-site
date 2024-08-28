const mongoose = require("mongoose");

const guestSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  groupId: { type: mongoose.Schema.Types.ObjectId, ref: "Group" },
  isInvited: { type: Boolean, default: false },
});

const Guest = mongoose.model("Guest", guestSchema);

const groupSchema = new mongoose.Schema({
  groupName: { type: String, required: true },
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: "Guest" }],
  rsvpStatus: { type: String, default: "Pending" }, // e.g. "pending"
});

const Group = mongoose.model("Group", groupSchema);

const rsvpSchema = new mongoose.Schema({
  groupId: { type: mongoose.Schema.Types.ObjectId, ref: "Group", required: true },
  guests: [
    {
      guestId: { type: mongoose.Schema.Types.ObjectId, ref: "Guest", required: true },
      attending: { type: Boolean, default: false },
      mealPreference: { type: String, default: "" },
      specialRequests: { type: String, default: "" }
    },
  ],
  overallStatus: { type: String, default: "Pending" },
});

const RSVP = mongoose.model("RSVP", rsvpSchema);


module.exports = { Guest, Group, RSVP };