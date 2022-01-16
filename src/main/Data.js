import React from "react";
import Card from "./Card.js";

export default function Datatable({ data }) {
  return (
    <div>
      <div className="container">
        {data?.map((data) => (
          <Card
            key={data.show.id}
            image={data.show.image}
            title={data.show.name}
            url={data?.show?.url}
          />
        ))}
      </div>
    </div>
  );
}
