
/* Change this file to get your personal Portfolio */
//Surge URL : http://lucky-trade.surge.sh/
//Domain URL : http://thisurudeesan.tech/
// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  title: "Hi all I'm Thisuru",
  subTitle: emoji("A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native / Flutter and some other cool libraries and frameworks"),
  resumeLink: ""
  // resumeLink: "https://drive.google.com/open?id=1_Tgpe2PCuJjMhI7ZrgfexUCJ2IbRlGUz"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/Thisuru",
  linkedin: "https://www.linkedin.com/in/thisuru-deesan-069957153/",
  gmail: "thisurudk@gmail.com",
  gitlab: "https://gitlab.com/Thisuru",
  facebook: "https://www.facebook.com/thisuru.deeshan"
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANT TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop full stack web and mobile applications"),
    emoji("⚡ Progressive Web Applications ( PWA )"),
    emoji("⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Flutter Development",  //Insert stack or technology you have experience in
      progressPercentage: "80%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "MERN Stack",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const pinnedProjects = {
  githubConvertedToken: "NTYyNTUyNGViYWU2OWI5OWZmMTMyY2I3YmY3ZDY3YjM1MDc5ZmZhZQ==",
  githubUserName: "Thisuru"
};


// Some Big Projects You have worked with your company

// const bigProjects = {
//   title: "Big Projects",
//   subtitle: "SOME STARTUPS AND COMPANIES THAT I HELP TO CREATE THEIR TECH",
//   projects: [
//     {
//       image: "https://drive.google.com/uc?id=1exWn9T6j8TsfDDHJnS3VR66eP6RiGAfY",
//       link: "http://saayahealth.com/"
//     },
//     {
//       image: "https://drive.google.com/uc?id=1MXoXcQRK-pH8J82wyjCW4SJk5AxJe7tf",
//       link: "http://nextu.se/"
//     }
//   ]
// };

const blogSection = {

  title: "Big Projects",
  subtitle: "Here are some of the big projects I've done.",

  blogs: [
    {
      url: "https://github.com/Thisuru/Offers-Reselling-Products-FlutterApp",
      title: "Knallerfalke: Reselling Deal-Finder app",
      description: "Offers-Reselling-Products-FlutterApp. This app can be download from Play Store and App Store. This is a Fiver Open Source project "
    },
    {
      url: "https://github.com/Thisuru/foodhub_final",
      title: "Food Hub: Food Delivering App",
      description: "Food Hub is developed by using REACT. It includes a REACT NATIVE mobile app."
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications Award Letters and Some Cool Stuff that i have done !",

  achivementsCards: [
    {
      title: "Inter Class Chess Tournament-2006 : 2nd Place",
      description: "Organized by Russian School of Chess(Russian Chess Club) Russian center in Colombo",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Google_Assistant_logo.svg/1200px-Google_Assistant_logo.svg.png",
      footerLink: [
        { name: "Certification", url: "" },
        // { name: "Award Letter", url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing" },
        // { name: "Google Code-in Blog", url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html" }
      ]
    },
    {
      title: "MoraXtream 3.0 Coding competition 2018",
      description: "It was a Coding Competition organized by Moratuwa university IEEE student branch and we got 21st place out of 120+ teams",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Google_Assistant_logo.svg/1200px-Google_Assistant_logo.svg.png",
      footerLink: [{ name: "Certification", url: "" }]
    },

    {
      title: "Getting Started with AWS Machine Learning",
      description: "Learnt the Key problems that Machine Learning can address and ultimately help solve.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Google_Assistant_logo.svg/1200px-Google_Assistant_logo.svg.png",
      footerLink: [
        { name: "Certification", url: "https://coursera.org/share/a86bec468e5deaf331116f2021293c73" },
        // { name: "Final Project", url: "https://pakistan-olx-1.firebaseapp.com/" }
      ]
    }
  ]
};

// Blogs Section

// const blogSection = {

//   title: "Blogs",
//   subtitle: "With Love for Developing cool stuff. i love to write and teach others what i have learned",

//   blogs: [
//     {
//       url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
//       title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
//       description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min."
//     },
//     {
//       url: "https://github.com/Thisuru/foodhub_final",
//       title: "Why REACT Is The Best?",
//       description: "React is a JavaScript library for building the user interface. It is maintained by Facebook and a community of individual developers and companies."
//     }
//   ]
// };

// Talks Sections

const talkSection = {
  title: "Stackoverflow",
  subtitle: emoji("I LOVE TO SHARE MY STACKOVERFLOW ACTIVITIES WITH YOU GUYS. 😅"),

  talks: [
    {
      title: "Checkout My StackOverflow Profiles",
      subtitle: "Stckoverflow activities",
      slides_url: "https://stackoverflow.com/users/9965064/thisuru-karunathilaka",
      event_url: "https://stackexchange.com/users/13806291/thisuru-karunathilaka?tab=top",
      image:
        "https://scontent.fkhi6-1.fna.fbcdn.net/v/t1.0-9/76714032_1730516240415559_1293494289556307968_o.jpg?_nc_cat=103&_nc_ohc=s5f81rdZd6wAQmqUa52YQBA21MjVOy7e-HN9jI7MspRDC-v5ahEouyInQ&_nc_ht=scontent.fkhi6-1.fna&oh=c29141a9a0de7ff2011a8191f5475a78&oe=5E83127C"
    }
  ]
};

// Podcast Section

// const podcastSection = {
//   title: emoji("Podcast 🎙️"),
//   subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

//   // Please Provide with Your Podcast embeded Link
//   podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
// };

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Just want to say hi my inbox is open for all",
  number: "+94-123456789",
  email_address: "thisurudk@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName : "ThisuruDeesan"//Replace "twitter" with your twitter username without @
  
};
export { greeting, socialMediaLinks, skillsSection, techStack, pinnedProjects, achievementSection, blogSection, talkSection, contactInfo , twitterDetails};
