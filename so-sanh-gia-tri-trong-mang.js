let test = [1,2,3,4,5,10,6,7,8,9];
let i;
let max = 0;
for (i = 0;i < test.length;i++) {
    if (test[i] > max)
        max = test[i]
}
console.log(max)
