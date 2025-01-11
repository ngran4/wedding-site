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
    const grp006 = new Group({ groupName: "Stuart Family" });
    const grp007 = new Group({ groupName: "Erickson Family" });
    const grp008 = new Group({ groupName: "Shively Family" });
    const grp009 = new Group({ groupName: "Metcalf Family" });
    const grp010 = new Group({ groupName: "Johnson Family" });
    const grp011 = new Group({ groupName: "Rothberg" });
    const grp012 = new Group({ groupName: "Debbie Howard" });
    const grp013 = new Group({ groupName: "Howard Family" });
    const grp014 = new Group({ groupName: "Yost Family" });
    const grp015 = new Group({ groupName: "Soto Family" });
    const grp016 = new Group({ groupName: "Emma Jones" });
    const grp017 = new Group({ groupName: "Gjerstad family" });
    const grp018 = new Group({ groupName: "Joanne Howard" });
    const grp019 = new Group({ groupName: "Alex Eterno" });
    const grp020 = new Group({ groupName: "Dallas Hakes" });
    const grp021 = new Group({ groupName: "Oordt Family" });
    const grp022 = new Group({ groupName: "McMuldren & Flippen" });
    const grp023 = new Group({ groupName: "Barsa Family" });
    const grp024 = new Group({ groupName: "Allie Dietrich" });
    const grp025 = new Group({ groupName: "John Hanna" });
    const grp026 = new Group({ groupName: "Emily Krefte" });
    const grp027 = new Group({ groupName: "Selena Schryvers" });
    const grp028 = new Group({ groupName: "Colburn Family" });
    const grp029 = new Group({ groupName: "Larry Gogenola" });
    const grp030 = new Group({ groupName: "Flannery Family" });
    const grp031 = new Group({ groupName: "Esther Centers" });
    const grp032 = new Group({ groupName: "McDonald Family" });
    const grp033 = new Group({ groupName: "David Erickson" });
    const grp034 = new Group({ groupName: "Phillip Marks" });
    const grp035 = new Group({ groupName: "Avalon Dunbar" });
    const grp036 = new Group({ groupName: "Joyce Juntunen" });
    const grp037 = new Group({ groupName: "Caroline Thompson" });
    const grp038 = new Group({ groupName: "Mackenzie Granville" });
    const grp039 = new Group({ groupName: "Emily Barretta" });
    const grp040 = new Group({ groupName: "Granville Family" });
    const grp041 = new Group({ groupName: "Samantha Granville" });
    const grp042 = new Group({ groupName: "Thompson Family" });
    const grp043 = new Group({ groupName: "Natalie Granville" });
    const grp044 = new Group({ groupName: "Jacob Granville" });
    const grp045 = new Group({ groupName: "Emma Thompson" });
    const grp046 = new Group({ groupName: "Stephen Thompson" });
    const grp047 = new Group({ groupName: "Robert Thompson" });
    const grp048 = new Group({ groupName: "Weiss Family" });
    const grp049 = new Group({ groupName: "Brett Rothberg" });
    const grp050 = new Group({ groupName: "James Erickson" });
    const grp051 = new Group({ groupName: "Calli Rothberg" });
    const grp052 = new Group({ groupName: "Jack Rothberg" });



    // Save groups to DB
    const groups = [
      grp001, grp002, grp003, grp004, grp005, grp006, grp007, grp008, grp009, grp010,
      grp011, grp012, grp013, grp014, grp015, grp016, grp017, grp018, grp019, grp020,
      grp021, grp022, grp023, grp024, grp025, grp026, grp027, grp028, grp029, grp030,
      grp031, grp032, grp033, grp034, grp035, grp036, grp037, grp038, grp039, grp040,
      grp041, grp042, grp043, grp044, grp045, grp046, grp047, grp048, grp049, grp050, 
      grp051, grp052
    ];
    
    await Promise.all(groups.map(group => group.save()));


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
        fullName: "Cody Boland",
        earlyResponse: "Pending",
        group: grp004._id,
      },
      {
        fullName: "Sayrn Horikawa",
        earlyResponse: "Pending",
        group: grp005._id,
      },
      {
        fullName: "Brandi Horikawa",
        earlyResponse: "Pending",
        group: grp005._id,
      },
      {
        fullName: "Emmett Horikawa",
        earlyResponse: "Pending",
        group: grp005._id,
      },
      {
        fullName: "Ami Stuart",
        earlyResponse: "Pending",
        group: grp006._id,
      },
      {
        fullName: "Chris Stuart",
        earlyResponse: "Pending",
        group: grp006._id,
      },
      {
        fullName: "Phil Erickson",
        earlyResponse: "Pending",
        group: grp007._id,
      },
      {
        fullName: "Lori Erickson",
        earlyResponse: "Pending",
        group: grp007._id,
      },
      {
        fullName: "Todd Shively",
        earlyResponse: "Pending",
        group: grp008._id,
      },
      {
        fullName: "Chris Woods-Shively",
        earlyResponse: "Pending",
        group: grp008._id,
      },
      {
        fullName: "Tristan Metcalf",
        earlyResponse: "Pending",
        group: grp009._id,
      },
      {
        fullName: "Ally Metcalf",
        earlyResponse: "Pending",
        group: grp009._id,
      },
      {
        fullName: "Max Johnson",
        earlyResponse: "Pending",
        group: grp010._id,
      },
      {
        fullName: "Taylor Johnson",
        earlyResponse: "Pending",
        group: grp010._id,
      },
      {
        fullName: "Steve Rothberg",
        earlyResponse: "Pending",
        group: grp011._id,
      },
      {
        fullName: "Tricia Rothberg",
        earlyResponse: "Pending",
        group: grp011._id,
      },
      {
        fullName: "Jack Rothberg",
        earlyResponse: "Pending",
        group: grp052._id,
      },
      {
        fullName: "Calli Rothberg",
        earlyResponse: "Pending",
        group: grp051._id,
      },
      {
        fullName: "Debbie Howard",
        earlyResponse: "Pending",
        group: grp012._id,
      },
      {
        fullName: "Michael Howard",
        earlyResponse: "Pending",
        group: grp013._id,
      },
      {
        fullName: "Heather Howard",
        earlyResponse: "Pending",
        group: grp013._id,
      },
      {
        fullName: "Mike Yost",
        earlyResponse: "Pending",
        group: grp014._id,
      },
      {
        fullName: "Lexie Yost",
        earlyResponse: "Pending",
        group: grp014._id,
      },
      {
        fullName: "Jackson Soto",
        earlyResponse: "Pending",
        group: grp015._id,
      },
      {
        fullName: "Jesse Soto",
        earlyResponse: "Pending",
        group: grp015._id,
      },
      {
        fullName: "Emma Jones",
        earlyResponse: "Pending",
        group: grp016._id,
      },
      {
        fullName: "Mikaela Gjerstad",
        earlyResponse: "Pending",
        group: grp017._id,
      },
      {
        fullName: "Samuel Gjerstad",
        earlyResponse: "Pending",
        group: grp017._id,
      },
      {
        fullName: "Joanne Howard",
        earlyResponse: "Pending",
        group: grp018._id,
      },
      {
        fullName: "Alex Eterno",
        earlyResponse: "Pending",
        group: grp019._id,
      },
      {
        fullName: "Mase Eterno",
        earlyResponse: "Pending",
        group: grp019._id,
      },
      {
        fullName: "Dallas Hakes",
        earlyResponse: "Pending",
        group: grp020._id,
      },
      {
        fullName: "Dallas House",
        earlyResponse: "Pending",
        group: grp020._id,
      },
      {
        fullName: "Latane Oordt",
        earlyResponse: "Pending",
        group: grp021._id,
      },
      {
        fullName: "CJ Oordt",
        earlyResponse: "Pending",
        group: grp021._id,
      },
      {
        fullName: "Marion McMuldren",
        earlyResponse: "Pending",
        group: grp022._id,
      },
      {
        fullName: "Bob Flippen",
        earlyResponse: "Pending",
        group: grp022._id,
      },
      {
        fullName: "Haley Barsa",
        earlyResponse: "Pending",
        group: grp023._id,
      },
      {
        fullName: "Ray Barsa",
        earlyResponse: "Pending",
        group: grp023._id,
      },
      {
        fullName: "Allie Dietrich",
        earlyResponse: "Pending",
        group: grp024._id,
      },
      {
        fullName: "Jacob Goult",
        earlyResponse: "Pending",
        group: grp024._id,
      },
      {
        fullName: "John Hanna",
        earlyResponse: "Pending",
        group: grp025._id,
      },
      {
        fullName: "Emily Krefte",
        earlyResponse: "Pending",
        group: grp026._id,
      },
      {
        fullName: "Selena Schryvers",
        earlyResponse: "Pending",
        group: grp027._id,
      },
      {
        fullName: "Kristin Colburn",
        earlyResponse: "Pending",
        group: grp028._id,
      },
      {
        fullName: "Dave Colburn",
        earlyResponse: "Pending",
        group: grp028._id,
      },
      {
        fullName: "Larry Gogenola",
        earlyResponse: "Pending",
        group: grp029._id,
      },
      {
        fullName: "Ryan Flannery",
        earlyResponse: "Pending",
        group: grp030._id,
      },
      {
        fullName: "Jodi Flannery",
        earlyResponse: "Pending",
        group: grp030._id,
      },
      {
        fullName: "Esther Centers",
        earlyResponse: "Pending",
        group: grp031._id,
      },
      {
        fullName: "Scott Centers",
        earlyResponse: "Pending",
        group: grp031._id,
      },
      {
        fullName: "Cody McDonald",
        earlyResponse: "Pending",
        group: grp032._id,
      },
      {
        fullName: "Kara McDonald",
        earlyResponse: "Pending",
        group: grp032._id,
      },
      {
        fullName: "David Erickson",
        earlyResponse: "Pending",
        group: grp033._id,
      },
      {
        fullName: "Laura Erickson",
        earlyResponse: "Pending",
        group: grp033._id,
      },
      {
        fullName: "Phillip Marks",
        earlyResponse: "Pending",
        group: grp034._id,
      },
      {
        fullName: "Avalon Dunbar",
        earlyResponse: "Pending",
        group: grp035._id,
      },
      {
        fullName: "Joyce Juntunen",
        earlyResponse: "Pending",
        group: grp036._id,
      },
      {
        fullName: "Richard Juntunen",
        earlyResponse: "Pending",
        group: grp036._id,
      },
      {
        fullName: "Caroline Thompson",
        earlyResponse: "Pending",
        group: grp037._id,
      },
      {
        fullName: "Claire Canfield",
        earlyResponse: "Pending",
        group: grp037._id,
      },
      {
        fullName: "Mackenzie Granville",
        earlyResponse: "Pending",
        group: grp038._id,
      },
      {
        fullName: "Emily Barretta",
        earlyResponse: "Pending",
        group: grp039._id,
      },
      {
        fullName: "James Holohan",
        earlyResponse: "Pending",
        group: grp039._id,
      },
      {
        fullName: "Denise Granville",
        earlyResponse: "Pending",
        group: grp040._id,
      },
      {
        fullName: "Matt Granville",
        earlyResponse: "Pending",
        group: grp040._id,
      },
      {
        fullName: "Samantha Granville",
        earlyResponse: "Pending",
        group: grp041._id,
      },
      {
        fullName: "Suzy Thompson",
        earlyResponse: "Pending",
        group: grp042._id,
      },
      {
        fullName: "Jim Thompson",
        earlyResponse: "Pending",
        group: grp042._id,
      },
      {
        fullName: "Natalie Granville",
        earlyResponse: "Pending",
        group: grp043._id,
      },
      {
        fullName: "Jacob Granville",
        earlyResponse: "Pending",
        group: grp044._id,
      },
      {
        fullName: "Emma Thompson",
        earlyResponse: "Pending",
        group: grp045._id,
      },
      {
        fullName: "Stephen Thompson",
        earlyResponse: "Pending",
        group: grp046._id,
      },
      {
        fullName: "Robert Thompson",
        earlyResponse: "Pending",
        group: grp047._id,
      },
      {
        fullName: "Hunter Weiss",
        earlyResponse: "Pending",
        group: grp048._id,
      },
      {
        fullName: "Megan Weiss",
        earlyResponse: "Pending",
        group: grp048._id,
      },
      {
        fullName: "Brett Rothberg",
        earlyResponse: "Pending",
        group: grp049._id,
      },
      {
        fullName: "James Erickson",
        earlyResponse: "Pending",
        group: grp050._id,
      },
      {
        fullName: "Charlotte Erickson",
        earlyResponse: "Pending",
        group: grp050._id,
      }
    ];

    // Save guests to DB
    const savedGuests = await Guest.insertMany(guests);

    // Update group members field
    groups.forEach(group => {
      group.members = savedGuests.filter(guest => guest.group.toString() === group._id.toString());
    });

    // Save updated groups to DB
    await Promise.all(groups.map(group => group.save()));



    console.log("Database seeded successfully!");
    process.exit();
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
};

seedData();