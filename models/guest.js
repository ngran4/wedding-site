const mongoose = require("mongoose");

const guestSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: false, unique: true },
  earlyResponse: { type: String, enum: ["yes", "no"], default: "Pending" },
  groupId: { type: mongoose.Schema.Types.ObjectId, ref: "Group" },
});

const Guest = mongoose.model("Guest", guestSchema);

const groupSchema = new mongoose.Schema({
  groupName: { type: String, required: true },
  primaryContact: { type: mongoose.Schema.Types.ObjectId, ref: 'Guest' }, // Main contact
  members: { type: String, enum: ['Accepted', 'Declined', 'Pending'], default: 'Pending' }, // Overall group RSVP
  rsvpStatus: { type: String, default: "Pending" }, // e.g. "pending"
});

const Group = mongoose.model("Group", groupSchema);

// const rsvpSchema = new mongoose.Schema({
//   groupId: { type: mongoose.Schema.Types.ObjectId, ref: "Group", required: true },
//   guests: [
//     {
//       guestId: { type: mongoose.Schema.Types.ObjectId, ref: "Guest", required: true },
//       attending: { type: Boolean, default: false },
//       mealPreference: { type: String, default: "" },
//       specialRequests: { type: String, default: "" }
//     },
//   ],
//   overallStatus: { type: String, default: "Pending" },
//   earlyResponse: { type: String, enum: ["yes", "no"], default: "Pending" }
// });

// const RSVP = mongoose.model("RSVP", rsvpSchema);


module.exports = { Guest, Group };