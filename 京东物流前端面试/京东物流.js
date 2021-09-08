//所要理解的知识点对象的遍历(for in结合遍历对象字面量(不会涉及到原型属性,可以这样来遍历);如果涉及到原型并且只让遍历自身的可枚举属性,可以使用Object.keys(),不过这里要注意的是,遍历出来的属性名全部以数组的形式进行存储,就要修改成for of来联合遍历数组)
//判断一个对象是不是空,可以使用Object.stringify({})  === '{}'来进行判断
//注意instanceof同样无法判断其是数组还是对象 , 这里使用的是Object.prototype.toString().call()来进行判断,如果是数组的话就会输出[object Array] , 如果是对象的话,输出的就是[object Array] 
// const obj = {
//     a: 1,
//     b: '2',
//     c: [], // x
//     d: {
//         aa: 1,
//         bb: '2',
//         cc: '', // x
//         dd: {}, // x
//     },
//     e: {}, // x
//    }
// let obj2 = {};
// function filter(obj , obj2) {
//     // console.log(Object.keys(obj))
//     for (let key of Object.keys(obj)) {
//         console.log(key)
//         if (Object.prototype.toString.call(obj[key]) === '[object Object]') {
//             if(JSON.stringify(obj[key]) !== '{}'){
//                 obj2[key] = filter(obj[key] , {})
//             }
//         }else if(Array.isArray(obj[key])){
//             if(obj[key].length > 0){
//                 obj2[key] = obj[key]
//             }
//         }else if(obj[key] || obj[key] === 0){
//             obj2[key] = obj[key]
//         }
//     }
//     return obj2
// }
// console.log(filter(obj , obj2))


//所要理解的知识点(主线程任务=>微任务=>宏任务) async与await(async会返回一个Promise对象,一旦遇到await就会先返回,等到异步操作完成时在接着执行函数体后面的语句,这就是为什么这里面加上await与去掉await之后打印的结果顺序不一样的原因 !!!await遇到之后想要执行,就要等到这个异步全完事之后才能够执行)
setTimeout(() => {
    console.log('time1')                    //第九步打印结果(宏任务)
} , 2000)
const async1 = async() => {
    setTimeout(() => {    
        console.log('time2')                //第八步打印结果(宏任务)
    } , 1000)
    console.log('async1 start')             //主线程第二步打印结果(主线程任务)
    //new 一个Promise实例它是一个主线程的任务
    await new Promise((resolve) => {        //new一个Promise实例也是主线程的任务,而resolve之后仍然可以执行后续的代码
        resolve('难啊'),
        // 你自己new一个Promise实例的话,里面必须有一个resolve菜能执行.then的功能
        console.log('new promise')          //第三步打印结果(遇到await之后会返回)(主线程任务)
    }).then(res => console.log(res))        //第五步打印结果,到次为止async1内部的异步操作完成,开始执行后面的语句(微任务)
    console.log('async1 end')               //第六步打印结果(await的异步操作执行完成后才执行的语句)               
    return 'async1'
}
console.log('window start')                 //!!!第一步打印(主线程任务)
async1().then(res => console.log(res))      //async1()主线程任务    第七步打印结构(微任务)
// Promise.then(1).catch(2).then(3)
console.log('window end')                   //第四步打印结果,因为async1函数里面遇到了await所以返回了,所以这里就变成了第四步打印的结构(主线程任务)
//执行顺序  先主线程 ,再微任务 , 再宏任务
//window start ; async1 start ; new promise ; async1 end ; window end ; async1 ; time2 ; time1
// 真实的输出情况是这样window start ; async1 start ; new promise ; window end async1 end ; async1(但产生这样输出的原因是因为await,当你把await去掉之后就是输出我写的这个目标值了)