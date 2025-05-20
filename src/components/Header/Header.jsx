import React from "react";
import "./Header.css";
import HeaderTitle from "../../ui/HeaderTitle";
import { profile1 } from "../../assets";
import CodeBlock from "../../ui/CodeBlock";
import SocialHandles from "../../ui/SocialHandles";
import BreathCircle from "../../ui/BreathCircle"


const code = `
const developer = {
  firstname: "Pankaj",
  lastName: "Sharma",
  hobby: repeat=()=>{
    //eat();
    //sleep();
    //code();
    //repeast();
    }
}
`;
const Header = () => {
  return (
    <header id="header">
      <BreathCircle/>
      <div className="section__wrapper">
        <div className="grid upper"></div>
        <div className="column">
          <HeaderTitle />
        </div>

        <div className="column">
          <img src={profile1} className="profile__photo" alt="" />
        </div>
        <div className="card grid lower">
          <CodeBlock language={"javascript"} code={code} />
          <div>
            <p className="text__muted description">
              A passionate MERN Stack Developer with a knack for building modern
              web applications. I specialize in creating seamless user
              experiences, dynamic web pages, and efficient backend services.
              Let's build something amazing together!
            </p> 
            <SocialHandles/>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
