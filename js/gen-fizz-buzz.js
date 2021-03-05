function genFizzBuzz(rules, num) {
    const myArray = [];
    for (let i = 0; i < rules.length; i++) {
        if (num % rules[i][0] == 0){
            myArray.push(rules[i][1])
        }
    }
    return (myArray.length == 0) ? num.toString() : myArray.join("");
}