import React, { useState } from "react";
import ReactDOM from "react-dom";

const Header = ({ title }) => <h1>{title}</h1>;

const Button = ({ title, handleClick }) => (
  <button onClick={handleClick}>{title}</button>
);

const Statistic = ({ title, value }) => (
  <p>
    {title} {value.toString()}
  </p>
);

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <Header title="Give Feedback!" />
      <>
        <Button title="Good" handleClick={() => setGood((good) => good + 1)} />
        <Button
          title="Neutral"
          handleClick={() => setNeutral((neutral) => neutral + 1)}
        />
        <Button title="Bad" handleClick={() => setBad((bad) => bad + 1)} />
      </>
      <Header title="Statistics:" />
      <>
        <Statistic title="Good:" value={good} />
        <Statistic title="Neutral:" value={neutral} />
        <Statistic title="Bad:" value={bad} />
      </>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
