const promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
       resolve("this is my resolved data");
      //reject("something went wrong");
    },1500);

});

console.log("before");


promise.then((data)=>{
    console.log(data);
    //passing this promise tofollowing then
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           resolve("this is my other promise data");
        },1500);
    
    });
}).then((str)=>{
    console.log("Runs",str);
}).catch((error)=>{
    console.log("error:", error);
});

console.log("after");
