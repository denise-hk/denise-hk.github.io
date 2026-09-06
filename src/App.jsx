import { useEffect, useState } from "react";
import "./App.css";

const projects = [
  {
    title: "FRED'S ESCAPE",
    cover:"/Pics/Fred's escape.png",
        genre: "Escape Room Game",
    tech: "C++ | Blueprints | Unreal Engine 5",
    status: "",
    description:
      "Fred's Escape is an escape room game set inside a cursed shopping mall. Players solve puzzles, interact with the environment, and uncover a way for Fred to escape his curse.",
    technical:
      "Developed in Unreal Engine using Blueprints as part of an ongoing team project. I am responsible for the level design and implement interactive gameplay systems and level mechanics that allow the environment and game scenes to react to different player actions and events.",
    tags: ["Unreal Engine", "C++", "Blueprint", "Team Project", "Level Design","Interactive Systems"],
    playLink: "",
    githubLink: "https://github.com/Forsbergs-Skola/Freds-Escape",
    gifs: [
      "/gifs/FredsEscape-1.gif",
      "/gifs/FredsEscape-2.gif",
      "/gifs/FredsEscape-3.gif",
      ],
    mediaText: "Gameplay GIF will go here",
  },
  {
    title: "STAY UNIQUE",
    cover:"/Pics/Stay unique-cover.png",
    genre: "2D Survival Game",
    tech: "C++ | Raylib",
    status: "",
    description:
      "Stay Unique is a 2D survival game built with Raylib. The player controls a square in a world of circles while enemies attack from all directions. Each collision gradually rounds the player's corners until they become a circle, replacing the traditional health bar with a visual representation of the player's remaining health.",
    technical:
      "Built with C++ and Raylib. I worked on player movement, collision detection, enemy behavior, game states, UI, and the visual damage mechanic.",
    tags: ["C++", "Raylib", "2D Game", "Collision", "Game States"],
    playLink: "",
    githubLink: "https://github.com/Forsbergs-Skola/Raylib-Game.git",
    gifs: [
      "/gifs/stayUnique-start.gif",
      "/gifs/stayUnique-weapon2.gif",
      ],
    mediaText: "Playable game / GIF will go here",
  },
  {
    title: "DOG KNIGHT",
    cover:"/Pics/Dog knight-cover.png",
    genre: "Dungeon Crawler",
    tech: "C# | Unity",
    status: "",
    description:
      "Dog Knight is a dungeon crawler developed as a team project in Unity. Players fight their way through dungeon rooms, defeating enemies to progress through the game.",
    technical:
      "Built in Unity using C#. I designed the game levels, implemented the initial player movement, developed a reward system that is triggered when all enemies in a scene are defeated, and created the scene manager for level progression.",
    tags: ["Unity", "C#", "Dungeon Crawler", "Level Design", "Reward system"],
    playLink: "https://shinyoctagon.itch.io/dogknight-adventure",
    githubLink: "https://github.com/Forsbergs-Skola/DungeonCrawler.git",
    gifs: [
      "/gifs/DogKnight-1.gif",
      "/gifs/DogKnight-2.gif",
      "/gifs/DogKnight-3.gif",
      "/gifs/DogKnight-4.gif",
      ],
    mediaText: "Gameplay GIF will go here",
  },
  
];



function GifGallery({ project }) {
  const [index, setIndex] = useState(0);
  const gifs = project.gifs || [];

  if (gifs.length === 0) {
    return <div className="media-placeholder">{project.mediaText}</div>;
  }

  const previousGif = () => {
    setIndex((index - 1 + gifs.length) % gifs.length);
  };

  const nextGif = () => {
    setIndex((index + 1) % gifs.length);
  };

  return (
    <div className="gif-gallery">
      <img src={gifs[index]} alt={`${project.title} gameplay`} />

      {gifs.length > 1 && (
        <div className="gallery-controls">
          <button onClick={previousGif}>←</button>
          <span>
            {index + 1} / {gifs.length}
          </span>
          <button onClick={nextGif}>→</button>
        </div>
      )}
    </div>
  );
}


function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProfile, setActiveProfile] = useState(null);
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  const currentProjectIndex = selectedProject
  ? projects.findIndex((project) => project.title === selectedProject.title) : -1;

  const previousProject = () => {
    const newIndex = (currentProjectIndex -1 + projects.length) % projects.length;
    setSelectedProject(projects[newIndex]);
  };
  const nextProject = () => {
    const newIndex = (currentProjectIndex +1)% projects.length;

    setSelectedProject(projects[newIndex]);
  };

  return (
    <>
            <header className="hero">
              <div className="hero-content">
                <h1>Denise Hanna Kassab</h1>

                 <button
                      className="menu-toggle"
                      onClick={() => setMenuOpen(!menuOpen)}
                    >
                      ☰
                    </button>

                    <nav className={`navigation ${menuOpen ? "open" : ""}`}>
                      <a href="#about" onClick={() => setMenuOpen(false)}>
                        About Me
                      </a>
                      <a href="#projects" onClick={() => setMenuOpen(false)}>
                        Projects
                      </a>
                    </nav>
                  </div>
                </header>
      <main className="portfolio">
        

              <section id="intro">
                <div className="intro-card">

                  <div className="intro-text">
                    
                    <p className="subtitle">FROM SPACES TO SYSTEMS</p>
                    <h2 className="intro-role"> Game Programmer</h2>

                    <p className="intro-description">
                      I’m a game programmer who enjoys turning ideas into interactive systems. 
                      I’m especially interested in gameplay programming, level design, and building tools that help bring a game together. 
                      I like working at the point where code, design, and player experience meet.
                    </p>
                  </div>

                  <div className="intro-media">
                    <img
                      src="/gifs/FredsEscape-2.gif"
                      alt="Gameplay preview"
                    />
                  </div>

                </div>
              </section>

        <section id="projects">
          <h2 >
             SELECTED GAMES
          </h2>

          <div className="project-gallery">
            {projects.map((project) => (
              <button
                className="project-card"
                key={project.title}
                onClick={() => setSelectedProject(project)}
              >
                <img src={project.cover} alt={project.title} />

                <div className="project-card-info">
                  <h3>{project.title}</h3>
                  <p>{project.genre}</p>

                  <span className="project-tech">
                    {project.tech}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </section>
        <section id="about">
          {/*<h2>About Me</h2>*/}

          <div className="about-layout-new">
            <div className="about-left-column">

              <div className="about-card about-photo-card">
                <img src="/Pics/DeniseHannaKassab.png" alt="Denise Hanna Kassab" />
              </div>
              
              <div className="about-card about-profile-card">
                <h3>PROFILE</h3>

                <p className={activeProfile === "game" ? "profile-highlight" : ""}>
                  Game Programming Student
                </p>

               <p className={activeProfile === "background" ? "profile-highlight" : ""}>
                  Background in Architecture
                </p>

                <p className={activeProfile === "focus" ? "profile-highlight" : ""}>
                  Gameplay Systems | Level Design | Interactive Spaces
                </p>
              </div>

              

            </div>

            <div className="about-card about-background-card">
              <div
                onMouseEnter={() => setActiveProfile("game")}
                onMouseLeave={() => setActiveProfile(null)}
              >
              <h5>Game Programming </h5> 
              <h7>2025–2027 · Stockholm</h7>

              <p>
                I’m currently studying Game Programming at Forsbergs Skola, 
                working both individually and in multidisciplinary teams. 
                My studies cover C++, C#, Unity, Unreal Engine 5, AI programming, 
                networking, and mobile game development.            
               I’m particularly interested in gameplay systems, tools, and level design, 
               and how they come together to shape the player experience. I’m currently 
               looking for internship and junior game programming opportunities.
              </p>
              </div>

              <div
                onMouseEnter={() => setActiveProfile("background")}
                onMouseLeave={() => setActiveProfile(null)}
              >
              <h5>Architecture & Design</h5>
              <p>
                Before moving into game development, I worked as an architect for several years. 
                My background in architecture gave me experience designing spaces around how people move through and experience them — 
                something I now bring into level design and game development.
              </p>

              <h5>CAD & Product Development</h5>
              <p>
                I later expanded into CAD and product development, studying 3D modeling with Creo and SolidWorks.
                 This strengthened my interest in technical problem-solving and eventually 
                helped lead me toward programming and game development.
              </p>
              </div>

              

              <div className="cv-button">
                <a href="/Denise Hanna Kassab_CV.pdf" target="_blank">
                  View CV
                </a>
              </div>
            </div>
          </div>
        </section>

       <section id="contact">
          <div className="contact-row">

            <h2>Let's Connect</h2>

            <div className="contact-links">
              <a href="mailto:denise.h.kassab@hotmail.com">
                Email
              </a>

              <a
                href="https://linkedin.com/in/denise-hannakassab"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/denise-hk"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>

          </div>
        </section>
      </main>
            {selectedProject && (
            <>
            <div
            className="project-overlay"
            onClick={() => setSelectedProject(null)}
            />

          <aside className="project-panel">
             <div className="project-panel-header">
              <h2>{selectedProject.title}</h2>

              <button
                className="panel-close"
                onClick={() => setSelectedProject(null)}
              >
                ×
              </button>
            </div>

            <div className="project-panel-content">
              {selectedProject.status && (
                <p className="status">{selectedProject.status}</p>
              )}

              <GifGallery project={selectedProject} />

              <p>{selectedProject.description}</p>

              <p className="technical-text">
                {selectedProject.technical}
              </p>

              <div className="tags">
                {selectedProject.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <div className="buttons">
                {selectedProject.playLink && (
                  <a
                    href={selectedProject.playLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Play
                  </a>
                )}

                {selectedProject.githubLink && (
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>

            <div className="project-switcher">
              <button onClick={previousProject}>
                ← Previous Project
              </button>

              <span>
                {currentProjectIndex + 1} / {projects.length}
              </span>

              <button onClick={nextProject}>
                Next Project →
              </button>
            </div>
          </aside>
        </>
      )}
    </>
  );
}

export default App;