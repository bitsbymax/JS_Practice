//!----------------------------------------------------------------//
//? прототип метода SLICE (повертає неглибоку копію частини масиву у вигляді НОВОГО масиву від START до END(не включаючи end))
//? START (A negative index can be used, indicating an offset from the end of the sequence. slice(-2) extracts the last two elements in the sequence.
//? If start is undefined, slice starts from the index 0. If start is greater than the index range of the sequence, an empty array is returned []
//? END (A negative index can be used, indicating an offset from the end of the sequence. slice(2,-1) extracts the third element through the second-to-last element in the sequence.)
//? If end is omitted, slice extracts through the end of the sequence (arr.length). If end is greater than the length of the sequence, slice extracts through to the end of the sequence (arr.length).

const slice = function(start = 0, end = test.length) {
  const test = [1, 2, 3, 'a'];

  const result = [];
  const normalizedStart = normalize(start, test.length);
  const normalizedEnd = normalize(end, test.length);

  for (let i = normalizedStart; i < normalizedEnd; i++) {
    result[result.length] = test[i];
  }

  return result;
};

function normalize(index, length) {
  let normalizedIndex = index;

  if (normalizedIndex > length) {
    normalizedIndex = length;
  }

  if (normalizedIndex < 0) {
    normalizedIndex += length;
  }

  if (normalizedIndex < 0) {
    normalizedIndex = 0;
  }

  return normalizedIndex;
}

//? 2 варіант функції Normalize

/* function normalize(index, length) {
  let normalizedIndex = index;

  normalizedIndex = Math.min(index, length);

  if (normalizedIndex < 0) {
    normalizedIndex += length;
  }

  normalizedIndex = Math.max(normalizedIndex, 0);

  return normalizedIndex;
} */
