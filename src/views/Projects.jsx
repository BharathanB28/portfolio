import React, { useEffect, useState, useContext } from 'react'
import './porjects.css'
import { ThemeContext } from "../themeProvider";
function Projects() {
  const projects = [
    {
      "type": "full",
      "title": "Markdown Viewer",
      "description": "The React Markdown Viewer Project is a dynamic web application built using React.js, a popular JavaScript library for building user interfaces. This project serves as a versatile tool for rendering Markdown content in a visually appealing and interactive manner.",
      "toolsUsed": ["MongoDB", "Express.js", "React", "Node.js"],
      "image": "https://i.postimg.cc/GpbwsSq6/markdown-Viewer.jpg",
      "sourceCode": "https://github.com/BharathanB28/react-markdown-frontend",
      "liveDemo": "https://reactmarkdownviewer.netlify.app/"
    },
    {
      "type": "full",
      "title": "StoryVerse",
      "description": "StoryVerse is an innovative online platform designed to foster creativity and storytelling. It serves as a vibrant community hub where users can both indulge in captivating narratives penned by fellow enthusiasts and craft their own literary masterpieces.",
      "toolsUsed": ["MongoDB", "Express.js", "React", "Node.js"],
      "image": "https://i.postimg.cc/ZqjkPFQn/book-Story.jpg",
      "sourceCode": "https://github.com/BharathanB28/story_book_frontend",
      "liveDemo": "https://bookstory.netlify.app/"
    },
    {
      "type": "full",
      "title": "CRM",
      "description": "Led the development and implementation of a comprehensive CRM system aimed at optimizing customer interactions and enhancing business relationships.Customization of CRM software to align with organizational objectives.",
      "toolsUsed": ["Json Token", "React", "Node.js","Nodemiler","Authorization"],
      "image": "https://i.postimg.cc/P5skdqZX/crm.jpg",
      "sourceCode": "https://github.com/BharathanB28/crm_frontend",
      "liveDemo": "https://unique-kelpie-dbf54e.netlify.app/"
    },
    {
      "type": "full",
      "title": "Automotive Service Management",
      "description": "I spearheaded a comprehensive car service project aimed at optimizing efficiency, enhancing customer satisfaction, and streamlining operations within the automotive service industry.",
      "toolsUsed": ["React", "Node.js","Authorization"],
      "image": "https://i.postimg.cc/JnhfpHwq/service-Up.jpg",
      "sourceCode": "https://github.com/BharathanB28/carService_Frontend",
      "liveDemo": "https://carserviceup.netlify.app/"
    },
    {
      "type": "mini",
      "title": "CRUD App with Axios",
      "description": "A React application implementing CRUD operations with Axios.read,write,delete and update",
      "toolsUsed": ["React", "Axios"],
      "image": "https://i.postimg.cc/SK6jZzpH/crud.jpg",
      "sourceCode": "https://github.com/BharathanB28/Guvi/tree/master/day30/react_axios_crud",
      "liveDemo": "https://653ea6d9b4c3ec22ee2635dd--famous-bubblegum-cc0a74.netlify.app/"
    },
    {
      "type": "mini",
      "title": "Rest Countries Weather",
      "description": "Displaying weather information for different countries with flag and capital.",
      "toolsUsed": ["javascript", "REST Countries API"],
      "image": "https://i.postimg.cc/NFstkp6P/weather.jpg",
      "sourceCode": "https://github.com/BharathanB28/Guvi/tree/master/day17/RestCountries%26WeatherAPI",
      "liveDemo": "https://6538c1206ae3d05ebd2c6b15--playful-pastelito-e96e67.netlify.app/"
    },
    {
      "type": "mini",
      "title": "Advice App",
      "description": "Revolutionary web application designed to provide users with instant access to a wealth of insightful advice, guidance, and wisdom.",
      "toolsUsed": ["javascript", "API"],
      "image": "https://i.postimg.cc/MTjDv5kg/advice.jpg",
      "sourceCode": "https://github.com/BharathanB28/Guvi/tree/master/day20/API-3",
      "liveDemo": "https://653fa461a367ef1f0e76ae11--inspiring-daifuku-0849d8.netlify.app/"
    },
    {
      "type": "mini",
      "title": "Store",
      "description": " This ambitious endeavor encompassed a wide array of strategic initiatives aimed at delivering a seamless and feature-rich shopping experience to users.",
      "toolsUsed": ["Javascript", "External API"],
      "image": "https://i.postimg.cc/sxdJSWsx/api.jpg",
      "sourceCode": "https://github.com/BharathanB28/Guvi/tree/master/day20/API-1",
      "liveDemo": "https://653fa3b06ef3150d6c7b372a--thunderous-salamander-670f72.netlify.app/"
    },
    {
      "type": "mini",
      "title": "Blogs Platform",
      "description": " A blog platform created with React and Router for seamless navigation to Zen class some blogs to my web site...",
      "toolsUsed": ["React js","Router"],
      "image": "https://i.postimg.cc/WbxrYpTM/react-Router.jpg",
      "sourceCode": "https://github.com/BharathanB28/Guvi/tree/master/day26/react_router_task",
      "liveDemo": "https://654cf8024cf70163090f567c--jovial-tartufo-30acbb.netlify.app/"
    },
    {
      "type": "mini",
      "title": "Price Card Generator",
      "description": "A simple utility for generating price cards with total price and quanity using React",
      "toolsUsed": ["Use state", "CSS", "React"],
      "image": "https://i.postimg.cc/4drB4tjB/price-Card.jpg",
      "sourceCode": "https://github.com/BharathanB28/Guvi/tree/master/day28/shopping_cart",
      "liveDemo": "https://65474a4ef16551210a2624e2--fancy-stroopwafel-4137a9.netlify.app/"
    },
    
    {
      "type": "mini",
      "title": "Calculator App",
      "description": "A basic calculator application using DOM manipulation in JavaScript.Normal Math function..",
      "toolsUsed": ["DOM", "JavaScript"],
      "image": "https://i.postimg.cc/Jnx1H9f2/calculator.jpg",
      "sourceCode": "https://github.com/BharathanB28/Guvi/tree/master/day15/DOM%20Calculator",
      "liveDemo": "https://653778df292c8640494d525d--aquamarine-marigold-1ddd40.netlify.app/"
    },
    {
      "type": "mini",
      "title": "My Todo App",
      "description": "This Todo app project encompassed a range of features and functionalities tailored to meet the diverse needs of users.",
      "toolsUsed": ["HTML", "CSS", "React Hooks"],
      "image": "https://i.postimg.cc/vZhvCChY/todo.jpg",
      "sourceCode": "https://github.com/BharathanB28/Guvi/tree/master/day25/todo-app",
      "liveDemo": "https://654258beaa211e0c58880744--remarkable-gelato-808768.netlify.app/"
    }
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [filterType, setFilterType] = useState(null);

  const itemsPerSlide = {
    lg: 4,
    md: 2,
    sm: 1
  };

  const handleCarouselClick = (index) => {
    setActiveIndex(index);
  };

  const handleFilter = (type) => {
    setFilterType(type);
  };

  const chunkProjects = projects.reduce((chunks, project, index) => {
    const chunkIndex = Math.floor(index / itemsPerSlide.lg);

    if (!chunks[chunkIndex]) {
      chunks[chunkIndex] = [];
    }

    chunks[chunkIndex].push(project);

    return chunks;
  }, []);

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const filteredProjects = filterType ? projects.filter(project => project.type === filterType) : projects;

  const chunkFilteredProjects = filteredProjects.reduce((chunks, project, index) => {
    const largeDevice = Math.floor(index / itemsPerSlide.lg);
    const mediumDevice = Math.floor(index / itemsPerSlide.md);
    const smallDevice = Math.floor(index / itemsPerSlide.sm);
  
    let chunkIndex;
    if (windowWidth < 576) {
      chunkIndex = smallDevice;
    } else if (windowWidth < 992) {
      chunkIndex = mediumDevice;
    } else {
      chunkIndex = largeDevice;
    }
  
    if (!chunks[chunkIndex]) {
      chunks[chunkIndex] = [];
    }
  
    chunks[chunkIndex].push(project);
  
    return chunks;
  }, []);
  
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <section id='projects' className={
      theme.state.darkMode ? "pb-20 bg-fixed bg-gray-100" : "pb-20 bg-black"
    }>
      <h2
          className={
            darkMode
              ? "text-5xl font-bold px-4 md:px-0 text-center pt-10 pb-10"
              : "text-5xl font-bold px-4 md:px-0 text-center text-white pt-10 pb-10"
          }
        >
          Projects
        </h2>
        <div className='flex justify-center'>
        <div className='filter-buttons space-x-5 mt-2 mt-sm-1'>
          <button className='bg-blue-500 text-white px-4 py-2 w-15 rounded-md hover:bg-indigo-400' onClick={() => handleFilter(null)}>All</button>
          <button className='bg-blue-500 text-white px-4 py-2 w-35 rounded-md hover:bg-indigo-400' onClick={() => handleFilter('full')}>Full Stack Projects</button>
          <button className='bg-blue-500 text-white px-4 py-2 w-30 rounded-md hover:bg-indigo-400' onClick={() => handleFilter('mini')}>Mini Projects</button>
        </div>
      </div>

      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          {Array.from({ length:chunkFilteredProjects.length }).map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={index}
              className={index === activeIndex ? "active custom-indicator" : "custom-indicator"}
              aria-label={`Slide ${index + 1}`}
              onClick={() => handleCarouselClick(index)}
            ></button>
          ))}
        </div>
        <div className="carousel-inner">
          {chunkFilteredProjects.map((chunk, chunkIndex) => (
            <div key={chunkIndex} className={`carousel-item ${chunkIndex === activeIndex ? "active" : ""}`}>
              <div className="projects-container">
                {chunk.map((project, index) => (
                  <div key={index} className="project-card">
                    <h2 className='project-title'>{project.title}</h2>
                    <img className='img' src={project.image} alt={project.title} />
                    <p className='project-desc'>{project.description}</p>
                    <div className="tools-used">
                      <p>Tools Used: {project.toolsUsed.join(', ')}</p>
                    </div>
                    <div className="project-links">
                      <a href={project.sourceCode} target="_blank" rel="noopener noreferrer">Source Code</a>
                      <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">Live Demo</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className='icon-color'>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            {/* <span>
              <svg xmlns="http://www.w3.org/2000/svg" height="50" width="50" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>
            </span> */}
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            {/* <span>
              <svg xmlns="http://www.w3.org/2000/svg" height="50" width="50" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
            </span> */}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Projects;