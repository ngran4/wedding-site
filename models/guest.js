const mongoose = require("mongoose");

const guestSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String},
  earlyResponse: { type: String, enum: ["Yes", "No", "Pending"], default: "Pending" },
  rsvp: {
    response: {type: String, enum: ["Accepted", "Declined", "Pending"], default: "Pending"},
    mealPreference: { type: String }, // Subcategory for dietary preferences
    specialRequests: { type: String }, // Subcategory for other dietary needs
  },
  group: { type: mongoose.Schema.Types.ObjectId, ref: "Group" },
}, { timestamps: true });

const Guest = mongoose.model("Guest", guestSchema);

const groupSchema = new mongoose.Schema({
  groupName: { type: String, required: false },
  members:  [{ type: mongoose.Schema.Types.ObjectId, ref: 'Guest' }],
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