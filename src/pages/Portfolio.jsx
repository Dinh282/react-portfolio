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
    summary: "Simple journal/diary application that allows users to record what is on their minds. User's entries are kept safe within their account.",
  },
  {
    title: "Sports Companion",
    description: "APIs/Tailwind/JQuery",
    imageUrl: "/assets/images/sports-companion.png",
    liveUrl: "https://dinh282.github.io/sports-companion/",
    githubUrl: "https://github.com/Dinh282/sports-companion.git",
    summary: "A compact application for referencing NBA team rosters and displaying information on the coach and players.",
  },
  {
    title: "Weather Dashboard",
    description: "Bootstrap/CSS/Jquery/Third-Party-API",
    imageUrl: "/assets/images/weather-dashboard.png",
    liveUrl:"https://example.https://dinh282.github.io/weather-dashboard//project2",
    githubUrl: "https://github.com/Dinh282/weather-dashboard.git",
    summary: "This simple front-end web application utilizes the OpenWeather API to allow the user the ability to look up the weather forcast of a specific city.",
  },
  {
    title: "Tech Blog",
    description: "MySQL/Handlebars.js/JS/Bcrypt",
    imageUrl: "/assets/images/tech-blog.png",
    liveUrl: "https://dn-tech-blog-91088954e7f1.herokuapp.com/",
    githubUrl: "https://github.com/Dinh282/tech-blog.git",
    summary: "Basic web application that allows the user create an account, publish posts, and leave comments on other users' posts. With this application, users can effortlessly share their thoughts, engage in discussions, and manage their blog content.",
  },
  {
    title: "PWA Text Editor",
    description: "JS/IndexedDb API/PWA/Webpack",
    imageUrl: "/assets/images/pwa-text-editor.png",
    liveUrl: "https://still-anchorage-67038-17721ce39121.herokuapp.com/",
    githubUrl: "https://github.com/Dinh282/pwa-text-editor.git",
    summary: "A single-page Progressive Web Application that provides the user access to a text-editor within the browser. ",
  },
  {
    title: "Chore Buddy",
    description: "GraphQl/React/JS/Ant Design/JWT",
    imageUrl: "/assets/images/ss-landing-page.jpg",
    liveUrl: "https://chore-buddy-6e6d2559dc60.herokuapp.com/",
    githubUrl: "https://github.com/Dinh282/chore-buddy.git",
    summary: "Full-stack web application that allows parents to create chores, set the allowance for each chore, and assign them to their children. Parents can also create individual accounts for their children. With their own accounts, the children can keep track of their balances and list of chores.",
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
