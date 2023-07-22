
var a,y,b,c,pm,befor,after,p,m,br,be;

function number(n){

    y=document.getElementById("result").innerHTML;
    document.getElementById("result").innerHTML=y+n;
    if(a == null){a=n}else{a=a+n}
    if(after == null){after=n}else{after=after+n}
}



function calc(x,m){
if(be!=null){b=null;}
    pm=null;
        y=document.getElementById("result").innerHTML;
        if(a !=null)
      {document.getElementById("result").innerHTML=y+m;}
    after=null;
    befor=y+m;
    if(b == null){b=parseFloat(a);a=null;be=null;}
    
    else if( c == "4"){b=b+parseFloat(a);a=null;}
    else if( c == "3"){b=b-parseFloat(a);a=null;}
    else if( c == "2"){b=b*parseFloat(a);a=null;}
    else{b=b/parseFloat(a);a=null;}
    c=x;
    
}


function equl(){
    
if(be != null){
        if(b!= Math.floor(b)){b=b.toFixed(5)} document.getElementById("result").innerHTML=b.toString();
  a=b.toString();}
 
 
    
    if(c == "4"){
    b=b+parseFloat(a);}
    else if(c == "3")
    { b=b-parseFloat(a);}
    else if(c == "2")
    { b=b*parseFloat(a);} 
    else if(c == "1")
    
    { b=b/parseFloat(a);}
    
    
    if(b !=null)
    
 {
 if(b!= Math.floor(b)){b=b.toFixed(2)}
 document.getElementById("result").innerHTML=b.toString();
  a=b.toString();}
 
 b=null;c=null;pm=null;after=null;befor=null;p=null;be=null;br=null;
}


function cl(){
    
    document.getElementById("result").innerHTML="";
      a=null; b=null;c=null; pm=null;after=null;befor=null;p=null;be=null;br=null;
}

function pom(){
    y=document.getElementById("result").innerHTML;
    if(pm ==null && c == null)
    {document.getElementById("result").innerHTML="-"+y;
    a="-"+a;pm="1"}else if(pm !=null && c == null){document.getElementById("result").innerHTML=y.substring(1);a=a.substring(1);pm=null;}
    else if(pm ==null && c!=null && after!=null){
  document.getElementById("result").innerHTML=befor+"(-"+after;pm="1";p=a;a="-"+a;}
    else if(pm !=null && c!=null){
  document.getElementById("result").innerHTML=befor+after;
  pm=null;a=p;}
}


function pnt(){
    y=document.getElementById("result").innerHTML;
    document.getElementById("result").innerHTML=y+".";
    a=a+".";
}


function bracket(){
    if(br == null){
        y=document.getElementById("result").innerHTML;
    document.getElementById("result").innerHTML=y+"(";
        br=1;be=null;
    }
    else{
        y=document.getElementById("result").innerHTML;
    document.getElementById("result").innerHTML=y+")";
    br=null;
    
    if(c == "4"){
    b=b+parseFloat(a);}
    else if(c == "3")
    { b=b-parseFloat(a);}
    else if(c == "2")
    { b=b*parseFloat(a);} 
    else if(c == "1")
    { b=b/parseFloat(a);}
    if(b !=null)
    
 { if(b!= Math.floor(b)){b=b.toFixed(5)}
 
  a=b.toString();}
  be=1;c=null;
    }
}



function persentage(m){
    y=document.getElementById("result").innerHTML;
        if(c==null)
      
    {b=parseFloat(a)/100;
    if(b!= Math.floor(b)){b=b.toFixed(2)}
 document.getElementById("result").innerHTML=b.toString();
  a=b.toString();
 
 b=null;c=null;pm=null;after=null;befor=null;p=null;be=null;br=null;
    }
      
      else
      {
    f=b/100*parseFloat(a);b= b-f;f=null;
    if(b!= Math.floor(b)){b=b.toFixed(2)}
 document.getElementById("result").innerHTML=b.toString();
  a=b.toString();
 
 b=null;c=null;pm=null;after=null;befor=null;p=null;be=null;br=null;
    
}
}
