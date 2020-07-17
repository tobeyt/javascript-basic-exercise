export default function arrayToList(array) {
  // This function creates a linked list from an array.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in array_to_list_spec.js.
  // * Please do NOT modify the signature of the function.
  if (array === undefined) {
    throw new Error("Creating list from undefined array");
  }
  if (array === null) {
    throw new Error("Creating list from undefined array");
  }
  if (array.length === 0) {
    throw new Error("Creating list from empty array");
  }
  const res = [];
  array.forEach((cur) => {
    const node = {};
    node.value = cur;
    node.next = null;
    res.push(node);
  });
  res.forEach((cur, index) => {
    if (index === res.length - 1) {
      cur.next = null;
    } else {
      cur.next = res[index + 1];
    }
  });
  return res[0]
}
