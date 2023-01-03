import useCountDownTimer from "./hooks/useCountDownTimer";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const { days, hours, minutes, seconds, distance, resetTimeFunction } =
    useCountDownTimer({
      seconds: 5,
      executeFunctionOnExpired,
    });

  function executeFunctionOnExpired() {
    console.log(3 + 9);
  }

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="React logo" />
      <h1 className="title">useCountDownTimer()</h1>
      <p className="p">
        {distance > 1000
          ? `Expires in ${days} days ${hours} hours ${minutes} minutes ${seconds} ${
              seconds <= 1 ? "second" : "seconds"
            }`
          : "Expired"}
      </p>
      <button
        className={`button ${distance < 1000 && `button-disabled`}`}
        onClick={resetTimeFunction}
      >
        Reset
      </button>
    </div>
  );
}

export default App;
