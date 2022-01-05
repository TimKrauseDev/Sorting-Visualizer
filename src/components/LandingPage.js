import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import _ from "lodash";

import { createRandomArray } from "../helperFunctions";

const LandingPage = ({ minHeight, maxHeight, defaultAmountOfBars }) => {
  const [initArr, setInitArr] = useState([]);

  useEffect(() => {
    if (_.isEmpty(initArr)) {
      setInitArr(createRandomArray(defaultAmountOfBars, minHeight, maxHeight));
    } else {
      const id = setTimeout(() => {
        setInitArr(
          createRandomArray(defaultAmountOfBars, minHeight, maxHeight)
        );
      }, 2000);

      return () => {
        clearInterval(id);
      };
    }
  }, [initArr, defaultAmountOfBars, minHeight, maxHeight]);

  const visualizeArray = (initArr) => {
    return initArr.map((num, index) => {
      return (
        <div
          key={index}
          className="d-flex flex-column h-100 w-100 pe-1 justify-content-end"
        >
          <div
            className="d-flex justify-content-center"
            style={{
              height: `${num}%`,
              backgroundColor: "#ccc",
            }}
          ></div>
        </div>
      );
    });
  };

  return (
    <div className="page-wrapper p-3 d-flex flex-column">
      <h2 className="text-center">Welcome.</h2>
      <p className="text-center">Start by selecting a sorting algorithm</p>
      <div className="mx-auto my-1 button-wrapper">
        <Link to="/bubble-sort" className="btn btn-dark m-2">
          Bubble Sort
        </Link>
        <Link to="insertion-sort" className="btn btn-dark m-2">
          Insertion Sort
        </Link>
        <Link to="/merge-sort" className="btn btn-dark m-2">
          Merge Sort
        </Link>
        <Link to="Quick-sort" className="btn btn-dark m-2">
          Quick Sort
        </Link>
        <Link to="Selection-sort" className="btn btn-dark m-2">
          Selection Sort
        </Link>
      </div>
      <div className="bars-wrapper d-flex flex-row h-100">
        {_.isEmpty(initArr) ? "" : visualizeArray(initArr)}
      </div>
    </div>
  );
};

export default LandingPage;
