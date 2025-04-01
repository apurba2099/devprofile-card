import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

// Profile Pic component
function Avatar() {
  return <img className="avatar" src="./assets/apurba.jpg" alt="apurba"></img>;
}

// Details Component
function Intro() {
  const name = "<Apurba Dutta/>";
  return (
    <div>
      <h1>{name}</h1>
      <p>
        As a student learning React and gaining knowledge in full-stack
        development, when not coding or working on projects, I enjoy playing
        mobile📱 games or PC🖥️ games like Call of Duty, cooking and eating.
      </p>
    </div>
  );
}

// Skill component props
function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}
//Skillis Component
function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="HTML+CSS" emoji="💪" color="#D81159" />
      <Skill skill="Javascript" emoji="💪" color="#9448BC" />
      <Skill skill="React" emoji="👶" color="#0496FF" />
      <Skill skill="Tailwind CSS" emoji="💪" color="#7BF1A8" />
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
