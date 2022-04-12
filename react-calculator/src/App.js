import "./App.css";

function App() {
  return (
    <>
      <h2 className="header">Calculator</h2>
      <div className="main-container">
        <div className="screen">
          <input type="text" disabled />
        </div>

        <div className="grid-container">
          <div className="ac items">AC</div>
          <div className="m items">m+</div>
          <div className="m items">m-</div>
          <div className="operator items">/</div>
          <div className="decimal items">7</div>
          <div className="decimal items">8</div>
          <div className="decimal items">9</div>
          <div className="operator items">&times;</div>
          <div className="decimal items">4</div>
          <div className="decimal items">5</div>
          <div className="decimal items">6</div>
          <div className="operator items">+</div>
          <div className="decimal items">1</div>
          <div className="decimal items">2</div>
          <div className="decimal items">3</div>
          <div className="operator items">-</div>
          <div className="decimal items">0</div>
          <div className="decimal items">.</div>
          <div className="ac items">c</div>
          <div className="equel items">=</div>
        </div>
      </div>
    </>
  );
}

export default App;
