import React from 'react';
import { makeStyles } from '@material-ui/core';
import Media from 'react-media';

const styles = makeStyles(theme => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px 0',
  },
  list: {
    margin: 0,
    padding: 0,
    display: 'flex',
    listStyle: 'none',
  },
  link: {
    fontWeight: '600',
    fontSize: '24px',
    textDecoration: 'none',
    color: '#fff',
  },
  link768: {
    fontWeight: '600',
    fontSize: '18px',
    textDecoration: 'none',
    color: '#fff',
  },
  // icon: {
  //   width: '35px',
  // },
  colored: {
    color: '#FFF59D',
  },
  svg: {
    marginRight: theme.spacing(1),
  },
}));

const Header = () => {
  const classes = styles();
  return (
    <header className={classes.header}>
      <ul className={classes.list}>
        <li>
          {/* <svg
            className={classes.icon}
            id="Icons"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            fill="#fff"
          >
            <defs>
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    '.cls-1{fill:#45413c;opacity:0.15;}.cls-2,.cls-9{fill:#fff;}.cls-3{fill:#e0e0e0;}.cls-4{fill:none;}.cls-4,.cls-5,.cls-8,.cls-9{stroke:#45413c;stroke-linecap:round;stroke-linejoin:round;}.cls-5{fill:#656769;}.cls-6{fill:#b89558;}.cls-7{fill:#947746;}.cls-8{fill:#525252;}',
                }}
              />
            </defs>
            <title>397-eye</title>
            <g id="_Group_" data-name="<Group>">
              <ellipse
                id="_Ellipse_"
                data-name="<Ellipse>"
                className="cls-1"
                cx={24}
                cy="42.14"
                rx="13.63"
                ry="1.86"
              />
              <ellipse
                id="_Path_"
                data-name="<Path>"
                className="cls-2"
                cx={24}
                cy={24}
                rx="21.83"
                ry="12.08"
              />
              <path
                id="_Path_2"
                data-name="<Path>"
                className="cls-3"
                d="M24,17.81c10.85,0,18.1,5.12,20.73,9.13A5.7,5.7,0,0,0,45.83,24c0-3.71-8-12.08-21.83-12.08S2.17,20.29,2.17,24a5.7,5.7,0,0,0,1.1,2.94C5.9,22.93,13.15,17.81,24,17.81Z"
              />
              <ellipse
                id="_Path_3"
                data-name="<Path>"
                className="cls-4"
                cx={24}
                cy={24}
                rx="21.83"
                ry="12.08"
              />
              <path
                id="_Path_4"
                data-name="<Path>"
                className="cls-5"
                d="M24,14.79c13.13,0,20.72,8.25,20.83,12a5.58,5.58,0,0,0,1-2.79c0-3.71-8-12.08-21.83-12.08S2.17,20.29,2.17,24a5.58,5.58,0,0,0,1,2.79C3.28,23,10.87,14.79,24,14.79Z"
              />
              <circle id="_Path_5" data-name="<Path>" className="cls-6" cx={24} cy={24} r="8.98" />
              <path
                id="_Path_6"
                data-name="<Path>"
                className="cls-7"
                d="M30.23,17.53a8.05,8.05,0,1,1-12.46,0,9,9,0,1,0,12.46,0Z"
              />
              <circle id="_Path_7" data-name="<Path>" className="cls-4" cx={24} cy={24} r="8.98" />
              <circle id="_Path_8" data-name="<Path>" className="cls-8" cx={24} cy={24} r="4.03" />
              <circle
                id="_Path_9"
                data-name="<Path>"
                className="cls-9"
                cx="20.62"
                cy="19.8"
                r="3.07"
              />
            </g>
          </svg> */}
        </li>
        <li></li>

        <li></li>
      </ul>
      <Media query="(max-width: 768px)">
        {matches =>
          matches ? (
            <a href="#" className={(classes.link, classes.link768)}>
              ditate<span className={classes.colored}>.me</span>
            </a>
          ) : (
            <a href="#" className={classes.link}>
              ditate<span className={classes.colored}>.me</span>
            </a>
          )
        }
      </Media>
    </header>
  );
};

export default Header;
