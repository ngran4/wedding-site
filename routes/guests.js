const express = require('express');
const router = express.Router();
const guestsCtrl = require('../../controllers/guests');

router.post('/rsvp', guestsCtrl.rsvpFormHandler);
router.get('/rsvp-status/:groupId', guestsCtrl.getGroupRSVPStatus)