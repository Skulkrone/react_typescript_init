import React, { useState, useRef, useEffect } from "react";
import Card from "./components/Card";

function App() {
  const [cardsData, setCardsData] = useState([
    {
      title: "Picasso",
      content: "Peintre XXème siècle",
      id: 1,
    },
    {
      title: "Van Gogh",
      content: "Peintre XIXème siècle",
      id: 2,
    },
  ]);

  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    console.log(btnRef);
    const handleResize = (e: Event) => {
      console.log("RESIZED", e);
      
    }
    window.addEventListener('resize', handleResize);

    // utilisation de la clean up function
    return () => {
      window.addEventListener('resize', handleResize)
    } 
  }, []);
  return (
    <div className="App">
      <Card title="React & TypeScript" content="Exemples de Listes"></Card>
      {/* Avec les accolades mettre un return sinon mettre des parnethèses */}
      {/* {cardsData.map((item) => {
        return <Card key={item.id} title={item.title} content={item.content}></Card>
      })} */}
      {cardsData.map((item) => (
        <Card key={item.id} title={item.title} content={item.content}></Card>
      ))}
      <button ref={btnRef}>Submit</button>
    </div>
  );
}

export default App;
