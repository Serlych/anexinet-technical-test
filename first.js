// Write a function that receives two numeric parameters (positive integers), adds them and prints the result
// in the console. You should not use + or any arithmetic operators.

// The only way I could find to do this operation was with bit shifting.
function add(num1, num2) {
    // While there's no more carry to do...
    while (num2 !== 0) {
        /*
            First we need to calculate the carry for the two numbers that will be added, for example num1 = 3 and num2 = 4.
            
            num1 (base2) = 0011
            num2 (base2) = 0100
                & result = 0000
            
            The "and" operator will calculate carry num1 against num2. This will result in: 0000. Let's keep this in mind
            and move this result aside and continue with the operation. And operator will return true if both bits are
            true.
        */
        let carry = num1 & num2;
        
        /*
            Then, the "xor" operator will "add" the num1 and num2 numbers together. Exclusive or operator returns true
            if that either one of the two comparing bits is true.
            
                     0011
                     0100
            ^ result 0111
        */
        num1 = num1 ^ num2;
        
        /*
            Finally, the carry will need to be shifted one position to the left so that it can be used. In traditional
            addition, the carry is not applied directly where it was calculated, but one position to the left. The
            num2 will take the value resulting in that operation. And since that value is now 0, the while loop will exit.
            Left shift operator shifts all bits to the left, so that for example 1010 becomes 0100.
            
            num2 = 0000
         */
        num2 = carry << 1;
    }
    
    console.log(num1);
    return num1;
}

add(3, 4);
