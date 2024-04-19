let name = ["Vlad", "damir","akbar","samir","shoxrux","farzod"]
let max = 0
name.forEach((long) => {
    if(long.length > max) {
        max = long.length 
            
            
         }
     })
     
     
     console.log(max, );


// С интернета
     let names = ["Vlad", "damir","akbar","samir","shoxrux","farzod"]
     let long = names.reduce((a,b) => (a.length > b.length ? a : b))

     console.log(long);
// С интернета


   let  arr = ["Vlad", "damir","akbar","samir","shoxrux","farzod"].toSorted((a,b) =>b.length - a.length)[0]

     console.log(arr);
