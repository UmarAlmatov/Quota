let color;
let bccolor;
let firstname;
let lastname;
let age;

console.log(color);
bccolor = prompt("Which backgroung color do you like?");
color = prompt("What is your favourite color?");
firstname = prompt("What is your Name?");
lastname = prompt("What is your lastname?");
age = prompt("How old are you?");
console.log(firstname + " " + lastname + " " + age + " " + "years old");
allHtml = `
<div>
<p><h1>About You</h1></p>
<p>Your name is  ${firstname}</p>
<br>
<p>Your lastname is  ${lastname}</p>
<br>
<p>Your age is  ${age}</p>
</div>
`;
styleHtml = `
    <style>
    *{
      margin:0;
      padding:0;
      box-sizing:border-box;}
      p{
      margin-block:30px;
      }
      body{
      
       background-color: ${bccolor};
       color:${color};
      }
       div{
       height:100vh;
       width:100vw;
        display:flex;
       align-items:center;
       justify-content:center;
       flex-direction:column;

       }
    </style>
`;
document.head.innerHTML = styleHtml;
console.log(allHtml);
document.body.innerHTML = allHtml;
