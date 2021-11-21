// let fibo = (n=>{
// if(n <  3) return 1
//   let prev = 1;
//   let curr = 1;
//   for(let i = 2; i<n; i++ ){
//     let next = prev + curr;
//     prev = curr;
//     curr = next
//   }
//   return curr
// })

// fibo(4)
// function removeDup(arr){
//   var ex = {},
//   clnArr = [],
//   elm
//   for(let i of arr){
//     elm = arr[i];
//     if(!ex[elm]){
//       clnArr.push(elm);
//       ex[elm] = true
//     }
//   }
//   return clnArr
// }
// console.log(removeDup([1,3,3,3,1,5,6,7,8,1]))

// let reverseInt = (n) => {
//   let reverse = 0; revStr=''
//       while(n >0){
//         let rem = n%10
//        reverse = (reverse * 10) + (n % 10)
//        revStr += rem.toString()
//        console.log(n%10, reverse)
//        n = Math.floor(n/10)
       
//       }
       

//  console.log('rev',revStr)
// return reverse
// }

// reverseInt(2100)
// function mergeSortedArray(a, b){
//   var merged = [], 
//       aElm = a[0],
//       bElm = b[0],
//       i = 1,
//       j = 1;
  
//   if(a.length ==0)
//     return b;
//   if(b.length ==0)
//     return a;
  /* 
  if aElm or bElm exists we will insert to merged array
  (will go inside while loop)
   to insert: aElm exists and bElm doesn't exists
             or both exists and aElm < bElm
    this is the critical part of the example            
  */
//   while(aElm || bElm){
//    if((aElm && !bElm) || aElm < bElm){

//      merged.push(aElm);
//      aElm = a[i++];
//    }   
//    else {
//      merged.push(bElm);
//      bElm = b[j++];
//    }
//     console.log("aElm..",aElm ,"bElm..",bElm, merged)

//   }
//   return merged;
// }
// mergeSortedArray([2,5,6,9], [1,2,3,29])
// function swapNumb(a, b){
//   console.log('before swap: ','a: ', a, 'b: ', b);
//   console.log(b -a, a+ b, a-b)
//   b = b -a;
//   a = a+ b;
//   b = a-b;
//   console.log('after swap: ','a: ', a, 'b: ', b);  
// }
// swapNumb(2,3)
// var lengthOfLongestSubstring = function(s) {
    
//     let map = {}
//     let start = 0
//     let maxLen = 0
//     let arr = s.split('')
    
//     for (i=0; i < s.length; i++) {
//         let current = map[arr[i]]
//         if (current!=null && start <= current) {
//             start = current + 1
//         } else {
//             maxLen = Math.max(maxLen, i - start + 1)
//         }
//         console.log("arr[i]",arr[i],"maxLen>>",maxLen, "start>>", start,"current>>" ,current, "map>>",map)
//         map[arr[i]] = i
//     }
    
//     return maxLen
    
    
// };
// lengthOfLongestSubstring('abcabcbb')
var lengthOfLongestSubstring = (str)=> {
var array = [];
maxCount = 0;

var counter = 0;
for (var i = 0; i < str.length; i++) {
  
if (array[str[i]]) {
if (counter > maxCount) {
maxCount = counter
}
counter = 0;
array = [];
}
counter++;
array[str[i]] = true;
let len = str.length/2-1
console.log(i,"array>>",array,"maxcount>>", maxCount,"counter", counter, len)
}

return maxCount
}
var str = "abcasdpocaaws";
console.log(lengthOfLongestSubstring(str))

