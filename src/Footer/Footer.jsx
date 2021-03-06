import { makeStyles } from '@material-ui/core';
import React from 'react';

const styles = makeStyles({
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px 0',
    flex: '0 0 auto',
  },
  copyright: {
    fontWeight: '500',
    fontSize: '14px',
    color: '#fff',
  },
  hash: {
    display: 'flex',
    textAlign: 'center',
    fontWeight: '500',
    fontSize: '14px',
    color: '#fff',
  },
  hashBold: {
    fontWeight: '700',
  },
  icon: {
    width: '35px',
  },
});

const Footer = () => {
  const classes = styles();
  return (
    <footer className={classes.footer}>
      <span className={classes.copyright}>2021 &copy; Можно все</span>
      <div className={classes.hash}>
        <span className={classes.hash}>
          <span className={classes.hashBold}>#Минибудды </span> отвечают
          {/* <svg
            className={classes.icon}
            id="Icons"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
          >
            <defs>
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    '.cls-1{fill:#ffe500;}.cls-2{fill:#fff48c;}.cls-3{fill:#45413c;opacity:0.15;}.cls-4{fill:#ebcb00;}.cls-5{fill:none;stroke:#45413c;stroke-linecap:round;stroke-linejoin:round;}',
                }}
              />
            </defs>
            <title>373-OK-hand-1</title>
            <path
              className="cls-1"
              d="M27.16,5.78a2.84,2.84,0,0,0-4.05,4,26.36,26.36,0,0,1,6.33,10.44,11,11,0,0,0-6.06-3,12.15,12.15,0,0,0-9.63,2.47,2.85,2.85,0,0,0,.93,4.81A3.16,3.16,0,0,0,17.8,24a6.29,6.29,0,0,1,5-.88,5.25,5.25,0,1,1-2.25,10.26,6,6,0,0,1-4.61-5,3.08,3.08,0,0,0-2.44-2.91A2.73,2.73,0,0,0,10,28v0C10,35.11,15.87,43.53,25,42.25,32.62,41.17,35.2,39,36.23,29.38,36.84,22.2,33.85,12.66,27.16,5.78Z"
            />
            <path
              className="cls-2"
              d="M23.44,9.17a2.83,2.83,0,0,1,3.87.14,33.09,33.09,0,0,1,9,18.86c.2-7-2.82-15.89-9.14-22.39A2.84,2.84,0,0,0,23,9.65,2.85,2.85,0,0,1,23.44,9.17Z"
            />
            <ellipse
              id="_Ellipse_"
              data-name="<Ellipse>"
              className="cls-3"
              cx={24}
              cy="45.5"
              rx="11.5"
              ry="1.5"
            />
            <path
              className="cls-1"
              d="M23.4,17.21a11,11,0,0,1,6,3,26.33,26.33,0,0,0-5.3-9.33,2.17,2.17,0,0,0-3.36.11h0a2.16,2.16,0,0,0,.11,2.73A22.7,22.7,0,0,1,23.4,17.21Z"
            />
            <path
              className="cls-4"
              d="M20.57,11.32a2.19,2.19,0,0,1,2.18.69,26.21,26.21,0,0,1,4.13,6.34,11.18,11.18,0,0,1,2.56,1.86,26.33,26.33,0,0,0-5.3-9.33,2.17,2.17,0,0,0-3.36.11h0A3,3,0,0,0,20.57,11.32Z"
            />
            <path
              className="cls-5"
              d="M23.4,17.21a11,11,0,0,1,6,3,26.33,26.33,0,0,0-5.3-9.33,2.17,2.17,0,0,0-3.36.11h0a2.16,2.16,0,0,0,.11,2.73A22.7,22.7,0,0,1,23.4,17.21Z"
            />
            <g id="_Group_" data-name="<Group>">
              <path
                className="cls-2"
                d="M23.38,20.77c2.33.34,7.28,2.37,8.91,3.95a11.19,11.19,0,0,0-8.91-7.51,12.15,12.15,0,0,0-9.63,2.47,2.87,2.87,0,0,0-.35,3.89C15.73,21.22,19.69,20.23,23.38,20.77Z"
              />
            </g>
            <path
              id="_Path_"
              data-name="<Path>"
              className="cls-5"
              d="M29.44,20.21a11.15,11.15,0,0,1,3.43,8"
            />
            <path
              className="cls-5"
              d="M27.16,5.78a2.84,2.84,0,0,0-4.05,4,26.36,26.36,0,0,1,6.33,10.44,11,11,0,0,0-6.06-3,12.15,12.15,0,0,0-9.63,2.47,2.85,2.85,0,0,0,.93,4.81A3.16,3.16,0,0,0,17.8,24a6.29,6.29,0,0,1,5-.88,5.25,5.25,0,1,1-2.25,10.26,6,6,0,0,1-4.61-5,3.08,3.08,0,0,0-2.44-2.91A2.73,2.73,0,0,0,10,28v0C10,35.11,15.87,43.53,25,42.25,32.62,41.17,35.2,39,36.23,29.38,36.84,22.2,33.85,12.66,27.16,5.78Z"
            />
          </svg> */}
        </span>
      </div>
    </footer>
  );
};

export default Footer;