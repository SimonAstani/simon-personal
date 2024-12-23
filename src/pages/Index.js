/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main description={'Michael D\'Ange'}>
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>
            <Link to="/">Suman Astani</Link>
          </h2>
          <p>
            Full Stack Software developer with strong knowledge of fianancial
            and banking domain.
          </p>
        </div>
      </header>
      <p>
        {' '}
        <b>Programming Languages: </b>Java 8/11/17 <br />
        <b>Front-End: </b>Angular 8/10/15, TypeScript, CSS, RxJS, Angular CLI,
        REACT <br />
        <b> Database: </b>MySQL, PostgreSQL, MongoDB, Oracle, PL/SQL <br />
        <b>Data Access: </b> Hibernate, JDBC, JPA <br />
        <b>Security: </b>Authentication Authorization, Encryption, IAM, MFA{' '}
        <br />
        <b>AWS Services: </b>EC2, S3, Lambda, IAM, CloudWatch, S3 (data
        storage), RDS <br />
        <b>Framework/Library: </b>Spring 3.x/4.x/5.x, Boot, Kafka <br />
        <b>CI/CD: </b>Jenkins, GitLab CI/CD, Docker, Kubernetes, Git, Gitflow{' '}
        <br />
      </p>

      <p>
        {' '}
        Welcome to my website. Please feel free to read more{' '}
        <Link to="/about">about me</Link>, or you can check out my{' '}
        <Link to="/resume">resume</Link>, <Link to="/projects">projects</Link>,{' '}
        view <Link to="/stats">site statistics</Link>, or{' '}
        <Link to="/contact">contact</Link> me.
      </p>
    </article>
  </Main>
);

export default Index;
