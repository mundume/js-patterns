//basic structure

// (()=>{
//     //declare private vars and function
//     return{
//         //declare public vars and functions
//     }
// })()

//standard module patern
const UICtrl= (function(){
    let text = 'Hello world'

    const changeText =()=>{ 
        const element=document.querySelector('h1')
        element.textContent = text 
}
return {
callChangeText:function (){
        changeText()
        console.log(text)
}

}

})()

UICtrl.callChangeText()

//revealing module patern

const ItemCtrl = (()=>{
 let data = []
 function add(item){
    data.push(item)
    console.log('item added')
 }
 function get(id){
    return data.find(item=>{
        return item.id ===id
    })

 }
 return{
    add:add,
    get:get
 }
})()

ItemCtrl.add({id:1, name:'john'})

//factory pattern

function memberFactory  (){
 this.createMember = function(name,type)
{
    let member;
    if(type==='Simple'){
      member = new SimpleMembership(name)
    }else if(type==='Standard'){
        member = new StandardMembership(name)
    }else if(type==='Super'){
        member = new SuperMembership(name)
    }
    member.type = type

    member.define = function(){
        console.log(`${this.name} (${this.type}) :${this.cost}`)
    }
}
}

const SimpleMembership = function (name){
    this.name = name;
    this.cost = '$10'

}
const StandardMembership = function (name){
    this.name = name;
    this.cost = '$15'

}
const SuperMembership = function (name){
    this.name = name;
    this.cost = '$20'

}

const members = []

const factory = new memberFactory()
members.push(factory.createMember('John Doe', 'Simple'))
console.log(members)



