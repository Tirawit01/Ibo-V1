

//Here you can add your own picture for snow. Just change the url

var snowsrc=" https://1.bp.blogspot.com/-VoqeJgCAO1o/X-65WPXCW_I/AAAAAAAAXdc/2Cc4WecrZgEst2PP6lLAcWiQpzs56xtHACLcBGAsYHQ/s0/bluesnowrsz.png "

//how many snowflakes there will be (currently 12)

var no =47;

//How fast will the snow disappear (0 is never)

var hidesnowtime = 0;

//The height the snow will reach before it disappears ("windowheight" or "pageheight")

var snowdistance = "pageheight";

///////////////////////////////End of Settings///////////////////////////////////

var ie4up = (document.all) ? 1 : 0;

var ns6up = (document.getElementById&&!document.all) ? 1 : 0;

function iecompattest()

{

return (document.compatMode && document.compatMode!="BackCompat")? document.documentElement : document.body

}

var dx, xp, yp;

var am, stx, sty;

var i, doc_width = 800, doc_height = 600;

if (ns6up)

{

doc_width = self.innerWidth;

doc_height = self.innerHeight;

}

else

if (ie4up)

{

doc_width = document.body.clientWidth;

doc_height = document.body.clientHeight;

}

dx = new Array();

xp = new Array();

yp = new Array();

am = new Array();

stx = new Array();

sty = new Array();

for (i = 0; i < no; ++ i)

{

dx[i] = 0;

xp[i] = Math.random()*(doc_width-50);

yp[i] = Math.random()*doc_height;

am[i] = Math.random()*20;

stx[i] = 0.02 + Math.random()/10;

sty[i] = 0.7 + Math.random();

if (ie4up||ns6up)

{

if (i == 0)

{

document.write("<div id=\"dot"+ i +"\" style=\"POSITION: absolute; Z-INDEX: "+ i +"; VISIBILITY: visible; TOP: 15px; LEFT: 15px;\"><a href=\"https://rftactical.darkbb.com/index.htm\"><img src='"+snowsrc+"' border=\"0\"><\/a><\/div>");

}

else

{

document.write("<div id=\"dot"+ i +"\" style=\"POSITION: absolute; Z-INDEX: "+ i +"; VISIBILITY: visible; TOP: 15px; LEFT: 15px;\"><img src='"+snowsrc+"' border=\"0\"><\/div>");

}

}

}

function snowIE_NS6()

{

doc_width = ns6up?window.innerWidth-10 : iecompattest().clientWidth-10;

doc_height=(window.innerHeight && snowdistance=="windowheight")? window.innerHeight : (ie4up && snowdistance=="windowheight")? iecompattest().clientHeight : (ie4up && !window.opera && snowdistance=="pageheight")? iecompattest().scrollHeight : iecompattest().offsetHeight;

for (i = 0; i < no; ++ i)

{

yp[i] += sty[i];

if (yp[i] > doc_height-50)

{

xp[i] = Math.random()*(doc_width-am[i]-30);

yp[i] = 0;

stx[i] = 0.02 + Math.random()/10;

sty[i] = 0.7 + Math.random();

}

dx[i] += stx[i];

document.getElementById("dot"+i).style.top=yp[i]+"px";

document.getElementById("dot"+i).style.left=xp[i] + am[i]*Math.sin(dx[i])+"px";

}

snowtimer=setTimeout("snowIE_NS6()", 10);

}

function hidesnow()

{

if (window.snowtimer) clearTimeout(snowtimer)

for (i=0; i<no; i++) document.getElementById("dot"+i).style.visibility="hidden"

}



if (ie4up||ns6up)

{

snowIE_NS6();

if (hidesnowtime>0)

setTimeout("hidesnow()", hidesnowtime*1000)

}

