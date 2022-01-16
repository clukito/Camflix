import React, { useState, useEffect } from "react";

import Data from "./Data";
import "./styles.css";

const apiData = "https://api.tvmaze.com/search/shows?q=girls";

export default function Json() {
  const [data, setData] = useState([]); // returns tuple
  const [q, setQ] = useState(""); //Filter. empty string

  useEffect(() => {
    fetch(apiData)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        console.log("success");
      })
      .catch((error) => {
        console.log(error);
        setData(error);
      });
  }, []);

  function search(val) {
    return val.filter((val) =>
      val.show.name.toLowerCase().includes(q.toLowerCase())
    );
  }

  return (
    <div>
      <div className="search">
        <input
          type="text"
          placeholder="Search here"
          value={q}
          onChange={(event) => {
            setQ(event.target.value);
          }}
        />
      </div>
      <div className="App">
        <Data data={search(data)} />
      </div>
    </div>
  );
}
