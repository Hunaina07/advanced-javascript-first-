let inArray =[
    {id:1,
    name:"hunaina",
    category: "a" ,
},
{   id:2,
    name:"sana",
    category: "b" ,
},
]
let id =inArray.map (function(x){
    return(x.id)
    }
)
let name =inArray.map (function(y){
    return(y.name)
    }
)
let category =inArray.map (function(z){
    return(z.category)
    }
)
console.log(id)
console.log(name)
console.log(category)
