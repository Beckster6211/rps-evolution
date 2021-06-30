import "./htmlcssjs.css";

function HtmlCssJs() {
  return (
    <div className="htmlcssjs">
      <div>
        {" "}
        <h2 className="title">HtmlCssJs</h2>
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
          This is the improved version (version 2) of the original hackathon
          that did (version 1) still using HTML CSS and JS but better 💪.
          <br />
          <br />
          This makes the user playing the game easier and better as in order to
          pick the options it is no longer an input field that you have to type
          into, that has been replace with a much more friendly buttons (as well
          as refresh button which reset all the scores and comments instead of
          having to refresh the whole page) 🖱️.
          <br />
          <br />
          This version still uses dom manipluation to diplay the results but in
          a much better way of showing them 📊.
          <br />
          <br />
          This version still has alerts and prompts allowing for player to input
          their name 🙋‍♀️.
          <br />
          <br />
          This also has very much better css and styling as well as media
          queries for different devices🎨
        </p>
        <div>
          <h4 className="projectText">
            (Just click the picture or the link to go to the site in a new
            window)
          </h4>
          <a
            href="https://blj-rpshtmlcssjs.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <img
              className="webImage"
              src="./htmlcssjs1.PNG"
              // width="500px"
              // height="200px"
              alt="hackathon"
            />
          </a>
          <br />
          <a
            href="https://blj-rpshtmlcssjs.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <h4 className="webLink"> https://blj-rpshtmlcssjs.netlify.app/</h4>
          </a>
          <p className="projectText">
            Just click the button of which option you want as your choice and
            the the computers option will be shown. As well as seeing a comment
            of the outcome you also see if you get the point.
          </p>
          <p className="projectText">
            This is like a take away version of a meal hot and fresh, a treat,
            still tasty (the analogy will make sense if you do read the
            others)🥡
          </p>
        </div>
      </div>
    </div>
  );
}

export default HtmlCssJs;
