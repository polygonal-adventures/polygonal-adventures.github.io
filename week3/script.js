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
      this.column+=0.004*(3-2*this.side);
    }
    this.sprite.style.left=54*this.column-52+"px";
    if (this.column<=0.5 || this.column>=10.5){
      if (this.side==1){
        health2-=this.damage;
      }
      if (this.side==2){
        health1-=this.damage;
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
    for (i of this.otherside1){
      if (-this.areaY/2<=this.row-i.row && this.row-i.row<=this.areaY/2 && -this.areaX/2<=this.column-i.column && this.column-i.column<=this.areaX/2){
        i.health-=this.damage;
      }
    }
    for (i of this.otherside2){
      if (-this.areaY/2<=this.row-i.row && this.row-i.row<=this.areaY/2 && -this.areaX/2<=this.column-i.column && this.column-i.column<=this.areaX/2){
        i.health-=this.damage;
      }
    }
    for (i of this.otherside3){
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
  for (i of side1){
    for (j of side2p){
      j.effect(i);
    }
  }
  for (i of side2){
    for (j of side1p){
      j.effect(i);
    }
  }
  for (i of side1m){
    for (j of side2p){
      j.effect(i);
    }
  }
  for (i of side2m){
    for (j of side1p){
      j.effect(i);
    }
  }
  for (i of side1m){
    x=true;
    for (j of side2){
      if (i.row==j.row && -0.1<=i.column-j.column && i.column-j.column<=0.1){
        i.move=false;
        j.health-=0.02*i.damage;
        x=false;
      }
    }
    if (x){
      i.move=true;
    }
  }
  for (i of side2m){
    x=true;
    for (j of side1){
      if (i.row==j.row && -0.1<=i.column-j.column && i.column-j.column<=0.1){
        i.move=false;
        j.health-=0.02*i.damage;
        x=false;
      }
    }
    if (x){
      i.move=true;
    }
  }
  for (i of side1m){
    x=true;
    for (j of side2m){
      if (i.row==j.row && -0.1<=i.column-j.column && i.column-j.column<=0.1){
        i.move=false;
        j.health-=0.02*i.damage;
        x=false;
      }
    }
    if (x){
      i.move=true;
    }
  }
  for (i of side2m){
    x=true;
    for (j of side1m){
      if (i.row==j.row && -0.1<=i.column-j.column && i.column-j.column<=0.1){
        i.move=false;
        j.health-=0.02*i.damage;
        x=false;
      }
    }
    if (x){
      i.move=true;
    }
  }
}

function play(a,b){
  nevergonnagiveyouup=document.getElementById("a").value
  if (nevergonnagiveyouup=="1"){
    new movingtriangle(a,b,1,0,20,20)
  }
  if (nevergonnagiveyouup=="2"){
    new blocktriangle(a,b,1,50)
  }
  if (nevergonnagiveyouup=="3"){
    new triangle(a,b,1,2,20,2)
  }
  if (nevergonnagiveyouup=="4"){
    new explodetriangle(a,b,1,100,1,10,3,3)
  }
  if (nevergonnagiveyouup=="5"){
    new movingtriangle(a,b,2,100,20,20)
  }
  if (nevergonnagiveyouup=="6"){
    new blocktriangle(a,b,2,50)
  }
  if (nevergonnagiveyouup=="7"){
    new triangle(a,b,2,2,20,2)
  }
  if (nevergonnagiveyouup=="8"){
    new explodetriangle(a,b,2,100,1,10,3,3)
  }
  if (nevergonnagiveyouup=="never gonna give you up"){
    new triangle(a,b,1,100,100,0.1)
  }
}

function playcomp(type,args){
  eval("new "+type+"("+Math.floor(Math.random()*6+1)+","+args+")")
}
function comp(instructions){
  i=instructions.split("\n")[0]
  i=i.split(" ")
  a=i[0]
  b=i[1]
  c=i[2]
  playcomp(a,b)
  other=instructions.split("\n").slice(1).join("\n")
  setTimeout(x=>comp(x),Number(c)*1000,other)
}
function trianglecalc(a,b,side,rarity,level){

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
setInterval(update,20)
