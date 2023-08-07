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


const projects = [
            {
              title: 'Project 1',
              description: 'Description of Project 1',
              imageUrl: 'url-to-image1.jpg',
              liveUrl: 'https://example.com/project1',
              githubUrl: 'https://github.com/user/project1'
            },
            {
              title: 'Project 2',
              description: 'Description of Project 2',
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
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
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
      <div className="pt-10">
        <h2>Projects</h2>
        <Slider {...settings}>
          <div className="bg-white">
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
          </div>

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