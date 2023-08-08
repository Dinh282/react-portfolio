import React from 'react';

const Project = ({ title, description, imageUrl, liveUrl, githubUrl }) => (
  <div className="relative bg-white rounded-lg overflow-hidden shadow-md border-2 border-gray-300 px-2 h-[600px] ">
    <div
      className="h-64 bg-cover bg-center rounded-t-lg w-full mt-2"
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <div className="flex flex-col items-center space-y-4 py-4">
      <h3 className="text-xl font-semibold text-black">{title}</h3>
      <p className="text-gray-600 hover:text-gray-800 transition duration-300 truncate">
        {description}
      </p>
      <div className="mt-4 hover:scale-110">
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300 mr-2 "
        >
          Live
        </a>
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition duration-300"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
);

export default Project;