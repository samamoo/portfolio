import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import "./PortfolioItem.css";

export default function PortfolioItem (props) {
  console.log(props.github)
  return (
    <li className="box">
      <div className="item-container">
        <div className="item-image-container">
          <img className="item-image" src={props.image} />
          <div className="item-image-overlay">
            <p className="item-title">{props.title}</p>
            <p className="item-desc">{props.description}</p>
            <p className="item-stack">{props.stack}</p>
            <a href={props.github} target="_blank">
              <FontAwesomeIcon className="item-github" icon={faGithub}/>
            </a>
          </div>
        </div>
      </div>
    </li>
  )
}