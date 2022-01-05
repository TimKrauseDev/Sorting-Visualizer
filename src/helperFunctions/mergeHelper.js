export const mergeSort = (arr, histArr, l, r) => {
  if (l >= r) {
    return;
  }
  var m = l + Math.floor((r - l) / 2);

  mergeSort(arr, histArr, l, m);
  mergeSort(arr, histArr, m + 1, r);
  histArr.concat(merge(arr, histArr, l, m, r));
  return histArr;
};

const merge = async (arr, histArr, l, m, r) => {
  let n1 = m - l + 1;
  let n2 = r - m;

  let L = new Array(n1);
  let R = new Array(n2);

  for (let i = 0; i < n1; i++) {
    L[i] = arr[l + i];
  }
  for (let j = 0; j < n2; j++) {
    R[j] = arr[m + 1 + j];
  }

  let i = 0;
  let j = 0;
  let k = l;

  while (i < n1 && j < n2) {
    if (L[i] < R[j]) {
      arr[k] = L[i];
      i++;
    } else {
      arr[k] = R[j];
      j++;
    }
    k++;
    histArr.push({ array: arr.concat(), l, r, k });
  }

  while (i < n1) {
    arr[k] = L[i];
    i++;
    k++;
  }

  while (j < n2) {
    arr[k] = R[j];
    j++;
    k++;
  }
  histArr.push({ array: arr.concat(), l, r, k });
  return histArr;
};

export const visualizeArray = (arrayHistory, positionInHistory) => {
  const { array, l, r, k } = arrayHistory[positionInHistory];

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
              arrayHistory[0].length,
              index,
              l,
              r,
              k
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
  arrayLength,
  index,
  l,
  r,
  k
) => {
  if (!positionInHistory) {
    return "#ccc"; //grey
  }

  if (positionInHistory === arrayHistoryLength - 1) {
    return "#64A279"; //green
  }

  if (index === k) {
    return "#a2648d"; // purple
  } else if (index < k && r === arrayLength - 1 && l === 0) {
    return "#64A279"; //green
  } else if (index >= l && index <= r) {
    return "#a39e65"; //yellow
  } else {
    return "#ccc"; //grey
  }
};
