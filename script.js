var form = document.createElement('form');


var div1 = document.createElement('div')

var label = document.createElement('label');
label.setAttribute('for', 'First Name');
label.innerHTML = 'First Name';

div1.append(label)

var div2 = document.createElement('div')
var input = document.createElement('input');
input.setAttribute('type', 'text');
input.setAttribute('id', 'First name');

div2.append(input);

// form.append(div1,div2);


var div3 = document.createElement('div')
var label2 = document.createElement('label');
label2.setAttribute('for', 'Middle Name');
label2.innerHTML = 'Middle Name';
div3.append(label2)

var div4 = document.createElement('div')
var input2 = document.createElement('input');
input2.setAttribute('type', 'text');
input2.setAttribute('id', 'Middle name');

div4.append(input2);

// form.append(div3,div4);


var div5 = document.createElement('div')
var label3 = document.createElement('label');
label3.setAttribute('for', 'Last Name');
label3.innerHTML = 'Last Name';
div5.append(label3)

var div6 = document.createElement('div')
var input3 = document.createElement('input');
input3.setAttribute('type', 'text');
input3.setAttribute('id', 'Last name');

div6.append(input3);

// form.append(div5, div6);


var div7 = document.createElement('div')
var label4 = document.createElement('label');
label4.setAttribute('for', 'email');
label4.innerHTML = 'mail';

div7.append(label4)

var div8 = document.createElement('div')
var input4 = document.createElement('input');
input4.setAttribute('type', 'email');
input4.setAttribute('id', 'Email');

div8.append(input4)

// form.append(div7, div8)




var input5 = document.createElement('input');
input5.setAttribute('type', 'submit');
input5.setAttribute('id', 'sub');



form.append(div1,div2,div3,div4,div5,div6,div7,div8,input5);





document.body.append(form);


let res = document.getElementById('sub').addEventListener('click', foo);

function foo() {
    var res1 = document.getElementById("First name").value;
    var res2 = document.getElementById("Middle name").value;
    var res3 = document.getElementById("Last name").value;
    var res4 = document.getElementById("Email").value;
    console.log(res1);
    console.log(res2);
    console.log(res3);
    console.log(res4);


}
























