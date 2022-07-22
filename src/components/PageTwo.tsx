import { useState, useEffect } from "react";
import { csv } from "d3";
import data from "../utils/nex-users.csv";

interface CsvData {
  id: number;
  title: string;
  passenger_capacity: number;
  maximum_speed: number;
  in_stock: string;
}

export const PageTwo = () => {
  const [text, setText] = useState<any>();

  useEffect(() => {
    csv(data).then((dataFromPath) => {
    //   setText(dataFromPath);
    for(let i = 0; i < dataFromPath.length; i++) {
        console.log(dataFromPath[i])
    }
    });
  }, []);

  console.log(text);

  return <div style={{ textAlign: "center" }}>
    <p>{text}</p>
  </div>;
};
