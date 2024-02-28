import React, { useState } from 'react';
import './App.css'; // Assuming you have a CSS file named Portfolio.css for the styles

function App() {
  const [activeLink, setActiveLink] = useState(0);

  const handleLinkClick = (index) => {
    if (activeLink !== index) {
      setActiveLink(index);
      setTimeout(() => {
        // Scroll to the section smoothly after 1 second delay
        document.querySelector(`#section${index}`).scrollIntoView({ behavior: 'smooth' });
      }, 1000);
    }
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <ul className="link-group">
          <li className={`link ${activeLink === 0 ? 'active' : ''}`} onClick={() => handleLinkClick(0)}><a href="#">home</a></li>
          <li className={`link ${activeLink === 1 ? 'active' : ''}`} onClick={() => handleLinkClick(1)}><a href="#">my projects</a></li>
          <li className={`link ${activeLink === 2 ? 'active' : ''}`} onClick={() => handleLinkClick(2)}><a href="#">about me</a></li>
          <li className={`link ${activeLink === 3 ? 'active' : ''}`} onClick={() => handleLinkClick(3)}><a href="#">contact us</a></li>
        </ul>
      </nav>

      {/* Sections */}
      <section id="section0" className={`home-section ${activeLink === 0 ? 'active' : ''}`}>
        {/* Home section content */}
        <h1 class="hero-heading">Hello,i am <br/> Sagir</h1>
        <img src="img/home.jpg" class="home-img" alt=""/>
      </section>

      <section id="section1" className={`project-section ${activeLink === 1 ? 'active' : ''}`}>
        {/* Project section content */}
        <h1 class="project-heading">some of my projects</h1>
    <div class="project-container">
        <div class="project-card">
            <img src="img/project-1.png" class="project-img" alt=""/>
            <div class="project-content">
                <h1 class="project-title">project 01</h1>
                <p class="project-info">
                    GUI DESKTOP CALCULATOR
                </p>
                <div class="project-btn-grp">
                    <button class="project-btn github"></button><a href="">github repo</a>
                    <button class="project-btn live"></button><a href="">see live</a>
                </div>
            </div>
        </div>
        <div class="project-card">
            <img src="img/project-2.png" class="project-img" alt=""/>
            <div class="project-content">
                <h1 class="project-title">project 02</h1>
                <p class="project-info">
                   AI PERSONAL ASSISTANT 
                </p>
                <div class="project-btn-grp">
                    <button class="project-btn github"></button><a href="">github repo</a>
                    <button class="project-btn live"></button><a href="">see live</a>
                </div>
            </div>
        </div>
        <div class="project-card">
            <img src="img/project-3.png" class="project-img" alt=""/>
            <div class="project-content">
                <h1 class="project-title">project 03</h1>
                <p class="project-info">
                   GUI ATM MACHINE
                </p>
                <div class="project-btn-grp">
                    <button class="project-btn github"></button><a href="">github repo</a>
                    <button class="project-btn live"></button><a href="">see live</a>
                </div>
            </div>
        </div>
        <div class="project-card">
            <img src="img/project-4.png" class="project-img" alt=""/>
            <div class="project-content">
                <h1 class="project-title">project 04</h1>
                <p class="project-info">
                GUI AGE CALCULATOR
                </p>
                <div class="project-btn-grp">
                    <button class="project-btn github"></button><a href="">github repo</a>
                    <button class="project-btn live"></button><a href="">see live</a>
                </div>
            </div>
        </div>
    </div>
      </section>

      <section id="section2" className={`about-section ${activeLink === 2 ? 'active' : ''}`}>
        {/* About section content */}
        <div class="about">
        <div class="about-img-container">
            <img src="img/about me.jpg" class="about-img" alt=""/>
            <button class="download-cv-btn"></button><a href="">downlaod cv</a>
        </div>
        <p class="about-info">Hi, I am Sagir.Coding has changed my life and my whole world aswell. It's not just about building apps. Learning to code gave meproblem-solving skills and a way to communicate with others on a technical level. I can also develop websites and use my coding skills to get a better job. And I learned it all by myself where I searched and researched on how to code in diffrent languages. I built my own self-esteem and kept myself motivated. My mom is one of the people who belived in me and supports me for coding. I was a beginner and now a pro , so why not you?..

            <quote>"Practice,Makes Perfect... Every Professional Was Once A Beginner!!</quote></p>
    </div>
{/* <!-- skills --> */}
<div class="skill-section ">
    <h1 class="heading">skills</h1>
    <div class="skills-container">
        <div class="skill-card">
            <img src="img/htm.png" class="skill-img" alt=""/>
            <div class="skill-level">65%</div>
            <h1 class="skill-name">HTML</h1>
            <p class="skill-info">Learned html basics and advanced and obtained 2 certificates</p>
        </div>
        <div class="skill-card">
            <img src="img/cs.png" class="skill-img" alt=""/>
            <div class="skill-level">54%</div>
            <h1 class="skill-name">CSS</h1>
            <p class="skill-info">Learned the basic of css and know how to use it</p>
        </div>
        <div class="skill-card">
            <img src="img/jav.png" class="skill-img" alt=""/>
            <div class="skill-level">43%</div>
            <h1 class="skill-name">JAVASCRIPT</h1>
            <p class="skill-info">Learned about the basics of js and have the basic knowledge</p>
        </div>
        <div class="skill-card">
            <img src="img/py.png" class="skill-img" alt=""/>
            <div class="skill-level">76%</div>
            <h1 class="skill-name">PYTHON</h1>
            <p class="skill-info">Knew more about python advanced and core and even GUI !</p>
        </div>
        <div class="skill-card">
            <img src="img/java.png" class="skill-img" alt=""/>
            <div class="skill-level">44%</div>
            <h1 class="skill-name">JAVA</h1>
            <p class="skill-info">Knew the basics of java and can build android apps with it</p>
        </div>
        <div class="skill-card">
            <img src="img/bash.png" class="skill-img" alt=""/>
            <div class="skill-level">34%</div>
            <h1 class="skill-name">BASH</h1>
            <p class="skill-info">Knew about the basics of bash scripting and cli commands and earned a certificate</p>
</div>
</div>
</div>

    {/* <!-- timeline --> */}
<div class="timeline">
    <h1 class="heading">education and experience</h1>
    <div class="card">
        <div class="card-body">
            <h1 class="card-title">2009-2012</h1>
            <p class="card-detail">In 2009 started to learn about networking and how to browse the internet, I kept learnig till 2012 when i started to have knowledge about computing</p>
        </div>
    </div>
        <div class="card">
            <div class="card-body">
                <h1 class="card-title">2013-2019</h1>
                <p class="card-detail">I kept on learnig about computers and I learned java using my android phone. I got my personal computer in 2018 then I started graphics designs and learned HTML</p>
            </div>
        </div>
            <div class="card">
                <div class="card-body">
                    <h1 class="card-title">2020-2021</h1>
                    <p class="card-detail">I learned python,javasvript,bash,css, and started much more of hacking stuffs to protect my privacy... I joined University and started studying computer science </p>
                </div>
            </div>
                <div class="card">
                    <div class="card-body">
                        <h1 class="card-title">2022-present</h1>
                        <p class="card-detail">I'm still learnig... and if i do not die soon i'll be better</p>
                    </div>
                </div>
</div>
      </section>

      <section id="section3" className={`contact-section ${activeLink === 3 ? 'active' : ''}`}>
        {/* Contact section content */}
        <form class="contact-form">
          <input type="text" name="name" id="name" autocomplete="off" placeholder="name"/>
          <input type="text" name="email" id="email" autocomplete="off" placeholder="email"/>
          <textarea name="msg" id="msg" placeholder="message" autocomplete="off"></textarea>
          <button type="submit" class="form-submit-btn">contact</button>
        </form>
        {/* <!-- map --> */}
    <div class="map">
        <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448181.163742937!2d76.81306771991275!3d28.647279935262464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1639489002410!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
    </div>
      </section>
    </div>
  );
}


export default App;
