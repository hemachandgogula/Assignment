function identifyById() {
    console.log(document.getElementById('para1'));
}

function identifyByClass() {
    console.log(document.getElementsByClassName('class1'));

}

function identifyByTag() {
    console.log(document.getElementsByTagName("p"));
}

function changeBackground() {
    var i = document.getElementById("block1");
    i.style.backgroundColor = "blue";
}

function increaseFont() {
    var i = document.getElementById("block2");
    i.style.fontSize = "120%";

}

function changeFontColor() {
    var i = document.getElementById("block3");
    i.style.color = "green";
}

function revertColor() {
    var i = document.getElementById("block3");
    i.style.color = "black";
}

function hide() {
    var i = document.getElementById("block4");
    i.style.display = "none";
}

function changeBackColorForAllBox() {
    //var c=this.b;
    //var d=this.a; 
    var a = [];
    a = document.getElementsByClassName("box1");
    for (var i = 0; i < a.length; i++)
        a[i].style.backgroundColor = "green";
}
function changeBackColor() {
    var a = [];
    a = document.getElementsByClassName("box2");
    for (var i = 0; i < a.length; i++)
        a[i].style.backgroundColor = "blue";
}
function numbersOnly(Event) {
    var n =event.which;
    if (n >= 48 && n <= 57) {
        return true;
    }
    else
        return false;

}
function addAdjacent() {
    var para = document.createElement("p");
    var node = document.createTextNode("I got generated on the fly...");
    para.appendChild(node);
    var n=document.getElementById("para2");
    n.appendChild(para);
}

function removePara() {
    // var para = document.createElement("para3");
    document.getElementById("para4").remove();
    
}
function animatePara() {
    var elem = document.getElementById("box5");
    var pos = 0;
    var id = setInterval(frame, 10);
    function frame() {
        if (pos == 650) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.left = pos + 'px';
        }
    }
}
document.getElementById('inputBox1').onchange=function(){
    
    var x=document.getElementById('inputBox1');
    var y=document.getElementById('inputBox2');
    x.value=x.value.toUpperCase();
    y.value=x.value.toUpperCase();
}
document.getElementById('inputBox3').onchange=function(){
    var str=document.getElementById('inputBox3').value;
    var i;
    str.charAt(0).toUpperCase();
    for(i=1;i<str.length;i++){
        if(str[i]=' ')
        {
            if(str.charAt(i+1)>='a' && str.charAt(i+1)<='z')
            {
                str.charAt(i+1).toUpperCase();
                i++;
            }
        }
    }
    document.getElementById('inputBox3').value=str;
}
document.getElementById('p4').onfocus=function(){
    document.getElementById('p4').style.backgroundColor="yellow";
}
document.getElementById('browsers').onchange=function(){
    console.log(document.getElementById('browsers').value)
}