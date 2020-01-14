// Write a method to sort an array of strings so that all the anagrams are next to each other.

function groupAnagrams(arr) {
    if (arr.length === 0 || arr.length === 1) {
        console.log(arr);
        return 0;
    }
    
    // First, we create a copy of the original array, this will serve as a map for the positions of the anagrams.
    let copy = [...arr];
    
    // Each word of the anagram is reordered alphabetically, so that comparison is easier.
    for (let i = 0; i < copy.length; i++) {
        copy[i] = copy[i].split('').sort().join('');
    }
    
    // Check if all the words in the array are the same, so that nothing else is done.
    let k = 1;
    
    while (k < copy.length) {
        if (copy[0] === copy[k]) {
            k++;
        } else {
            break;
        }
    }
    
    if (k === copy.length) {
        console.log(arr);
        return arr;
    }
    
    // A basic function that swaps one element of an array for the other.
    function swap(arr, one, two) {
        const temp = arr[one];
        arr[one] = arr[two];
        arr[two] = temp;
    }
    
    // This algorithm uses two counters to navigate the array. The second counter is just the first counter plus one. If
    // both of those positions' value in the array are the same and they aren't next to each other, they will swap and
    // add one to the first counter. If there's no match, it will verify against the next value counting from the second
    // counter position. Eventually, the second counter will reach the end, if that happens, the first counter will go
    // to the next value and the second counter will start comparing its position value to the first counter, however,
    // if the first counter is already at the last position in the array, the next value would be undefined since it
    // does not exist, that's when the program will stop.
    let i = 0;
    let j = 1;
    
    while (i < copy.length) {
        if (copy[i] === copy[j] && j - i !== 1) {
            swap(copy, i + 1, j);
            swap(arr, i + 1, j);
            i++;
        } else {
            j++;
        }
        
        if (!copy[j]) {
            i++;
            j = i + 1;
            
            if (j === copy.length) {
                break;
            }
        }
    }
    
    console.log(arr)
    return arr;
}

const strings1 = ["one", "two", "three", "four", "five"];
const strings2 = ["one", "one", "one", "one", "one", "one"];
const strings3 = ["one", "two", "three", "neo", "wot", "four"];
const strings4 = ["one", "two", "owt", "three"];
const strings5 = ["one", "two", "three", "four", "eno"];
const strings6 = ["two", "one", "two", "three", "four", "eno"];

groupAnagrams(strings1);
groupAnagrams(strings2);
groupAnagrams(strings3);
groupAnagrams(strings4);
groupAnagrams(strings5);
groupAnagrams(strings6);
