//下拉式列表框
function list1(object){
    document.getElementById("l"+object).setAttribute("style", "display:flex");
}
function list2(object){
    document.getElementById("l"+object).setAttribute("style", "display:none");
}

var a1 = document.getElementById("a1");
a1.addEventListener("mouseenter",function () { list1("1")});
a1.addEventListener("mouseleave",function () { list2("1")});
var l1 = document.getElementById("l1");
l1.addEventListener("mouseenter",function () { list1("1")});
l1.addEventListener("mouseleave",function () { list2("1")});

var a2 = document.getElementById("a2");
a2.addEventListener("mouseenter",function () { list1("2")});
a2.addEventListener("mouseleave",function () { list2("2")});
var l2 = document.getElementById("l2");
l2.addEventListener("mouseenter",function () { list1("2")});
l2.addEventListener("mouseleave",function () { list2("2")});

var a3 = document.getElementById("a3");
a3.addEventListener("mouseenter",function () { list1("3")});
a3.addEventListener("mouseleave",function () { list2("3")});
var l3 = document.getElementById("l3");
l3.addEventListener("mouseenter",function () { list1("3")});
l3.addEventListener("mouseleave",function () { list2("3")});

var a4 = document.getElementById("a4");
a4.addEventListener("mouseenter",function () { list1("4")});
a4.addEventListener("mouseleave",function () { list2("4")});
var l4 = document.getElementById("l4");
l4.addEventListener("mouseenter",function () { list1("4")});
l4.addEventListener("mouseleave",function () { list2("4")});

var a5 = document.getElementById("a5");
a5.addEventListener("mouseenter",function () { list1("5")});
a5.addEventListener("mouseleave",function () { list2("5")});
var l5 = document.getElementById("l5");
l5.addEventListener("mouseenter",function () { list1("5")});
l5.addEventListener("mouseleave",function () { list2("5")});

var a6 = document.getElementById("a6");
a6.addEventListener("mouseenter",function () { list1("6")});
a6.addEventListener("mouseleave",function () { list2("6")});
var l6 = document.getElementById("l6");
l6.addEventListener("mouseenter",function () { list1("6")});
l6.addEventListener("mouseleave",function () { list2("6")});

var a7 = document.getElementById("a7");
a7.addEventListener("mouseenter",function () { list1("7")});
a7.addEventListener("mouseleave",function () { list2("7")});
var l7 = document.getElementById("l7");
l7.addEventListener("mouseenter",function () { list1("7")});
l7.addEventListener("mouseleave",function () { list2("7")});

var a8 = document.getElementById("a8");
a8.addEventListener("mouseenter",function () { list1("8")});
a8.addEventListener("mouseleave",function () { list2("8")});
var l8 = document.getElementById("l8");
l8.addEventListener("mouseenter",function () { list1("8")});
l8.addEventListener("mouseleave",function () { list2("8")});






//在内容前面加个·
var listItems = document.querySelectorAll('.top4-line2-box li');

listItems.forEach(function(item) {
  item.innerHTML = '· ' + item.innerHTML;
});


//
var clickBox1=function (){
    document.getElementById("box2").setAttribute("style", "display:none");
    document.getElementById("box1").setAttribute("style", "display:block");
    document.getElementById("biao2").setAttribute("style", "background-color: rgba(0, 107, 214, 0)");
    document.getElementById("biao1").setAttribute("style", "background-color: rgb(0, 107, 214)");
    document.getElementById("tu2").setAttribute("style", "background: url(picture/icon.png) no-repeat -82px -90px");
    document.getElementById("tu1").setAttribute("style", "background: url(picture/icon.png) no-repeat");
    document.getElementById("zi3").setAttribute("style", "color: black");
    document.getElementById("zi4").setAttribute("style", "color: black");
    document.getElementById("zi1").setAttribute("style", "color: rgb(255,255,255)");
    document.getElementById("zi2").setAttribute("style", "color: rgb(255,255,255)");
}
 var clickBox2=function (){
    document.getElementById("box1").setAttribute("style", "display:none");
    document.getElementById("box2").setAttribute("style", "display:block");
    document.getElementById("biao1").setAttribute("style", "background-color: rgba(0, 107, 214, 0)");
    document.getElementById("biao2").setAttribute("style", "background-color: rgb(0, 107, 214)");
    document.getElementById("tu1").setAttribute("style", "background: url(picture/icon.png) no-repeat -82px 0");
    document.getElementById("tu2").setAttribute("style", "background: url(picture/icon.png) no-repeat 0 -90px");
    document.getElementById("zi1").setAttribute("style", "color: black");
    document.getElementById("zi2").setAttribute("style", "color: black");
    document.getElementById("zi3").setAttribute("style", "color: rgb(255,255,255)");
    document.getElementById("zi4").setAttribute("style", "color: rgb(255,255,255)");
}



//top2里面的样式设置
var biaoline=[1,2,3,4,5];
function date(id){
    biaoline.forEach(function(a){
        document.getElementById('t'+a).classList.remove("bian");
        document.getElementById('d'+a).setAttribute("style","display: none");
    });
    document.getElementById('t'+id).classList.add("bian");
    document.getElementById('d'+id).setAttribute("style","display: flex");
}


//带有图像和数字还有一个上浮效果的设置
var b1 = document.getElementById("b1");
b1.onmouseover = function () {
    document.getElementById("s1").setAttribute("style", "background-position:-33px -47px;");
}
b1.onmouseout = function () {
    document.getElementById("s1").setAttribute("style", "background-position:-33px -3px;");
}
 

var b2 = document.getElementById("b2");
b2.onmouseover = function () {
    document.getElementById("s2").setAttribute("style", "background-position:-140px -47px;");
}
b2.onmouseout = function () {
    document.getElementById("s2").setAttribute("style", "background-position:-140px -3px;");
}
 

var b1 = document.getElementById("b3");
b3.onmouseover = function () {
    document.getElementById("s3").setAttribute("style", "background-position: 0px  -56px;");
}
b3.onmouseout = function () {
    document.getElementById("s3").setAttribute("style", "background-position: 0px 0px;");
}
 

var b4 = document.getElementById("b4");
b4.onmouseover = function () {
    document.getElementById("s4").setAttribute("style", "background-position:-247px -47px;");
}
b4.onmouseout = function () {
    document.getElementById("s4").setAttribute("style", "background-position:-247px -3px;");
}
 

var b5 = document.getElementById("b5");
b5.onmouseover = function () {
    document.getElementById("s5").setAttribute("style", "background-position:-354px -47px;");
}
b5.onmouseout = function () {
    document.getElementById("s5").setAttribute("style", "background-position:-354px -3px;");
}
 

var b6 = document.getElementById("b6");
b6.onmouseover = function () {
    document.getElementById("s6").setAttribute("style", "background-position:-461px -47px;");
}
b6.onmouseout = function () {
    document.getElementById("s6").setAttribute("style", "background-position:-461px -3px;");
}
 

var b7 = document.getElementById("b7");
b7.onmouseover = function () {
    document.getElementById("s7").setAttribute("style", "background-position:-568px -47px;");
}
b7.onmouseout = function () {
    document.getElementById("s7").setAttribute("style", "background-position:-568px -3px;");
}
 

var b8 = document.getElementById("b8");
b8.onmouseover = function () {
    document.getElementById("s8").setAttribute("style", "background-position:-673px -47px;");
}
b8.onmouseout = function () {
    document.getElementById("s8").setAttribute("style", "background-position:-673px -3px;");
}
 

var b9 = document.getElementById("b9");
b9.onmouseover = function () {
    document.getElementById("s9").setAttribute("style", "background-position:-781px -47px;");
}
b9.onmouseout = function () {
    document.getElementById("s9").setAttribute("style", "background-position:-781px -3px;");
}



//轮播图的设置
let num=0;
let previous = document.querySelector(".tbox2-left");
let next = document.querySelector(".tbox2-right");
let tbox1=document.querySelector(".tbox1");
let items=document.querySelectorAll(".tbox1 a img");

next.onclick=function(){
    num++;
    tbox1.style.left=-num*1240+"px";
    if(num>=items.length){
        num=0;
        tbox1.style.left="0px";
    }
}
previous.onclick=function(){
    num--;
    tbox1.style.left=-num*1240+"px";
    if(num<0){
        num=items.length-1;
        tbox1.style.left=-num*1240+"px";
    }
}

let time=setInterval(()=>{
    next.onclick();
},3000);

tbox1.onmouseover=function(){
    clearInterval(time);
}

tbox1.onmouseout=function(){
    time=setInterval(()=>{
        next.onclick();
    },5000);
}