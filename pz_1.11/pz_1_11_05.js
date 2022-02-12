function inpu(arg){
    if(arg<0){
        console.log("Число відємне");
    }
    else
    console.log("Число додатнє");
    
    let flag = true;
    for (let i = 2; i < arg; i++) {
        if (arg% i == 0) {
            flag = false;
            break; 
        }
    }
    if(flag==false){
    console.log("Не є простим"); 
    }else
    console.log("Є простим");
        if(arg%2==0){
            console.log("Ділиться на 2")
        }
        else
        console.log("Не ділиться на 2");
        if(arg%3==0){
            console.log("Ділиться на 3");
        }
        else
        console.log("Не ділиться на 3");
        if(arg%5==0){
            console.log("Ділиться на 5");
        }
        else
        console.log("Не ділиться на 5");
        if(arg%6==0){
            console.log("Ділиться на 6");
        }
        else
        console.log("Не ділиться на 6");
        if(arg%9==0){
            console.log("Ділиться на 9");
        }else
        console.log("Не ділиться на 9");
    }
inpu(8);