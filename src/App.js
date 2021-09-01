import "./App.css";
import CenteredCard from "./components/CenteredCard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CenteredCard>
          <h1>Dev: Cláudio</h1>
          <p>Experiências: React | Java</p>
        </CenteredCard>

        <CenteredCard>
          <h1>Dev: João</h1>
          <p>Experiências: Angular | Python</p>
        </CenteredCard>

        <CenteredCard>
          <h1>Dev: Maria</h1>
          <p>Experiências: Vue | Go | .Net</p>
        </CenteredCard>

        <CenteredCard>
          <h1>Dev: Joana</h1>
          <p>Experiências: React | Angular</p>
        </CenteredCard>

        <CenteredCard>
          <h1>Dev: Pedro</h1>
          <p>Experiências: Java | Python</p>
        </CenteredCard>
      </header>
    </div>
  );
}

export default App;
