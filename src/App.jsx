import { useState } from "react";
import "./App.css";

const projects = [
  {
    title: "Stay Unique",
    status: "",
    description:
      "Stay Unique is a 2D survival game built with Raylib. The player controls a square in a world of circles while enemies attack from all directions. Each collision gradually rounds the player's corners until they become a circle, replacing the traditional health bar with a visual representation of the player's remaining health.",
    technical:
      "Built with C++ and Raylib. I worked on player movement, collision detection, enemy behavior, game states, UI, and the visual damage mechanic.",
    tags: ["C++", "Raylib", "2D Game", "Collision", "Game States"],
    playLink: "#",
    githubLink: "https://github.com/Forsbergs-Skola/Raylib-Game.git",
    gifs: [
      "/gifs/stayUnique-start.gif",
      "/gifs/stayUnique-weapon2.gif",
      ],
    mediaText: "Playable game / GIF will go here",
  },
  {
    title: "Dog Knight",
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
  {
    title: "Fred's Escape",
    status: "Ongoing School Project",
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
  return (
    <>
      <header className="hero">
  <div className="hero-content">

    <div className="hero-left">

      <h1>DENISE HANNA KASSAB</h1>

      <div className="hero-bottom">

        <div className="hero-links">
          <a
            href="https://github.com/denise-hk"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/YOUR-LINK"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>

        <nav className="navigation">
          <a href="#about">About Me</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Let's Connect</a>
        </nav>

      </div>

    </div>

  </div>
</header>

      <main className="portfolio">
        <p className="subtitle">Game Programmer</p>

              <section id="about">
                <div className="about-layout">

                  <div className="about-text">
                    <h2>A Little About Me</h2>

                    <p>
                      I'm a game programming student with a background in architecture.
                      I've always enjoyed creating spaces and thinking about how people
                      experience them. Game development felt like a natural next step
                      because it combines creativity with programming in a way I really enjoy.
                    </p>
                  </div>

                  <div className="about-media">
                    <img
                      src="/gifs/FredsEscape-2.gif"
                      alt="Gameplay preview"
                    />
                  </div>

                </div>
            </section>

        <section id="projects">
          <h2>Projects</h2>

          {projects.map((project) => (
            <article className="project" key={project.title}>
              <div className="project-layout">
                <div className="project-info">
                  <h3>{project.title}</h3>
                  {project.status && <p className="status">{project.status}</p>}

                  <h4>About the Game</h4>
                  <p>{project.description}</p>

                  {/* <h4>Technical Work</h4> */}
                  <p className="technical-text">{project.technical}</p>

                  {/* <h4>Technologies</h4> */}
                  <div className="tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <div className="buttons">
                    {project.playLink && <a href={project.playLink}>Play</a>}
                    {project.githubLink && <a href={project.githubLink}>GitHub</a>}
                  </div>
                </div>

                <div className="project-media">
                  <GifGallery project={project} />
                </div>
              </div>
            </article>

          ))}
        </section>

        <section id="contact">
        <h2>Let's Connect</h2>

        <p>
          I'm currently looking for internships and junior game programming
          opportunities. If you'd like to collaborate or learn more about my work,
          feel free to reach out.
        </p>

        <div className="contact-links">
          <a href="mailto:denise.h.kassab@hotmail.com">
            denise.h.kassab@hotmail.com
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
      </section>

      </main>
    </>
  );
}

export default App;