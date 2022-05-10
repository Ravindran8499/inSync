import React from "react";
import { ReactDOM } from "react";
import "./Footer.css";

import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import CopyrightIcon from "@mui/icons-material/Copyright";
import MailIcon from "@mui/icons-material/Mail";

const Footer = () => {
  const developer = {
    github: "https://github.com/Ravindran8499",
    instagram: "https://www.instagram.com/ravi____rock/",
    facebook: "https://www.facebook.com/pravindran.ravindran.58/",
    linkedIn: "https://www.linkedin.com/in/p-ravindran-a06025194/",
    email: "ravindransri01@gmail.com",
  };

  return (
    <div className="pt-3">
      <footer class="d-flex flex-wrap justify-content-between  align-items-center py-3 my-4 border-top">
        <div class="col-md-4 d-flex align-items-center">
          <a
            href="/"
            class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
          >
            <svg class="bi" width="30" height="24"></svg>
          </a>
          <span class="text-muted">
            <CopyrightIcon /> 2022 Company, Inc
          </span>
        </div>

        <ul class="nav col-md-4 justify-content-end list-unstyled d-flex m-3">
          <li class="ms-3">
            <a class="text-muted" href={developer.github}>
              <GitHubIcon />
            </a>
          </li>
          <li class="ms-3">
            <a class="text-muted" href={developer.instagram}>
              <InstagramIcon />
            </a>
          </li>
          <li class="ms-3">
            <a class="text-muted" href={developer.facebook}>
              <FacebookIcon />
            </a>
          </li>
          <li class="ms-3">
            <a class="text-muted" href={developer.linkedIn}>
              <LinkedInIcon />
            </a>
          </li>
          <li class="ms-3">
            <a class="text-muted" href={developer.email}>
              <MailIcon />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
