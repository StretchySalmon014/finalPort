import Proj1 from "../imgs/pokedeck.png";
import pokeball from "../imgs/pokeball2.png";
import cat from "../imgs/spetify.png";
import spet1 from "../imgs/spet1.png";
import spet2 from "../imgs/spet2.png";
import spet3 from "../imgs/spet3.png";
import pokedeck2 from  "../imgs/pokedeck2.png";
import pokedeck3 from  "../imgs/pokedeck3.png";
import bakery1 from  "../imgs/bakery1.png";
import bakery2 from  "../imgs/bakery2.png";
import bakery3 from  "../imgs/bakery3.png";
import bakery4 from  "../imgs/bakery4.png";
import board2 from  "../imgs/storyboard2.png";
import board from  "../imgs/storyboard.png";
import board3 from  "../imgs/storyboard3.png";
import board4 from  "../imgs/storyboard4.png";
import construction from "../imgs/construction.png"

export const ProjectList = [
    {
      name: "MyPokeDeck",
      image: Proj1,
      image2: pokeball,
      image3: pokedeck2,
      image4: pokedeck3,
      instructions: "Click Pokeball",
      description: "My PokeDeck is a project I built for the CSCI 1300 Development Assignment. The assignment's motivation was to better understand React and its capabilities to manage state and render such state throughout a user’s session. The main requirements of the project included creating a theme for my list-based interface and an aggregator interface that included at least 2 filtering categories, 1 sorting feature, an aggregator section (such as a cart or deck), and 12 item cards that displayed an item’s image, categories that our filters used, sortable fields, a property that would be aggregated (such as price), and a button to add/remove from an aggregator.             The current project has 15 pokemon available that all have attributes such as type, a pokemon’s ability, its generation, and a CP level (inspired by Pokemon Go). The available pokemon can be sorted by CP and/or filtered by Generation and Type. The aggregator in this assignment is a deck of pokemon–which is currently unbounded in size. Lastly, the property that is aggregated is the cumulative CP of the chosen pokemon within a user’s deck.",
      building: "Building this project was relatively difficult. At the time of creating this project, I had not programmed in React in over a year. Granted, I had just completed a prior React lab; however, the result of the prior lab met the minimal functionality and was not at all aesthetically pleasing. With this, I decided to start from scratch. For the sake of time, I reduced the scale of the project in terms of functionality and content. Initially, I thought to include more than 15 pokemon and enforce a limit to a user’s deck size; however, I thought that these features could be implemented later on if I chose to iterate on this project. The project is relatively simple. There are state of the project is defined by  a list of pokeItems that are a result of parsing a custom JSON object containing information for all the attributes on display and pokemon art. From there the state is also assisted by the inclusion of various boolean values that change throughout the life-time of the page. For example, if a user was to select a filter for Fire type Generation 1 pokemon the byFire and byGen1 variables in our state will be set to reflect such change. Additionally, this project is helped immensely by the useReducer hook. The page is constructed by piecing together components used to represent the Card, Filters, Home page, and Header.",
      lesson: "Overall this project was remarkably worthwhile and entertaining. The biggest regrets that I still have regarding this project are that I did not iterate on previous work, such as my React Lab submission, and the fact that same functionality has yet to be implemented. If I were to continue iterating on this project I would implement a various things such as: constraining the size of a user’s deck, expanding the available pokemon, adding filters, and displaying the average CP within a deck rather than simplifying adding up the CP within a deck.",
      skills: "React - Node.js ",
      link: "https://github.com/StretchySalmon014/pokemon",
      websiteLink: "https://pokemon-gamma-gules.vercel.app/",
    },
    {
      name: "Spetify",
      image: spet1,
      image2: cat,
      image3: spet2,
      image4: spet3,
      description: "Spetify is a lab submission intended for the 2nd CSCI 1300 lab entitled Hi-fi Protyping with Figma. In this lab, we were tasked with recreating or modifying our favorite app or simple user interface. Spetify is heavily inspired by Spotify. In this case, Spetify is Spotify tailored for pets! This lab was intended to have students build familiarity with Figma, a collaborative prototyping software design tool both within academic and professional contexts. For this lab, we were highly encouraged to experiment with features such as making separate frames, creating shapes, adding effects, grouping elements, choosing color palettes, and sharing our final prototypes.",
      building: "Completing this lab was not difficult; rather, it felt like a great opportunity to experiment with Figma. This assignment was completed in a group of students during UIUX Camp–a day dedicated to complete the first 3 labs in CSCI 1300–and thus proved a valuable experience collaborating with other students within the course. This experience also allowed me to gain relevant experience that was applicable to later projects within CSCI 1300.Creating these mock-ups provided relevant experience creating interactive prototypes, components, grids, and community-made icons within Figma",
      lesson: "This lab assignment was fundamental in building my skills working in Figma; however, I do not see myself re-visiting this assignment, unless I choose to implement this into a fully functional application.",
      skills: "Figma - High-Fi Protoytping",
      link: "https://www.figma.com/file/FtXfXnpVy8Z20rsrDk3YQ1/SPetify?node-id=0%3A1&t=j0b55sIDwLzOMPd6-1",
      websiteLink: "https://www.figma.com/file/FtXfXnpVy8Z20rsrDk3YQ1/SPetify?node-id=0%3A1&t=j0b55sIDwLzOMPd6-1",
      
    },
    {
      name: "Testing & Eye Tracking",
      image: bakery1,
      image2: bakery2,
      image3: bakery3,
      image4: bakery4,
      description: "These Figma prototypes do not have a specific name; rather, these Figma prototypes are a part of the  CSCI 1300 A/B Testing + Eye Tracking project that was created to build a student’s understanding of the value of quantitative and qualitative user tests for evaluating different UI designs. There were 5 parts to this specific part of the project. First, we had to create student groups to conduct our eye tracking tests, redesign a given UI, collect data, and hand in this project. Our main task was to take a given bakery UI and create two new versions (A and B) of it using design principles such as Hierarchy, Consistency, Accessibility, and User Control. After creating two distinct high-fi prototypes for a new bakery UI we had to prepare for user testing by both agreeing upon a hypothesis and gathering two testers. In order to conduct these eye-tracking tests we enlisted two people to use these prototypes to complete simple tasks such as reporting the hours of operation for a given page or adding 3 items to a cart. Finally, in order to analyze our eye tracking data, we generated a heatmap (a still image that depicted where our participants’ gazes were fixed) and an animated replay of their gaze motion, both overlaid on our interfaces to determine what interface elements test participants were looking at.",
      building: "This specific project was interesting with respect to both the building process and the testing phase. Firstly, this project iterated well upon previous assignments, such as the High-Fi Lab (Spetify) in regard to the team-oriented Figma development task. Whatsmore, this project was a great opportunity to apply our knowledge of fundamental design principles presented during previous class lectures. The most interesting aspect of this project was the testing process. Firstly, recruiting our participants was a fun challenge, and the technology used to conduct the test was truly amazing.",
      lesson: "Upon reflecting on this project, I would say there are 2 big takeaways from this project. First, this project was a great practice in developing and testing new UIs that are most effective and accessible to users. However, if I were to do this project again, I would allocate more time to creating more distinct UIs by changing the color palette, adding more content (more text than images or vice versa), or changing the size of the content on the page. Secondly, I would have taken the time to create more complex tasks for test participants to complete–hopefully, this would give us more insight to the differences between both our UIs.",
      skills: "Figma - High-Fi Prototyping - User Testing",
      link: "https://www.figma.com/file/AV59vIrFmBKUyusjmk3kLu/PairB?node-id=0%3A1&t=JBTLSl2ox6kNyxle-1",
      websiteLink: "https://www.figma.com/file/AV59vIrFmBKUyusjmk3kLu/PairB?node-id=0%3A1&t=JBTLSl2ox6kNyxle-1",
    },
    {
      name: "Personas & Storyboarding",
      image: board4,
      image2: board2,
      image3: board3,
      image4: board,
      instructions: "Explore",
      description: "This project is the first project given in CSCI 1300 entitled Personas and Storyboarding.  For this project I was tasked with observing real users interacting with a chosen interface, interviewing these individuals about their experiences, creating personas based on these users, and illustrating a storyboard for one of the created personas. This is a classic UX task intended to provide designers with an idea of who the customer/user that will use their product. For this project, my chosen interfaces were the washers/dryers within my dorm. I specifically chose to investigate how students used the washers and dryers within my dorm given that half of these machines were newly installed and the payment machines did not charge for laundry. Given these factors, of new machines and a broken payment system, there were cases of students not knowing how to start the machine, not knowing what to do when the payment box presented an error, and not knowing whether they needed an ID to clean their laundry. For context, the current process of simply placing one’s laundry in a machine and choosing a cycle is different from the previous year in which a student would have to swipe on a separate payment prior to selecting a cycle. Previously, one would have to pay for laundry, but now the laundry is free. There were multiple variables that were changed between now and the last year.",
      building: "Gathering observations, interviewing users, and creating personas were definitely fun. However, this project was haphazardly put together. My biggest regret was piecing together this present page prior to the deadline without much planning behind the theme or structure of the page. It is even evident that the purpose of this page was not flushed out at the time of publishing. Initially, I thought this Personas and Storybuiliding display page would be used for my final portfolio–however, this is clearly not the case as of now. Building the page was my attempt to create a simple HTML+CSS page to turn in. However, I could put more thought into the margins or spacing of the content presented. Furthermore, my handwriting present in the figures throughout the page is not clearly legible. Therefore, if given the opportunity to recreate this Personas and Storyboarding page I would rebuild it in a React and give more thought to the organization and structure of the content.",
      lesson: "Building a page in HTML and CSS may be relatively quick and lightweight; however, after reflecting on this page I would prefer to make the page in React. Furthermore, a lesson that I carry from this page is to more intentional about the layout and presentation of a the content on a given page–rather than just the content.",
      skills: "HTML - CSS",
      link: "https://github.com/StretchySalmon014/personas",
      websiteLink: "https://stretchysalmon014.github.io/personas/website",
    }, {
      name: "Personal Project Loading...",
      image: construction,
      image2: construction,
      image3: construction,
      image4: construction,
      description: "This page will be used to display a personal/class project; however, this page will be updated after anonymized grading is done since this page will link to my personal guthub.",
      building: "For now this page will link to my UIUX github repos.",
      lesson: "Coming Soon",
      skills: "Coming Soon",
      link: "https://github.com/StretchySalmon014",
      websiteLink: "https://github.com/StretchySalmon014",
    },  {
      name: "Personal Project Loading...",
      image: construction,
      image2: construction,
      image3: construction,
      image4: construction,
      description: "This page will be used to display a personal/class project; however, this page will be updated after anonymized grading is done since this page will link to my personal guthub.",
      building: "For now this page will link to my UIUX github repos.",
      lesson: "Coming Soon",
      skills: "Coming Soon",
      link: "https://github.com/StretchySalmon014",
      websiteLink: "https://github.com/StretchySalmon014",
    }
  ];