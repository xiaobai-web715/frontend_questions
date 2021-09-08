//两行数据,第一行代表来的人数,第二行代表谁和谁相互认识,直接认识的和间接认识的可以分到同一个桌子上,不认识的单独分一个桌子
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