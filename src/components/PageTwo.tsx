import { useState, useEffect } from "react";
import data from "../api/nex-users.csv";
import papa from "papaparse";

const PageTwo = () => {
  const [dataFromCsv, setDataFromCsv] = useState<any>();

  useEffect(() => {
    papa.parse(data, {
      header: true,
      newline: "",
      delimiter: "",
      dynamicTyping: false,
      skipEmptyLines: true,
      encoding: "",
      download: true,
      delimitersToGuess: [";", "\t", "|", ",", papa.RECORD_SEP, papa.UNIT_SEP],

      complete: function (result: any) {
        setDataFromCsv(result.data);
      },
    });
  }, []);

  console.log("data here", dataFromCsv);

  return (
    <div className="container">
      <div className="card--content">
        <h2>Cars</h2>
        <div className="card--content-main">
          {dataFromCsv ? (
            dataFromCsv.map((car: any) => (
              <div className="card--content" key={car.id}>
                <div className="card--content-cars">
                  <p>Car name: {car.title}</p>
                  <p>Maximum speed: {car.maximum_speed}</p>
                  <p>Passenger capacity: {car.passenger_capacity}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No Data Found!</p>
          )}
        </div>
        <div className="card--content-first-element">
          {dataFromCsv ? (
            dataFromCsv
              ?.slice(0, 1)
              .map((car: any) => <p>The first car is: {car.title}</p>)
          ) : (
            <p>Sorry, could not fulfill your request!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PageTwo;
