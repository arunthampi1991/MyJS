let person=
{
    name:'Arun',
    age:20,
    eligible:true,
    address:{
        street:'thampanoor',//object
        city:'tvm',
        state:'kerala'
    }
};
console.log(person);
console.log(person.name);
console.log(person['name']);
console.log(person.age);
console.log(person['age']);
console.log(person.address.street);
console.log(person.address.city);

let colors=['red','blue'];
console.log(colors);
console.log(colors);
console.log(colors[0],colors[1]);
console.log(colors[0]);
console.log(colors[1]);
console.log(colors.length);

colors[2]='green';//adds green
console.log(colors);
colors.push('black');//adds to last
console.log(colors);
colors.unshift('pink');//adds to first
console.log(colors);
colors.pop();//del last
console.log(colors);
colors.shift();//del frm first
console.log(colors);
console.log(colors.indexOf('red'));//index of red
console.log(colors.length);



