let str = 'a hello1 abc world!'
const test = (str) => {
    let arr = str.split(' '),
        len = arr.length;
    for(let i = 0 ; i < len ; i++){
        if(!arr[i].match(/[^a-z]/g)){
            arr[i] = arr[i].split('').reverse().join('')
        }
    }
    console.log(arr.join(' '))
}
test(str)