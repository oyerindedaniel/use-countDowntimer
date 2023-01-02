import useCountDownTimer from "./hooks/useCountDownTimer";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const { secondsLeft, resetTimeFunction } = useCountDownTimer({
    seconds: 60,
  });

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="React logo" />
      <h1 className="title">useCountDownTimer()</h1>
      <p className="p">
        {secondsLeft !== 0
          ? `Expires in ${secondsLeft} ${
              secondsLeft <= 1 ? "second" : "seconds"
            }`
          : "Expired"}
      </p>
      <button className="button" onClick={resetTimeFunction}>
        Reset
      </button>
    </div>
  );
}

export default App;
