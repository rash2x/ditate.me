import React from 'react';
import ConfettiCanvas from 'react-confetti-canvas';
import { makeStyles } from '@material-ui/core';

const styles = makeStyles(theme => ({
  container: {
    margin: 'auto',
    flex: '0 0 auto',
  },
  canvas: {
    width: '100%',
    height: '100vh',
    position: 'absolute',
    top: '0',
    left: '0',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '600px',
  },
  clap: {
    width: '95px',
    margin: '0 auto',
    marginBottom: '20px',
  },
  title: {
    fontWeight: '600',
    fontSize: '40px',
    color: '#FFF59D',
    textAlign: 'center',
  },
  text: {
    fontWeight: '500',
    fontSize: '20px',
    color: '#fff',
    textAlign: 'center',
  },
}));

const Success = () => {
  const classes = styles();
  return (
    <div className={classes.container}>
      <div className={classes.canvas}>
        <ConfettiCanvas />
      </div>
      <div className={classes.wrapper}>
        <svg
          className={classes.clap}
          id="Icons"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
        >
          <defs>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  '.cls-1{fill:#ebcb00;}.cls-1,.cls-2,.cls-4{stroke:#45413c;stroke-linecap:round;stroke-linejoin:round;}.cls-2{fill:none;}.cls-3{fill:#45413c;opacity:0.15;}.cls-4,.cls-5{fill:#ffe500;}.cls-6{fill:#fff48c;}',
              }}
            />
          </defs>
          <title>387-clapping-hands-1</title>
          <path
            id="_Path_"
            data-name="<Path>"
            className="cls-1"
            d="M3.94,23.14A2.16,2.16,0,0,1,7,23.07L4,20.18a2.48,2.48,0,0,1,3.43-3.57l.12.12a2.64,2.64,0,0,1,3.65-3.81l1.72,1.65A2.48,2.48,0,0,1,16.33,11l8.93,8.57c-1.11-1.64-.74-4.5,1-5.42a1.6,1.6,0,0,1,2.09.58l4.35,5.61a15.37,15.37,0,0,1-2,18.68,9.25,9.25,0,0,1-13.08.27L4,26.2A2.16,2.16,0,0,1,3.94,23.14Z"
          />
          <line className="cls-2" x1="29.75" y1="23.87" x2="25.26" y2="19.56" />
          <line
            id="_Path_2"
            data-name="<Path>"
            className="cls-2"
            x1="7.54"
            y1="16.73"
            x2="16.55"
            y2="25.38"
          />
          <line
            id="_Path_3"
            data-name="<Path>"
            className="cls-2"
            x1={7}
            y1="23.07"
            x2="13.13"
            y2="28.95"
          />
          <line
            id="_Path_4"
            data-name="<Path>"
            className="cls-2"
            x1="12.91"
            y1="14.57"
            x2="20.21"
            y2="21.57"
          />
          <ellipse
            id="_Ellipse_"
            data-name="<Ellipse>"
            className="cls-3"
            cx={26}
            cy="45.5"
            rx="11.5"
            ry="1.5"
          />
          <path
            id="_Path_5"
            data-name="<Path>"
            className="cls-4"
            d="M38.22,13.66,43.54,12a.39.39,0,0,0,.25-.56L42.42,9.13a.4.4,0,0,0-.62,0l-3.94,4A.35.35,0,0,0,38.22,13.66Z"
          />
          <path
            id="_Path_6"
            data-name="<Path>"
            className="cls-4"
            d="M35.28,11.27l2.6-4.92a.39.39,0,0,0-.21-.58L35.06,5.1a.39.39,0,0,0-.46.41V11.1A.36.36,0,0,0,35.28,11.27Z"
          />
          <path
            id="_Path_7"
            data-name="<Path>"
            className="cls-4"
            d="M16.21,7.58,19,2.73a.4.4,0,0,0-.2-.58l-2.59-.74a.39.39,0,0,0-.47.39l-.16,5.6A.35.35,0,0,0,16.21,7.58Z"
          />
          <path
            id="_Path_8"
            data-name="<Path>"
            className="cls-4"
            d="M12.43,7.85,11,2.48a.39.39,0,0,0-.55-.27L8.05,3.5A.4.4,0,0,0,8,4.12L11.82,8.2A.36.36,0,0,0,12.43,7.85Z"
          />
          <path
            id="_Path_9"
            data-name="<Path>"
            className="cls-5"
            d="M10.38,25.28a2.16,2.16,0,0,1,3.06-.06l-3-2.89a2.48,2.48,0,1,1,3.43-3.57l.12.11a2.64,2.64,0,1,1,3.65-3.81l1.72,1.65a2.47,2.47,0,0,1,3.42-3.57l8.93,8.57c-1.11-1.64-.74-4.51,1-5.42a1.59,1.59,0,0,1,2.09.57l4.35,5.62a15.35,15.35,0,0,1-2,18.67,9.25,9.25,0,0,1-13.08.27L10.44,28.35A2.18,2.18,0,0,1,10.38,25.28Z"
          />
          <path
            className="cls-6"
            d="M32.71,19.16a1.59,1.59,0,0,1,2.09.57l4.35,5.62A15.44,15.44,0,0,1,41.36,32a15.35,15.35,0,0,0-2.21-9.47L34.8,16.86a1.59,1.59,0,0,0-2.09-.57c-1.49.78-2,3-1.4,4.62A3,3,0,0,1,32.71,19.16Z"
          />
          <path
            className="cls-6"
            d="M19.28,16.08A2.48,2.48,0,0,1,22.77,16L29,22a3.45,3.45,0,0,0,3.73.71l-10-9.59a2.47,2.47,0,0,0-3.72,3.22A1.49,1.49,0,0,1,19.28,16.08Z"
          />
          <path
            id="_Path_10"
            data-name="<Path>"
            className="cls-2"
            d="M10.38,25.28a2.16,2.16,0,0,1,3.06-.06l-3-2.89a2.48,2.48,0,1,1,3.43-3.57l.12.11a2.64,2.64,0,1,1,3.65-3.81l1.72,1.65a2.47,2.47,0,0,1,3.42-3.57l8.93,8.57c-1.11-1.64-.74-4.51,1-5.42a1.59,1.59,0,0,1,2.09.57l4.35,5.62a15.35,15.35,0,0,1-2,18.67,9.25,9.25,0,0,1-13.08.27L10.44,28.35A2.18,2.18,0,0,1,10.38,25.28Z"
          />
          <line className="cls-2" x1="36.19" y1="26.01" x2="31.7" y2="21.71" />
          <line
            id="_Path_11"
            data-name="<Path>"
            className="cls-2"
            x1="13.98"
            y1="18.87"
            x2={23}
            y2="27.53"
          />
          <line
            id="_Path_12"
            data-name="<Path>"
            className="cls-2"
            x1="13.44"
            y1="25.22"
            x2="19.57"
            y2="31.1"
          />
          <line
            id="_Path_13"
            data-name="<Path>"
            className="cls-2"
            x1="19.35"
            y1="16.71"
            x2="26.65"
            y2="23.72"
          />
        </svg>
        <span className={classes.title}>Успешно!</span>
        <p className={classes.text}>Мы получили твой вопрос, мы затронем его на подкасте.</p>
      </div>
    </div>
  );
};

export default Success;
