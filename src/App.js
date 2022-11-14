import "./App.css";
import photo from "./images/suit-pic.JPG";
import { MdEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

function App() {
  return (
    <div className="App flex-column">
      <div className="skyline">
        <header>
          <h1>
            <strong>Fred Alcala</strong>
          </h1>
          <h2>
            <strong>Full-Stack Developer</strong>
          </h2>
        </header>
      </div>
      <main className="flex-container bg-dark bg-opacity-25 justify-content-center">
        <div className="imageContainer mt-3">
          <img
            src={photo}
            width="350"
            height="400"
            alt="Fred in a suit with a desert background."
            className="rounded-5 border-dark border border-2"
          />
        </div>
        <div className="wrapper row my-5 px-3 bg-white rounded-5">
          <h3 className="pt-5">Hello There! My name is Fred Alcala.</h3>
          <div className="mt-5 px-5 d-flex flex-column">
            <p>
              I currently live in Phoenix, Arizona. While still relatively new
              to the industry, I was able to complete an intense, fast-paced
              Software Engineering bootcamp that allowed me to attain the skills
              and practices necessary to keep up with those with a four-year
              degree. With the completion of the course, I am beginning my
              journey as a computer programmer and willing to learn new skills
              and technologies to increase my skills and to be the best
              programmer I can be!
            </p>
            <br />
          </div>
          <hr />
          <br />
          <div>
            <h3>Here are some of the projects I have worked on so far:</h3>
            <br />
            <div className="row py-4">
              <div className="col-sm-6 pb-4">
                <div className="card border-info border border-2">
                  <div className="card-body">
                    <div className="bg-info pt-3">
                      <h5 className="card-title pb-3">
                        Restaurant Reservation App
                      </h5>
                    </div>
                    <p className="text-start">
                      • Full stack reservation and table management system.
                    </p>
                    <p className="text-start">
                      • Implemented react router and express to build a RESTful
                      API in order to make HTTP requests for all of the
                      reservation data stored on the connected PostgreSQL
                      database.
                    </p>
                    <p className="text-start">
                      • Created CRUD functions and knex queries to handle data
                      going to and coming from the database.
                    </p>
                    <p className="text-start">
                      • Used Git to track changes and versions while keeping
                      sensitive information from being pushed to repositories.
                    </p>
                    <p className="text-start">
                      Technology: React, Node.js, Express, Knex and PostgreSQL.
                    </p>
                    <div className="row pt-4">
                      <div className="col">
                        <a
                          href="https://restaurant-reserv-frontend.onrender.com/dashboard"
                          className="btn btn-primary"
                        >
                          Live Site
                        </a>
                      </div>
                      <div className="col">
                        <a
                          href="https://github.com/fredalcala/starter-restaurant-reservation"
                          className="btn btn-secondary"
                        >
                          GitHub Repo
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="card border-info border border-2">
                  <div className="card-body">
                    <div className="bg-info pt-3">
                      <h5 className="card-title pb-3">
                        Project Flash-o'-matic
                      </h5>
                    </div>
                    <p className="text-start pb-2">
                      • Created an application that allows users to create,
                      edit, and delete decks and cards within them.
                    </p>
                    <p className="text-start pb-2">
                      • Created a REST API and middleware functions to allow
                      user(s) to create, read, update and delete their perfect
                      deck of study cards.
                    </p>
                    <p className="text-start pb-2">
                      • Defined routes and URLs, and used state over multiple
                      components.
                    </p>
                    <p className="text-start pb-4">
                      Technology: JavaScript, React, Express, Knex, HTML and
                      CSS. Progress/Versions tracked with Git.
                    </p>
                    <div className="row pt-4">
                      <div className="col">
                        {/* <a href="#" class="btn btn-primary">Live Site</a> */}
                      </div>
                      <div className="col">
                        <a
                          href="https://github.com/fredalcala/Project-Flash-o-matic"
                          className="btn btn-secondary"
                        >
                          GitHub Repo
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 pb-4">
                <div className="card border-info border border-2">
                  <div className="card-body">
                    <div className="bg-info pt-3">
                      <h5 className="card-title pb-3">WeLoveMovies</h5>
                    </div>
                    <p className="text-start pb-2">
                      • Assembled the back end of a movie website allowing any
                      user to search for their favorite movies.
                    </p>
                    <p className="text-start pb-2">
                      • Used CRUD methods for reviews, and view theaters and
                      movies that are showing.
                    </p>
                    <p className="text-start pb-2">
                      • Applied router and controller functions to retrieve a
                      user's specific requests.
                    </p>
                    <p className="text-start">
                      Technology: Node.js, Express, and Knex. Version control
                      with Git.
                    </p>
                    <div className="row pt-4">
                      <div className="col">
                        {/* <a href="#" class="btn btn-primary">Live Site</a> */}
                      </div>
                      <div className="col">
                        <a
                          href="https://github.com/fredalcala/WeLoveMovies"
                          className="btn btn-secondary"
                        >
                          GitHub Repo
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 pb-4">
                <div className="card border-info border border-2">
                  <div className="card-body">
                    <div className="bg-info pt-3">
                      <h5 className="card-title pb-3">Decoder Ring</h5>
                    </div>
                    <p className="text-start pb-2">
                      • Built to be an encryption/decryption application to
                      communicate and read top-secret messages.
                    </p>
                    <p className="text-start pb-3">
                      • Created utilizing the test-driven development method.
                    </p>
                    <p className="text-start pb-5">
                      Technology: JavaScript ES6, HTML5, Node.js, Bootstrap,
                      Mocha, Chai.
                    </p>
                    <div className="row pt-4">
                      <div className="col">
                        {/* <a href="#" class="btn btn-primary">Live Site</a> */}
                      </div>
                      <div className="col">
                        <a
                          href="https://github.com/fredalcala/Capstone-1-Decoder"
                          className="btn btn-secondary"
                        >
                          GitHub Repo
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div>
            <hr />
            <br />
            <h3>Contact Info</h3>
            <br />
            <br />
            <p>
              If you ever need to get a hold of me, feel free to reach out to me
              using:
            </p>
            <br />
            <br />
            <ul className="list-inline">
              <li className="list-inline-item">
                <a className="media" href="mailto:aalcala9@miners.utep.edu">
                  Email <MdEmail />
                </a>
              </li>
              <li className="list-inline-item">
                <a className ="media" href="https://www.linkedin.com/in/alfredo-alcala9/.html">
                  LinkedIn
                  <BsLinkedin />{" "}
                </a>
              </li>
              <li className="list-inline-item">
                <a className="media" href="https://github.com/fredalcala.html">
                  GitHub
                  <BsGithub />{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
