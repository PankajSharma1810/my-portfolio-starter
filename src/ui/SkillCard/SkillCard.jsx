import React from "react";
import "./SkillCard.css";
import { skills } from "../../data";
const SkillCard = ({ title, data }) => {
  return (
    <div className="card skill__card">
      <h3 className="title">
        <span className="g-text"></span>
      </h3>
      <div className="skill__content">
        {data.map((list, index) => (
          <article className="flex skill__details" key={index}>
            <div className="skill__logo">
              <img src={list.logo} alt="" />
            </div>
            <div>
                <h4 className="skill__name">{list.skill}</h4>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
