// function chunked (arr, size ){
// let  chunk =[]
// for(let i = 0 ; i <= arr.length; i += size){
//  let temp = []
//  let a = i
   

//   while(arr[a] && temp.length < size){
//   temp.push(arr[a])
//   a++
// }

//   console.log(temp)
//   chunk.push(temp)
 

// }
// return chunk
// }


// function chunked (arr, size ){
//   let chunk =[]
// for(let ele of arr){
//   const last  = chunk[chunk.length - 1];
//   console.log("1","ele>>", ele,  "chunk>>",chunk,"last>>",last )
//   if(!last || last.length === size){
//     chunk.push([ele])
//     console.log("push to chunk","ele>>",ele,  "chunk>>",chunk,",last.>>",last)
//   }else{
//     last.push(ele)
//     console.log("push to last","ele>>",ele,"chunk>>", chunk, ",last>>",last)

//   }

// }
// return chunk
// }

// chunked([1,2,3,4,5,5,4, 5, 9 ], 2)
function reverseInPlace(str) {
    var words = [];
    words = str.split(".");
    console.log(words)
    var result = "";
    for (var i = 0; i < words.length; i++) {
         result += words[i].split("").reverse().join('');
    }
    return result
}
console.log(reverseInPlace("abd.fhe.kdj"))