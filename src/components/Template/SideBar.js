/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Suman Astani</h2>
        <p><a href="mailto:sumanastani@gmail.com">sumanastani@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Suman. I am a <a href="https://www.bgsu.edu/">BGSU</a> graduate. Previously, I have worked in accounting
        software and gain knowledge of system architecture and design patterns. A level head for problem-solving combined with a passion for innovative and fresh ideas
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Cloned from Michael D&apos;Angelo <Link to="https://github.com/mldangelo/personal-site"> mldangelo github</Link>.</p>
    </section>
  </section>
);

export default SideBar;
