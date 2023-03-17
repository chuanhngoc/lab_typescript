// //generics
// function showStringData(a:string){
//     return a
// }

// function showNumberData(a:number): number{
//     return a
// }

// function showData<T>(a:T):T{
//     return a
// }

// showData<string>("string")
// const arrNum = [1,2,3,5,8,13]//Fibonacci
// const arrStr = ["chu","anh","ngoc"]
// // function w17304_map(arr:number[], callback?:(item:number) => number[]){
// //     let temp =[]
// //     for (let i = 0; i< arr.length; i++) {
// //         const newItem =callback( arr[i]);
// //    temp.push(newItem)
// //     }
// //     return temp
// // }

// // function w17304_map<T>(arr:T[], callback:(item:T)=>T):T[]{
// //     let temp =[]
// //     for (let i = 0; i< arr.length; i++) {
// //         const newItem =callback( arr[i]);
// //         temp.push(newItem)
// //     }
// //     return temp
// // }
// // const result1 = w17304_map(arrStr, (item) => {
// //     return item + " - w17304"
// // })

// // console.log(result);
// const arrnum2 =[13, 1, 2, 3, 5, 8, ]
// const arrStr2 =  ["b","ab", "cd", "de"]
// arrnum2.sort((a, b)=>{
//     return b - a
// })
// // console.log(number2);

// function selectionSort(arr)  {
//     for (let i = 0; i < arr.length - 1; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if( arr[i] < arr[j]){
//                 let temp = arr[i]
//                 arr[i] = arr[j]
//                 arr[j] = temp
//             }
//         }
//     }  
// }
// selectionSort(arrStr2)
// console.log(arrStr2);

const arrNum = [1, 2, 3, 4, 5];
const  arrStr= ['a', 'b', 'c', 'd', 'e'];
 function sortInfo<T>(arr: T[], callback:(a:T , b:T) => number):T[]{
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(callback(arr[i], arr[j]) < 0){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }   
    }
    return arr;
 }
sortInfo(arrNum, (a, b) => a<b? -1 : 1);
// sortInfo(arr4, (a, b) => a.localeCompare(b));
console.log(arrNum);
console.log(arrStr);