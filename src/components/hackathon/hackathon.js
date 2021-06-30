import "./hackathon.css";

function Hackathon() {
  return (
    <div className="hackathon">
      <div>
        <h2 className="title">Hackathon</h2>
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
          This task was to help with using basic HTML and vanilla JS 🍦. It
          focused on dom manipulation to display the relevate information. We
          also had to use functions to generate the computers random move. As
          well as statements to monitor the scoring generating a response when
          got to a specific number and the ability to add your name.
          <br />
          <br />
          This is the game that managed to create, although it is not in its
          truest form (4 1/2 days coding experience). As the original hackathon
          the game only worked in the console not as part of the screen 🤔.
          <br />
          <br />
          One of the task with creating the game was dom manipulation and I have
          tinkered with it since finishing the first week to make it so that it
          does display the relevant information on the screen 📊.
          <br />
          <br />
          One of the other tasks added to it since week 1 is having alerts and
          prompts for adding the players name which I also added at a later date
          🙋‍♀️.
          <br />
          <br />
          This has also has very minor css 🖌️
        </p>
        <div>
          <h4 className="projectText">
            (Just click the picture or the link to go to the site in a new
            window)
          </h4>
          <a
            href="https://blj-rpshackathon.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <img
              className="webImage"
              src="./hackathon1.PNG"
              // width="500px"
              // height="200px"
              alt="hackathon"
            />
          </a>
          <br />
          <a
            href="https://blj-rpshackathon.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <h4 className="webLink"> https://blj-rpshackathon.netlify.app/</h4>
          </a>
          <p className="projectText">
            Just type in to the input field box your selection of "Rock",
            "Paper" or "Scissors" (You will have to capitalise the first letter)
            and then click the button to generate the computers option and see
            if you get a point.
          </p>
          <p className="projectText">
            This is like a ready meal version of something, its okay, quick
            blast in the microwave and done, still tasty (the analogy will make
            sense if you do read the others)🍱
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hackathon;
