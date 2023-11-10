/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Michael D'Ange"}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">Suman Astani</Link></h2>
          <p>
            Software developer with strong knowledge of various frontend and backend technologies.
          </p>
        </div>
      </header>
      <p> <b>Coding Languages:</b> Python, SQL, PostgreSQL, Java (Spring Boot), HTML/CSS, JavaScript, R    <br />
        <b>Framework/Library: </b>Django, React, Django Rest Framework for API Development     <br />
        <b>Data Analysis: </b>PySpark, SparkML, Pandas, Apache Spark, Spring Boot for ETL, Hadoop, Docker, Matplotlib, Seaborn, Plotly, sci-kit-image <br />
        <b>Others: </b> AWS, Microservices, VCS(GIT), Project Deployment, JIRA, Slack
      </p>
      <p> Welcome to my website. Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        view <Link to="/stats">site statistics</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
    </article>

  </Main>
);

export default Index;
