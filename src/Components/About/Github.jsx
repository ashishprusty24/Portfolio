import React from "react";
import GitHubCalendar from "react-github-calendar";
import "./github.css";
export const Github = () => {
  const colourTheme = {
    background: "transparent",
    text: "#ffffff",
    grade4: "#8400b8",
    grade3: "#b22ff4",
    grade2: "#b265f6",
    grade1: "#c084f5",
    grade0: "#ecd9fc",
  };
  // const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <div className={"section " + colourTheme} data-aos="fade-right">
        <h2 className="section__title different">
          Days I <span className="different"> Code</span>
        </h2>
        <GitHubCalendar
          username="ashishprusty24"
          blockSize={15}
          blockMargin={5}
          color="#c084f5"
          fontSize={16}
        />
      </div>

      <div>
        <div align="center">
          <img
          className="github"
            align="center"
            src="https://github-readme-stats.vercel.app/api?username=ashishprusty24&show_icons=true&count_private=true&theme=react&hide_border=true&bg_color=0D1117&locale=en"
            alt="ashishprusty24"
          />
        </div>
      </div>
    </>
  );
};
