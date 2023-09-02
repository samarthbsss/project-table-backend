
const val1 ={
    "person" : john,
    "age":20
}
const key ='city'

const value ="New York";

const getjson=(val1, key, value)=>{
    val1[key]=value;

    return  val1;
}

// getjson();
console.log(getjson());
