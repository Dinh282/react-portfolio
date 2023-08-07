// import React from 'react';
// import Slider from 'react-slick';
// import Project from '../components/Project';


// export default function Portfolio() {

//     const projects = [
//         {
//           title: 'Project 1',
//           description: 'Description of Project 1',
//           imageUrl: 'url-to-image1.jpg',
//           liveUrl: 'https://example.com/project1',
//           githubUrl: 'https://github.com/user/project1'
//         },
//         {
//           title: 'Project 2',
//           description: 'Description of Project 2',
//           imageUrl: 'url-to-image2.jpg',
//           liveUrl: 'https://example.com/project2',
//           githubUrl: 'https://github.com/user/project2'
//         },
//       ];


//       const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//       };

//     return (
//     <>
//         {/* <div className="portfolio">
//       <h1>My Portfolio</h1>
//       <div className="project-list">
//         {projects.map((project, index) => (
//           <Project
//             key={index}
//             title={project.title}
//             description={project.description}
//             imageUrl={project.imageUrl}
//             liveUrl={project.liveUrl}
//             githubUrl={project.githubUrl}
//           />
//         ))}
//       </div>
//     </div> */}

// <Slider {...settings}>
//       <div>
//         {/* Content for slide 1 */}
//         {/* <img src="path/to/image1.jpg" alt="Slide 1" /> */}
//       </div>
//       <div>
//         {/* Content for slide 2 */}
//         {/* <img src="path/to/image2.jpg" alt="Slide 2" /> */}
//       </div>
//       {/* Add more slides */}
//     </Slider>



//     </>
//     )
// }

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
              description: 'MySQL, Handlebars.js, JS, Bcrypt',
              imageUrl: './src/assets/images/tech-blog.png',
              liveUrl: 'https://dn-tech-blog-91088954e7f1.herokuapp.com/',
              githubUrl: 'https://github.com/Dinh282/tech-blog.git'
            },
            {
              title: 'PWA Text Editor',
              description: 'JS, IndexedDb API, PWA, Webpack',
              imageUrl: './src/assets/images/pwa-text-editor.png',
              liveUrl: 'https://still-anchorage-67038-17721ce39121.herokuapp.com/',
              githubUrl: 'https://github.com/Dinh282/pwa-text-editor.git'
            },
            {
              title: 'Project 6',
              description: 'Description of Project 6',
              imageUrl: 'url-to-image2.jpg',
              liveUrl: 'https://example.com/project2',
              githubUrl: 'https://github.com/user/project2'
            },
          ];
    

export default class CenterMode extends Component {
  render() {
    const settings = {
      className: "center",
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
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 600,
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
      <div className="p-6 px-10">
        <h2 className="text-4xl text-center pb-3">Projects</h2>
        <Slider {...settings}>

        {projects.map((project, index) => (
          
    <div
      key={index}
      className="relative bg-white rounded-lg overflow-hidden shadow-md border-2 border-gray-300 px-2"
    >
      <div
        className="h-64 bg-cover bg-center rounded-t-lg w-full mt-2"
        style={{ backgroundImage: `url(${project.imageUrl})` }}
      />
      <div className="flex flex-col items-center space-y-4 py-4">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <p className="text-gray-600 hover:text-gray-800 transition duration-300">
          {project.description}
        </p>
        <div className="mt-4">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 mr-2"
          >
            Live
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition duration-300"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  ))}




        {/* {projects.map((project, index) => (
    <div key={index} className="bg-white">
      <div>
        <h3>{project.title}</h3>
        <Project
          title={project.title}
          description={project.description}
          imageUrl={project.imageUrl}
          liveUrl={project.liveUrl}
          githubUrl={project.githubUrl}
        />
      </div>
    </div>
  ))} */}


          {/* <div className="bg-white">
            <div>
            <h3>1</h3>
            {projects.map((project, index) => (
              <div key={index}>
                <Project
                  title={project.title}
                  description={project.description}
                  imageUrl={project.imageUrl}
                  liveUrl={project.liveUrl}
                  githubUrl={project.githubUrl}
                />
              </div>
            ))}
            </div>

          </div>
          <div className="bg-white">
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div> */}

        {/* {projects.map((project, index) => (
            <div key={index}>
              <Project
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                liveUrl={project.liveUrl}
                githubUrl={project.githubUrl}
              />
            </div>
          ))} */}


        </Slider>
      </div>
</div>
      </>
    );
  }
}