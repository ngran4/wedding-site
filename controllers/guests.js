const { Guest, Group } = require("../models/guest");


const searchGuest = async (req, res) => {
  try{
    const { fullName } = req.query;
    console.log('Search Query:', fullName);

    // find guest by name (case-insensitive)
    const guest = await Guest.findOne({ fullName: { $regex: fullName, $options: 'i'}}).populate('group');
    console.log('Guest Found:', guest);
    
    if (!guest) {
      console.log('Guest not found');
      return res.status(404).json({message: 'Guest not found'});
    }

    //fetch all guests in the same group
    const groupMembers = await Group.findById(guest.group).populate('members');
    console.log('Group Members:', groupMembers);

    if (!groupMembers) {
      console.log('Group not found');
      return res.status(404).json({ message: 'Group not found' });
    }

    return res.json({ guest, groupMembers });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error'});
  }
}

const updateRSVP = async (req, res) => {
  try {
    const { guestId } = req.params;
    const { rsvp } = req.body;
    
    // update rsvp and welcome dinner rsvp
    const guest = await Guest.findByIdAndUpdate(
      guestId,
      {rsvp, welcomeDinnerRsvp },
      {new: true}
    );
    if (!guest) {
      return res.status(404).json({ message: 'Guest not found'});
    }
    return res.json({ message: 'RSVP updated successfully', guest });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error'});
  } 
}


const updateEarlyResponse = async (req, res) => {
  try {
    console.log(req.params, 'REQ PARAMS')
    const { guestId } = req.params;
    console.log('GUEST ID ====>', guestId);
    const { earlyResponse } = req.body;
    console.log('EARLY RESPONSE ====>',earlyResponse);

        // Validate earlyResponse input
        // if (!['Yes', 'No', 'Pending'].includes(earlyResponse)) {
        //   return res.status(400).json({ message: 'Invalid early response value' });
        // }
    
    const guest = await Guest.findByIdAndUpdate(
      guestId,
      { earlyResponse },
      { new: true }
    );

    if (!guest) {
      return res.status(404).json({ message: 'Guest not found'});
    }

    return res.json({ message: 'Early response updated successfully', guest });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
}
};

const getAllRSVPs = async (req, res) => {
  try{
    const guests = await Guest.find().populate('group');
    res.json(guests);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error'});
  }
}





// Take RSVP object and calculate total number of guests attending, return RSVP status 
// const calculateGroupRSVPStatus = (rsvp) => {
//   const totalGuests = rsvp.guests.length;
//   const attendingGuests = rsvp.guests.filter(guest => guest.attending).length;

//   if (attendingGuests === totalGuests) {
//     return 'All Accepted';
//   } else if (attendingGuests === 0) {
//     return 'All Declined';
//   } else {
//     return 'Partially Accepted';
//   }
// };

// retrieve RSVP data for group and calculate RSVP status (returned as json response)
// const getGroupRSVPStatus = async (req, res) => {
//   try {
//     const groupId = req.params.groupId;
//     const rsvp = await RSVP.findOne({ groupId }).populate('guests.guestId');

//     if (!rsvp) {
//       return res.status(404).json({ message: 'RSVP not found'});
//     }

//     const groupStatus = calculateGroupRSVPStatus(rsvp);
//   } catch (error) {
//     return res.status(500).json({ message: 'Server error', error});
//   }
// }

// create/update RSVP doc in db based on group ID and guest names
// const rsvpFormHandler = async (req, res) => {
//   const { groupId, guests } = req.body;

//   try {
//     const rsvp = await RSVP.findOneAndUpdate(
//       { groupId: groupId },
//       { guests },
//       { new: true, upsert: true } // create new doc if if doesn't exist yet
//     );

//     // Calculate group RSVP status
//     const groupStatus = calculateGroupRSVPStatus(rsvp);
//     rsvp.overallStatus = groupStatus;
//     await rsvp.save();

//     res.status(200).send('RSVP submitted!', groupStatus);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Server error.');
//   }
// }


module.exports = {
  searchGuest,
  updateEarlyResponse,
  getAllRSVPs,
}
