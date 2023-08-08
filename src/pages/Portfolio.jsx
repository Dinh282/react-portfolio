
import React, { Component } from "react";
import Slider from "react-slick";
import Project from '../components/Project';
import {NextArrow, PrevArrow } from '../components/Arrows';

const projects = [
            {
              title: 'Dear Diary',
              description: 'APIs/Swiper/Mysql/Bcrypt/Bootstrap',
              imageUrl: './src/assets/images/dear-diary.jpg',
              liveUrl: 'https://personal-journal-e23df6a117fd.herokuapp.com/',
              githubUrl: 'https://github.com/Dinh282/personal-journal.git'
            },
            {
              title: 'Sports Companion',
              description: 'APIs/Tailwind/JQuery',
              imageUrl: './src/assets/images/sports-companion.png',
              liveUrl: 'https://dinh282.github.io/sports-companion/',
              githubUrl: 'https://github.com/Dinh282/sports-companion.git'
            },
            {
              title: 'Weather Dashboard',
              description: 'Bootstrap/CSS/Jquery/Third-Party-API',
              imageUrl: './src/assets/images/weather-dashboard.png',
              liveUrl: 'https://example.https://dinh282.github.io/weather-dashboard//project2',
              githubUrl: 'https://github.com/Dinh282/weather-dashboard.git'
            },
            {
              title: 'Tech Blog',
              description: 'MySQL/Handlebars.js/JS/Bcrypt',
              imageUrl: './src/assets/images/tech-blog.png',
              liveUrl: 'https://dn-tech-blog-91088954e7f1.herokuapp.com/',
              githubUrl: 'https://github.com/Dinh282/tech-blog.git'
            },
            {
              title: 'PWA Text Editor',
              description: 'JS/IndexedDb API/PWA/Webpack',
              imageUrl: './src/assets/images/pwa-text-editor.png',
              liveUrl: 'https://still-anchorage-67038-17721ce39121.herokuapp.com/',
              githubUrl: 'https://github.com/Dinh282/pwa-text-editor.git'
            },
            {
              title: 'Project 6',
              description: 'Description of Project 6',
              imageUrl: 'url-to-image6.jpg',
              liveUrl: 'https://example.com/project2',
              githubUrl: 'https://github.com/user/project2'
            },
          ];
    

export default class Portfolio extends Component {
  render() {
    const settings = {
      focusOnSelect: true,
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow:3,
      speed: 2000,
      dots: true,
      autoplay: true,
      autoplaySpeed: 3000,
      cssEase: "linear",
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
        <>
        <div className="container mx-auto">
      <div className="p-3 px-5">
        <h2 className="text-4xl text-center dark:text-white text-black pb-3">Projects</h2>
        <Slider {...settings}>

        {projects.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
            />
          ))}

        </Slider>
      </div>
</div>
      </>
    );
  }
}