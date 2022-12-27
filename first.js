document.writeln("hello");
document.writeln("hello");
window.onload=function(){
	//document.body.style.background='blue';
}
//arithmatic operations
var a=2,b=0,c;
c=a+b+"a";
c=a+b*b;
document.writeln(" <br><h1>result "+c+" is</h1>");
// if statement
if(b>0){
	document.writeln("positive number");	
}
//if-else neasted statement
if(b>0){
	document.writeln("positive number");	
}
else if(b<0)
{
	document.writeln("nagative number");	
}
else{
	document.writeln("Zero");
	document.writeln("<br>");	
}
//for loops
var k=6;
for(var i=1;i<=10;i++)
{
	for(var j=1;j<=5;j++)
	{
		document.write(" *"+k);			
		k+=5;
	}
	document.write("<br>");		
}
//switch cases
k=4;
switch(k)
{
	case 1:
		document.writeln("this is 1");
		break;
	case 2:
		document.writeln("this is 2");
		break;
	case 3:
		document.writeln("this is 3");
		break;
	case 4:
		document.writeln("this is 4");
		break;
	default:
		document.writeln("somthing wrong");
		break;
}

//while
var i=1;
while(i<5)
{
	document.write("<br>hello"+i);
	i+=2;
}

//do while

do{
	document.write("<br>it's do while"+i);
	i--;	
}while(i<1)

//function and global-local varibales

function localvariable()
{
	var r;
	var a=15;
	var b=10;
	r=a+b;
	alert("local variable access function result \n a="+a+"\n b="+b+"\n result="+r);
}
function globalvariable()
{
	c=a+b;
	alert("global variable access function result\n a="+a+"\n b="+b+"\n result="+c);
}


//array
var cars=["BMW","AUDI","VOLVO"];
document.write("<br> name of cars "+cars.length);
cars.push("extra put");
for(var i=0;i<cars.length;i++)
{
	document.write("<br>particular name of car "+cars[i]);	
}

var s={
	name : "bhumi",
	rollno : 1,
	std : 1,
	studdata:function()
	{
		return "name of student";
	}
}
document.write("<h2>student data:"+s.studdata()+"</h2>");	
document.write("data tye:"+typeof(s));	
function car(car_brand,car_model,price)
{
	this.car_brand=car_brand;
	this.car_model=car_model;
	this.price=price;
	this.ca=function()
	{
		document.write("<br>particular name of car: "+car_brand+" "+car_model+" "+price);	
	}

}
var c=new car("bmw","audi","Volvo");
c.ca();
var c2=new car("bmw","2018",1500000);
c2.ca();
s.addr="address";
document.write("<h2>student data: new added "+s.addr+"</h2>");	
delete s.rollno;
document.write("<h2>student data: new list "+Object.getOwnPropertyNames(s)+"</h2>");	
/*const lis=Object.getOwnPropertyNames(s)
console.log(lis)*/
function validate(){
	var u=document.getElementById("uname");
	var p=document.getElementById("pass");
	if(u.value==""||p.value=="")
	{
		alert("no blank values allowed");
		return false;
	}
	else
	{
		true;
	}

}
function btnfunction(){
	var str=document.getElementById("text1").value;
	

	var rd1=document.getElementById("rd1");
	var rd2=document.getElementById("rd2");

/*	if(rd1.checked==true)
		alert("value inside the text box is:"+str+"\n you can select "+rd1.value);			
	else if(rd2.checked==true)
		alert("value inside the text box is:"+str+"\n you can select "+rd2.value);			
	else
		alert("value inside the text box is:"+str+"\n No one select value");			

	var selects=document.getElementById("selectbox");
	alert(selects.options[selects.selectedIndex].value);
	*/
	var par=document.getElementsByTagName("p");
	par[0].style.fontSize=25;
	par[1].style.color="red";
	par[2].style.fontWeight="bold";
	par[3].style.fontStyle="italic";

	var ele=document.getElementsByClassName("para");
	for(var x=0;x<ele.length;x++)
	{
		ele[x].style.color="red";
	}

}
function setnewimage()
{
	document.getElementById("img1").src="img/boys-attitude-status-in-hindi.jpg";
}
function setoldimage()
{
	document.getElementById("img1").src="img/20190413_143006.jpg";
}
export function say() {
	alert(`Hello, welcome!`);
  }  