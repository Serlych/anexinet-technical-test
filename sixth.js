// Write a function that can accept any number and return the number of circles inside the number,e.g. 24690 as 3
// circles, one for 6, another for 9 and another for 0, 7431 doesn't have any circles inside.

function countCirclesInNumber(num) {
    const map = {
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 1,
      7: 0,
      8: 2,
      9: 1,
    };
    
    const copy = num.toString().split('');
    console.log()
}

countCirclesInNumber(24690);
countCirclesInNumber(7431);
