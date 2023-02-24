class triangle {
  constructor(row,column,side,damage,health,time){
    this.row=row;
    this.column=column;
    this.side=side;
    this.damage=damage;
    this.health=health;
    this.time=time;
    this.sprite=document.createElement("img");
    this.sprite.src="sprites/triangle1 side"+side+".png";
    document.getElementById("border").appendChild(this.sprite);
    this.sprite.style.left=54*this.column-52+"px";
    this.sprite.style.top=54*this.row+149+"px";
    this.sprite.style.pointerEvents="none";
    this.interval1=setInterval(this.attack.bind(this),this.time*1000);
    this.interval2=setInterval(this.update.bind(this),20);
    if (this.side==1){
      side1.push(this);
    }
    if (this.side==2){
      side2.push(this);
    }
  }
  attack(){
    new triangleprojectile(this.row,this.column,this.side,this.damage);
  }
  update(){
    if (this.health<=0){
      this.delete();
    }
  }
  delete(){
    if (this.side==1){
      side1.splice(side1.indexOf(this),1);
    }
    if (this.side==2){
      side2.splice(side2.indexOf(this),1);
    }
    this.sprite.style.display="none";
    clearInterval(this.interval1);
    clearInterval(this.interval2);
  }
}

class triangleprojectile {
  constructor(row,column,side,damage){
    this.row=row;
    this.column=column;
    this.side=side;
    this.damage=damage;
    this.sprite=document.createElement("img");
    this.sprite.src="sprites/triangleprojectile.png";
    this.sprite.style.width="25px";
    this.sprite.style.height="25px";
    document.getElementById("border").appendChild(this.sprite);
    this.sprite.style.left=54*this.column-39+"px";
    this.sprite.style.top=54*this.row+161.5+"px";
    this.sprite.style.pointerEvents="none";
    this.interval1=setInterval(this.update.bind(this),20);
    if (this.side==1){
      side1p.push(this);
    }
    if (this.side==2){
      side2p.push(this);
    }
  }
  update(){
    this.column+=0.1*(3-2*this.side);
    this.sprite.style.left=54*this.column-39+"px";
    if (this.column<=0.5 || this.column>=10.5){
      this.delete();
      if (this.side==1){
        health2-=this.damage;
      }
      if (this.side==2){
        health1-=this.damage;
      }
    }
  }
  delete(){
    if (this.side==1){
      side1p.splice(side1p.indexOf(this),1);
      this.sprite.style.display="none";
      clearInterval(this.interval1);
    }
    if (this.side==2){
      side2p.splice(side2p.indexOf(this),1);
      this.sprite.style.display="none";
      clearInterval(this.interval1);
    }
  }
  effect(other){
    if (this.row==other.row && -0.1<=this.column-other.column && this.column-other.column<=0.1){
      other.health-=this.damage;
      this.delete();
    }
  }
}

class movingtriangle {
  constructor(row,column,side,damage,health,speed){
    this.row=row;
    this.column=column;
    this.side=side;
    this.damage=damage;
    this.health=health;
    this.speed=speed;
    this.sprite=document.createElement("img");
    this.sprite.src="sprites/triangle3 side"+this.side+".png";
    document.getElementById("border").appendChild(this.sprite);
    this.sprite.style.left=54*this.column-52+"px";
    this.sprite.style.top=54*this.row+149+"px";
    this.sprite.style.pointerEvents="none";
    this.move=true;
    this.interval1=setInterval(this.update.bind(this),20);
    if (this.side==1){
      side1m.push(this);
    }
    if (this.side==2){
      side2m.push(this);
    }
  }
  update(){
    if (this.move) {
      this.column+=this.speed*0.004*(3-2*this.side);
    }
    this.sprite.style.left=54*this.column-52+"px";
    if (this.column<=0.5 || this.column>=10.5){
      if (this.side==1){
        health2-=this.damage/20;
      }
      if (this.side==2){
        health1-=this.damage/20;
      }
    }
    if (this.health<=0){
      this.delete();
    }
  }
  delete(){
    if (this.side==1){
      side1m.splice(side1m.indexOf(this),1);
    }
    if (this.side==2){
      side2m.splice(side2m.indexOf(this),1);
    }
    this.sprite.style.display="none";
    clearInterval(this.interval1);
  }
}

class blocktriangle {
  constructor(row,column,side,health){
    this.row=row;
    this.column=column;
    this.side=side;
    this.totalhealth=health;
    this.health=health;
    this.sprite1=document.createElement("img");
    this.sprite1.src="sprites/triangle2 side"+side+" 1.png";
    this.sprite2=document.createElement("img");
    this.sprite2.src="sprites/triangle2 side"+side+" 2.png";
    this.sprite3=document.createElement("img");
    this.sprite3.src="sprites/triangle2 side"+side+" 3.png";
    document.getElementById("border").appendChild(this.sprite1);
    document.getElementById("border").appendChild(this.sprite2);
    document.getElementById("border").appendChild(this.sprite3);
    this.sprite1.style.left=54*this.column-52+"px";
    this.sprite1.style.top=54*this.row+149+"px";
    this.sprite2.style.left=54*this.column-52+"px";
    this.sprite2.style.top=54*this.row+149+"px";
    this.sprite3.style.left=54*this.column-52+"px";
    this.sprite3.style.top=54*this.row+149+"px";
    this.sprite1.style.display="inline";
    this.sprite2.style.display="none";
    this.sprite3.style.display="none";
    this.sprite1.style.pointerEvents="none";
    this.sprite2.style.pointerEvents="none";
    this.sprite3.style.pointerEvents="none";
    this.interval1=setInterval(this.update.bind(this),20);
    if (this.side==1){
      side1.push(this);
    }
    if (this.side==2){
      side2.push(this);
    }
  }
  update(){
    if (this.health<=this.totalhealth*2/3){
      this.sprite1.style.display="none";
      this.sprite2.style.display="inline";
      this.sprite3.style.display="none";
    }
    if (this.health<=this.totalhealth*1/3){
      this.sprite1.style.display="none";
      this.sprite2.style.display="none";
      this.sprite3.style.display="inline";
    }
    if (this.health<=0){
      this.delete();
    }
  }
  delete(){
    if (this.side==1){
      side1.splice(side1.indexOf(this),1);
    }
    if (this.side==2){
      side2.splice(side2.indexOf(this),1);
    }
    this.sprite1.style.display="none";
    this.sprite2.style.display="none";
    this.sprite3.style.display="none";
    clearInterval(this.interval1);
  }
}

class explodetriangle {
  constructor(row,column,side,damage,time,health,areaX,areaY){
    this.row=row;
    this.column=column;
    this.side=side;
    this.damage=damage;
    this.time=time;
    this.health=health;
    this.areaX=areaX;
    this.areaY=areaY;
    this.sprite=document.createElement("img");
    this.sprite.src="sprites/triangle4 side"+side+".png";
    document.getElementById("border").appendChild(this.sprite);
    this.sprite.style.left=54*this.column-52+"px";
    this.sprite.style.top=54*this.row+149+"px";
    this.sprite.style.pointerEvents="none";
    this.interval1=setTimeout(this.attack.bind(this),this.time*1000);
    this.interval2=setInterval(this.update.bind(this),20);
    if (this.side==1){
      side1.push(this);
      this.otherside1=side2;
      this.otherside2=side2m;
      this.otherside3=side2p;
    }
    if (this.side==2){
      side2.push(this);
      this.otherside1=side1;
      this.otherside2=side1m;
      this.otherside3=side1p;
    }
  }
  attack(){
    for (var i of this.otherside1){
      if (-this.areaY/2<=this.row-i.row && this.row-i.row<=this.areaY/2 && -this.areaX/2<=this.column-i.column && this.column-i.column<=this.areaX/2){
        i.health-=this.damage;
      }
    }
    for (var i of this.otherside2){
      if (-this.areaY/2<=this.row-i.row && this.row-i.row<=this.areaY/2 && -this.areaX/2<=this.column-i.column && this.column-i.column<=this.areaX/2){
        i.health-=this.damage;
      }
    }
    for (var i of this.otherside3){
      if (-this.areaY/2<=this.row-i.row && this.row-i.row<=this.areaY/2 && -this.areaX/2<=this.column-i.column && this.column-i.column<=this.areaX/2){
        i.health-=this.damage;
      }
    }
    this.health=0;
  }
  update(){
    if (this.health<=0){
      this.delete();
    }
  }
  delete(){
    if (this.side==1){
      side1.splice(side1.indexOf(this),1);
    }
    if (this.side==2){
      side2.splice(side2.indexOf(this),1);
    }
    this.sprite.style.display="none";
    clearTimeout(this.interval1);
    clearInterval(this.interval2);
  }
}

function changedisplay(num){
  for (i=1; i<=5; i++){
    document.getElementById("menu"+i).style.display="none";
  }
  document.getElementById("menu"+num).style.display="block";
  menu=num;
}

function update(){
  for (var i of side1){
    for (var j of side2p){
      j.effect(i);
    }
  }
  for (var i of side2){
    for (var j of side1p){
      j.effect(i);
    }
  }
  for (var i of side1m){
    for (var j of side2p){
      j.effect(i);
    }
  }
  for (var i of side2m){
    for (var j of side1p){
      j.effect(i);
    }
  }
  for (var i of side1m){
    var x=true;
    for (var j of side2){
      if (i.row==j.row && -0.1<=i.column-j.column && i.column-j.column<=0.1){
        i.move=false;
        j.health-=i.damage/50;
        x=false;
      }
    }
    if (x){
      i.move=true;
    }
  }
  for (var i of side2m){
    var x=true;
    for (var j of side1){
      if (i.row==j.row && -0.1<=i.column-j.column && i.column-j.column<=0.1){
        i.move=false;
        j.health-=i.damage/50;
        x=false;
      }
    }
    if (x){
      i.move=true;
    }
  }
  for (var i of side1m){
    var x=true;
    for (var j of side2m){
      if (i.row==j.row && -0.1<=i.column-j.column && i.column-j.column<=0.1){
        i.move=false;
        j.health-=i.damage/50;
        x=false;
      }
    }
    if (x){
      i.move=true;
    }
  }
  for (var i of side2m){
    var x=true;
    for (var j of side1m){
      if (i.row==j.row && -0.1<=i.column-j.column && i.column-j.column<=0.1){
        i.move=false;
        j.health-=i.damage/50;
        x=false;
      }
    }
    if (x){
      i.move=true;
    }
  }
}

function play(a,b){
  i=document.getElementById("a").value.split(" ");
  if (i[0]=="triangle") trianglecalc(a,b,"triangle",i[1],i[2],i[3])
  if (i[0]=="blocktriangle") new blocktriangle(a,b,i[1],i[2])
  if (i[0]=="movingtriangle") new movingtriangle(a,b,i[1],i[2],i[3],i[4])
  if (i[0]=="explodetriangle") new explodetriangle(a,b,i[1],i[2],i[3],i[4],i[5],i[6])
}

function playcomp(type,side,rarity,level,y){
  trianglecalc(Math.floor(Math.random()*6+1),y,type,side,rarity,level);
}

function comp(instructions){
  if (instructions=="") return;
  var i=instructions.split("\n")[0];
  i=i.split(" ");
  var a=i[0];
  var b=Number(i[1]);
  var c=i[2];
  var d=Number(i[3]);
  var e=Number(i[4]);
  var f=Number(i[5]);
  playcomp(a,b,c,d,e);
  other=instructions.split("\n").slice(1).join("\n");
  setTimeout(x=>comp(x),f*1000,other);
}

function trianglecalc(a,b,type,side,rarity,level){
  level--;
  if (side==1){
    var matter=matter1;
  } else {
    var matter=matter2;
  }
  if (type=="triangle"){
    if (rarity=="common"){
      if (matter>=4){
        matter-=4;
        new triangle(a,b,side,10+Math.floor(level*0.25),100+Math.floor(3*level),2);
      }
    }
    if (rarity=="uncommon"){
      if (matter>=4){
        matter-=4;
        new triangle(a,b,side,13+Math.floor(level*0.3),120+Math.floor(3.5*level),1.925);
      }
    }
    if (rarity=="rare"){
      if (matter>=3){
        matter-=3;
        new triangle(a,b,side,16+Math.floor(level*0.35),140+Math.floor(4*level),1.85);
      }
    }
    if (rarity=="epic"){
      if (matter>=3){
        matter-=3;
        new triangle(a,b,side,19+Math.floor(level*0.4),165+Math.floor(4.5*level),1.775);
      }
    }
    if (rarity=="super"){
      if (matter>=3){
        matter-=3;
        new triangle(a,b,side,23+Math.floor(level*0.5),190+Math.floor(5*level),1.7);
      }
    }
    if (rarity=="legendary"){
      if (matter>=2){
        matter-=2;
        new triangle(a,b,side,27+Math.floor(level*0.6),220+Math.floor(5.5*level),1.625);
      }
    }
    if (rarity=="mythical"){
      if (matter>=2){
        matter-=2;
        new triangle(a,b,side,32+Math.floor(level*0.7),250+Math.floor(6.5*level),1.55);
      }
    }
    if (rarity=="ultra"){
      if (matter>=2){
        matter-=2;
        new triangle(a,b,side,38+Math.floor(level*0.85),285+Math.floor(7.5*level),1.475);
      }
    }
    if (rarity=="transcendent"){
      if (matter>=1){
        matter-=1;
        new triangle(a,b,side,45+Math.floor(level*1.05),320+Math.floor(9*level),1.4);
      }
    }
  }

  if (type=="blocktriangle"){
    if (rarity=="common"){
      if (matter>=4){
        matter-=4;
        new triangle(a,b,side,10+Math.floor(level*0.25),100+Math.floor(3*level),2);
      }
    }
    if (rarity=="uncommon"){
      if (matter>=4){
        matter-=4;
        new triangle(a,b,side,13+Math.floor(level*0.3),120+Math.floor(3.5*level),1.925);
      }
    }
    if (rarity=="rare"){
      if (matter>=3){
        matter-=3;
        new triangle(a,b,side,16+Math.floor(level*0.35),140+Math.floor(4*level),1.85);
      }
    }
    if (rarity=="epic"){
      if (matter>=3){
        matter-=3;
        new triangle(a,b,side,19+Math.floor(level*0.4),165+Math.floor(4.5*level),1.775);
      }
    }
    if (rarity=="super"){
      if (matter>=3){
        matter-=3;
        new triangle(a,b,side,23+Math.floor(level*0.5),190+Math.floor(5*level),1.7);
      }
    }
    if (rarity=="legendary"){
      if (matter>=2){
        matter-=2;
        new triangle(a,b,side,27+Math.floor(level*0.6),220+Math.floor(5.5*level),1.625);
      }
    }
    if (rarity=="mythical"){
      if (matter>=2){
        matter-=2;
        new triangle(a,b,side,32+Math.floor(level*0.7),250+Math.floor(6.5*level),1.55);
      }
    }
    if (rarity=="ultra"){
      if (matter>=2){
        matter-=2;
        new triangle(a,b,side,38+Math.floor(level*0.85),285+Math.floor(7.5*level),1.475);
      }
    }
    if (rarity=="transcendent"){
      if (matter>=1){
        matter-=1;
        new triangle(a,b,side,45+Math.floor(level*1.05),320+Math.floor(9*level),1.4);
      }
    }
  }
  if (side==1){
    matter1=matter;
  } else {
    matter2=matter;
  }
}
var side1=[]
var side2=[]
var side1m=[]
var side2m=[]
var side1p=[]
var side2p=[]
var menu=3
var health1=100
var health2=100
var matter1=4
var matter2=10
setInterval(update,20)
