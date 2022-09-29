import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";
import profilePic from "../../assets/Ashish.jpg";


export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img src={profilePic} alt="Images" />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hi Everyone, My name is{" "}
                <span className="different">Ashish Kumar Prusty</span> and I am from{" "}
                <span className="different">
                  {" "}
                  Bhubaneswar, Odisha (India)
                </span>
                . I have completed my graduation in Physics
                from{" "}
                <span className="different">
                 Utkal University, Bhubaneswar, Odisha
                </span>
                . Then I joined full stack web development course by{" "}
                <span className="different">Masai School</span> a military type
                coding school.
              </h4>
              {/* <h4>Terms That can describe me apart form Coding :</h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Entrepreneure{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Foodie{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Traveler{" "}
              </h4> */}

            </div>
          </div>
        </div>
      </section>
    </>
  );
};
