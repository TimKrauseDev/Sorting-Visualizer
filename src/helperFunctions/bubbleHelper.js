export const bubbleSort = (initArr, amountOfBars) => {
  let histArr = [{ array: initArr.concat(), i: 0, j1: 0, j2: 0 }];

  for (let i = amountOfBars; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      let j1 = j;
      let j2 = j;

      if (initArr[j] > initArr[j + 1]) {
        j2 = j + 1;
        let tmp = initArr[j];
        initArr[j] = initArr[j + 1];
        initArr[j + 1] = tmp;
      }

      histArr.push({
        array: initArr.concat(),
        i,
        j1,
        j2,
      });
    }
  }

  return histArr;
};

export const visualizeArray = (arrayHistory, positionInHistory) => {
  const { array, i, j1, j2 } = arrayHistory[positionInHistory];

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
              j1,
              j2
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
  j1,
  j2
) => {
  if (!positionInHistory) {
    return "#ccc"; //grey
  }

  if (positionInHistory === arrayHistoryLength - 1) {
    return "#64A279"; //green
  }

  if (index >= i) {
    return "#64A279"; //green
  } else if (index === j2) {
    return "#a2648d"; // purple
  } else if (index === j1 + 1 || index === j1) {
    return "#a39e65"; //yellow
  } else {
    return "#ccc"; //grey
  }
};
