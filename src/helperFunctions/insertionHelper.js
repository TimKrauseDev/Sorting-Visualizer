export const insertionSort = (initArr, amountOfBars) => {
  let histArr = [{ array: initArr.concat(), i: 0, j: 0 }];

  for (let i = 1; i < amountOfBars; i++) {
    let key = initArr[i];
    let j = i - 1;

    while (j >= 0 && initArr[j] > key) {
      initArr[j + 1] = initArr[j];
      j = j - 1;
      initArr[j + 1] = key;
      histArr.push({ array: initArr.concat(), i, j });
    }
  }

  return histArr;
};

export const visualizeArray = (arrayHistory, positionInHistory) => {
  const { array, i, j } = arrayHistory[positionInHistory];

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
              j
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
  j
) => {
  if (!positionInHistory) {
    return "#ccc"; //grey
  }

  if (positionInHistory === arrayHistoryLength - 1) {
    return "#64A279"; //green
  }

  if (index === j + 1) {
    return "#a2648d"; // purple
  } else if (index <= i) {
    return "#64A279"; //green
  } else {
    return "#ccc"; //grey
  }
};
