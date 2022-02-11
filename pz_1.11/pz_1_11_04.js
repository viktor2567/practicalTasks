function add(arg1,arg2){
    let n = arg1+arg2;
  return (n);
    }
    function sub(arg1,arg2){
        let n = arg1-arg2;
        return (n);
    }
    function mul(arg1,arg2){
        let n = arg1*arg2;
        return (n);
    }
    function div(arg1,arg2){
        let n = arg1/arg2;
        if(arg2==0){
            return ("На нуль ділити не можна!!");
        }
        else
        return (n);
    }
    function calc(arg3,arg4,func){
       
        if(typeof arg3 != "number" || typeof arg4 != "number"){
        return "Не числове значення!!";
        }
    
        else
    return func(arg3,arg4);
      

    }
    console.log(calc(3,4,sub));