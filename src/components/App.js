import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navigation from "./Navigation";
import LandingPage from "./LandingPage";
import BubbleSort from "./sort/BubbleSort";
import InsertionSort from "./sort/InsertionSort";
import MergeSort from "./sort/MergeSort";
import QuickSort from "./sort/QuickSort";
import SelectionSort from "./sort/SelectionSort";

const App = () => {
  const minHeight = 20;
  const maxHeight = 100;
  const defaultSpeed = 200;
  const defaultAmountOfBars = 40;

  return (
    <div className="container-fluid d-flex flex-column vh-100">
      <BrowserRouter>
        <div className="row">
          <Navigation />
        </div>
        <div className="row flex-grow-1">
          <Switch>
            <Route path="/" exact>
              <LandingPage
                minHeight={minHeight}
                maxHeight={maxHeight}
                defaultSpeed={defaultSpeed}
                defaultAmountOfBars={defaultAmountOfBars}
              />
            </Route>
            <Route path="/bubble-sort" exact>
              <BubbleSort
                minHeight={minHeight}
                maxHeight={maxHeight}
                defaultSpeed={defaultSpeed}
                defaultAmountOfBars={defaultAmountOfBars}
              />
            </Route>
            <Route path="/insertion-sort" exact>
              <InsertionSort
                minHeight={minHeight}
                maxHeight={maxHeight}
                defaultSpeed={defaultSpeed}
                defaultAmountOfBars={defaultAmountOfBars}
              />
            </Route>
            <Route path="/merge-sort" exact>
              <MergeSort
                minHeight={minHeight}
                maxHeight={maxHeight}
                defaultSpeed={defaultSpeed}
                defaultAmountOfBars={defaultAmountOfBars}
              />
            </Route>
            <Route path="/quick-sort" exact component={QuickSort}>
              <QuickSort
                minHeight={minHeight}
                maxHeight={maxHeight}
                defaultSpeed={defaultSpeed}
                defaultAmountOfBars={defaultAmountOfBars}
              />
            </Route>
            <Route path="/selection-sort" exact component={SelectionSort}>
              <SelectionSort
                minHeight={minHeight}
                maxHeight={maxHeight}
                defaultSpeed={defaultSpeed}
                defaultAmountOfBars={defaultAmountOfBars}
              />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
