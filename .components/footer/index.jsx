import React from "react";
import "./index.css";

const Footer = (props) => {
  const footerLogoUrl = props.props.logo;
  const copyrightText = props.props.copyright || "";
  const links = props.props.links || [];

  return (
    <footer className="footer">
      <div className="footer-con">
        <div className="footer-con-main">
          <div className="logo-con">
            {footerLogoUrl ? (
              <img className="footer-logo" src={footerLogoUrl} alt="logo" />
            ) : (
              <></>
            )}
          </div>
          <div className="footer-con-links">
            {links.map(({ heading, links }, idx1) => {
              return (
                <div key={idx1}>
                  <p className="footer-link-title">{heading}</p>
                  <ul className="footer-links">
                    {links?.map(({ title, url }, idx2) => {
                      return (
                        <li key={`${idx1}.${idx2}`}>
                          <a href={url}>{title}</a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
