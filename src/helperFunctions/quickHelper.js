export const quickSort = (arr, histArr, l, r) => {
  if (l >= r) {
    return;
  }

  let idx = partition(arr, histArr, l, r);
  quickSort(arr, histArr, l, idx - 1);
  quickSort(arr, histArr, idx + 1, r);

  return histArr;
};

const partition = (arr, histArr, l, r) => {
  const pivotValue = arr[r];
  let pivotIdx = l;

  for (let i = l; i < r; i++) {
    if (arr[i] < pivotValue) {
      [arr[i], arr[pivotIdx]] = [arr[pivotIdx], arr[i]];
      pivotIdx++;
    }
    histArr.push({ array: arr.concat(), l, r, i, pivot: pivotIdx });
  }

  [arr[pivotIdx], arr[r]] = [arr[r], arr[pivotIdx]];

  return pivotIdx;
};

export const visualizeArray = (arrayHistory, positionInHistory) => {
  //needs to be done before step and after step
  const { array, l, r, i, pivot } = arrayHistory[positionInHistory];

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
              l,
              r,
              i,
              pivot
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
  l,
  r,
  i,
  pivot
) => {
  if (!positionInHistory) {
    return "#ccc"; //grey
  }

  if (positionInHistory === arrayHistoryLength - 1) {
    return "#64A279"; //green
  }

  if (index === pivot) {
    return "#a2648d"; //purple
  } else if (index === i) {
    return "#64A279"; //green
  } else if (index >= l && index <= r) {
    return "#a39e65"; //yellow
  } else {
    return "#ccc"; //grey
  }
};
