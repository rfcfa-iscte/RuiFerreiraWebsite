import React from "react";
import "./footer.css";
import { AiFillLinkedin } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";
import { FaGithub, FaYoutube } from "react-icons/fa";

export const Footer = () => {
  const handleGithubClick = () => {
    window.open("https://github.com/rfcfe", "_blank");
  };
  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/ruifcferreira/", "_blank");
  };
  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/rui.ferreira9/", "_blank");
  };
  const handleYoutubeClick = () => {
    window.open(
      "https://www.youtube.com/channel/UCHlkyAhPW8cjvr-aRAfxpug",
      "_blank"
    );
  };
  return (
    <>
      <footer className="footer">
        <div className="copyright">
          <span className="copyright-text">© Copyright 2024 Rui Ferreira</span>
        </div>
        <ul className="social">
          <li>
            <AiFillLinkedin className="icon" onClick={handleLinkedInClick} />
          </li>
          <li>
            <FaGithub className="icon" onClick={handleGithubClick} />
          </li>
          <li>
            <FaYoutube className="icon" onClick={handleYoutubeClick} />
          </li>
          <li>
            <RiInstagramFill className="icon" onClick={handleInstagramClick} />
          </li>
        </ul>
      </footer>
    </>
  );
};
