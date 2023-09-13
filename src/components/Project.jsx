import React, { Component } from "react";

export default class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false,
    };
  }

  handleMouseEnter = () => {
    this.setState({ isHovered: true });
  };

  handleMouseLeave = () => {
    this.setState({ isHovered: false });
  };

  render() {
    console.log('Rendering Project component');
    const { title, summary, description, imageUrl, liveUrl, githubUrl,  } = this.props;
    const { isHovered } = this.state;

    return (
      <div
        className="relative bg-white rounded-lg overflow-hidden shadow-md border-2 border-gray-300 px-2 h-[600px] "
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
         <div
          className={`h-64 bg-cover bg-center relative rounded-t-lg w-full mt-2 `}
          style={{ backgroundImage: `url(${imageUrl})` }}
        >
          {isHovered && (
            <div className="absolute inset-0 bg-black opacity-80"></div>
          )}
          {isHovered ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4 opacity-100">
              <p className="">{summary}</p>
            </div>
          ) : null}
        </div>
        <div className="flex flex-col items-center space-y-4 py-4">
          <h3 className="text-xl font-semibold text-black">{title}</h3>
      <p className=" text-gray-600 hover:text-gray-800 text-center">
        {description}
      </p>
      <div className="mt-4 hover:scale-110">
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 mr-2 truncate "
            >
              Live
            </a>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-800 truncate"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    );
  }
}
