import React, { useState, useEffect, useCallback } from "react";
import _ from "lodash";

import Controls from "../Controls";
import { createRandomArray } from "../../helperFunctions";
import { mergeSort, visualizeArray } from "../../helperFunctions/mergeHelper";

const MergeSort = ({
  minHeight,
  maxHeight,
  defaultSpeed,
  defaultAmountOfBars,
}) => {
  const [sortingActive, setSortingActive] = useState(false);
  const [sortingSpeed, setSortingSpeed] = useState(defaultSpeed);
  const [arrayHistory, setArrayHistory] = useState([]);
  const [positionInHistory, setPositionInHistory] = useState(0);
  const [amountOfBars, setAmountOfBars] = useState(defaultAmountOfBars);

  const handleReset = useCallback(() => {
    let initArr = createRandomArray(amountOfBars, minHeight, maxHeight);
    let histArr = [{ array: initArr.concat(), l: 0, r: 0, k: 0 }];
    setArrayHistory(mergeSort(initArr, histArr, 0, amountOfBars - 1));
    setPositionInHistory(0);
    setSortingActive(false);
  }, [amountOfBars, minHeight, maxHeight]);

  useEffect(() => {
    handleReset();
  }, [handleReset]);

  useEffect(() => {
    if (!sortingActive) return;
    if (positionInHistory < arrayHistory.length - 1) {
      const id = setInterval(() => {
        setPositionInHistory(positionInHistory + 1);
      }, sortingSpeed);
      return () => {
        clearInterval(id);
      };
    } else {
      setSortingActive(false);
    }
  }, [positionInHistory, sortingActive, arrayHistory.length, sortingSpeed]);

  const handleStepForward = () => {
    if (positionInHistory < arrayHistory.length - 1) {
      setPositionInHistory(positionInHistory + 1);
    }
  };
  const handleStepBackward = () => {
    if (positionInHistory > 0) {
      setPositionInHistory(positionInHistory - 1);
    }
  };

  return (
    <div className="page-wrapper p-3 d-flex flex-column">
      <h2 className="text-center">Merge Sort</h2>
      <div className="d-flex flex-row pb-3">
        <div className="d-flex w-50 flex-column px-3">
          <p>
            A recursive sorting algorithm that divides the array in half until
            there is only array's of single elements. Each element is compared
            to the adjacent array, sorted and merged back together to create the
            sorted array.
          </p>
          <h4> Performance </h4>
          <table className="w-50">
            <tbody>
              <tr>
                <th scope="row">Worst-Case</th>
                <td>O(n log n)</td>
              </tr>
              <tr>
                <th scope="row">Best-Case</th>
                <td>O(n log n)</td>
              </tr>
              <tr>
                <th scope="row ">Average</th>
                <td>O(n log n)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="d-flex w-50 flex-column border border-dark border-2 p-3">
          <Controls
            setSortingActive={setSortingActive}
            handleStepBackward={handleStepBackward}
            handleStepForward={handleStepForward}
            handleReset={handleReset}
            amountOfBars={amountOfBars}
            setAmountOfBars={setAmountOfBars}
            sortingSpeed={sortingSpeed}
            setSortingSpeed={setSortingSpeed}
          />
        </div>
      </div>
      <div className="bars-wrapper d-flex flex-row h-100">
        {_.isEmpty(arrayHistory)
          ? ""
          : visualizeArray(arrayHistory, positionInHistory)}
      </div>
    </div>
  );
};

export default MergeSort;
