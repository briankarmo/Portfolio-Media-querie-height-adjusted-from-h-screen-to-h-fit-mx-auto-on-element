import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-fit bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-gray-500 py-4 max-w-md">
        My journey as a JavaScript developer began with a passion for web development and design, with which eventually led to my love for coding and problem-solving. Through my diverse range of projects, I have gained extensive experience in JavaScript development, specializing in frameworks like React.JS, to back-end tools like node.js,as a back-end tool for developing server-side applications. I've utilized various libraries and styling tools to create dynamic, interactive, and responsive, component-based applications. In addition, I have also gained hands-on experience in version control with GitHub. Using Git has allowed me to manage my codebase effectively. I have also implemented the use of APIs to make my applications even more interactive, allowing for seamless integration with external data sources and services. As an enthusiastic learner, I strive to continuously improve and expand my knowledge in JavaScript development, such as front-end software development, frameworks, object-oriented programming, and DOM manipulation. I am dedicated to staying on the cutting edge of technology, and my commitment to continuous improvement sets me apart as an exceptional problem solver!      
        </p>
      </div>
    </div>
  );
};

export default About;