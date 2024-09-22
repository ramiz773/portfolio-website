import React from "react";
import Navbar from "./Navbar";
import { FaFileAlt } from "react-icons/fa";
import companyLogo from "../img/pied-piper-logo.png";
import todoImg from "../img/todo.png";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import reactflixLogo from "../img/reactflix.png";
import resume from "../utils/resume.pdf";

const Main = () => {
  return (
    <>
      <Navbar />
      <section id="hero" className="bg-charcoalGray px-[1.5rem] py-[3rem]">
        <div className="w-full md:max-w-[960px]  flex flex-col gap-3 mx-auto text-white justify-center items-center">
          <div className="">
            <img
              src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
              className="rounded-full w-[128px]"
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-5xl font-normal leading-5 mt-6">
              Aleem Ramees
            </h1>
            <p className="mt-4 text-xl">Full stack Developer</p>

            <a
              href={resume}
              className="flex gap-1 items-center mt-3 text-lg"
              target="blank"
              download={resume}
            >
              <FaFileAlt />
              <span>Resume</span>
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="px-[1.5rem] py-[2.15rem]">
        <div className="w-full  md:max-w-[960px]  md:mx-auto  ">
          <h1 className="text-3xl font-medium pb-4  text-gondola">About Me</h1>
          <hr />
          <p className="mt-4">
            Hi! I’m Aleem Ramees, a full-stack developer who loves turning
            complex problems into elegant solutions. After transitioning from a
            career in accounting, I discovered my passion for coding and have
            been dedicated to mastering the MERN stack ever since.
          </p>
          <p className="my-3">
            I believe that great software not only works well but also enhances
            the user experience. I strive to build applications that are not
            just functional but also visually appealing and intuitive. My
            experience in accounting has sharpened my attention to detail and
            analytical skills, which I bring to every project I undertake.
          </p>
          <p className="my-3">
            I thrive on collaboration and enjoy being part of a team where ideas
            flow freely. I’m always eager to learn and grow, whether through
            exploring new technologies or tackling challenging projects. Outside
            of development, I enjoy reading, experimenting with new tech tools,
            and working on side projects that push my boundaries. I’m excited to
            connect with like-minded individuals and explore new opportunities
            in the tech world!
          </p>
        </div>
      </section>

      {/* <section id="experience" className="px-[1.5rem] py-[2.15rem]">
        <div className="w-full md:max-w-[960px] md:mx-auto py-3">
          <h1 className="text-3xl font-medium pb-4  text-gondola">
            Experience
          </h1>
          <hr />
          <div className="card shadow-custom mt-6">
            <div className="card-content p-5">
              <div className="media flex gap-4 items-end">
                <div className="media-left  ">
                  <figure className="w-14">
                    <img src={companyLogo} alt="Placeholder image" />
                  </figure>
                </div>
                <div className="media-content">
                  <p className="text-2xl font-semibold text-gondola leading-relaxed">
                    Pied Piper
                  </p>
                  <p className="text-sm text-darkGray">
                    Title - <time datetime="2018-1">January 2018</time> -
                    <time datetime="2019-9">Sepemter 2019</time>
                  </p>
                </div>
              </div>
              <div className="content mt-4">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec iaculis mauris.
                </p>
                <ul className="mt-3">
                  <li>Noteworthy achievment here.</li>
                  <li>Noteworthy achievment here.</li>
                  <li>Noteworthy achievment here.</li>
                </ul>
                <div className="tags flex gap-3 items-center mt-3 text-darkGray text-xs ">
                  <span className="tag bg-whitesmoke p-2 rounded">c#</span>
                  <span className="tag bg-whitesmoke p-2 rounded">xamarin</span>
                  <span className="tag bg-whitesmoke p-2 rounded">
                    asp.net core
                  </span>
                  <span className="tag bg-whitesmoke p-2 rounded">
                    .net core
                  </span>
                  <span className="tag bg-whitesmoke p-2 rounded">azure</span>
                  <span className="tag bg-whitesmoke p-2 rounded">devops</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section id="projects" className="projects py-[2.15rem] px-[1.5rem] ">
        <div className="w-full md:max-w-[960px] mx-auto">
          <h1 className="text-3xl font-medium pb-4  text-gondola">Projects</h1>
          <hr />
          <div className="m-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="card-1 bg-white shadow-md rounded-lg overflow-hidden">
                <a
                  href="https://github.com/ramiz773/e-commerce-store"
                  target="blank"
                >
                  <div className=" w-full h-48 flex justify-center items-center bg-[#172941]">
                    <p className=" text-3xl text-[#34D399]">
                      <span>Mon</span>
                      <span>tac</span>
                    </p>
                  </div>

                  <div className="p-4">
                    <h3 className="text-xl font-semibold flex  items-center justify-between">
                      Montac
                      <span className="text-xs font-light">Devlopment</span>
                    </h3>
                    <p>e-commerce footware store</p>
                    <div className="tags flex  flex-wrap gap-3 items-center mt-3 text-darkGray text-xs ">
                      <span className="tag bg-whitesmoke p-2 rounded">
                        react.js
                      </span>
                      <span className="tag bg-whitesmoke p-2 rounded">
                        node.js
                      </span>
                      <span className="tag bg-whitesmoke p-2 rounded">
                        express.js
                      </span>
                      <span className="tag bg-whitesmoke p-2 rounded">
                        mongodb
                      </span>
                      <span className="tag bg-whitesmoke p-2 rounded">jwt</span>
                      <span className="tag bg-whitesmoke p-2 rounded">
                        zustand
                      </span>
                      <span className="tag bg-whitesmoke p-2 rounded">
                        redis
                      </span>
                    </div>
                  </div>
                </a>
              </div>

              <div className="card-2 bg-white shadow-md rounded-lg overflow-hidden">
                <a href="https://reactflix-project.vercel.app/" target="blank">
                  <img src={reactflixLogo} alt="" />

                  <div className="p-4">
                    <h3 className="text-xl font-semibold flex justify-between items-center">
                      Reactflix
                    </h3>
                    <p>A movie database web app</p>

                    <div className="tags flex  flex-wrap gap-3 items-center mt-3 text-darkGray text-xs ">
                      <span className="tag bg-whitesmoke p-2 rounded">
                        react.js
                      </span>
                      <span className="tag bg-whitesmoke p-2 rounded">
                        axios
                      </span>
                      <span className="tag bg-whitesmoke p-2 rounded">
                        Context Api's
                      </span>
                      <span className="tag bg-whitesmoke p-2 rounded">
                        sass
                      </span>
                    </div>
                  </div>
                </a>
              </div>

              <div className="card-3 bg-white shadow-md rounded-lg overflow-hidden">
                <a href="https://taskboard-weld.vercel.app/" target="blank">
                  <img src={todoImg} alt="" />

                  <div className="p-4">
                    <h3 className="text-xl font-semibold flex justify-between items-center">
                      Taskboard
                    </h3>
                    <p>Simple todo app</p>
                    <div className="tags flex  flex-wrap gap-3 items-center mt-3 text-darkGray text-xs ">
                      <span className="tag bg-whitesmoke p-2 rounded">
                        react.js
                      </span>
                      <span className="tag bg-whitesmoke p-2 rounded">
                        context.api
                      </span>
                      <span className="tag bg-whitesmoke p-2 rounded">
                        sass
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-[2.15rem] px-[1.5rem]">
        <div className=" container w-full md:max-w-[960px] mx-auto">
          <h1 className="text-3xl font-medium pb-4  text-gondola">Contact</h1>
          <hr />
          <div className="flex flex-col md:flex-row md:justify-center items-center space-y-6 md:space-y-0 md:space-x-14 pt-10 md:gap-x-14">
            <a
              href="https://github.com/ramiz773"
              className="flex flex-col items-center text-gray-700 hover:text-green-500 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={46} />
              <span className="text-sm">Github</span>
            </a>
            <a
              href="https://www.linkedin.com/in/aleem-ramees-8a8827233/"
              className="flex flex-col items-center text-gray-700 hover:text-green-500 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={46} />
              <span className="text-sm">LinkedIn</span>
            </a>
            <a
              href="#"
              className="flex flex-col items-center text-gray-700 hover:text-green-500 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoMdMail size={46} />
              <span className="text-sm">ramees.dev8@gmail.com</span>
            </a>
            <a
              href="#"
              className="flex flex-col items-center text-gray-700 hover:text-green-500 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFileAlt size={46} />
              <span className="text-sm">Resume</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
