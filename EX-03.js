let random = [1,5,10,60,50,80,30,5,9,7]
let i;
let sum;
let avg;
let count;
let max = 0;

for (i=0,count=1;i < random.length; i++) {
    sum+=random[i];
    if (random[i] > max) {
        max = random[i];
    }
    count++
}
avg = sum / count
document.write("số lớn nhất là: " + max + "<br/>" + " giá trị trung bình là: " + avg);