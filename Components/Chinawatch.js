const fs=require("fs");

//Function to get the current indian time and date.
let chinaWatch=()=>{
    let today=new Date();
    let options={timeZone:'Asia/Shanghai'};

    //Get the current time in indian timezone
    let time=today.toLocaleTimeString('en-CN',options);

    //Get the current Date in indian timezone
    let date=today.toLocaleDateString('it-It',options);

    // //store the data inside 
       storeData('chinaWatch.txt',`${date} ${time}`);
}


//Function to store the data in file
let storeData=(fileName,data)=>{
    data=`${data}\n`;

    //Append the data specified file
    fs.appendFile(fileName,data,'utf-8',(err)=>{
        if(err) throw err;
        console.log('Data is Stored');
    })
}


//Export the chinaWatch function as module
module.exports={
    chinaWatch,
}