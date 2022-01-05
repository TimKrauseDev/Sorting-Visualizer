import React from "react";

const Controls = ({
  setSortingActive,
  handleStepBackward,
  handleStepForward,
  handleReset,
  amountOfBars,
  setAmountOfBars,
  sortingSpeed,
  setSortingSpeed,
}) => {
  return (
    <div className="actions">
      <div className="button-wrapper">
        <button
          type="button"
          className="btn btn-success m-1"
          onClick={() => setSortingActive(true)}
        >
          Start Sort
        </button>
        <button
          type="button"
          className="btn btn-danger m-1"
          onClick={() => setSortingActive(false)}
        >
          Stop Sort
        </button>
        <button
          type="button"
          className="btn btn-secondary m-1"
          onClick={handleStepBackward}
        >
          Step Backward
        </button>
        <button
          type="button"
          className="btn btn-secondary m-1"
          onClick={handleStepForward}
        >
          Step Forward
        </button>
        <button
          type="button"
          className="btn btn-dark m-1"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
      <div className="range-wrapper">
        <label htmlFor="amountOfBars">
          Current Amount of Bars {amountOfBars}
        </label>
        <input
          value={amountOfBars}
          onChange={(e) => setAmountOfBars(e.target.value)}
          type="range"
          className="form-range"
          min="5"
          max="100"
          step="1"
          id="barRange"
        />
        <label htmlFor="sortingSpeed">
          Current Sorting Speed {sortingSpeed / 1000}s
        </label>
        <input
          value={sortingSpeed}
          onChange={(e) => setSortingSpeed(e.target.value)}
          type="range"
          className="form-range"
          min="10"
          max="2000"
          step="10"
          id="barRange"
        />
      </div>
    </div>
  );
};

export default Controls;
