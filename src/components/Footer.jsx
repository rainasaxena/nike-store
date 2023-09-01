import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div>

        <div className="footer-container">
        
        < div className="lists">
            <div className="content-left">
                <li>
                    <ul>Stories</ul>
                    <ul>Impact</ul>
                    <ul>Company</ul>
                    <ul>Newsroom</ul>
                </li>
            </div>

            <div className="content-left">
                <li>
                    <ul>Shop Nike.com</ul>
                    <ul>Shop Converse.com</ul>
                    <ul>Get Help</ul>
                    <ul>Investors</ul>
                </li>
            </div>

        </div>

            <div className="footer-end">
                <li>
                    <ul>Terms of Use</ul>
                    <ul>Nike Privacy Policy</ul>
                    <ul>CA Supply Chains Act</ul>
                </li>
            </div>

            <div className="copyright">
                <p>© 2023 NIKE, Inc. All Rights Reserved</p>
            </div>

            <div className="nike-logo">
                <img src="./images/nike_white.png" alt="" />
            </div>

        </div>

    </div>
  )
}

export default Footer