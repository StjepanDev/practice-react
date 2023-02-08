import "./App.css";
import TempControllerApp from "./projects/06-temperature-controller/TempControllerApp";
// import AlertApp from "./projects/05-alerts/AlertApp";
// import TestimonialsApp from "./projects/04-testimonials-app/TestimonialsApp";

// import LikePhotoApp from "./projects/03-like-my-photo/LikePhotoApp";
// import RandomizeColor from "./projects/02-randomize-colors/RandomizeColor";
// import EsignatureApp from "./projects/01-e-signature-app/EsignatureApp";

function App() {
  return (
    <div className='App'>
      {/* <EsignatureApp /> */}
      {/* <RandomizeColor /> */}
      {/* <LikePhotoApp /> */}
      {/* {<TestimonialsApp />} */}
      {/* {<AlertApp />} */}
      {<TempControllerApp />}
    </div>
  );
}

export default App;
