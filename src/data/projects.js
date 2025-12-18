// data/projects.js
export const projects = [
  {
    id: 1,
    title: "Self Driving Car Carla",
    smallDescription:"The self-driving car project in CARLA takes place in two parts. First is giving the car 'eyes' with computer vision. We set up and fine-tuned a YOLO model so that the car could spot red lights from its camera images. Then, we integrated and trained a Deep Q-Network model so that the car would make the right decisions and could get to its destination on its own.",
    description: "This project is carried out in a virtual environment called CARLA (Car Learning to Act), the essential goal is to enable autonomous driving in a trajectory while identifying the elements that surround the car. The project is divided into two phases:The first phase is computer vision:,At this stage, a YOLO (You Only Look Once) computer vision model was implemented. After fine tuning and training with traffic light images, the model becomes able to better detect these elements, the images are obtained by launching the car with specific sensors in Carla's environment.,The second phase is to implement the decision-making model:, A deep Q-Network model is integrated and trained so that the car can determine the action that must be taken at each stage in order to reach the final destination",
    tech: ["Python", "tensorflow", "RL", "YOLO", "deep Q network"],
    codeUrl: "https://github.com/safae-smaili/Self-Driving-CARLA-DRL",
    // demoUrl:"https://github.com/",
    category: "AI",
    status: "Completed",
    image: "../../Tesla.png" 
  },
  {
    id: 2,
    title: "Darija to Arabic and English translator ",
    smallDescription:"I'm still working on this project. The idea is to make one model capable of translating into two languages from Darija. The general idea is to create a model with one encoder and two decoders—one for English and the other for Arabic. This way, the translator will be powerful. Once I finish the project, it will be here, insha'Allah.",
    description: "",
    tech: ["Python", "NLP", "Pytorch","Hugging Face"],
    codeUrl: "https://github.com/safae-smaili/Translator-",
    // demoUrl: "https://github.com/",
    category: "NLP",
    status: "In progress",
    image:"../../translation.webp"
  },{
    id:3,
    title:"Restaurant ratings.",
    smallDescription:"In this project I use a multiple linear regression model to determine the best feature to predict the ratings of a restaurant, I use the Yelp data set with is very missy data, the real chalange was understanding and cleaning the data",
    description:"",
    tech:["Python","Data cleaning","MLR"],
    codeUrl:"https://github.com/safae-smaili/Restaurant-ratings",
    category:"ML",
    status:"Completed",
    image:'../../stars.png'
  },
{
    id:4,
    title:"RAG project",
    smallDescription:"At this project I use gemini API to create a chatbot and impelemanting the RAG conceptes to make it generate unswars based on a file i give it to it.",
    description:'',
    tech:['LangChain','RAG','Geminie API'],
    codeUrl:'https://github.com/safae-smaili/RAG_learning-',
    category:'AI',
    status:'Completed',
    image:'../../Rag.png'

},
    {
    id:5,
    title:"Movie website",
    smallDescription:'In this project i fetch the data from an externe API, Implement the cherching taIn this project, I fetch data from an external API and add it to the website. I also create a section to display information about movies, implement searching functions, and add new movies using a form.',
    description:'',
    tech:['React','API','JS'],
    codeUrl:'https://github.com/safae-smaili/movies',
    demoUrl:'https://safae-smaili.github.io/movies/',
    category:'dev',
    status:'Completed',
    image:'../../movies.png'
  },
];
console.log('✅ projects.js loaded');
// {
//     id: 3,
//     title: "Movies website",
//     smallDescription:"a website that fetch movies data from API",
//     description: "a website that fetch movies data from API ",
//     tech: ["React", "js", "css"],
//     github: "https://github.com/safae-smaili/movies",
//     demo: "https://safae-smaili.github.io/movies/",
//     category: "Data Visualization",
//     status: "Completed"
//   },
//   {
//     id: 4,
//     title: "Sentiment Analysis on Reviews",
//     description: "Performed sentiment analysis on product reviews using NLP techniques. Built a classification model to categorize reviews as positive, negative, or neutral.",
//     tech: ["Python", "NLTK", "TensorFlow", "Word2Vec", "Flask"],
//     github: "https://github.com/yourusername/sentiment-analysis",
//     category: "NLP",
//     status: "In Progress"
//   },
//   {
//     id: 5,
//     title: "COVID-19 Data Analysis",
//     description: "Analyzed COVID-19 spread patterns and built time series forecasting models. Created interactive visualizations to track case trends across countries.",
//     tech: ["Python", "Prophet", "Plotly", "Time Series", "Geopandas"],
//     github: "https://github.com/yourusername/covid-analysis",
//     notebook: "https://colab.research.google.com/drive/...",
//     category: "Time Series",
//     status: "Completed"
//   },
//   {
//     id: 6,
//     title: "Image Classification with CNN",
//     description: "Built a convolutional neural network to classify images from the CIFAR-10 dataset. Implemented data augmentation and dropout for better generalization.",
//     tech: ["Python", "TensorFlow", "Keras", "CNN", "OpenCV"],
//     github: "https://github.com/yourusername/image-classification",
//     category: "Deep Learning",
//     status: "Completed",
//     metrics: ["Accuracy: 85%", "Validation Loss: 0.45"]
//   }