import "./home.css";

function Home() {
  return (
    <div className="home">
      <div>
        <h2 className="title">My Evolution of Rock Paper Scissors</h2>
      </div>
      <div className="project">
        <p className="projectText">
          This project initially started when I took an old task given on School
          of Code and looked at improving it. Light bulb moment 💡😀 how much
          could I tinker with it and were could this lead.
          <br />
          I've thrown in some history of RPS aswell and some fun facts, well I
          think there fun 😁 (although honestly I'm not sure how some of the
          options win 🤷‍♀️)
        </p>
      </div>
      <div className="history">
        <h4 className="historyTitle">History/Origin</h4>
        <h6 className="historySubtitle">🐼 Thank You China and Japan 🎎</h6>
        <p className="historyText">
          First mention of the game was in the book Wuzazu dating the game back
          to the time of the Chinese Han dynasty (206 BCE – 220 CE). In the
          book, the game was called shoushiling.
          <br />
          Japanese history frequently references sansukumi-ken, meaning ken
          (fist ✊) games where <i>
            "the three who are afraid of one another"
          </i>{" "}
          (i.e. A beats B, B beats C, and C beats A). This type of game
          originated in China before being imported in Japan and becoming
          popular.
        </p>
        <p className="slugFrogSnake">
          The earliest Japanese sansukumi-ken game was known as mushi-ken.
          <img
            className="slugFrogSnakeImage"
            src="./frogSlugSnake.jpg"
            alt="slug, frog, snake rps"
          />
          <ul className="mushi-ken">
            In mushi-ken:
            <li>
              "Slug" (represented by little finger) 🐌 <i>I know its snail</i>
            </li>
            <li>"Frog" (represented by thumb) 🐸</li>
            <li>"Snake" (represented by index finger) 🐍</li>
          </ul>
          Frog beats slug, slug beats snake and snake beats frog.
        </p>
        <p className="kitsuneText">
          Although this game was imported from China the Japanese version
          differs in the animals represented. The most popular sansukumi-ken
          game in Japan was kitsune-ken.
          <br />
          <img
            className="kitsuneImage"
            src="./foxVillageHeadHunter.jpg"
            alt="Kitsune-ken rps"
          />
          <ul className="kitsune-ken">
            In kitsune-ken:
            <li>Supernatural fox "Kitsune" 🦊</li>
            <li>
              Village Head 👑 <i>no chief icon</i>
            </li>
            <li>Hunter 🏹</li>
          </ul>
          <br />
          Fox beats village head, village head beats hunter and hunter beats
          fox.
          <br />
          {/* <br /> */}
          Kitsune-ken, unlike mushi-ken or rock–paper–scissors, is played by
          making gestures with both hands.
        </p>
      </div>
      <div className="funFact">
        <h4 className="funFactTitle">Fun facts 😁</h4>
        <ul className="funFactList">
          <li className="funFactLabel">
            Rock paper scissors had been used in court ⚖️
          </li>
          <li className="funFactFact">
            - America 2006 a lengthy case was being held to decide the location
            of a deposition trial and the judge cut it short by ordering that it
            be decided by the two sides play rock paper scissors.
          </li>
          <li className="funFactLabel">
            Rock paper scissors has been used by auction houses 🖼️
          </li>
          <li className="funFactFact">
            - 2005 when a Japanese CEO was auctioning off some original art work
            (Cezanne, Picasso, Van Gogh...) he didn't want to separate the work
            between the two auction houses he had approached (Sothebys and
            Christies). Rock paper scissors would decide which auction house
            would sell them. Christie's director got advice from 11 year old
            twin daughters to pick "scissors" and Sotheby's chanced "paper".
            Christie's sold the $20 million collection and earned millions
            themselves in commission.{" "}
          </li>
          <li className="funFactLabel">
            Rock paper scissors has been used in football ⚽
          </li>
          <li className="funFactFact">
            - 2018 FA Womens Super League the referee realised that didn't have
            a coin to decide the team kick off and had the team captains play
            rock paper scissors instead, the ref was suspended for three weeks
            (bit harsh if you ask me).
          </li>
          <li className="funFactLabel">Everyone/anyone can play? 🐒</li>
          <li className="funFactFact">
            - Japanese scientist have taught chimps to play rock paper scissors
            after teaching them to identify the winning hand combinations.
          </li>
          <li className="funFactLabel">A championship 🏆</li>
          <li className="funFactFact">
            - There are multiple tournaments, competitions and even a world
            series. The UK Champion 2019 Ellie Mac won £20,000 cash prize.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
