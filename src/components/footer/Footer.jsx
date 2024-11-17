import React from "react"
import vk from "./../../img/icons/vk.svg"
import instagram from "./../../img/icons/instagram.svg"
import gitHub from "./../../img/icons/gitHub.svg"
import linkedIn from "./../../img/icons/linkedIn.svg"
import twitter from "./../../img/icons/twitter.svg"
import telegram from "./../../img/icons/telegram.svg"
import "./style.css"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a href="https://vk.com/crimzon_tide">
                <img src={vk} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="https://github.com/MazeEazer">
                <img src={gitHub} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="https://t.me/Andrlash ">
                <img src={telegram} alt="Link" />
              </a>
            </li>
          </ul>
          <div className="copyright">
            <p>© 2024 </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
