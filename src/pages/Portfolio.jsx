import React, { Component } from "react";
import Slider from "react-slick";
import Project from "../components/Project";
import { NextArrow, PrevArrow } from "../components/Arrows";
import { AnimatedPage } from "../components/PageAnimations";

const projects = [
  {
    title: "Dear Diary",
    description: "APIs/Swiper/Mysql/Bcrypt/Bootstrap",
    imageUrl: "/assets/images/dear-diary.jpg",
    liveUrl: "https://personal-journal-e23df6a117fd.herokuapp.com/",
    githubUrl: "https://github.com/Dinh282/personal-journal.git",
    summary: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
  },
  {
    title: "Sports Companion",
    description: "APIs/Tailwind/JQuery",
    imageUrl: "/assets/images/sports-companion.png",
    liveUrl: "https://dinh282.github.io/sports-companion/",
    githubUrl: "https://github.com/Dinh282/sports-companion.git",
    summary: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
  },
  {
    title: "Weather Dashboard",
    description: "Bootstrap/CSS/Jquery/Third-Party-API",
    imageUrl: "/assets/images/weather-dashboard.png",
    liveUrl:"https://example.https://dinh282.github.io/weather-dashboard//project2",
    githubUrl: "https://github.com/Dinh282/weather-dashboard.git",
    summary: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
  },
  {
    title: "Tech Blog",
    description: "MySQL/Handlebars.js/JS/Bcrypt",
    imageUrl: "/assets/images/tech-blog.png",
    liveUrl: "https://dn-tech-blog-91088954e7f1.herokuapp.com/",
    githubUrl: "https://github.com/Dinh282/tech-blog.git",
    summary: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
  },
  {
    title: "PWA Text Editor",
    description: "JS/IndexedDb API/PWA/Webpack",
    imageUrl: "/assets/images/pwa-text-editor.png",
    liveUrl: "https://still-anchorage-67038-17721ce39121.herokuapp.com/",
    githubUrl: "https://github.com/Dinh282/pwa-text-editor.git",
    summary: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
  },
  {
    title: "Chore Buddy",
    description: "GraphQl/React/JS/Ant Design/JWT",
    imageUrl: "/assets/images/ss-landing-page.jpg",
    liveUrl: "https://chore-buddy-6e6d2559dc60.herokuapp.com/",
    githubUrl: "https://github.com/Dinh282/chore-buddy.git",
    summary: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
  },
];

export default class Portfolio extends Component {
  render() {
    const settings = {
      focusOnSelect: true,
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 1000,
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
            dots: true,
          },
        },
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 1030,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <AnimatedPage>
        <div className="container mx-auto">
          <div className="p-3 px-5">
            <h2 className="text-4xl text-center text-black dark:text-white pb-3">
              Projects
            </h2>
            <Slider {...settings}>
              {projects.map((project, index) => (
                <Project
                  key={index}
                  title={project.title}
                  summary={project.summary}
                  description={project.description}
                  imageUrl={project.imageUrl}
                  liveUrl={project.liveUrl}
                  githubUrl={project.githubUrl}
                />
              ))}
            </Slider>
          </div>
        </div>
      </AnimatedPage>
    );
  }
}
