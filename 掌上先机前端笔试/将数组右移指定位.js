let arr = [1 , 2 , 3 , 4 , 5 , 6 , 7],
    k = 3;
const test = (arr , k) =>{
    let len = arr.length,
        arrTarget1 = [],
        arrTarget2 = [],
        i = 0;
    while(i < len -k){
        arrTarget1.push(arr[i])
        i++
    }
    while(i >= len -k && i < len){
        arrTarget2.push(arr[i])
        i++
    }
    console.log(arrTarget2.concat(arrTarget1))
    return arrTarget2.concat(arrTarget1)
}
test(arr , k)