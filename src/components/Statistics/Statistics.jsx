import React from "react";
import "./Statistics.css"
const Statistics = () => {
  return (
    <section className="statistics-container section__wrapper">
      <h2 className="statistics-title section__header">GitHub Statistics</h2>

      <div className="statistics-grid">
        {/* GitHub Stats */}
        <div className="statistics-card card">
          <img
            src="https://github-readme-stats.vercel.app/api?username=PankajSharma1810&show_icons=true&theme=graywhite"
            alt="GitHub Stats"
            className="statistics-image"
          />
        </div>

        {/* Most Used Languages */}
        <div className="statistics-card card">
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=PankajSharma1810&layout=compact&theme=graywhite"
            alt="Top Languages"
            className="statistics-image"
          />
        </div>

        {/* GitHub Streak */}
        <div className="statistics-card card">
          <img
            src="https://github-readme-streak-stats.herokuapp.com/?user=PankajSharma1810&theme=graywhite"
            alt="GitHub Streak"
            className="statistics-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Statistics;
