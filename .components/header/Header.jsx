import React, { useState, useEffect } from 'react'
import "./index.css"

const Header = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);

    document.body.classList.toggle('no-scroll');
  };

  useEffect(() => {
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992 && menuOpen) {
        setMenuOpen(false)
        document.body.classList.toggle('no-scroll');
      }
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    };
  }, [menuOpen]);

  return (
    <>
      <div
        style={{
          backgroundColor: '#092635',
          position: 'sticky',
          top: '0',
          zIndex: '4',
        }}
        className='header-con'
      >
        <div
          style={{
            maxWidth: '1500px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <h1 style={{ margin: '0', lineHeight: 1, display: 'inline', maxHeight: 'contain' }}>
            <a href='/' style={{ backgroundColor: 'transparent', lineHeight: 1 }}>
              <img
                src={props.props.logo.imageUrl}
                alt="fable logo"
                style={{
                  height: '48px',
                  width: '112px'
                }}
              />
            </a>
          </h1>
          <div className='menu-screen'>
            <ul
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '2rem',
                fontSize: '0.9rem',
                listStyleType: 'none',
                padding: 0,
                margin: 0
              }}
            >
              {props.props.navLinks.links.map((link, idx) => {
                if (link?.sublinks) {
                  return (
                    <li key={idx} className='header-link-con'>
                      <Menu
                        title={link.title}
                        subTitle={link.subtitle}
                        subLinks={link.sublinks}
                      />
                    </li>
                  )
                }
                return (
                  <li className='header-link-con' key={idx}>
                    <a
                      className='header-link'
                      href={link.url}
                    >
                      {link.title}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className={`hamburger-icon ${menuOpen ? 'open' : ''}`} onClick={handleToggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <div
            className='cta-con'
            style={{
              alignItems: 'center',
              gap: '1.2rem'
            }}
          >
            {props.props.ctas.map((cta, idx) => {
              return (
                <a
                  style={{
                    border: '2px solid #9ec8b9',
                    transition: 'all .2s ease-out',
                    padding: '1rem 2rem',
                    font: 'inherit',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    fontWeight: 500,
                  }}
                  className={`${cta.type === 'secondary' ? 'cta-secondary' : 'cta-primary'}`}
                  href={cta.url}
                  key={`${cta.url}-${idx}`}
                >
                  {cta.title}
                </a>
              )
            })}
          </div>
        </div>
      </div>
      <div className={`overlay ${menuOpen ? 'open' : ''}`} onClick={handleToggleMenu}></div>
      <div className={`menu-content ${menuOpen ? 'open' : ''}`}>
        <div style={{ height: '100%', padding: '1rem' }}>
          <div className="menu-content-mobile">
            {props.props.navLinks.links.map((link) => (
              <MenuItemMobile key={link.title} item={link} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

const MenuItemMobile = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleCollapsible = () => {
    setIsOpen(!isOpen);
  };

  const hasSublinks = props.item.sublinks && props.item.sublinks.length > 0;

  return (
    <div
      className={`menu-item ${hasSublinks ? 'collapsible' : ''} ${isOpen ? 'open' : ''}`}
    >
      {hasSublinks ? (
        <div
          className="menu-item-header"
          onClick={handleToggleCollapsible}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <span>
            {props.item.title}
          </span>
          <img
            src="https://github.com/sid-patri-fable/fable-blog/assets/117962421/ce8148a2-9141-43be-ba29-d04c908af25d"
            style={{
              height: '8px',
              marginLeft: '5px',
              transform: `${isOpen ? 'rotate(180deg)' : 'rotate(0)'}`,
              transition: 'all 0.3s ease-out'
            }}
            alt="icon"
          />
        </div>
      ) : (
        <a
          className="menu-item-header"
          href={props.item.url}
          style={{
            width: '100%',
            color: 'inherit',
            display: 'block',
            background: 'inherit'
          }}
        >
          {props.item.title}
        </a>
      )}
      {hasSublinks && (
        <div className="menu-item-content">
          {props.item.sublinks.map((sublink, idx) => (
            <a href={sublink.url} key={`${sublink.title}-${idx}`} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <img src={sublink.logo} alt="logo" />
              <div key={sublink.title}>
                {sublink.title}
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

function Menu(props) {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <>
    <div style={{position: "relative"}}>
      <span
        className='header-link'
        onMouseEnter={() => setShowMenu(true)}
        onMouseLeave={() => setShowMenu(false)}
        style={{
          cursor: 'pointer',
        }}
      >
        {props.title}
        <img
          src="https://github.com/sid-patri-fable/fable-blog/assets/117962421/ce8148a2-9141-43be-ba29-d04c908af25d"
          style={{
            width: '1rem',
            height: '1rem',
            marginLeft: '5px',
            marginTop: "5px",
            transform: `${showMenu ? 'rotate(180deg)' : 'rotate(0)'}`,
            transition: 'all 0.3s ease-out'
          }}
          alt="icon"
        />
      </span>
      <div
        onMouseEnter={() => setShowMenu(true)}
        onMouseLeave={() => setShowMenu(false)}
        className={`menu ${showMenu ? 'menu-visible' : 'menu-hidden'}`}
        style={{
          width: 'fit-content',
          minWidth: "360px",
          maxWidth: '1500px',
          height: 'fit-content',
          backgroundColor: 'transparent',
          position: 'absolute',
          top: '40px',
          left: '50%',
          zIndex: -1,
        }}
      >
        <div
          style={{
            margin: '0.5rem',
            height: '100%',
            backgroundColor: '#fff',
            borderRadius: '0.6rem',
            display: 'flex',
            padding: '1rem',
            alignItems: 'stretch'
          }}
        >
          <div
            style={{
              flex: '0.6',
              padding: '1rem'
            }}
          >
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '0.4rem',
                marginTop: '1rem'
              }}
            >
              {props.subLinks.map((link, idx) => {
                return (
                  <li
                    key={idx}
                    style={{
                      margin: '0'
                    }}

                  >
                    <a
                      href={link.url}
                      style={{
                        color: '#000',
                        fontSize: '0.9rem',
                        display: 'flex',
                        gap: '0.6rem',
                        alignItems: 'center',
                        padding: '0.5rem',
                        borderRadius: '8px'
                      }}
                      className='menu-links'
                    >
                      <div
                      >
                        <p
                          style={{
                            fontSize: '0.9rem',
                            margin: 0,
                            fontWeight: '600',
                            lineHeight: '1'
                          }}
                        >
                          {link.title}
                        </p>
                        <p
                          style={{
                            fontSize: '0.9rem',
                            margin: 0,
                            lineHeight: '1',
                            marginTop: '4px'
                          }}
                        >
                          {link.subtitle}
                        </p>
                      </div>
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
          
        </div>
      </div>
      </div>
    </>
  )
}

export default Header
