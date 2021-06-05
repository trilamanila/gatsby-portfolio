import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Joncin Picol',
  subtitle: 'React FrontEnd Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'Hi, my name is Joncin Picol based in Delaware.',
  paragraphTwo: 'I am a father of two and coding is a passion of mine. ',
  paragraphThree:
    'I enjoy creating modern visually pleasing websites and have been dedicating my time replicating the most popular websites to stay on the cutting edge of frontend developement. My goal is to be able to onboard more people to technology with easy to use front end designs to better daily life.',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'blog.jpg',
    title: '#100DaysOfCode Blog',
    info:
      '#100DaysOfCode Blog was a daily blog of my progression of learning how to code. Day 1 of the challenge was truly my first day of learning how to code back in 2018. The purpose of the blog was to retain as much information as possible by teaching myself what I learned that day. At the same time I was sharing my experience with others doing the challenge and to help keep fellow developers motivated.',
    info2: '',
    url: 'https://trilamanila.com',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'blog.jpg',
    title: 'Sky Daisy Media Sales Letter Funnel',
    info: 'Sky Daisy Media is a website to generate sales leads through long form text messages',
    info2: '',
    url: 'https://skydaisymedia.com',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Amazon Clone',
    info:
      'Amazon clone was created for learning purposes to better understand React. It is a multi page responsive website through React Router. Real time live demo website deployed with Firebase. CSS flexbox, BEM class naming convention, and Material-UI was used for styling compenents. Responsive payment processing with the use of Stripe API.The backend is handled with Express and Cors middleware and the dataase is hosted on Firebase.',
    info2: '',
    url: 'https://fir-ad8ea.web.app/',
    repo: 'https://github.com/trilamanila/amazon', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.jpg',
    title: 'COVID-19 Tracker',
    info:
      'Covid-19 Tracker gave real time data of COVID-19 cases, recovered, and deaths by connecting through an API. Responsive map with interactive circle color indicator. Live demo deployed with Firebase. BEM naming convention, Flexbox, Numeral, and Material UI was used for the styling. React Leaflet was used for the map data and React Chartjs was used for real time graph data.',
    info2: '',
    url: 'https://covid-tracker-25324.web.app',
    repo: 'https://github.com/trilamanila/covid-tracker', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.jpg',
    title: 'iMessage Clone',
    info:
      'iMessage clone was created for learning purposes to better understand React and Redux. Google authentication login through Firebase with unique ID for avatar icon and messages. Backend and database stored with cloud Firestore for messages and chat groups. Real time live demo deployed with Firebase. Redux is the state management used for user login and logout and app chat ids and chat names. Material UI library was used for avatars and icons. Flexbox and BEM naming convention was used for styling compenents.',
    info2: '',
    url: 'https://imessage-clone-4151b.web.app/',
    repo: 'https://github.com/trilamanila/imessage', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project5.jpg',
    title: 'Discord Clone',
    info:
      'Discord clone was created for learning purposes. Google authentication login was through Firebase with unique ID for avatar icon and messages. Backend and database stored with cloud Firestore for messages and chat groups. Real time live demo deployed with Firebase. Redux used for user login and logout and app channel ids and channel names. BEM naming convention, Flexbox, and Material UI was used for styling.',
    info2: '',
    url: 'https://discord-clone-8eaf8.web.app/',
    repo: 'https://github.com/trilamanila/discord', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'www.twitter.com/joncin.picol',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'www.github.com/trilamanila',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
