import React, { useState } from "react";
import img from "../src/assets/img2.jpg";
import { FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";

const ResumeComponent = () => {
  const [photo, setPhoto] = useState(true);
  const [summary, setSummary] = useState(false);
  const [project1, setProject1] = useState(false);
  const [project2, setProject2] = useState(false);
  // const [project3, setProject3] = useState(false);
  const [education, setEducation] = useState(false);
  const [skills, setSkills] = useState(false);
  const [hobby, setHobby] = useState(false);
  return (
    <div className="resume">
      <div className="main-part">
        <div className="photo">
          {photo ? (
            <img
              // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP_139gKXq2t2wCfM4QPv4s-BjREMGhiK3lw&s"
              // alt=""
              src={img}
            />
          ) : (
            ""
          )}
          <button onClick={() => setPhoto(!photo)}>
            {photo ? "Remove" : "Show"}
          </button>
        </div>
        <div className="content">
          <h2>Personal Details</h2>
          <h4>Name: Sailaja Das</h4>
          <h4>Address: Sailashree Vihar, Bhubaneswar</h4>
          <h4>Email: dassailaja50@gmail.com</h4>

          <h4>
            Phone:{" "}
            <a
              href="tel:+918260599399"
              style={{ color: "#000", textDecoration: "none" }}
            >
              <FaPhone
                size={16}
                style={{ verticalAlign: "middle", marginRight: "5px" }}
              />
              8260599399
            </a>
          </h4>

          <h4>
            GitHub:{" "}
            <a
              href="https://github.com/SailajaDas"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#000", textDecoration: "none" }}
            >
              <FaGithub size={20} style={{ verticalAlign: "middle" }} />{" "}
              https://github.com/SailajaDas
            </a>
          </h4>
          <h4>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/sailaja-das--/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0A66C2", textDecoration: "none" }}
            >
              <FaLinkedin size={20} style={{ verticalAlign: "middle" }} />{" "}
              linkedin.com/in/sailajadas
            </a>
          </h4>
        </div>
      </div>
      <div className="summary">
        <h2>Summary</h2>
        {summary ? (
          <p>
            Enthusiastic and dedicated B.Tech student with a strong interest in
            web development. Proficient in building responsive and user-friendly
            web applications using technologies like HTML, CSS, JavaScript, and
            React. Passionate about clean code, UI/UX best practices, and
            continuous learning. Seeking an opportunity to contribute to
            real-world projects and grow as a frontend developer in a
            collaborative environment.
          </p>
        ) : (
          <p>
            Enthusiastic and dedicated B.Tech student with a strong interest in
            web development.
          </p>
        )}
        <button onClick={() => setSummary(!summary)}>
          {summary ? "Show less" : "Show more"}
        </button>
      </div>
      <div className="project">
        <h2>Projects</h2>
        <h4>1. Portfolio</h4>
        {project1 ? (
          <p>
            Designed and developed a personal portfolio website to showcase
            academic achievements, technical skills, and projects. The site
            features a responsive layout, interactive UI components, and smooth
            navigation. Implemented modular React components and clean CSS for
            maintainability and scalability.
          </p>
        ) : (
          <p>
            Designed and developed a personal portfolio website to showcase
            academic achievements, technical skills, and projects.
          </p>
        )}
        <button onClick={() => setProject1(!project1)}>
          {project1 ? "Read less" : "Read more"}
        </button>
        <h4>2. Taskify To-Do-List</h4>
        {project2 ? (
          <p>
            Taskify is a full-stack To-Do List web application built using Java,
            JSP, Servlets, JDBC, and MySQL. It enables users to create, update,
            mark as completed, and delete tasks efficiently through an intuitive
            interface. The application maintains separate views for active and
            completed tasks, with undo and permanent delete functionality for
            completed items. Designed for productivity, it uses a clean layout
            and persistent storage.
          </p>
        ) : (
          <p>
            Taskify is a Java-based To-Do List app with CRUD and completion
            features using JSP, Servlets, and MySQL.
          </p>
        )}
        <button onClick={() => setProject2(!project2)}>
          {project2 ? "Read less" : "Read more"}
        </button>
        {/* <h4>3. Student-Management-System</h4>
        {project3 ? (
          <p>
            Designed and implemented a full-stack Student Management System to
            efficiently manage student records, academic details, and
            administrative operations. The system provides separate interfaces
            for administrators and students, enabling real-time data updates,
            student registration, and performance tracking. It aims to automate
            manual tasks and offer an organized structure for handling
            large-scale student information with ease and accuracy.
          </p>
        ) : (
          <p>
            Designed and implemented a full-stack Student Management System to
            efficiently manage student records, academic details, and
            administrative operations.
          </p>
        )}
        <button onClick={() => setProject3(!project3)}>
          {project3 ? "Read less" : "Read more"}
        </button> */}
      </div>

      <div className="education">
        <h2>Education</h2>
        {education ? (
          <>
            <p>
              <strong>B.Tech (Computer Science & Engineering)</strong>
              <br />
              Gandhi Institute For Education & Technology, Baniatangi,
              Bhubaneswar
              <br />
              2021 – 2025 | CGPA: 8.42
            </p>
            <p>
              <strong>12th (CHSE Odisha)</strong>
              <br />
              Shanti Institute of Mag. Higher Secondary School ,Cuttack
              <br />
              2019 – 2021 | Percentage: 73%
            </p>
            <p>
              <strong>10th (BSE Odisha)</strong>
              <br />
              Premchand Bidyapitha,Kendrapara
              <br />
              2018 – 2019 | Percentage: 68%
            </p>
          </>
        ) : (
          <p>B.Tech in CSE | 12th & 10th from Odisha board with distinction.</p>
        )}
        <button onClick={() => setEducation(!education)}>
          {education ? "Read less" : "Read more"}
        </button>
      </div>

      <div className="skills">
        <h2>Skills</h2>
        {skills ? (
          <>
            <p>
              1. Frontend Devlopment :- HTML5, CSS3, JavaScript (ES7), React.js,
              Bootstrap,Tailwind CSS
            </p>
            <p>2. Backend Devlopment :- Java</p>
            <p>3. Database :- SQL</p>
            <p>4. Tools and Platform :- Git & GitHub, VS Code</p>
          </>
        ) : (
          <>
            <p>
              1. Frontend Devlopment :- HTML5, CSS3, JavaScript (ES7), React.js,
              Bootstrap,Tailwind CSS
            </p>
            <p>2. Backend Devlopment :-Java</p>
            <p>3. Database :-SQL</p>
          </>
        )}
        <button onClick={() => setSkills(!skills)}>
          {skills ? "Read less" : "Read more"}
        </button>
      </div>
      <div className="hobby">
        <h2>Hobbies</h2>
        {hobby ? (
          <>
            <p>- Exploring new programming tools and frameworks</p>
            <p>- Listening to music to relax and boost creativity</p>
            <p>- Drawing and digital sketching as a creative outlet</p>
            <p>- Traveling and exploring new cultures</p>
            <p>- Playing strategy games and solving logic puzzles</p>
            <p>
              - Participating in tech events, webinars, and coding competitions
            </p>
          </>
        ) : (
          <p>
            Web development, UI design, coding challenges, drawing, listening to
            music, traveling, and reading tech blogs.
          </p>
        )}
        <button onClick={() => setHobby(!hobby)}>
          {hobby ? "Read less" : "Read more"}
        </button>
      </div>
      <div className="declaration">
        <h2>Declaration</h2>
        <p>
          I hereby declare that all the information provided in this resume is
          true, complete, and correct to the best of my knowledge and belief. I
          accept responsibility for the correctness of the particulars mentioned
          and understand that any misrepresentation or omission may lead to
          disqualification from the selection process. I am also aware that my
          resume is subject to verification by the organization and I am
          prepared to provide any supporting documents upon request.
        </p>
      </div>
    </div>
  );
};

export default ResumeComponent;
