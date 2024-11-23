import ProjectCard from "./ProjectCard";

const projectData = [
  {
    title: "P2P File Sharing",
    repo: "P2PFS",
    date: "September 2024",
    description: "A (mostly) decentralized peer to peer file sharing system.",
    skills: [
      "Java",
      "Threads",
      "Sockets",
      "Files",
      "TCP",
      "Decentralized",
      "Overlay Networks",
    ]
  },
  {
    title: "Transport Protocol",
    repo: "rdt",
    date: "November 2024",
    description: "A custom connected-oriented transport protocol.",
    skills: [
      "Golang",
      "Threads",
      "Sockets",
      "UDP",
      "Pipelining",
    ]
  },
  {
    title: "Grammar Normalizer",
    repo: "cfgnorm",
    date: "March 2024",
    description: "A tool that puts context-free grammars in Chomsky normal form.",
    skills: [
      "Python",
      "Parsing",
      "Context-Free Grammars",
    ],
  },
  {
    title: "Chatroom",
    repo: "chatapp",
    date: "October 2024",
    description: "A chatroom application with DM functionality.",
    skills: [
      "Golang",
      "Threads",
      "Sockets",
      "TCP",
    ]
  },
  {
    title: "WebConquid",
    repo: "ConquidWeb",
    date: "2023-2024",
    description: "A port of Conquid to the web, with multiplayer support.",
    skills: [
      "React",
      "Redux",
      "MongoDB",
      "WebSocket",
      "Express",
      "JSON Web Token",
    ]
  },
  {
    title: "Brainf*** Interpreter",
    repo: "brainfk",
    date: "February 2024",
    description: "An optimized Brainf*** interpreter.",
    skills: [
      "C++",
      "Parsing",
      "Interpreters",
    ]
  },
  {
    title: "Digit Recognizer",
    link: "https://www.kaggle.com/code/teerthpatel1701/mnist-competition",
    date: "2023",
    description: "A neural network that recognizes handwritten digits as one of 0-9.",
    skills: [
      "PyTorch",
      "Convolutional Neural Networks",
      "Computer Vision",
    ]
  },
  {
    title: "Disaster Tweet Classifier",
    link: "https://www.kaggle.com/code/teerthpatel1701/tweet-disaster-competition",
    date: "2023",
    description: "A machine learning model that identifies disaster-related tweets.",
    skills: [
      "Transformers",
      "Transfer Learning",
      "Natural Language Processing",
    ]
  },
  {
    title: "Conquid",
    repo: "ConquidPy",
    date: "November 2021",
    description: 
    "An implemention of a novel strategy game by @Pqvqn, optimizing processing with graph algorithms.",
    skills: [
      "Python",
      "Tkinter",
      "Graphs",
    ]
  },
]

function Projects() {
  return (
    <div style={{
      display: 'flex',
      flexBasis: '1000px',
      flexWrap: 'wrap',
      gap: '20px',
      justifyContent: 'center',
      alignContent: 'flex-start',
      marginTop: '20px',
      marginBottom: '20px',
    }}>
      {projectData.map(project => (
        <ProjectCard key={project.repo} {...project} />
      ))}
    </div>
  );
}

export default Projects;