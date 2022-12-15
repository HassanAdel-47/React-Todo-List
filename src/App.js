import "./App.css";
import "animate.css";
import React, { useState, useEffect } from "react";

const App = () => {
  // https://fakestoreapi.com/products
  const [fake, setFake] = useState([]);
  console.log(fake);
  useEffect(() => {
    fakeStore();
  }, []);
  const fakeStore = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    console.log(response);
    const jsonData = await response.json();
    console.log(jsonData);
    setFake(jsonData);
  };
  return (
    <>
      <h2>Fake React API Store</h2>
      <div className="container">
        {fake.map((values) => {
          return (
            <div className="box animate__animated animate__fadeIn">
              <div className="content ">
                <h3>{values.title}</h3>
                <p>{values.description}</p>
              </div>
              <img loading="lazy" src={values.image} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;
