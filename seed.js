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
    const grp048 = new Group({ groupName: "Weiss Family" });
    const grp049 = new Group({ groupName: "Brett Rothberg" });
    const grp050 = new Group({ groupName: "James Erickson" });
    const grp051 = new Group({ groupName: "Calli Rothberg" });
    const grp052 = new Group({ groupName: "Jack Rothberg" });
    const grp053 = new Group({ groupName: "Billie Rothberg"})
    const grp054 = new Group({ groupName: "Casey Rothberg"})



    // Save groups to DB
    const groups = [
      grp001, grp002, grp003, grp004, grp005, grp006, grp007, grp008, grp009, grp010,
      grp011, grp012, grp013, grp014, grp015, grp016, grp017, grp018, grp019, grp020,
      grp021, grp022, grp023, grp024, grp025, grp026, grp027, grp028, grp029, grp030,
      grp031, grp032, grp033, grp034, grp035, grp036, grp037, grp038, grp039, grp040,
      grp041, grp042, grp043, grp044, grp045, grp046, grp048, grp049, grp050, grp051, 
      grp052, grp053, grp054
    ];
    
    await Promise.all(groups.map(group => group.save()));


    // Create guests for the groups
    const guests = [
      {
        fullName: "Dee Granville",
        welcomeDinnerRsvp: "Invited",
        group: grp001._id,
      },
      {
        fullName: "Dan Granville",
        welcomeDinnerRsvp: "Invited",
        group: grp001._id,
      },
      {
        fullName: "Ann Erickson",
        welcomeDinnerRsvp: "Invited",
        group: grp002._id,
      },
      {
        fullName: "Mark Erickson",
        welcomeDinnerRsvp: "Invited",
        group: grp002._id,
      },
      {
        fullName: "Suzanne Rothberg",
        welcomeDinnerRsvp: "Invited",
        group: grp003._id,
      },
      {
        fullName: "Dave Rothberg",
        welcomeDinnerRsvp: "Invited",
        group: grp003._id,
      },
      {
        fullName: "Evie Rothberg",
        welcomeDinnerRsvp: "Invited",
        group: grp003._id,
      },
      {
        fullName: "Cora Rothberg",
        welcomeDinnerRsvp: "Invited",
        group: grp003._id,
      },
      {
        fullName: "Hanna Rothberg",
        welcomeDinnerRsvp: "Invited",
        group: grp003._id,
      },
      {
        fullName: "Sunny Band",
        welcomeDinnerRsvp: "Invited",
        group: grp004._id,
      },
      {
        fullName: "Cody Boland",
        welcomeDinnerRsvp: "Invited",
        group: grp004._id,
      },
      {
        fullName: "Sayrn Horikawa",
        welcomeDinnerRsvp: "Invited",
        group: grp005._id,
      },
      {
        fullName: "Brandi Horikawa",
        welcomeDinnerRsvp: "Invited",
        group: grp005._id,
      },
      {
        fullName: "Emmett Horikawa",
        welcomeDinnerRsvp: "Invited",
        group: grp005._id,
      },
      {
        fullName: "Ami Stuart",
        welcomeDinnerRsvp: "Invited",
        group: grp006._id,
      },
      {
        fullName: "Chris Stuart",
        welcomeDinnerRsvp: "Invited",
        group: grp006._id,
      },
      {
        fullName: "Phil Erickson",
        welcomeDinnerRsvp: "Not Invited",
        group: grp007._id,
      },
      {
        fullName: "Lori Erickson",
        welcomeDinnerRsvp: "Not Invited",
        group: grp007._id,
      },
      {
        fullName: "Todd Shively",
        welcomeDinnerRsvp: "Invited",
        group: grp008._id,
      },
      {
        fullName: "Chris Woods-Shively",
        welcomeDinnerRsvp: "Invited",
        group: grp008._id,
      },
      {
        fullName: "Tristan Metcalf",
        welcomeDinnerRsvp: "Not Invited",
        group: grp009._id,
      },
      {
        fullName: "Ally Metcalf",
        welcomeDinnerRsvp: "Not Invited",
        group: grp009._id,
      },
      {
        fullName: "Max Johnson",
        welcomeDinnerRsvp: "Not Invited",
        group: grp010._id,
      },
      {
        fullName: "Taylor Johnson",
        welcomeDinnerRsvp: "Not Invited",
        group: grp010._id,
      },
      {
        fullName: "Steve Rothberg",
        welcomeDinnerRsvp: "Not Invited",
        group: grp011._id,
      },
      {
        fullName: "Tricia Rothberg",
        welcomeDinnerRsvp: "Not Invited",
        group: grp011._id,
      },
      {
        fullName: "Jack Rothberg",
        welcomeDinnerRsvp: "Not Invited",
        group: grp052._id,
      },
      {
        fullName: "Calli Rothberg",
        welcomeDinnerRsvp: "Not Invited",
        group: grp051._id,
      },
      {
        fullName: "Debbie Howard",
        welcomeDinnerRsvp: "Not Invited",
        group: grp012._id,
      },
      {
        fullName: "Michael Howard",
        welcomeDinnerRsvp: "Not Invited",
        group: grp013._id,
      },
      {
        fullName: "Heather Howard",
        welcomeDinnerRsvp: "Not Invited",
        group: grp013._id,
      },
      {
        fullName: "Mike Yost",
        welcomeDinnerRsvp: "Not Invited",
        group: grp014._id,
      },
      {
        fullName: "Lexie Yost",
        welcomeDinnerRsvp: "Not Invited",
        group: grp014._id,
      },
      {
        fullName: "Emma Jones",
        welcomeDinnerRsvp: "Invited",
        group: grp016._id,
      },
      {
        fullName: "Mikaela Gjerstad",
        welcomeDinnerRsvp: "Not Invited",
        group: grp017._id,
      },
      {
        fullName: "Samuel Gjerstad",
        welcomeDinnerRsvp: "Not Invited",
        group: grp017._id,
      },
      {
        fullName: "Joanne Howard",
        welcomeDinnerRsvp: "Not Invited",
        group: grp018._id,
      },
      {
        fullName: "Alex Eterno",
        welcomeDinnerRsvp: "Not Invited",
        group: grp019._id,
      },
      {
        fullName: "Mase Eterno",
        welcomeDinnerRsvp: "Not Invited",
        group: grp019._id,
      },
      {
        fullName: "Latane Oordt",
        welcomeDinnerRsvp: "Not Invited",
        group: grp021._id,
      },
      {
        fullName: "CJ Oordt",
        welcomeDinnerRsvp: "Not Invited",
        group: grp021._id,
      },
      {
        fullName: "Marion McMuldren",
        welcomeDinnerRsvp: "Not Invited",
        group: grp022._id,
      },
      {
        fullName: "Bob Flippen",
        welcomeDinnerRsvp: "Not Invited",
        group: grp022._id,
      },
      {
        fullName: "Haley Barsa",
        welcomeDinnerRsvp: "Not Invited",
        group: grp023._id,
      },
      {
        fullName: "Ray Barsa",
        welcomeDinnerRsvp: "Not Invited",
        group: grp023._id,
      },
      {
        fullName: "Allie Dietrich",
        welcomeDinnerRsvp: "Not Invited",
        group: grp024._id,
      },
      {
        fullName: "Jacob Goult",
        welcomeDinnerRsvp: "Not Invited",
        group: grp024._id,
      },
      {
        fullName: "John Hanna",
        welcomeDinnerRsvp: "Not Invited",
        group: grp025._id,
      },
      {
        fullName: "Emily Tengblad-Kreft",
        welcomeDinnerRsvp: "Invited",
        group: grp026._id,
      },
      {
        fullName: "Selena Schryvers",
        welcomeDinnerRsvp: "Not Invited",
        group: grp027._id,
      },
      {
        fullName: "Kristin Colburn",
        welcomeDinnerRsvp: "Not Invited",
        group: grp028._id,
      },
      {
        fullName: "Dave Colburn",
        welcomeDinnerRsvp: "Not Invited",
        group: grp028._id,
      },
      {
        fullName: "Larry Gogenola",
        welcomeDinnerRsvp: "Not Invited",
        group: grp029._id,
      },
      {
        fullName: "Ryan Flannery",
        welcomeDinnerRsvp: "Not Invited",
        group: grp030._id,
      },
      {
        fullName: "Jodi Flannery",
        welcomeDinnerRsvp: "Not Invited",
        group: grp030._id,
      },
      {
        fullName: "Esther Centers",
        welcomeDinnerRsvp: "Not Invited",
        group: grp031._id,
      },
      {
        fullName: "Scott Centers",
        welcomeDinnerRsvp: "Not Invited",
        group: grp031._id,
      },
      {
        fullName: "Cody McDonald",
        welcomeDinnerRsvp: "Not Invited",
        group: grp032._id,
      },
      {
        fullName: "Kara McDonald",
        welcomeDinnerRsvp: "Not Invited",
        group: grp032._id,
      },
      {
        fullName: "David Erickson",
        welcomeDinnerRsvp: "Not Invited",
        group: grp033._id,
      },
      {
        fullName: "Laura Erickson",
        welcomeDinnerRsvp: "Not Invited",
        group: grp033._id,
      },
      {
        fullName: "Phillip Marks",
        welcomeDinnerRsvp: "Not Invited",
        group: grp034._id,
      },
      {
        fullName: "Avalon Dunbar",
        welcomeDinnerRsvp: "Not Invited",
        group: grp035._id,
      },
      {
        fullName: "Joyce Juntunen",
        welcomeDinnerRsvp: "Not Invited",
        group: grp036._id,
      },
      {
        fullName: "Richard Juntunen",
        welcomeDinnerRsvp: "Not Invited",
        group: grp036._id,
      },
      {
        fullName: "Caroline Thompson",
        welcomeDinnerRsvp: "Not Invited",
        group: grp037._id,
      },
      {
        fullName: "Claire Canfield",
        welcomeDinnerRsvp: "Not Invited",
        group: grp037._id,
      },
      {
        fullName: "Mackenzie Granville",
        welcomeDinnerRsvp: "Invited",
        group: grp038._id,
      },
      {
        fullName: "Emily Barretta",
        welcomeDinnerRsvp: "Invited",
        group: grp039._id,
      },
      {
        fullName: "James Holohan",
        welcomeDinnerRsvp: "Invited",
        group: grp039._id,
      },
      {
        fullName: "Denise Granville",
        welcomeDinnerRsvp: "Not Invited",
        group: grp040._id,
      },
      {
        fullName: "Matt Granville",
        welcomeDinnerRsvp: "Not Invited",
        group: grp040._id,
      },
      {
        fullName: "Samantha Granville",
        welcomeDinnerRsvp: "Not Invited",
        group: grp041._id,
      },
      {
        fullName: "Suzy Thompson",
        welcomeDinnerRsvp: "Not Invited",
        group: grp042._id,
      },
      {
        fullName: "Jim Thompson",
        welcomeDinnerRsvp: "Not Invited",
        group: grp042._id,
      },
      {
        fullName: "Natalie Granville",
        welcomeDinnerRsvp: "Not Invited",
        group: grp043._id,
      },
      {
        fullName: "Jacob Granville",
        welcomeDinnerRsvp: "Not Invited",
        group: grp044._id,
      },
      {
        fullName: "Rachael Jennelly",
        welcomeDinnerRsvp: "Not Invited",
        group: grp044._id,
      },
      {
        fullName: "Emma Thompson",
        welcomeDinnerRsvp: "Not Invited",
        group: grp045._id,
      },
      {
        fullName: "Hunter Weiss",
        welcomeDinnerRsvp: "Not Invited",
        group: grp048._id,
      },
      {
        fullName: "Megan Weiss",
        welcomeDinnerRsvp: "Not Invited",
        group: grp048._id,
      },
      {
        fullName: "Brett Rothberg",
        welcomeDinnerRsvp: "Invited",
        group: grp049._id,
      },
      {
        fullName: "Billie Rothberg",
        welcomeDinnerRsvp: "Not Invited",
        group: grp053._id,
      },
      {
        fullName: "Casey Rothberg",
        welcomeDinnerRsvp: "Not Invited",
        group: grp054._id,
      },
      {
      fullName: "Chris Burns",
      welcomeDinnerRsvp: "Not Invited",
      group: grp054._id,
      },
      {
        fullName: "James Erickson",
        welcomeDinnerRsvp: "Not Invited",
        group: grp050._id,
      },
      {
        fullName: "Charlotte Erickson",
        welcomeDinnerRsvp: "Not Invited",
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