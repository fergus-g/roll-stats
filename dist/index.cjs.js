'use strict';

function rollStandardArray() {
  let standardArray = [15, 14, 13, 12, 10, 8];
  return standardArray.sort(() => Math.random() - 0.5);
}

exports.rollStandardArray = rollStandardArray;
