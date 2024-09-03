const { Guest, RSVP } = require("../models/guest");

// Take RSVP object and calculate total number of guests attending, return RSVP status 
const calculateGroupRSVPStatus = (rsvp) => {
  const totalGuests = rsvp.guests.length;
  const attendingGuests = rsvp.guests.filter(guest => guest.attending).length;

  if (attendingGuests === totalGuests) {
    return 'All Accepted';
  } else if (attendingGuests === 0) {
    return 'All Declined';
  } else {
    return 'Partially Accepted';
  }
};

// retrieve RSVP data for group and calculate RSVP status (returned as json response)
const getGroupRSVPStatus = async (req, res) => {
  try {
    const groupId = req.params.groupId;
    const rsvp = await RSVP.findOne({ groupId }).populate('guests.guestId');

    if (!rsvp) {
      return res.status(404).json({ message: 'RSVP not found'});
    }

    const groupStatus = calculateGroupRSVPStatus(rsvp);
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error});
  }
}

// create/update RSVP doc in db based on group ID and guest names
const rsvpFormHandler = async (req, res) => {
  const { groupId, guests } = req.body;

  try {
    const rsvp = await RSVP.findOneAndUpdate(
      { groupId: groupId },
      { guests },
      { new: true, upsert: true } // create new doc if if doesn't exist yet
    );

    // Calculate group RSVP status
    const groupStatus = calculateGroupRSVPStatus(rsvp);
    rsvp.overallStatus = groupStatus;
    await rsvp.save();

    res.status(200).send('RSVP submitted!', groupStatus);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error.');
  }
}


module.exports = {
  rsvpFormHandler,
  getGroupRSVPStatus,
}
