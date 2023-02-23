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
    this.sprite.style.top=54*this.row+149+"px"
    this.interval1=setInterval(this.attack.bind(this),this.time*1000)
    this.interval2=setInterval(this.update.bind(this),20)
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

function changedisplay(num){
  for (i=1; i<=5; i++){
    document.getElementById("menu"+i).style.display="none";
  }
  document.getElementById("menu"+num).style.display="block";
}

function update(){
  for (i of side1){
    for (j of side2p){
      if (i.row==j.row && -0.1<=i.column-j.column && i.column-j.column<=0.1){
        i.health-=j.damage;
        j.delete();
      }
    }
  }
  for (i of side2){
    for (j of side1p){
      if (i.row==j.row && -0.1<=i.column-j.column && i.column-j.column<=0.1){
        i.health-=j.damage;
        j.delete();
      }
    }
  }
}

var side1=[]
var side2=[]
var side1m=[]
var side2m=[]
var side1p=[]
var side2p=[]
setInterval(update,20)
