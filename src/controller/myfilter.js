//自定义过滤器
let myfilter = ($http,$rootScope)=>{
    return (input,value)=>{
        // console.log(input,value);
        if(value === ""){
            return input;
        }else{
            let arr = input.split(value);
            let output = arr.join(`<span style="color:red">${value}</span>`)
            return output;
        }
    }
}