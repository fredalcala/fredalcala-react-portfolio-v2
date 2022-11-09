import "./App.css";
import photo from "./images/suit-pic.JPG";

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
        <div className="imageContainer">
          <img
            src={photo}
            width="350"
            height="400"
            alt="Fred in a suit with a desert background."
            className="rounded-5"
          />
        </div>
        <div className="wrapper row py-4">
          <h3>Hello There! My name is Fred Alcala.</h3>
          <div className="mt-5 px-5 d-flex flex-column">
            <p>
              I currently live in Phoenix, Arizona. While still relatively new to the industry, 
              I was able to complete an intense, fast-paced Software Engineering bootcamp that allowed me to 
              attain the skills and practices necessary to keep up with those with a four-year degree.
              With the completion of the course, I am beginning my journey as a computer programmer
              and willing to learn new skills and technologies to increase my
              skills and to be the best programmer I can be! 
            </p>
            <br/>
          </div>
          <hr/>
          <br/>
          <div> 
            <p>Here is a list of my completed projects so far:</p>
            <br/>
            
          </div>
          </div>
      </main>
    </div>
  );
}

export default App;
