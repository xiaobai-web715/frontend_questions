//一次爬一层台阶或者两层台阶(爬到n层的方法有多少中) => 斐波那契数列的思想
const test = (n) =>{
    if(n === 1){
          return 1;
    }else if(n === 2){
          return 2;
    }
    return test(n-1) + test(n-2)
}
console.log(test(n = 4))