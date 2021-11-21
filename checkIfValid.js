checkIfValid = (s)=>{
    let brackArr = {
      ']':'[',
      '}':'{',
      ')':'('
    }
    let stk = []
    for(let i = 0; i<=s.length;i++){
      if(s[i]=='{'|| s[i]=='('|| s[i]=='['){
        stk.push(s[i])
        console.log("push", stk)
      }else if (stk[stk.length-1] === brackArr[s[i]]){
        console.log("pop",stk[stk.length-1],"brackArr[s[i]]>>",brackArr[s[i]], "s[i]>>",s[i], stk)
        stk.pop()
        
    
      }else return false
    }
    console.log("fimal",stk)
    return stk.length? false: true
    }
    console.log(checkIfValid('({}(){}'))