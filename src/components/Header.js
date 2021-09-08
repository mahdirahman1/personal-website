import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import TypeIt from "typeit-react";
import Typewriter from "typewriter-effect";
import { Fragment } from "react";

const HeaderWrapper = styled.div`
  padding: 9% 1rem;
  text-align: center;
  color: #edf2f2;
  position: relative;
  margin-bottom: 10rem;
`;

const Buttons = styled.div`
  position: absolute;
  top: 30rem;
  left: 0;
  right: 0;
`;

const StyledButton = styled.button`
  background: transparent;
  border: 2px solid #4bfaeb;
  border-radius: 1.5rem;
  font-size: 1.5rem;
  padding: 0.5rem;
  color: white;
  margin: 0 0.5rem;
  height: 3.5rem;
  width: 3.5rem;
  opacity: 0.8;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  @media (max-width: 320px) {
    margin: 0 0.2rem;
  }

  &:hover {
    color: #4bfaeb;
    opacity: 1;
    transform: scale(1.1);
    border: 3px solid #4bfaeb;
  }
`;

const Header = () => {
  return (
    <Fragment>
      <HeaderWrapper>
        <motion.div
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.75, type: "spring" }}
        >
          <motion.div
            className="wave"
            initial={{
              rotate: 20,
            }}
            animate={{
              rotate: 60,
            }}
            transition={{
              type: "tween",
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 0.1,
              duration: 0.5,
            }}
          >
            👋
          </motion.div>
          <TypeIt className="intro" options={{ waitUntilVisible: true }}>
            Hi, <span className="name">Mahdi</span> here.
          </TypeIt>
          <Typewriter
            options={{
              strings: [
                "A passionate software developer ",
                "Is based in Toronto, Canada",
                "Loves to learn new technologies",
                "In 2B Computer Engineering @UWaterloo",
                "Is interested in Front End Development",
                "Wants to be a Full Stack Developer",
                "Is working on his Back End skills",
                "Is trying to build up his portfolio",
                "Has experience in software testing & QA",
                "Would like to connect with you",
                "Likes photography, gaming and cricket",
                "Is thinking what to write next...",
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 20,
              delay: 80,
            }}
          />
        </motion.div>

        <Buttons>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.5, type: "tween" }}
          >
            <a href="https://github.com/mahdirahman1">
              <StyledButton>
                <i class="fab fa-github"></i>
              </StyledButton>
            </a>
            <a href="mailto:mahdi.rahman@uwaterloo.ca">
              <StyledButton>
                <i class="fas fa-envelope"></i>
              </StyledButton>
            </a>
            <a href="https://drive.google.com/file/d/1FOtqfA8o-MNE9SRoW8maOWUUtD22fnkA/view?usp=sharing">
              <StyledButton>
                <i class="fas fa-file-pdf"></i>
              </StyledButton>
            </a>
            <a href="https://ca.linkedin.com/in/mahdi-rahman-4a3569155">
              <StyledButton>
                <i class="fab fa-linkedin"></i>
              </StyledButton>
            </a>
          </motion.div>
        </Buttons>
      </HeaderWrapper>
    </Fragment>
  );
};

export default Header;
