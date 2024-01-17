import React, { useState, useEffect } from "react";
import "./index.css";
import { Link } from "react-router-dom";

const Header = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);

    document.body.classList.toggle("no-scroll");
  };

  useEffect(() => {
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992 && menuOpen) {
        setMenuOpen(false);
        document.body.classList.toggle("no-scroll");
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [menuOpen]);

  return (
    <>
      <div
        style={{
          backgroundColor: "#092635",
        }}
        className="header-con"
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h1
            style={{
              margin: "0",
              lineHeight: 1,
              display: "inline",
              maxHeight: "contain",
            }}
          >
            <Link
              to="/"
              style={{
                backgroundColor: "transparent",
                lineHeight: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={props.props.logo.imageUrl}
                alt="logo"
                className="header-logo"
              />
            </Link>
          </h1>
          <div className="header-con-right">
            <div className="menu-screen">
              <ul
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "2rem",
                  fontSize: "0.9rem",
                  listStyleType: "none",
                  padding: 0,
                  margin: 0,
                }}
              >
                {props.props.navLinks.links.map((link, idx) => {
                  if (link?.sublinks) {
                    return (
                      <li key={idx} className="header-link-con">
                        <Menu
                          title={link.title}
                          subTitle={link.subtitle}
                          subLinks={link.sublinks}
                        />
                      </li>
                    );
                  }
                  return (
                    <li className="header-link-con" key={idx}>
                      <Link className="header-link" to={link.url}>
                        {link.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <Link className="get-started" to="#">
              Get started
            </Link>
            <div className={`hamburger-icon`} onClick={handleToggleMenu}>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
            <div
              className="cta-con"
              style={{
                alignItems: "center",
                gap: "1.2rem",
              }}
            >
              {props.props.ctas.map((cta, idx) => {
                return (
                  <Link
                    style={{
                      border: "1px solid #9ec8b9",
                      transition: "all .2s ease-out",
                      padding: "12px",
                      font: "inherit",
                      borderRadius: "8px",
                      fontSize: "1rem",
                      fontWeight: 600,
                      lineHeight: "28px",
                    }}
                    className={`${cta.type === "secondary" ? "cta-secondary" : "cta-primary"}`}
                    to={cta.url}
                    key={`${cta.url}-${idx}`}
                  >
                    {cta.title}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div
        className={`overlay ${menuOpen ? "open" : ""}`}
        onClick={handleToggleMenu}
      ></div>
      <div className={`menu-content ${menuOpen ? "open" : ""}`}>
        <div style={{ height: "100%", padding: "10px 0" }}>
          <div className="menu-content-mobile">
            {props.props.navLinks.links.map((link) => (
              <MenuItemMobile key={link.title} item={link} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const MenuItemMobile = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleCollapsible = () => {
    setIsOpen(!isOpen);
  };

  const hasSublinks = props.item.sublinks && props.item.sublinks.length > 0;

  return (
    <div
      className={`menu-item ${hasSublinks ? "collapsible" : ""} ${isOpen ? "open" : ""}`}
      style={
        isOpen
          ? {
              paddingTop: "",
              paddingBottom: "0px",
            }
          : {}
      }
    >
      {hasSublinks ? (
        <div
          className="menu-item-header"
          onClick={handleToggleCollapsible}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <span>{props.item.title}</span>
          <img
            src="https://github.com/sid-patri-fable/fable-blog/assets/117962421/ce8148a2-9141-43be-ba29-d04c908af25d"
            style={{
              height: "20px",
              filter: "invert(50%)",
            }}
            alt="icon"
          />
        </div>
      ) : (
        <Link
          className="menu-item-header"
          to={props.item.url}
          style={{
            width: "100%",
            color: "inherit",
            display: "block",
            background: "inherit",
          }}
        >
          {props.item.title}
        </Link>
      )}
      {hasSublinks && (
        <div className="menu-item-content">
          {props.item.sublinks.map((sublink, idx) => (
            <Link
              to={sublink.url}
              key={`${sublink.title}-${idx}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}
            >
              <div key={sublink.title}>{sublink.title}</div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

function Menu(props) {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <div style={{ position: "relative" }}>
        <span
          className="header-link"
          onClick={() => {
            setShowMenu((prv) => !prv);
          }}
          style={{
            cursor: "pointer",
          }}
        >
          {props.title}
          <img
            src="https://github.com/sid-patri-fable/fable-blog/assets/117962421/ce8148a2-9141-43be-ba29-d04c908af25d"
            style={{
              width: "20px",
              height: "20px",
              transform: `rotate(0deg)`,
              transition: "all 0.3s ease-out",
            }}
            alt="icon"
          />
        </span>
        <div
          className={`menu ${showMenu ? "menu-visible" : "menu-hidden"}`}
          style={{
            position: "absolute",
            left: "75%",
            zIndex: -1,
          }}
        >
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              gridTemplateColumns: "1fr",
            }}
          >
            {props.subLinks.map((link, idx) => {
              return (
                <li
                  key={idx}
                  style={{
                    margin: "0",
                  }}
                >
                  <Link
                    to={link.url}
                    style={{
                      display: "flex",
                      gap: "0.6rem",
                      alignItems: "center",
                      borderRadius: "8px",
                      whiteSpace: "nowrap",
                      padding: "11px 0",
                      lineHeight: "24px",
                    }}
                    className="menu-links"
                  >
                    <div>
                      <p
                        style={{
                          fontSize: "16px",
                          margin: 0,
                          fontWeight: "500",
                          lineHeight: "1",
                        }}
                      >
                        {link.title}
                      </p>
                      <p
                        style={{
                          fontSize: "0.9rem",
                          margin: 0,
                          lineHeight: "1",
                          marginTop: "4px",
                        }}
                      >
                        {link.subtitle}
                      </p>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
