import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import Projects from "./Projects";
import Landing from "./landing";
import About from "./about";
import Skills from "./skills";

function App() {
  const [showMore, setShowMore] = useState(false);

  function showMoreT() {
    setShowMore(true)
  }

  function showMoreF() {
    setShowMore(false)
  }
  return (
    <div>
      <Header />
      <Landing />
      <About />
      <Skills />
      <section id="projects">
        <br /><br />
        <div className="container-projects">
          <div class="ProjectsHeading">
            <h1 class="Heading">Projects</h1>
          </div>
          {showMore == true ? <div className="container projects">
            <Projects title="FilmGenie" img="images/filmgenie.png" desc="The most happening movie community for movie geeks." tech="Flutter | Firebase" />
            <Projects title="PokeDex" img="images/pokedex.png" desc="An App for the Pokemon fans." tech="Flutter | Firebase" />
            <Projects title="Netflix Clone" img="images/netflix.jpg" desc="Simplistic Netflix Clone " tech="React" />
            <Projects title="Spotify Clone" img="images/spotify.png" desc="Spotify Clone with login functionality which user playlists " tech="React" />
           <Projects title="Bottle App" img="images/bottle.png" desc="Its a Productivity tool. A project I am currently working on for Bottle Co." tech="Flutter | Firebase" />
           <Projects title="Bottle Backend" img="images/bottle.png" desc="Highly Scalable Backend designed for Bottle." tech="Mongo | Node | Express | AWS | Sockets" /> 
            <Projects title="NoteKeeper" img="images/a.png" desc="Simple WebApp for maintaing notes." tech="MongoDB | Express | React | NodeJS" />
            <Projects title="Dice Game" img="images/dice.png" desc="A minimilistic Game designed for all kinds of people to decide winner between the two by throwing a dice." tech="HTML | CSS | JS" />
            <Projects title="Simon Game" img="images/simon.png" desc="The Famous Simon Game. Test your memory through this game. " tech="HTML | CSS | JS" />
            <Projects title="Warehouse Management App" img="images/jd.jpg" desc="A Warehouse Management App build for JD Bazaar which offers complete solution to all warehouse management related things. " tech="Flutter | Firebase" />

          </div> : <div className="container projects">
          <Projects title="FilmGenie" img="images/filmgenie.png" desc="The most happening movie community for movie geeks." tech="Flutter | Firebase" />
            <Projects title="PokeDex" img="images/pokedex.png" desc="An App for the Pokemon fans." tech="Flutter | Firebase" />
            <Projects title="Netflix Clone" img="images/netflix.jpg" desc="Netflix Clone " tech="React" />
            <Projects title="Spotify Clone" img="images/spotify.png" desc="Spotify Clone with login functionalitya and fetches user playlists " tech="React" />
          
            </div>}
          {showMore != false && <p className="coolStuff" >And many more cool stuffs...</p>}
          <button className="btn_show_more" onClick={showMore == false ? showMoreT : showMoreF}>{showMore == false ? "Show More" : "Show Less"}</button>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
