import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import './hero.css';

const Hero = () => {
  return (
    <>
      <Head>
        <title>Portfolio Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main className="home-container">
        <section className="hero-section">
          <div className="content">
            <h1>Hi, I’m Alyan</h1>
            <p>A passionate Frontend Developer</p>
            <div className="buttons">
              <a href="/Project">
                <button className="btn">See My Projects</button>
              </a>
              <a href="/contact">
                <button className="btn">Contact Me</button>
              </a>
            </div>
          </div>
          <div className="image-container">
          <Image src="/mains.png" alt="Alyan's Profile Picture" width={200} height={450} />
          </div>
        </section>
      </main>
    </>
  );
};

export default Hero;
