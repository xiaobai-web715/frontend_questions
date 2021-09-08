// //这两种写法在这里是有区别的
// // var num = 1 ; //这种写法23行输出的是1,也就是涉及到全局运算num的就找不到这个num
// num = 1;      //而这种写法第23行输出的就是正常的8，也就是能够在全局中找到这个变量num
//               //第9行执行完成之后 num -> 3
//               //第19行执行完成之后 num -> 8(但结果却是1)
// var obj = {num : 2} ; //第19行执行完成之后 num -> 12
// obj.fn = (function (num) {    //如果说对象里面调用的立即执行函数指向全局的话(并且只执行一次哦)
//     //糊涂了呀,这个num是立即执行函数传进来的参数啊
//     //当10行执行完成之后num -> 3 ，然后下面的return返回的函数形成闭包一直拿着这个变量呢
//     //12行第一次执行完成之后,num -> 4
//     //12行第二次执行完成之后,num -> 5
//     this.num *= 3 
//     num++  
//     return function (n){
//         this.num += n;//第17行执行的时候this指向的全局
//                       //第19行执行时的this指向该对象,
//         num ++        //这里用到的num还是父级的num,在这里形成了闭包
//         console.log(num) //所以执行18行和19行这里输出的分别是4和5
//     }
// })(obj.num)
// var fn = obj.fn //因为这里是把里面的return返回的函数当成赋值给了另一个函数
// fn(5)//所以这一步操作相当于将this绑定到了window上
// obj.fn(10)//这样对象中调用函数,this还是指向的原对象
// console.log(num)
// console.log(obj.num)

// const test = (n) =>{
//     if(n === 1){
//           return 1;
//     }else if(n === 2){
//           return 2;
//     }
//     return test(n-1) + test(n-2)
// }
// console.log(test(n = 4))

// let n = 5,
//     arrTarget = [],
//     list = ['(1,2)','(2,3)','(4,5)'];
// for(let i = 1 ; i <= n ; i++){
//     let len = list.length;
//     for(let j = 0 ; j < len ; j++){
//         if(list[j].indexOf(String(i)) !== -1){
//             arrTarget.push(j)
//         }
//     }
//     let listTarget = arrTarget.shift();
//     for(let z = 0 ; z < arrTarget ; z++){
//         let listDel = arrTarget.shift()
//         list[listTarget] += list[listDel]
//         list.splice(listDel , 1)
//     }
// }
// console.log(list.length)

let n = 5,
    list = ['(1,2)','(2,3)','(3,4)','(4,5)'];
const test = (n , list) => {
        let arrTarget = [];
        for(let i = 1 ; i <= n ; i++){
              let len = list.length;
              for(let j = 0 ; j < len ; j++){
                     if(list[j].indexOf(String(i)) !== -1){
                            arrTarget.push(j)
                     }
               }
               let listTarget = arrTarget.shift();
               for(let z = 0 ; z < arrTarget ; z++){
                     let listDel = arrTarget.shift()
                     list[listTarget] += list[listDel]
                     list.splice(listDel , 1)
               }
        }
        return list.length
}
console.log(test(n , list))