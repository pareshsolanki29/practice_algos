// function countSubstringWithEqualEnds(s)
// {
//     var result = 0;
//     var n = s.length;
  
//     // Iterating through all substrings in
//     // way so that we can find first and last
//     // character easily
//     for(i = 0; i < n; i++){
//       for(j = i; j < n; j++){
//             console.log(s.charAt(i), s.charAt(j))
//             if (s.charAt(i) == s.charAt(j)){

//                 result++;
//             }
//         }
//     }
  
        
  
//     return result;
// }
// countSubstringWithEqualEnds(s)
  
// function countSubstrs(str, i, j, n)
// {
       
    
//     if (n == 1)
//         return 1;
//     if (n <= 0)
//         return 0;
   
//    console.log(i,n)
//     let res = countSubstrs(str, i + 1, j, n - 1) +
//               countSubstrs(str, i, j - 1, n - 1) -
//           countSubstrs(str, i + 1, j - 1, n - 2);    
//           console.log(res)
//     if (str[i] == str[j])
//         res++;
   
//     return res;
// }
 

// let str = "abcab";
// let n = str.length;
 
// countSubstrs(str, 0, n - 1, n);
// var s = "abcab";
let str = "hello.world.wow";
function reverseInPlace(s){
    let temp = str.split('.');
    let output = ''
    console.log(temp)
    for(let i in temp){
     let a = temp[i].split('').reverse().join('')
     if(i != temp.length-1){

       output+=a+'.'
     }else
     {
       output+=a
     }
    }
    // return output.substr(0,output.length-1)
    return output
}

reverseInPlace(str)


