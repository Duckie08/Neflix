import React from "react";
import jumboData from './fixtures/jumbo'
import Jumbotron from "./components/jumbotron";

export default function App() {
  return (
    <div className="App">
      <Jumbotron.Container>
        {jumboData.map((item) => (
          <Jumbotron key={item.id} direction={item.direction}>
            <Jumbotron.Pane>
              <Jumbotron.Title>{item.title} </Jumbotron.Title>
              <Jumbotron.Subtitle>{item.subtitle} </Jumbotron.Subtitle>
            </Jumbotron.Pane>
            <Jumbotron.Pane>
              <Jumbotron.Image src={item.image} alt={item.alt} />
            </Jumbotron.Pane>
            <p>{item.alt} </p>
          </Jumbotron>
        ))}
      </Jumbotron.Container>
    </div>
  );
}

