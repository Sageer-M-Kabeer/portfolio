import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import homeImg from './img/home.jpg'
import bluesuit from './img/bluesuit.jpg'
import java from './img/java.png'
import htm from './img/htm.png'
import py from './img/py.png'
import cs from './img/cs.png'
import jav from './img/jav.png'
import bash from './img/bash.png'




const App = ()  => {

  const [activeLink, setActiveLink] = useState(0);
  

  return (
    <>
  <Header activeLink={activeLink} setActiveLink={setActiveLink} />

      {/* Sections */}
      <section id="section0" className={`home-section ${activeLink === 0 ? 'active' : ''}`}>
        {/* Home section content */}
        <h1 className="hero-heading">Hello,i am <br/> Sagir</h1>
        <img src={homeImg} className="home-img" alt=""/>
      </section>

      <section id="section1" className={`project-section ${activeLink === 1 ? 'active' : ''}`}>
        {/* Project section content */}
        <h1 className="project-heading">some of my projects</h1>
    <div className="project-container">
        <div className="project-card">
            <img src={".img/project-1.png"} className="project-img" alt=""/>
            <div className="project-content">
                <h1 className="project-title">project 01</h1>
                <p className="project-info">
                    GUI DESKTOP CALCULATOR
                </p>
                <div className="project-btn-grp">
                    <button className="project-btn github"><a href="">github repo</a></button>
                    <button className="project-btn live"><a href="">see live</a></button>
                </div>
            </div>
        </div>
        <div className="project-card">
            <img src="img/project-2.png" className="project-img" alt=""/>
            <div className="project-content">
                <h1 className="project-title">project 02</h1>
                <p className="project-info">
                   AI PERSONAL ASSISTANT 
                </p>
                <div className="project-btn-grp">
                    <button className="project-btn github"><a href="">github repo</a></button>
                    <button className="project-btn live"><a href="">see live</a></button>
                </div>
            </div>
        </div>
        <div className="project-card">
            <img src="img/project-3.png" className="project-img" alt=""/>
            <div className="project-content">
                <h1 className="project-title">project 03</h1>
                <p className="project-info">
                   GUI ATM MACHINE
                </p>
                <div className="project-btn-grp">
                    <button className="project-btn github"><a href="">github repo</a></button>
                    <button className="project-btn live"><a href="">see live</a></button>
                </div>
            </div>
        </div>
        <div className="project-card">
            <img src="img/project-4.png" className="project-img" alt=""/>
            <div className="project-content">
                <h1 className="project-title">project 04</h1>
                <p className="project-info">
                GUI AGE CALCULATOR
                </p>
                <div className="project-btn-grp">
                    <button className="project-btn github"><a href="">github repo</a></button>
                    <button className="project-btn live"><a href="">see live</a></button>
                </div>
            </div>
        </div>
    </div>
      </section>

      <section id="section2" className={`about-section ${activeLink === 2 ? 'active' : ''}`}>
        {/* About section content */}
        <div className="about">
        <div className="about-img-container">
            <img src={bluesuit} className="about-img" alt=""/>
            <button className="download-cv-btn"><a href="./img/cs.png" download={cs}>downlaod cv</a></button>
        </div>
        <p className="about-info">Hi I am Sagir Muhammad Kabir, a driven junior full stack developer with 3+ years of experience crafting and managing robust software solutions across various domains. Proficient in Python, JavaScript, HTML, CSS, Tailwind CSS, Java, React.js, and React Native. Currently advancing computer science studies to deepen theoretical knowledge and expand skillset. Committed to delivering intuitive and efficient user experiences while staying abreast of emerging technologies and industry trends
        </p>
    </div>
{/* <!-- skills --> */}
<div className="skill-section ">
    <h1 className="heading">skills</h1>
    <div className="skills-container">
        <div className="skill-card">
            <img src={htm} className="skill-img" alt=""/>
            <div className="skill-level">65%</div>
            <h1 className="skill-name">HTML</h1>
            <p className="skill-info">Learned html basics and advanced and obtained 2 certificates</p>
        </div>
        <div className="skill-card">
            <img src={cs} className="skill-img" alt=""/>
            <div className="skill-level">54%</div>
            <h1 className="skill-name">CSS</h1>
            <p className="skill-info">Learned the basic of css and know how to use it</p>
        </div>
        <div className="skill-card">
            <img src={jav} className="skill-img" alt=""/>
            <div className="skill-level">43%</div>
            <h1 className="skill-name">JAVASCRIPT</h1>
            <p className="skill-info">Learned about the basics of js and have the basic knowledge</p>
        </div>
        <div className="skill-card">
            <img src={py} className="skill-img" alt=""/>
            <div className="skill-level">76%</div>
            <h1 className="skill-name">PYTHON</h1>
            <p className="skill-info">Knew more about python advanced and core and even GUI !</p>
        </div>
        <div className="skill-card">
            <img src={java} className="skill-img" alt=""/>
            <div className="skill-level">44%</div>
            <h1 className="skill-name">JAVA</h1>
            <p className="skill-info">Knew the basics of java and can build android apps with it</p>
        </div>
        <div className="skill-card">
            <img src={bash} className="skill-img" alt=""/>
            <div className="skill-level">34%</div>
            <h1 className="skill-name">BASH</h1>
            <p className="skill-info">Knew about the basics of bash scripting and cli commands and earned a certificate</p>
</div>
</div>
</div>

    {/* <!-- timeline --> */}
<div className="timeline">
    <h1 className="heading">education and experience</h1>
    <div className="card">
        <div className="card-body">
            <h1 className="card-title">2009-2012</h1>
            <p className="card-detail">In 2009 started to learn about networking and how to browse the internet, I kept learnig till 2012 when i started to have knowledge about computing</p>
        </div>
    </div>
        <div className="card">
            <div className="card-body">
                <h1 className="card-title">2013-2019</h1>
                <p className="card-detail">I kept on learnig about computers and I learned java using my android phone. I got my personal computer in 2018 then I started graphics designs and learned HTML</p>
            </div>
        </div>
            <div className="card">
                <div className="card-body">
                    <h1 className="card-title">2020-2021</h1>
                    <p className="card-detail">I learned python,javasvript,bash,css, and started much more of hacking stuffs to protect my privacy... I joined University and started studying computer science </p>
                </div>
            </div>
                <div className="card">
                    <div className="card-body">
                        <h1 className="card-title">2022-present</h1>
                        <p className="card-detail">I'm still learnig... and if i do not die soon i'll be better</p>
                    </div>
                </div>
</div>
      </section>

      <section id="section3" className={`contact-section ${activeLink === 3 ? 'active' : ''}`}>
        {/* Contact section content */}
        <form className="contact-form">
          <input type="text" name="name" id="name" autoComplete="off" placeholder="name"/>
          <input type="text" name="email" id="email" autoComplete="off" placeholder="email"/>
          <textarea name="msg" id="msg" placeholder="message" autoComplete="off"></textarea>
          <button type="submit" className="form-submit-btn">contact</button>
        </form>
        {/* <!-- map --> */}
    <div className="map">
        <iframe title='map' src="" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
    </div>
      </section>
    </>
  );
}


export default App;
