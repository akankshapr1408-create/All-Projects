import { useState } from "react";

function App() {
  const [num, setNum] = useState("");
  const [result, setResult] = useState("");

  const checkPrime = () => {
    const n = parseInt(num);

    if (n <= 1) {
      setResult("Not a Prime Number");
      return;
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        setResult("Not a Prime Number");
        return;
      }
    }

    setResult("Prime Number");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Prime Number Checker</h2>

      <input
        type="number"
        value={num}
        onChange={(e) => setNum(e.target.value)}
        placeholder="Enter a number"
      />

      <button onClick={checkPrime}>Check</button>

      <h3>{result}</h3>
    </div>
  );
}

export default App;