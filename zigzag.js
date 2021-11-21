function solution(numbers) {
    let res=[];
    let len = numbers.length -1;
    for(let i=0; i<=len; i++){
       
    if((numbers[i] < numbers[i+1]) && (numbers[i+1] > numbers[i+2])|| (numbers[i] >                 numbers[i+1]) && (numbers[i+1]<numbers[i+2])){
      console.log("hello")
        res.push(1)
     }
   
    else {
        res.push(0)
       
        }
     
}
return res
}

solution([1,2,1,4,5])