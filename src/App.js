import React, { useEffect, useState } from "react";
import * as D3 from "d3";
import "./App.css";
import countryMappingJson from "./data/countryMappings.json";
import jsonData from "./data/world.json";
import { COEFFICIENT, MAP_WIDTH, MAP_HEIGHT, defaultColorCode } from "./constants";

function App() {
  // useState 必须给定初始值，否则会报错：??of undefined; but why？
  const [projection, setProjection] = useState("");
  // const [path, setPath] = useState("");
  const [svg, setSvg] = useState("");

  useEffect(() => {
    // setProjection(D3.geoMercator().translate([0, 0]).scale(1));
    // setPath(D3.geoPath().projection(projection));
    // async in useEffect, add headers to avoid error: `Uncaught (in promise) SyntaxError: Unexpected token < in JSON at position 0`
    // fetch("/data/test.json", {
    //   headers: {
    //     "Content-Type": "application/json",
    //     Accept: "application/json",
    //   },
    // })
    //   .then((response) => {
    //     console.log("res", response.json());
    //     // setWorldJson(response.json());
    //   })
    //   .catch((e) => {
    //     console.log("e", e);
    //   });
    // read json file by  import rather than fetch, but how to fetch a json file with async?
    // setJsonData(test);
    loadMap();
    // dependency 加入了[projection, path, worldJson]之后会死循环！！
  }, []);

  function loadMap() {
    const projection = D3.geoMercator().translate([0, 0]).scale(1);
    const path = D3.geoPath().projection(projection);
    const bound = path.bounds(jsonData);
    const scalingFactor =
      COEFFICIENT /
      Math.max(
        (bound[1][0] - bound[0][0]) / MAP_WIDTH,
        (bound[1][1] - bound[0][1]) / MAP_HEIGHT
      );
    const widthRatio = 2.4;
    const heightRatio = 2;
    const translatePoint = [
      (MAP_WIDTH - scalingFactor * (bound[1][0] + bound[0][0])) / widthRatio,
      (MAP_HEIGHT - scalingFactor * (bound[1][1] + bound[0][1])) / heightRatio,
    ];
    const svg = D3.select(".map-container")
      .append("svg")
      .attr("transform", "translate(0,0)")
      .attr("overflow", "visible")
      .attr("width", "100%")
      .attr("height", "400");

    setSvg(svg);

    projection.scale(scalingFactor).translate(translatePoint);

    svg
      .selectAll("path")
      .data(jsonData["features"])
      .enter()
      .append("path")
      .attr("d", path);

    highlightAllCountries(defaultColorCode, svg);
  }

  function highlightAllCountries(colorCode, svg) {
    getPath(svg)
      .style('fill', colorCode);
  }

  function getPath(svg) {
    return svg
      .selectAll('path');
  }

  return <div className="map-container"></div>;
}

export default App;
