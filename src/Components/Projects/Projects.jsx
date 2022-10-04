import React from "react";
import "./Projects.css";
import project1 from "../../assets/Timecamp.png";
import project2 from "../../assets/Disney.png";
import project3 from "../../assets/Weather.png";
import project4 from "../../assets/Nordstorm.png";
import project5 from "../../assets/Country.png";
import { FaReact, FaNodeJs, FaAws } from "react-icons/fa";
import { BsBootstrap, BsWordpress } from "react-icons/bs";
import {
  SiBlockchaindotcom,
  SiHtml5,
  SiMaterialui,
  SiChai,
  SiEthereum,
  SiExpress,
  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiNetlify,
  SiRedux,
  SiChakraui,
  SiHeroku,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export const Projects = () => {
  return (
    <>
      <div className="Projectsection">
        <h2 className="section__title different">Projects</h2>
        <div className="allProjects">
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                <img src={project1} alt="Images" />
                </div>
              </div>
              <div className="project_information">
                <h2>Time Camp</h2>
                <p>
                TimeCamp is a web-based application  to track the activity of computer users and it is dedicated either to freelancers or teams.
                </p>
                <div className="tec">
                <SiExpress/>
                <SiMongodb/>
                <SiChakraui/>
                <SiRedux/>
                <SiNodedotjs/>
                  <IoLogoJavascript />
                  <SiHtml5 />
                  <DiCss3 />
                </div>
                <div>
                  <a
                    href="https://time-camp-clone.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/ashishprusty24/TimeCamp---Clone"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                <img src={project5} alt="Images" />
                </div>
              </div>
              <div className="project_information">
                <h2>Country City</h2>
                <p>
                It is an app where user can add city ,  can see the all city
                </p>
                <div className="tec">
            
              
                <SiChakraui/>
                <SiRedux/>
               
                  <IoLogoJavascript />
                  <SiHtml5 />
                  <DiCss3 />
                </div>
                <div>
                  <a
                    href="https://country-app-opal.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/ashishprusty24/Country-city"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>





          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                <img src={project4} alt="Images" />
                </div>
              </div>
              <div className="project_information">
                <h2>Nordstorm</h2>
                <p>
                Nordstrom Rack is an American off-price department store chain. We have cloned this website with all possible functionalities using HTML, JavaScript and CSS.
                </p>
                <div className="tec">
                  <IoLogoJavascript />
                  <SiHtml5 />
                  <DiCss3 />
                </div>
                <div>
                  <a
                    href="https://quiet-crepe-a6deeb.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/ashishprusty24/Nord_clone"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                <img src={project3} alt="Images" />
                </div>
              </div>
              <div className="project_information">
                <h2>Weather App</h2>
                <p>
                  Weather App is a platform used to get weather report as per
                  users search for their respective city or they can also pick
                  up any location from the provided google map
                </p>
                <div className="tec">
                  <IoLogoJavascript />
                  <SiHtml5 />
                  <DiCss3 />
                </div>
                <div>
                  <a
                    href="https://brilliant-tulumba-e76e66.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/ashishprusty24/Weather-App"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                <img src={project2} alt="Images" />
                </div>
              </div>
              <div className="project_information">
                <h2>Disney</h2>
                <p>
                This project is a website clone of ShopDisney.com famous for selling toys and clothings build with HTML, CSS and Javascript
                </p>
                <div className="tec">
                  <IoLogoJavascript />
                  <SiHtml5 />
                  <DiCss3 />
                </div>
                <div>
                  <a
                    href="https://sparkling-narwhal-127bca.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/ashishprusty24/Disney-Clone"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
