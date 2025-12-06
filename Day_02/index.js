function CreateData(){
    fetch("https://students-5abb3-default-rtdb.asia-southeast1.firebasedatabase.app/.json",
        {method:"POST",body:JSON.stringify({
            name:"sowmya",
            rollno:21,
        })}
    )
    .then((res)=>res.json())
    .then((data)=>console.log("Data is added",data))


}
function GetData(){

}
function UpdateData(){
   


}
function DeleteData(){

}
