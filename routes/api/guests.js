const express = require('express');
const router = express.Router();
const guestsCtrl = require('../../controllers/guests');


router.get('/search', guestsCtrl.searchGuest);
router.patch('/:guestId/early-response', guestsCtrl.updateEarlyResponse);


// router.post('/rsvp', guestsCtrl.rsvpFormHandler);
// router.get('/rsvp-status/:groupId', guestsCtrl.getGroupRSVPStatus)

module.exports = router;