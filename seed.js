const mongoose = require('mongoose');
const {Guest, Group} = require('./models/guest');
require('dotenv').config();

const db = process.env.REACT_APP_DATABASE_URL;

const seedData = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Clear existing data
    await Guest.deleteMany({});
    await Group.deleteMany({});

    // Create a few groups
    const grp001 = new Group({ groupName: "Granville Parents" });
    const grp002 = new Group({ groupName: "Erickson Parents" });
    const grp003 = new Group({ groupName: "Rothberg Family" });
    const grp004 = new Group({ groupName: "Sunny Band" });
    const grp005 = new Group({ groupName: "Horikawa Family"});


    // Save groups to DB
    await grp001.save();
    await grp002.save();
    await grp003.save();

    // Create guests for the groups
    const guests = [
      {
        fullName: "Dee Granville",
        earlyResponse: "Pending",
        group: grp001._id,
      },
      {
        fullName: "Dan Granville",
        earlyResponse: "Pending",
        group: grp001._id,
      },
      {
        fullName: "Ann Erickson",
        earlyResponse: "Pending",
        group: grp002._id,
      },
      {
        fullName: "Mark Erickson",
        earlyResponse: "Pending",
        group: grp002._id,
      },
      {
        fullName: "Suzanne Rothberg",
        earlyResponse: "Pending",
        group: grp003._id,
      },
      {
        fullName: "Dave Rothberg",
        earlyResponse: "Pending",
        group: grp003._id,
      },
      {
        fullName: "Evie Rothberg",
        earlyResponse: "Pending",
        group: grp003._id,
      },
      {
        fullName: "Cora Rothberg",
        earlyResponse: "Pending",
        group: grp003._id,
      },
      {
        fullName: "Hanna Rothberg",
        earlyResponse: "Pending",
        group: grp003._id,
      },
      {
        fullName: "Sunny Band",
        earlyResponse: "Pending",
        group: grp004._id,
      },
      {
        fullName: "Cody",
        earlyResponse: "Pending",
        group: grp004._id,
      },
      {
        fullName: "Sayrn Horikawa",
        earlyResponse: "Pending",
        group: grp005._id,
      }
    ];

    // Save guests to DB
    const savedGuests = await Guest.insertMany(guests);

    // Update group members field
    grp001.members = savedGuests.filter((guest) => guest.group.toString() === grp001._id.toString());
    grp002.members = savedGuests.filter((guest) => guest.group.toString() === grp002._id.toString());
    grp003.members = savedGuests.filter((guest) => guest.group.toString() === grp003._id.toString());
    await grp001.save();
    await grp002.save();
    await grp003.save();


    console.log("Database seeded successfully!");
    process.exit();
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
};

seedData();