const Guest = require("../models/guest");

// RSVP form handler
const rsvpFormHandler = async (req, res) => {
  const { groupId, guests } = req.body;

  try {
    const rsvp = await RSVP.findOneAndUpdate(
      { groupId: groupId },
      { guests },
      { new: true, upsert: true } // create new doc if if doesn't exist yet
    );

    res.status(200).send('RSVP submitted!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error.');
  }
}


module.exports = {
  rsvpFormHandler,
}