export const selectionSort = (initArr, amountOfBars) => {
  let histArr = [{ array: initArr.concat(), i: 0, j: 0, min: null }];

  for (let i = 0; i < amountOfBars; i++) {
    let min = i;
    for (let j = i + 1; j < amountOfBars; j++) {
      if (initArr[j] < initArr[min]) {
        min = j;
      }
      histArr.push({ array: initArr.concat(), i, j, min });
    }
    if (min !== i) {
      let tmp = initArr[i];
      initArr[i] = initArr[min];
      initArr[min] = tmp;
    }
  }
  return histArr;
};

export const visualizeArray = (arrayHistory, positionInHistory) => {
  //needs to be done before step and after step
  const { array, i, j, min } = arrayHistory[positionInHistory];

  return array.map((num, index) => {
    return (
      <div
        key={index}
        className={`d-flex flex-column h-100 w-100 pe-1 justify-content-end`}
      >
        <div
          className="d-flex justify-content-center"
          style={{
            height: `${num}%`,
            backgroundColor: getBackgroundColor(
              positionInHistory,
              arrayHistory.length,
              index,
              i,
              j,
              min
            ),
          }}
        ></div>
      </div>
    );
  });
};

const getBackgroundColor = (
  positionInHistory,
  arrayHistoryLength,
  index,
  i,
  j,
  min
) => {
  if (!positionInHistory) {
    return "#ccc"; //grey
  }

  if (positionInHistory === arrayHistoryLength - 1) {
    return "#64A279"; //green
  }

  if (index === j + 1 || index === min) {
    return "#a2648d"; // purple
  } else if (index < i) {
    return "#64A279"; //green
  } else {
    return "#ccc"; //grey
  }
};
