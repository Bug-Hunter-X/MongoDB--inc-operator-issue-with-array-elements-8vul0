# MongoDB $inc Operator and Array Element Update
This repository demonstrates a common error when using the MongoDB `$inc` operator to update elements within an array. The `$inc` operator is intended for incrementing numeric fields; it doesn't directly support modifying elements within arrays.

The `bug.js` file shows an incorrect attempt to increment an array element using `$inc`.  The `bugSolution.js` file provides a correct solution using the `$` positional operator or array filtering.