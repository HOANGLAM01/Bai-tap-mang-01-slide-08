let test = [1,2,3,4,5,10,6,7,8,9];
let i;
let max = 0;
let count = 0;
let position;

for (i = 0;i < test.length;i++) {
    if (test[i] > max) {
        max = test[i];
        position = count;
    }
    count++
}
console.log(max + " có giá trị lớn nhát ở vị trí thứ " + position);
