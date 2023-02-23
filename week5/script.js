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
    this.sprite.style.left=54*this.column-53+"px";
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
    placed[this.row-1][this.column-1]=0;
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
    this.deletethis=false;
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
    if (this.deletethis){
      this.delete()
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
    this.move=false;
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
        health2-=this.damage*3;
      }
      if (this.side==2){
        health1-=this.damage*3;
      }
      this.delete();
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
    placed[this.row-1][this.column-1]=0;
    clearInterval(this.interval1);
  }
}

class explodetriangle {
  constructor(row,column,side,time,areaX,areaY){
    this.row=row;
    this.column=column;
    this.side=side;
    this.time=time;
    this.health=Infinity;
    this.areaX=areaX;
    this.areaY=areaY;
    this.sprite=document.createElement("img");
    this.sprite.src="sprites/triangle4 side"+side+".png";
    document.getElementById("border").appendChild(this.sprite);
    this.sprite.style.left=54*this.column-52+"px";
    this.sprite.style.top=54*this.row+149+"px";
    this.sprite.style.pointerEvents="none";
    this.interval1=setTimeout(this.attack.bind(this),this.time*1000);
    if (this.side==1){
      side1.push(this);
    }
    if (this.side==2){
      side2.push(this);
    }
  }
  attack(){
    var otherside1;
    var otherside2;
    var otherside3;
    if (this.side==1){
      otherside1=side2;
      otherside2=side2m;
      otherside3=side2p;
    }
    if (this.side==2){
      otherside1=side1;
      otherside2=side1m;
      otherside3=side1p;
    }
    for (var i of otherside1){
      if (-this.areaY/2<=this.row-i.row && this.row-i.row<=this.areaY/2 && -this.areaX/2<=this.column-i.column && this.column-i.column<=this.areaX/2){
        i.health=0;
      }
    }
    for (var i of otherside2){
      if (-this.areaY/2<=this.row-i.row && this.row-i.row<=this.areaY/2 && -this.areaX/2<=this.column-i.column && this.column-i.column<=this.areaX/2){
        i.health=0;
      }
    }
    for (var i of otherside3){
      if (-this.areaY/2<=this.row-i.row && this.row-i.row<=this.areaY/2 && -this.areaX/2<=this.column-i.column && this.column-i.column<=this.areaX/2){
        i.deletethis=true;
      }
    }
    this.delete();
  }
  delete(){
    if (this.side==1){
      side1.splice(side1.indexOf(this),1);
    }
    if (this.side==2){
      side2.splice(side2.indexOf(this),1);
    }
    this.sprite.style.display="none";
    placed[this.row-1][this.column-1]=0;
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
    i.move=true;
    for (var j of side2p){
      j.effect(i);
    }
  }
  for (var i of side2m){
    i.move=true;
    for (var j of side1p){
      j.effect(i);
    }
  }
  for (var i of side1m){
    for (var j of side2){
      if (i.row==j.row && -0.1<=i.column-j.column && i.column-j.column<=0.1){
        j.health-=i.damage/50;
        i.move=false;
      }
    }
  }
  for (var i of side2m){
    for (var j of side1){
      if (i.row==j.row && -0.1<=i.column-j.column && i.column-j.column<=0.1){
        j.health-=i.damage/50;
        i.move=false;
      }
    }
  }
  for (var i of side1m){
    for (var j of side2m){
      if (i.row==j.row && -0.1<=i.column-j.column && i.column-j.column<=0.1){
        j.health-=i.damage/50;
        i.move=false;
      }
    }
  }
  for (var i of side2m){
    for (var j of side1m){
      if (i.row==j.row && -0.1<=i.column-j.column && i.column-j.column<=0.1){
        j.health-=i.damage/50;
        i.move=false;
      }
    }
  }
}

function play(f,e){
  i=document.getElementById("a").value.split(" ");
  var a=i[0];
  var b=Number(i[1]);
  var c=i[2];
  var d=Number(i[3]);
  playcomp(a,b,c,d,e,f);
}

function playcomp(type,side,rarity,level,y,x=0){
  if (x) trianglecalc(x,y,type,side,rarity,level);
  else trianglecalc(Math.floor(Math.random()*6+1),y,type,side,rarity,level);
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
  var g=Number(i[6]);
  playcomp(a,b,c,d,e,g);
  other=instructions.split("\n").slice(1).join("\n");
  setTimeout(x=>comp(x),f*1000,other);
}

function trianglecalc(a,b,type,side,rarity,level){
  level--;
  if (side==1){
    var matter=matter1;
    var use1=use11;
    var use2=use12;
    var use3=use13;
    var use4=use14;
  } else {
    var matter=matter2;
    var use1=use21;
    var use2=use22;
    var use3=use23;
    var use4=use24;
  }
  if (type=="triangle" && (use1 || !cooldown) && !placed[a-1][b-1]){
    if (rarity=="common"){
      if (matter>=4){
        matter-=4;
        new triangle(a,b,side,10+Math.floor(level*0.25),100+Math.floor(3*level),2);
        if (side==1){side11=0;setTimeout(()=>side11=1,5000);}
        else {side21=0;setTimeout(()=>side21=1,5000);}
        placed[a-1][b-1]=1;
      }
    }
    if (rarity=="uncommon"){
      if (matter>=4){
        matter-=4;
        new triangle(a,b,side,13+Math.floor(level*0.3),120+Math.floor(3.5*level),1.925);
        if (side==1){side11=0;setTimeout(()=>side11=1,4700);}
        else {side21=0;setTimeout(()=>side21=1,4700);}
        placed[a-1][b-1]=1;
      }
    }
    if (rarity=="rare"){
      if (matter>=3){
        matter-=3;
        new triangle(a,b,side,16+Math.floor(level*0.35),140+Math.floor(4*level),1.85);
        if (side==1){side11=0;setTimeout(()=>side11=1,4400);}
        else {side21=0;setTimeout(()=>side21=1,4400);}
        placed[a-1][b-1]=1;
      }
    }
    if (rarity=="epic"){
      if (matter>=3){
        matter-=3;
        new triangle(a,b,side,19+Math.floor(level*0.4),165+Math.floor(4.5*level),1.775);
        if (side==1){side11=0;setTimeout(()=>side11=1,4100);}
        else {side21=0;setTimeout(()=>side21=1,4100);}
        placed[a-1][b-1]=1;
      }
    }
    if (rarity=="super"){
      if (matter>=3){
        matter-=3;
        new triangle(a,b,side,23+Math.floor(level*0.5),190+Math.floor(5*level),1.7);
        if (side==1){side11=0;setTimeout(()=>side11=1,3700);}
        else {side21=0;setTimeout(()=>side21=1,3700);}
        placed[a-1][b-1]=1;
      }
    }
    if (rarity=="legendary"){
      if (matter>=2){
        matter-=2;
        new triangle(a,b,side,27+Math.floor(level*0.6),220+Math.floor(5.5*level),1.625);
        if (side==1){side11=0;setTimeout(()=>side11=1,3300);}
        else {side21=0;setTimeout(()=>side21=1,3300);}
        placed[a-1][b-1]=1;
      }
    }
    if (rarity=="mythical"){
      if (matter>=2){
        matter-=2;
        new triangle(a,b,side,32+Math.floor(level*0.7),250+Math.floor(6.5*level),1.55);
        if (side==1){side11=0;setTimeout(()=>side11=1,2900);}
        else {side21=0;setTimeout(()=>side21=1,2900);}
        placed[a-1][b-1]=1;
      }
    }
    if (rarity=="ultra"){
      if (matter>=2){
        matter-=2;
        new triangle(a,b,side,38+Math.floor(level*0.85),285+Math.floor(7.5*level),1.475);
        if (side==1){side11=0;setTimeout(()=>side11=1,2500);}
        else {side21=0;setTimeout(()=>side21=1,2500);}
        placed[a-1][b-1]=1;
      }
    }
    if (rarity=="transcendent"){
      if (matter>=1){
        matter-=1;
        new triangle(a,b,side,45+Math.floor(level*1.05),320+Math.floor(9*level),1.4);
        if (side==1){side11=0;setTimeout(()=>side11=1,2100);}
        else {side21=0;setTimeout(()=>side21=1,2100);}
        placed[a-1][b-1]=1;
      }
    }
  }

  if (type=="blocktriangle" && (use2 || !cooldown) && !placed[a-1][b-1]){
    if (rarity=="common"){
      if (matter>=2){
        matter-=2;
        new blocktriangle(a,b,side,1000+level*30);
        if (side==1){side12=0;setTimeout(()=>side12=1,15000);}
        else {side22=0;setTimeout(()=>side22=1,15000);}
        placed[a-1][b-1]=1;
      }
    }
    if (rarity=="uncommon"){
      if (matter>=2){
        matter-=2;
        new blocktriangle(a,b,side,1200+level*35);
        if (side==1){side12=0;setTimeout(()=>side12=1,14100);}
        else {side22=0;setTimeout(()=>side22=1,14100);}
        placed[a-1][b-1]=1;
      }
    }
    if (rarity=="rare"){
      if (matter>=2){
        matter-=2;
        new blocktriangle(a,b,side,1425+level*40);
        if (side==1){side12=0;setTimeout(()=>side12=1,13200);}
        else {side22=0;setTimeout(()=>side22=1,13200);}
        placed[a-1][b-1]=1;
      }
    }
    if (rarity=="epic"){
      if (matter>=2){
        matter-=2;
        new blocktriangle(a,b,side,1675+level*45);
        if (side==1){side12=0;setTimeout(()=>side12=1,12300);}
        else {side22=0;setTimeout(()=>side22=1,12300);}
        placed[a-1][b-1]=1;
      }
    }
    if (rarity=="super"){
      if (matter>=1){
        matter-=1;
        new blocktriangle(a,b,side,1950+level*50);
        if (side==1){side12=0;setTimeout(()=>side12=1,11100);}
        else {side22=0;setTimeout(()=>side22=1,1100);}
        placed[a-1][b-1]=1;
      }
    }
    if (rarity=="legendary"){
      if (matter>=1){
        matter-=1;
        new blocktriangle(a,b,side,2250+level*55);
        if (side==1){side12=0;setTimeout(()=>side12=1,9900);}
        else {side22=0;setTimeout(()=>side22=1,9900);}
        placed[a-1][b-1]=1;
      }
    }
    if (rarity=="mythical"){
      if (matter>=1){
        matter-=1;
        new blocktriangle(a,b,side,2575+level*65);
        if (side==1){side12=0;setTimeout(()=>side12=1,8700);}
        else {side22=0;setTimeout(()=>side22=1,8700);}
        placed[a-1][b-1]=1;
      }
    }
    if (rarity=="ultra"){
      if (matter>=1){
        matter-=1;
        new blocktriangle(a,b,side,2925+level*75);
        if (side==1){side12=0;setTimeout(()=>side12=1,7500);}
        else {side22=0;setTimeout(()=>side22=1,7500);}
        placed[a-1][b-1]=1;
      }
    }
    if (rarity=="transcendent"){
      if (matter>=1){
        matter-=1;
        new blocktriangle(a,b,side,3300+level*90);
        if (side==1){side12=0;setTimeout(()=>side12=1,6300);}
        else {side22=0;setTimeout(()=>side22=1,6300);}
        placed[a-1][b-1]=1;
      }
    }
  }

  if (type=="movingtriangle" && (use3 || !cooldown) && !placed[a-1][b-1]){
    if (rarity=="common"){
      if (matter>=4){
        matter-=4;
        new movingtriangle(a,b,side,10+Math.floor(level*0.25),100+Math.floor(3*level),1);
        if (side==1){side13=0;setTimeout(()=>side13=1,5000);}
        else {side23=0;setTimeout(()=>side23=1,5000);}
      }
    }
    if (rarity=="uncommon"){
      if (matter>=4){
        matter-=4;
        new movingtriangle(a,b,side,13+Math.floor(level*0.3),120+Math.floor(3.5*level),1);
        if (side==1){side13=0;setTimeout(()=>side13=1,4700);}
        else {side23=0;setTimeout(()=>side23=1,4700);}
      }
    }
    if (rarity=="rare"){
      if (matter>=3){
        matter-=3;
        new movingtriangle(a,b,side,16+Math.floor(level*0.35),140+Math.floor(4*level),1);
        if (side==1){side13=0;setTimeout(()=>side13=1,4400);}
        else {side23=0;setTimeout(()=>side23=1,4400);}
      }
    }
    if (rarity=="epic"){
      if (matter>=3){
        matter-=3;
        new movingtriangle(a,b,side,19+Math.floor(level*0.4),165+Math.floor(4.5*level),1);
        if (side==1){side13=0;setTimeout(()=>side13=1,4100);}
        else {side23=0;setTimeout(()=>side23=1,4100);}
      }
    }
    if (rarity=="super"){
      if (matter>=3){
        matter-=3;
        new movingtriangle(a,b,side,23+Math.floor(level*0.5),190+Math.floor(5*level),1);
        if (side==1){side13=0;setTimeout(()=>side13=1,3700);}
        else {side23=0;setTimeout(()=>side23=1,3700);}
      }
    }
    if (rarity=="legendary"){
      if (matter>=2){
        matter-=2;
        new movingtriangle(a,b,side,27+Math.floor(level*0.6),220+Math.floor(5.5*level),1);
        if (side==1){side13=0;setTimeout(()=>side13=1,3300);}
        else {side23=0;setTimeout(()=>side23=1,3300);}
      }
    }
    if (rarity=="mythical"){
      if (matter>=2){
        matter-=2;
        new movingtriangle(a,b,side,32+Math.floor(level*0.7),250+Math.floor(6.5*level),1);
        if (side==1){side13=0;setTimeout(()=>side13=1,2900);}
        else {side23=0;setTimeout(()=>side23=1,2900);}
      }
    }
    if (rarity=="ultra"){
      if (matter>=2){
        matter-=2;
        new movingtriangle(a,b,side,38+Math.floor(level*0.85),285+Math.floor(7.5*level),1);
        if (side==1){side13=0;setTimeout(()=>side13=1,2500);}
        else {side23=0;setTimeout(()=>side23=1,2500);}
      }
    }
    if (rarity=="transcendent"){
      if (matter>=1){
        matter-=1;
        new movingtriangle(a,b,side,45+Math.floor(level*1.05),320+Math.floor(9*level),1);
        if (side==1){side13=0;setTimeout(()=>side13=1,2100);}
        else {side23=0;setTimeout(()=>side23=1,2100);}
      }
    }
  }

  if (type=="explodetriangle" && (use4 || !cooldown) && !placed[a-1][b-1]){
    if (rarity=="common"){
      if (matter>=6){
        matter-=6;
        new explodetriangle(a,b,side,10+Math.floor(level*0.25),100+Math.floor(3*level),1);
        if (side==1){side14=0;setTimeout(()=>side14=1,30000);}
        else {side24=0;setTimeout(()=>side24=1,30000);}
      }
    }
    if (rarity=="uncommon"){
      if (matter>=6){
        matter-=6;
        new explodetriangle(a,b,side,13+Math.floor(level*0.3),120+Math.floor(3.5*level),1);
        if (side==1){side14=0;setTimeout(()=>side14=1,28200);}
        else {side24=0;setTimeout(()=>side24=1,28200);}
      }
    }
    if (rarity=="rare"){
      if (matter>=5){
        matter-=5;
        new explodetriangle(a,b,side,16+Math.floor(level*0.35),140+Math.floor(4*level),1);
        if (side==1){side14=0;setTimeout(()=>side14=1,26400);}
        else {side24=0;setTimeout(()=>side24=1,26400);}
      }
    }
    if (rarity=="epic"){
      if (matter>=5){
        matter-=5;
        new explodetriangle(a,b,side,19+Math.floor(level*0.4),165+Math.floor(4.5*level),1);
        if (side==1){side14=0;setTimeout(()=>side14=1,24600);}
        else {side24=0;setTimeout(()=>side24=1,24600);}
      }
    }
    if (rarity=="super"){
      if (matter>=4){
        matter-=4;
        new explodetriangle(a,b,side,23+Math.floor(level*0.5),190+Math.floor(5*level),1);
        if (side==1){side14=0;setTimeout(()=>side14=1,22200);}
        else {side24=0;setTimeout(()=>side24=1,22200);}
      }
    }
    if (rarity=="legendary"){
      if (matter>=4){
        matter-=4;
        new explodetriangle(a,b,side,27+Math.floor(level*0.6),220+Math.floor(5.5*level),1);
        if (side==1){side14=0;setTimeout(()=>side14=1,19800);}
        else {side24=0;setTimeout(()=>side24=1,19800);}
      }
    }
    if (rarity=="mythical"){
      if (matter>=3){
        matter-=3;
        new explodetriangle(a,b,side,32+Math.floor(level*0.7),250+Math.floor(6.5*level),1);
        if (side==1){side14=0;setTimeout(()=>side14=1,17400);}
        else {side24=0;setTimeout(()=>side24=1,17400);}
      }
    }
    if (rarity=="ultra"){
      if (matter>=3){
        matter-=3;
        new explodetriangle(a,b,side,38+Math.floor(level*0.85),285+Math.floor(7.5*level),1);
        if (side==1){side14=0;setTimeout(()=>side14=1,15000);}
        else {side24=0;setTimeout(()=>side24=1,15000);}
      }
    }
    if (rarity=="transcendent"){
      if (matter>=2){
        matter-=2;
        new explodetriangle(a,b,side,45+Math.floor(level*1.05),320+Math.floor(9*level),1);
        if (side==1){side14=0;setTimeout(()=>side14=1,12600);}
        else {side24=0;setTimeout(()=>side24=1,12600);}
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
var placed=[[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]]
var menu=3
var health1=100
var health2=100
var matter1=1000000000000000
var matter2=1000000000000
var use11=1
var use12=1
var use13=1
var use14=1
var use21=1
var use22=1
var use23=1
var use24=1
var cooldown=false
setInterval(update,20)
