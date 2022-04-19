import NavBar from "./navBar";

const About = () => {
  return (
    <div>
      <NavBar />
      <article>
        <h3>About</h3>
        <p>
          This is an example app created by PJ Lenhart to dispaly the statistics
          for MLB games he has scored and other general information about MLB
          Teams.
        </p>
        <p>
          This app was created with React JS front-end, NodeJS with Express
          back-end, and a MySQL Database for all of the statistics.{" "}
        </p>
      </article>
    </div>
  );
};

export default About;
