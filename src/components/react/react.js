import "./react.css";

function ReactVersion() {
  return (
    <div className="react">
      <div>
        <h2 className="title">React</h2>
      </div>
      <div className="project">
        <p className="projectText">
          On School of Code there is something called hackathons (these usually
          occur Fridays). The point of these to take what we have been
          shown/taught during the week and put it into practice building
          something that uses those skills. The first hackathon we were given
          was to create a rock paper scissors game.
          <br />
          <br />
          This is the HTML CSS JS version (version 2) of the original hackathon
          that did (version 1) but this has been made using React (version 3)
          for quicker and better building and improved rendering 💪.
          <br />
          <br />
          This version still uses buttons in prder to select the player option
          making play easier, and much more friendly buttons (as well as refresh
          button which reset all the scores and comments instead of having to
          refresh the whole page) 🖱️.
          <br />
          <br />
          This version has alerts and prompts removed no longer allowing the
          player to input their name (but I may look at putting those back in
          🤔).
          <br />
          <br />
          This also has different css and styling 🎨 (mainly to differentiate
          from version) as well as media queries for different devices 📱 💻
        </p>
        <div>
          <h4 className="projectText">
            (Just click the picture or the link to go to the site in a new
            window)
          </h4>
          <a
            href="https://blj-rpsreact.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <img
              className="webImage"
              src="./react1.PNG"
              // width="500px"
              // height="200px"
              alt="hackathon"
            />
          </a>
          <br />
          <a
            href="https://blj-rpsreact.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <h4 className="webLink"> https://blj-rpsreact.netlify.app/</h4>
          </a>
          <p className="projectText">
            Just click the button of which option you want as your choice and
            the computers option will be shown. As well as seeing a comment of
            the outcome you also see if you get the point.
          </p>
          <p className="projectText">
            This is like going to restuarant for a meal hot and fresh, a treat,
            still tasty but different made by a chef (the analogy will make
            sense if you do read the others) 👩‍🍳
          </p>
        </div>
      </div>
    </div>
  );
}

export default ReactVersion;
