import React from "react";
import { ReactDOM } from "react";
import "./Footer.css";

import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import CopyrightIcon from "@mui/icons-material/Copyright";

const Footer = () => {
  const developer = {
    github: "https://github.com/Ravindran8499",
    instagram: "https://www.instagram.com/ravi____rock/",
    facebook: "https://www.facebook.com/pravindran.ravindran.58/",
    linkedIn: "https://www.linkedin.com/in/p-ravindran-a06025194/",
  };

  return (
    <div className=" mt-5 mx-auto ">
      <div className="container">
        <div className="row">
          <div className="col">
            <a className="" href={developer.linkedIn}>
              <LinkedInIcon />
            </a>
          </div>
          <div className="col">
            <a className="" href={developer.github}>
              <GitHubIcon />
            </a>
          </div>
          <div className="col">
            <a href={developer.instagram}>
              <InstagramIcon />
            </a>
          </div>
          <div className="col">
            <a href={developer.facebook}>
              <FacebookIcon />
            </a>
          </div>
        </div>
      </div>
      <div className="container text-center">
        <p>
          <CopyrightIcon /> Ravindran
        </p>
      </div>
    </div>
  );
};

export default Footer;
