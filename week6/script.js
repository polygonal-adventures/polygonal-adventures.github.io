class triangleshooter {
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
    if (!gg) new triangleprojectile(this.row,this.column,this.side,this.damage);
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
      if (this.side==1 && health){
        health2-=this.damage;
      }
      if (this.side==2 && health){
        health1-=this.damage;
      }
    }
    if (this.deletethis || gg){
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
  effect(other){
    if (this.row==other.row && -0.1<=this.column-other.column && this.column-other.column<=0.1){
      other.health-=this.damage;
      this.delete();
    }
  }
}

class triangleattacker {
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
    if (this.move && !gg) {
      this.column+=this.speed*0.004*(3-2*this.side);
    }
    this.sprite.style.left=54*this.column-52+"px";
    if (this.column<=0.5 || this.column>=10.5){
      if (this.side==1 && health){
        health2-=this.damage*3;
      }
      if (this.side==2 && health){
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

class triangledefender {
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

class triangleexploder {
  constructor(row,column,side,damage,time,areaX,areaY){
    this.row=row;
    this.column=column;
    this.side=side;
    this.damage=damage;
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
    if (!gg){
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
          i.health-=this.damage;
        }
      }
      for (var i of otherside2){
        if (-this.areaY/2<=this.row-i.row && this.row-i.row<=this.areaY/2 && -this.areaX/2<=this.column-i.column && this.column-i.column<=this.areaX/2){
          i.health-=this.damage;
        }
      }
      for (var i of otherside3){
        if (-this.areaY/2<=this.row-i.row && this.row-i.row<=this.areaY/2 && -this.areaX/2<=this.column-i.column && this.column-i.column<=this.areaX/2){
          i.deletethis=true;
        }
      }
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

function numberify(num,min=1,floor=true){
  if (num=="") return min;
  if (Number(num)>=min && floor) return Math.floor(num);
  if (Number(num)>=min) return num;
  return min;
}

function diff(t1,t2){
  if (t1<t2) return "0s"
  return Math.round((t1-t2)/100)/10+"s";
}

function polygonset(num){
  if (battlemode){
    if (num<=4) polygontype1=num;
    else polygontype2=num-4;
  }
  else polygontype=num;
}

function add1(){
  if (cost) matter1++;
  add1timeout=setTimeout(add1,document.getElementById("matter1change").value*1000);
}

function add2(){
  if (cost) matter2++;
  add2timeout=setTimeout(add2,document.getElementById("matter2change").value*1000);
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
      if (i.row==j.row && -0.5<=i.column-j.column && i.column-j.column<=0.5){
        j.health-=i.damage/50;
        i.move=false;
      }
    }
  }
  for (var i of side2m){
    for (var j of side1){
      if (i.row==j.row && -0.5<=i.column-j.column && i.column-j.column<=0.5){
        j.health-=i.damage/50;
        i.move=false;
      }
    }
  }
  for (var i of side1m){
    for (var j of side2m){
      if (i.row==j.row && -0.5<=i.column-j.column && i.column-j.column<=0.5){
        j.health-=i.damage/50;
        i.move=false;
      }
    }
  }
  for (var i of side2m){
    for (var j of side1m){
      if (i.row==j.row && -0.5<=i.column-j.column && i.column-j.column<=0.5){
        j.health-=i.damage/50;
        i.move=false;
      }
    }
  }

  if (cooldown){
    document.getElementById("cooldowntext").innerHTML="True";
    document.getElementById("triangleshooterside1cooldown").innerHTML=diff(time11,new Date().getTime());
    document.getElementById("triangledefenderside1cooldown").innerHTML=diff(time12,new Date().getTime());
    document.getElementById("triangleattackerside1cooldown").innerHTML=diff(time13,new Date().getTime());
    document.getElementById("triangleexploderside1cooldown").innerHTML=diff(time14,new Date().getTime());
    document.getElementById("triangleshooterside2cooldown").innerHTML=diff(time21,new Date().getTime());
    document.getElementById("triangledefenderside2cooldown").innerHTML=diff(time22,new Date().getTime());
    document.getElementById("triangleattackerside2cooldown").innerHTML=diff(time23,new Date().getTime());
    document.getElementById("triangleexploderside2cooldown").innerHTML=diff(time24,new Date().getTime());
  } else {
    document.getElementById("cooldowntext").innerHTML="False";
    document.getElementById("triangleshooterside1cooldown").innerHTML="";
    document.getElementById("triangledefenderside1cooldown").innerHTML="";
    document.getElementById("triangleattackerside1cooldown").innerHTML="";
    document.getElementById("triangleexploderside1cooldown").innerHTML="";
    document.getElementById("triangleshooterside2cooldown").innerHTML="";
    document.getElementById("triangledefenderside2cooldown").innerHTML="";
    document.getElementById("triangleattackerside2cooldown").innerHTML="";
    document.getElementById("triangleexploderside2cooldown").innerHTML="";
  }

  if (otherplace){
    document.getElementById("otherplacetext").innerHTML="True";
    document.getElementById("border17").style.borderColor="black";
    document.getElementById("border17").style.backgroundColor="black";
  } else {
    document.getElementById("otherplacetext").innerHTML="False";
    document.getElementById("border17").style.borderColor="red";
    document.getElementById("border17").style.backgroundColor="red";
  }

  if (cost){
    document.getElementById("costtext").innerHTML="True";
    document.getElementById("matter1span").style.display="inline";
    document.getElementById("matter2span").style.display="inline";
    document.getElementById("matter1text").innerHTML=matter1;
    document.getElementById("matter2text").innerHTML=matter2;
    document.getElementById("matter1").value=numberify(document.getElementById("matter1").value,0,false);
    document.getElementById("matter2").value=numberify(document.getElementById("matter2").value,0,false);
  } else {
    document.getElementById("costtext").innerHTML="False";
    document.getElementById("matter1span").style.display="none";
    document.getElementById("matter2span").style.display="none";
  }

  if (health){
    document.getElementById("healthtext").innerHTML="True";
    document.getElementById("health1span").style.display="inline";
    document.getElementById("health2span").style.display="inline";
    document.getElementById("health1text").innerHTML=health1;
    document.getElementById("health2text").innerHTML=health2;
    document.getElementById("health1").value=numberify(document.getElementById("health1").value,0);
    document.getElementById("health2").value=numberify(document.getElementById("health2").value,0);
  } else {
    document.getElementById("healthtext").innerHTML="False";
    document.getElementById("health1span").style.display="none";
    document.getElementById("health2span").style.display="none";
  }

  document.getElementById("triangleshooterside1level").value=numberify(document.getElementById("triangleshooterside1level").value);
  document.getElementById("triangledefenderside1level").value=numberify(document.getElementById("triangledefenderside1level").value);
  document.getElementById("triangleattackerside1level").value=numberify(document.getElementById("triangleattackerside1level").value);
  document.getElementById("triangleexploderside1level").value=numberify(document.getElementById("triangleexploderside1level").value);
  document.getElementById("triangleshooterside2level").value=numberify(document.getElementById("triangleshooterside2level").value);
  document.getElementById("triangledefenderside2level").value=numberify(document.getElementById("triangledefenderside2level").value);
  document.getElementById("triangleattackerside2level").value=numberify(document.getElementById("triangleattackerside2level").value);
  document.getElementById("triangleexploderside2level").value=numberify(document.getElementById("triangleexploderside2level").value);
  document.getElementById("matter1change").value=numberify(document.getElementById("matter1change").value,0,false);
  document.getElementById("matter2change").value=numberify(document.getElementById("matter2change").value,0,false);

  if (!gg){
    for (var x=1; x<=10; x++){
      for (var y=1; y<=6; y++){
        document.getElementById("playbutton"+y+"_"+x).style.backgroundColor="transparent";
      }
    }
  }
  document.getElementById("matter1colour").style.color="black";
  document.getElementById("matter2colour").style.color="black";
  document.getElementById("health1colour").style.color="black";
  document.getElementById("health2colour").style.color="black";

  if (battlemode){
    if (polygontype1==1) document.getElementById("polygontypetext1").innerHTML=" Shooter";
    if (polygontype1==2) document.getElementById("polygontypetext1").innerHTML=" Defender";
    if (polygontype1==3) document.getElementById("polygontypetext1").innerHTML=" Attacker";
    if (polygontype1==4) document.getElementById("polygontypetext1").innerHTML=" Exploder";
    if (polygontype2==1) document.getElementById("polygontypetext2").innerHTML=" Shooter";
    if (polygontype2==2) document.getElementById("polygontypetext2").innerHTML=" Defender";
    if (polygontype2==3) document.getElementById("polygontypetext2").innerHTML=" Attacker";
    if (polygontype2==4) document.getElementById("polygontypetext2").innerHTML=" Exploder";
    if (!gg){
      document.getElementById("playbutton"+ypos1+"_"+xpos1).style.backgroundColor="lime";
      document.getElementById("playbutton"+ypos2+"_"+xpos2).style.backgroundColor="lime";
    }
    if (health1<0 && health2>=0){
      gg=true;
      for (var i=1; i<=5; i++){
        for (var j=1; j<=6; j++){
          document.getElementById("playbutton"+j+"_"+i).style.backgroundColor="black";
        }
      }
      rainbowcolour+=10;
      for (var i=6; i<=10; i++){
        for (var j=1; j<=6; j++){
          document.getElementById("playbutton"+j+"_"+i).style.backgroundColor="hsl("+rainbowcolour+",100%,50%)";
        }
      }
      for (i of side1) i.delete();
      for (i of side1m) i.delete();
      for (i of side1p) i.delete();
      for (i of side2m) if (i.column<6) i.delete();
      document.getElementById("gghide").style.display="none";
      document.getElementById("menu3").innerHTML="GG player 2";
    }
    if (health2<0 && health1>=0){
      gg=true;
      for (var i=6; i<=10; i++){
        for (var j=1; j<=6; j++){
          document.getElementById("playbutton"+j+"_"+i).style.backgroundColor="black";
        }
      }
      rainbowcolour+=10;
      for (var i=1; i<=5; i++){
        for (var j=1; j<=6; j++){
          document.getElementById("playbutton"+j+"_"+i).style.backgroundColor="hsl("+rainbowcolour+",100%,50%)";
        }
      }
      for (i of side2) i.delete();
      for (i of side2m) i.delete();
      for (i of side2p) i.delete();
      for (i of side1m) if (i.column>5) i.delete();
      document.getElementById("gghide").style.display="none";
      document.getElementById("menu3").innerHTML="GG player 1";
    }
    if (health1<0 && health2<0){
      gg=true;
      rainbowcolour+=10;
      for (var i=1; i<=10; i++){
        for (var j=1; j<=6; j++){
          document.getElementById("playbutton"+j+"_"+i).style.backgroundColor="hsl("+rainbowcolour+",100%,50%)";
        }
      }
      document.getElementById("gghide").style.display="none";
      document.getElementById("menu3").innerHTML="Tie";
    }
  } else {
    if (polygontype==1) document.getElementById("polygontypetext1").innerHTML=" Shooter side 1";
    if (polygontype==2) document.getElementById("polygontypetext1").innerHTML=" Defender side 1";
    if (polygontype==3) document.getElementById("polygontypetext1").innerHTML=" Attacker side 1";
    if (polygontype==4) document.getElementById("polygontypetext1").innerHTML=" Exploder side 1";
    if (polygontype==5) document.getElementById("polygontypetext1").innerHTML=" Shooter side 2";
    if (polygontype==6) document.getElementById("polygontypetext1").innerHTML=" Defender side 2";
    if (polygontype==7) document.getElementById("polygontypetext1").innerHTML=" Attacker side 2";
    if (polygontype==8) document.getElementById("polygontypetext1").innerHTML=" Exploder side 2";
    document.getElementById("playbutton"+ypos1+"_"+xpos1).style.backgroundColor="lime";
    if (selectedtype==1) document.getElementById("matter1colour").style.color="lime";
    if (selectedtype==2) document.getElementById("matter2colour").style.color="lime";
    if (selectedtype==3) document.getElementById("health1colour").style.color="lime";
    if (selectedtype==4) document.getElementById("health2colour").style.color="lime";
    document.getElementById("polygontypetext2").innerHTML="";
  }
}

function play(y,x){
  if (!battlemode){
    if (polygontype<=4) var side=1;
    else var side=2;
    var polygontype0=polygontype;
  } else if (x<=5) {
    var polygontype0=polygontype1;
    var side=1;
  } else {
    var polygontype0=polygontype2;
    var side=2;
  }
  if (polygontype0==1 || polygontype0==5) var t="triangleshooter";
  if (polygontype0==2 || polygontype0==6) var t="triangledefender";
  if (polygontype0==3 || polygontype0==7) var t="triangleattacker";
  if (polygontype0==4 || polygontype0==8) var t="triangleexploder";
  if ((otherplace || ((side==1 && x<=5) || (side==2 && x>=6))) && !gg) playcomp(t,side,document.getElementById(t+"side"+side+"rarity").value,Number(document.getElementById(t+"side"+side+"level").value),x,y);
}

function playcomp(type,side,rarity,level,x,y=0){
  if (y) trianglecalc(y,x,type,side,rarity,level);
  else trianglecalc(Math.floor(Math.random()*6+1),x,type,side,rarity,level);
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
  if (type=="triangleshooter" && (use1 || !cooldown) && !placed[a-1][b-1]){
    if (rarity=="common"){
      if (matter>=4 || !cost){
        if (cost) matter-=4;
        new triangleshooter(a,b,side,10+Math.floor(level*0.25),100+Math.floor(3*level),2);
        if (side==1){use11=0;setTimeout(()=>use11=1,5000);time11=new Date().getTime()+5000;}
        else {use21=0;setTimeout(()=>use21=1,5000);time21=new Date().getTime()+5000;}
        placed[a-1][b-1]=1;
      }
    }
    if (rarity=="uncommon"){
      if (matter>=4 || !cost){
        if (cost) matter-=4;
        new triangleshooter(a,b,side,13+Math.floor(level*0.3),120+Math.floor(3.5*level),1.925);
        if (side==1){use11=0;setTimeout(()=>use11=1,4700);time11=new Date().getTime()+4700;}
        else {use21=0;setTimeout(()=>use21=1,4700);time21=new Date().getTime()+4700;}
        placed[a-1][b-1]=1;
      }
    }
    if (rarity=="rare"){
      if (matter>=3 || !cost){
        if (cost) matter-=3;
        new triangleshooter(a,b,side,16+Math.floor(level*0.35),140+Math.floor(4*level),1.85);
        if (side==1){use11=0;setTimeout(()=>use11=1,4400);time11=new Date().getTime()+4400;}
        else {use21=0;setTimeout(()=>use21=1,4400);time21=new Date().getTime()+4400;}
        placed[a-1][b-1]=1;
      }
    }
    if (rarity=="epic"){
      if (matter>=3 || !cost){
        if (cost) matter-=3;
        new triangleshooter(a,b,side,19+Math.floor(level*0.4),165+Math.floor(4.5*level),1.775);
        if (side==1){use11=0;setTimeout(()=>use11=1,4100);time11=new Date().getTime()+4100;}
        else {use21=0;setTimeout(()=>use21=1,4100);time21=new Date().getTime()+4100;}
        placed[a-1][b-1]=1;
      }
    }
    if (rarity=="super"){
      if (matter>=3 || !cost){
        if (cost) matter-=3;
        new triangleshooter(a,b,side,23+Math.floor(level*0.5),190+Math.floor(5*level),1.7);
        if (side==1){use11=0;setTimeout(()=>use11=1,3700);time11=new Date().getTime()+3700;}
        else {use21=0;setTimeout(()=>use21=1,3700);time21=new Date().getTime()+3700;}
        placed[a-1][b-1]=1;
      }
    }
    if (rarity=="legendary"){
      if (matter>=2 || !cost){
        if (cost) matter-=2;
        new triangleshooter(a,b,side,27+Math.floor(level*0.6),220+Math.floor(5.5*level),1.625);
        if (side==1){use11=0;setTimeout(()=>use11=1,3300);time11=new Date().getTime()+3300;}
        else {use21=0;setTimeout(()=>use21=1,3300);time21=new Date().getTime()+3300;}
        placed[a-1][b-1]=1;
      }
    }
    if (rarity=="mythical"){
      if (matter>=2 || !cost){
        if (cost) matter-=2;
        new triangleshooter(a,b,side,32+Math.floor(level*0.7),250+Math.floor(6.5*level),1.55);
        if (side==1){use11=0;setTimeout(()=>use11=1,2900);time11=new Date().getTime()+2900;}
        else {use21=0;setTimeout(()=>use21=1,2900);time21=new Date().getTime()+2900;}
        placed[a-1][b-1]=1;
      }
    }
    if (rarity=="ultra"){
      if (matter>=2 || !cost){
        if (cost) matter-=2;
        new triangleshooter(a,b,side,38+Math.floor(level*0.85),285+Math.floor(7.5*level),1.475);
        if (side==1){use11=0;setTimeout(()=>use11=1,2500);time11=new Date().getTime()+2500;}
        else {use21=0;setTimeout(()=>use21=1,2500);time21=new Date().getTime()+2500;}
        placed[a-1][b-1]=1;
      }
    }
    if (rarity=="transcendent"){
      if (matter>=1 || !cost){
        if (cost) matter-=1;
        new triangleshooter(a,b,side,45+Math.floor(level*1.05),320+Math.floor(9*level),1.4);
        if (side==1){use11=0;setTimeout(()=>use11=1,2100);time11=new Date().getTime()+2100;}
        else {use21=0;setTimeout(()=>use21=1,2100);time21=new Date().getTime()+2100;}
        placed[a-1][b-1]=1;
      }
    }
  }

  if (type=="triangledefender" && (use2 || !cooldown) && !placed[a-1][b-1]){
    if (rarity=="common"){
      if (matter>=2 || !cost){
        if (cost) matter-=2;
        new triangledefender(a,b,side,1000+level*30);
        if (side==1){use12=0;setTimeout(()=>use12=1,15000);time12=new Date().getTime()+15000;}
        else {use22=0;setTimeout(()=>use22=1,15000);time22=new Date().getTime()+15000;}
        placed[a-1][b-1]=1;
      }
    }
    if (rarity=="uncommon"){
      if (matter>=2 || !cost){
        if (cost) matter-=2;
        new triangledefender(a,b,side,1200+level*35);
        if (side==1){use12=0;setTimeout(()=>use12=1,14100);time12=new Date().getTime()+14100;}
        else {use22=0;setTimeout(()=>use22=1,14100);time22=new Date().getTime()+14100;}
        placed[a-1][b-1]=1;
      }
    }
    if (rarity=="rare"){
      if (matter>=2 || !cost){
        if (cost) matter-=2;
        new triangledefender(a,b,side,1425+level*40);
        if (side==1){use12=0;setTimeout(()=>use12=1,13200);time12=new Date().getTime()+13200;}
        else {use22=0;setTimeout(()=>use22=1,13200);time22=new Date().getTime()+13200;}
        placed[a-1][b-1]=1;
      }
    }
    if (rarity=="epic"){
      if (matter>=2 || !cost){
        if (cost) matter-=2;
        new triangledefender(a,b,side,1675+level*45);
        if (side==1){use12=0;setTimeout(()=>use12=1,12300);time12=new Date().getTime()+12300;}
        else {use22=0;setTimeout(()=>use22=1,12300);time22=new Date().getTime()+12300;}
        placed[a-1][b-1]=1;
      }
    }
    if (rarity=="super"){
      if (matter>=1 || !cost){
        if (cost) matter-=1;
        new triangledefender(a,b,side,1950+level*50);
        if (side==1){use12=0;setTimeout(()=>use12=1,11100);time12=new Date().getTime()+11100;}
        else {use22=0;setTimeout(()=>use22=1,1100);time22=new Date().getTime()+11100;}
        placed[a-1][b-1]=1;
      }
    }
    if (rarity=="legendary"){
      if (matter>=1 || !cost){
        if (cost) matter-=1;
        new triangledefender(a,b,side,2250+level*55);
        if (side==1){use12=0;setTimeout(()=>use12=1,9900);time12=new Date().getTime()+9900;}
        else {use22=0;setTimeout(()=>use22=1,9900);time22=new Date().getTime()+9900;}
        placed[a-1][b-1]=1;
      }
    }
    if (rarity=="mythical"){
      if (matter>=1 || !cost){
        if (cost) matter-=1;
        new triangledefender(a,b,side,2575+level*65);
        if (side==1){use12=0;setTimeout(()=>use12=1,8700);time12=new Date().getTime()+8700;}
        else {use22=0;setTimeout(()=>use22=1,8700);time22=new Date().getTime()+8700;}
        placed[a-1][b-1]=1;
      }
    }
    if (rarity=="ultra"){
      if (matter>=1 || !cost){
        if (cost) matter-=1;
        new triangledefender(a,b,side,2925+level*75);
        if (side==1){use12=0;setTimeout(()=>use12=1,7500);time12=new Date().getTime()+7500;}
        else {use22=0;setTimeout(()=>use22=1,7500);time22=new Date().getTime()+7500;}
        placed[a-1][b-1]=1;
      }
    }
    if (rarity=="transcendent"){
      if (matter>=1 || !cost){
        if (cost) matter-=1;
        new triangledefender(a,b,side,3300+level*90);
        if (side==1){use12=0;setTimeout(()=>use12=1,6300);time12=new Date().getTime()+6300;}
        else {use22=0;setTimeout(()=>use22=1,6300);time22=new Date().getTime()+6300;}
        placed[a-1][b-1]=1;
      }
    }
  }

  if (type=="triangleattacker" && (use3 || !cooldown) && !placed[a-1][b-1]){
    if (rarity=="common"){
      if (matter>=4 || !cost){
        if (cost) matter-=4;
        new triangleattacker(a,b,side,10+Math.floor(level*0.25),100+Math.floor(3*level),1);
        if (side==1){use13=0;setTimeout(()=>use13=1,5000);time13=new Date().getTime()+5000;}
        else {use23=0;setTimeout(()=>use23=1,5000);time23=new Date().getTime()+5000;}
      }
    }
    if (rarity=="uncommon"){
      if (matter>=4 || !cost){
        if (cost) matter-=4;
        new triangleattacker(a,b,side,13+Math.floor(level*0.3),120+Math.floor(3.5*level),1);
        if (side==1){use13=0;setTimeout(()=>use13=1,4700);time13=new Date().getTime()+4700;}
        else {use23=0;setTimeout(()=>use23=1,4700);time23=new Date().getTime()+4700;}
      }
    }
    if (rarity=="rare"){
      if (matter>=3 || !cost){
        if (cost) matter-=3;
        new triangleattacker(a,b,side,16+Math.floor(level*0.35),140+Math.floor(4*level),1);
        if (side==1){use13=0;setTimeout(()=>use13=1,4400);time13=new Date().getTime()+4400;}
        else {use23=0;setTimeout(()=>use23=1,4400);time23=new Date().getTime()+4400;}
      }
    }
    if (rarity=="epic"){
      if (matter>=3 || !cost){
        if (cost) matter-=3;
        new triangleattacker(a,b,side,19+Math.floor(level*0.4),165+Math.floor(4.5*level),1);
        if (side==1){use13=0;setTimeout(()=>use13=1,4100);time13=new Date().getTime()+4100;}
        else {use23=0;setTimeout(()=>use23=1,4100);time23=new Date().getTime()+4100;}
      }
    }
    if (rarity=="super"){
      if (matter>=3 || !cost){
        if (cost) matter-=3;
        new triangleattacker(a,b,side,23+Math.floor(level*0.5),190+Math.floor(5*level),1);
        if (side==1){use13=0;setTimeout(()=>use13=1,3700);time13=new Date().getTime()+3700;}
        else {use23=0;setTimeout(()=>use23=1,3700);time23=new Date().getTime()+3700;}
      }
    }
    if (rarity=="legendary"){
      if (matter>=2 || !cost){
        if (cost) matter-=2;
        new triangleattacker(a,b,side,27+Math.floor(level*0.6),220+Math.floor(5.5*level),1);
        if (side==1){use13=0;setTimeout(()=>use13=1,3300);time13=new Date().getTime()+3300;}
        else {use23=0;setTimeout(()=>use23=1,3300);time23=new Date().getTime()+3300;}
      }
    }
    if (rarity=="mythical"){
      if (matter>=2 || !cost){
        if (cost) matter-=2;
        new triangleattacker(a,b,side,32+Math.floor(level*0.7),250+Math.floor(6.5*level),1);
        if (side==1){use13=0;setTimeout(()=>use13=1,2900);time13=new Date().getTime()+2900;}
        else {use23=0;setTimeout(()=>use23=1,2900);time23=new Date().getTime()+2900;}
      }
    }
    if (rarity=="ultra"){
      if (matter>=2 || !cost){
        if (cost) matter-=2;
        new triangleattacker(a,b,side,38+Math.floor(level*0.85),285+Math.floor(7.5*level),1);
        if (side==1){use13=0;setTimeout(()=>use13=1,2500);time13=new Date().getTime()+2500;}
        else {use23=0;setTimeout(()=>use23=1,2500);time23=new Date().getTime()+2500;}
      }
    }
    if (rarity=="transcendent"){
      if (matter>=1 || !cost){
        if (cost) matter-=1;
        new triangleattacker(a,b,side,45+Math.floor(level*1.05),320+Math.floor(9*level),1);
        if (side==1){use13=0;setTimeout(()=>use13=1,2100);time13=new Date().getTime()+2100;}
        else {use23=0;setTimeout(()=>use23=1,2100);time23=new Date().getTime()+2100;}
      }
    }
  }

  if (type=="triangleexploder" && (use4 || !cooldown) && !placed[a-1][b-1]){
    if (rarity=="common"){
      if (matter>=6 || !cost){
        if (cost) matter-=6;
        new triangleexploder(a,b,side,100+Math.floor(3*level),2,3,3);
        if (side==1){use14=0;setTimeout(()=>use14=1,30000);time14=new Date().getTime()+30000;}
        else {use24=0;setTimeout(()=>use24=1,30000);time24=new Date().getTime()+30000;}
      }
    }
    if (rarity=="uncommon"){
      if (matter>=6 || !cost){
        if (cost) matter-=6;
        new triangleexploder(a,b,side,120+Math.floor(3.5*level),1.8,3,3);
        if (side==1){use14=0;setTimeout(()=>use14=1,28200);time14=new Date().getTime()+28200;}
        else {use24=0;setTimeout(()=>use24=1,28200);time24=new Date().getTime()+28200;}
      }
    }
    if (rarity=="rare"){
      if (matter>=5 || !cost){
        if (cost) matter-=5;
        new triangleexploder(a,b,side,140+Math.floor(4*level),1.6,3,3);
        if (side==1){use14=0;setTimeout(()=>use14=1,26400);time14=new Date().getTime()+26400;}
        else {use24=0;setTimeout(()=>use24=1,26400);time24=new Date().getTime()+26400;}
      }
    }
    if (rarity=="epic"){
      if (matter>=5 || !cost){
        if (cost) matter-=5;
        new triangleexploder(a,b,side,165+Math.floor(4.5*level),1.4,3,5);
        if (side==1){use14=0;setTimeout(()=>use14=1,24600);time14=new Date().getTime()+24600;}
        else {use24=0;setTimeout(()=>use24=1,24600);time24=new Date().getTime()+24600;}
      }
    }
    if (rarity=="super"){
      if (matter>=4 || !cost){
        if (cost) matter-=4;
        new triangleexploder(a,b,side,190+Math.floor(5*level),1.2,3,5);
        if (side==1){use14=0;setTimeout(()=>use14=1,22200);time14=new Date().getTime()+22200;}
        else {use24=0;setTimeout(()=>use24=1,22200);time24=new Date().getTime()+22200;}
      }
    }
    if (rarity=="legendary"){
      if (matter>=4 || !cost){
        if (cost) matter-=4;
        new triangleexploder(a,b,side,220+Math.floor(5.5*level),1,5,5);
        if (side==1){use14=0;setTimeout(()=>use14=1,19800);time14=new Date().getTime()+19800;}
        else {use24=0;setTimeout(()=>use24=1,19800);time24=new Date().getTime()+19800;}
      }
    }
    if (rarity=="mythical"){
      if (matter>=3 || !cost){
        if (cost) matter-=3;
        new triangleexploder(a,b,side,250+Math.floor(6.5*level),0.7,5,5);
        if (side==1){use14=0;setTimeout(()=>use14=1,17400);time14=new Date().getTime()+17400;}
        else {use24=0;setTimeout(()=>use24=1,17400);time24=new Date().getTime()+17400;}
      }
    }
    if (rarity=="ultra"){
      if (matter>=3 || !cost){
        if (cost) matter-=3;
        new triangleexploder(a,b,side,285+Math.floor(7.5*level),0.4,5,7);
        if (side==1){use14=0;setTimeout(()=>use14=1,15000);time14=new Date().getTime()+15000;}
        else {use24=0;setTimeout(()=>use24=1,15000);time24=new Date().getTime()+15000;}
      }
    }
    if (rarity=="transcendent"){
      if (matter>=2 || !cost){
        if (cost) matter-=2;
        new triangleexploder(a,b,side,320+Math.floor(9*level),0.1,5,7);
        if (side==1){use14=0;setTimeout(()=>use14=1,12600);time14=new Date().getTime()+12600;}
        else {use24=0;setTimeout(()=>use24=1,12600);time24=new Date().getTime()+12600;}
      }
    }
  }

  if (side==1){
    matter1=matter;
  } else {
    matter2=matter;
  }
}

function battle(){
  cooldown=true;
  otherplace=false;
  cost=true;
  health=true;
  battlemode=true;
  document.getElementById("cooldown").style.display="none";
  document.getElementById("otherplace").style.display="none";
  document.getElementById("cost").style.display="none";
  document.getElementById("matter1hide").style.display="none";
  document.getElementById("matter2hide").style.display="none";
  document.getElementById("health").style.display="none";
  document.getElementById("health1hide").style.display="none";
  document.getElementById("health2hide").style.display="none";
  document.getElementById("triangleshooterside1rarity").disabled=true;
  document.getElementById("triangledefenderside1rarity").disabled=true;
  document.getElementById("triangleattackerside1rarity").disabled=true;
  document.getElementById("triangleexploderside1rarity").disabled=true;
  document.getElementById("triangleshooterside2rarity").disabled=true;
  document.getElementById("triangledefenderside2rarity").disabled=true;
  document.getElementById("triangleattackerside2rarity").disabled=true;
  document.getElementById("triangleexploderside2rarity").disabled=true;
  document.getElementById("triangleshooterside1level").disabled=true;
  document.getElementById("triangledefenderside1level").disabled=true;
  document.getElementById("triangleattackerside1level").disabled=true;
  document.getElementById("triangleexploderside1level").disabled=true;
  document.getElementById("triangleshooterside2level").disabled=true;
  document.getElementById("triangledefenderside2level").disabled=true;
  document.getElementById("triangleattackerside2level").disabled=true;
  document.getElementById("triangleexploderside2level").disabled=true;
  document.getElementById("battle").style.display="none";
  xpos1=1;
  ypos1=1;
  clearTimeout(add1timeout);
  clearTimeout(add2timeout);
  matter1=document.getElementById("matter1").value;
  matter2=document.getElementById("matter2").value;
  add1timeout=setTimeout(add1,document.getElementById("matter1change").value*1000);
  add2timeout=setTimeout(add2,document.getElementById("matter2change").value*1000);
  for (i of [].concat(side1,side1m,side1p,side2,side2m,side2p)) i.delete();
  use11=1;
  use12=1;
  use13=1;
  use14=1;
  use21=1;
  use22=1;
  use23=1;
  use24=1;
  time11=0;
  time12=0;
  time13=0;
  time14=0;
  time21=0;
  time22=0;
  time23=0;
  time24=0;
}

function keydown(event){
  keypressed=event.key;
  if (battlemode){
    if (keypressed=="1") polygontype1=1;
    if (keypressed=="2") polygontype1=2;
    if (keypressed=="3") polygontype1=3;
    if (keypressed=="4") polygontype1=4;
    if (keypressed=="7") polygontype2=1;
    if (keypressed=="8") polygontype2=2;
    if (keypressed=="9") polygontype2=3;
    if (keypressed=="0") polygontype2=4;
    if (keypressed=="w" && ypos1>=2) ypos1--;
    if (keypressed=="a" && xpos1>=2) xpos1--;
    if (keypressed=="s" && ypos1<=5) ypos1++;
    if (keypressed=="d" && xpos1<=4) xpos1++;
    if (keypressed=="i" && ypos2>=2) ypos2--;
    if (keypressed=="j" && xpos2>=7) xpos2--;
    if (keypressed=="k" && ypos2<=5) ypos2++;
    if (keypressed=="l" && xpos2<=9) xpos2++;
    if (keypressed=="e") play(ypos1,xpos1);
    if (keypressed=="u") play(ypos2,xpos2);
  } else {
    if (keypressed=="1") polygontype=1;
    if (keypressed=="2") polygontype=2;
    if (keypressed=="3") polygontype=3;
    if (keypressed=="4") polygontype=4;
    if (keypressed=="7") polygontype=5;
    if (keypressed=="8") polygontype=6;
    if (keypressed=="9") polygontype=7;
    if (keypressed=="0") polygontype=8;
    if (keypressed=="!") cooldown=!cooldown;
    if (keypressed=="@") otherplace=!otherplace;
    if (keypressed=="#") cost=!cost;
    if (keypressed=="$") health=!health;
    if (keypressed=="%") selectedtype=1;
    if (keypressed=="^") selectedtype=2;
    if (keypressed=="&") selectedtype=3;
    if (keypressed=="*") selectedtype=4;
    if (polygontype==1) var polygontype0="triangleshooterside1";
    if (polygontype==2) var polygontype0="triangledefenderside1";
    if (polygontype==3) var polygontype0="triangleattackerside1";
    if (polygontype==4) var polygontype0="triangleexploderside1";
    if (polygontype==5) var polygontype0="triangleshooterside2";
    if (polygontype==6) var polygontype0="triangledefenderside2";
    if (polygontype==7) var polygontype0="triangleattackerside2";
    if (polygontype==8) var polygontype0="triangleexploderside2";
    if (keypressed=="C") document.getElementById(polygontype0+"rarity").value="common";
    if (keypressed=="N") document.getElementById(polygontype0+"rarity").value="uncommon";
    if (keypressed=="R") document.getElementById(polygontype0+"rarity").value="rare";
    if (keypressed=="E") document.getElementById(polygontype0+"rarity").value="epic";
    if (keypressed=="S") document.getElementById(polygontype0+"rarity").value="super";
    if (keypressed=="L") document.getElementById(polygontype0+"rarity").value="legendary";
    if (keypressed=="M") document.getElementById(polygontype0+"rarity").value="mythical";
    if (keypressed=="U") document.getElementById(polygontype0+"rarity").value="ultra";
    if (keypressed=="T") document.getElementById(polygontype0+"rarity").value="transcendent";
    if (keypressed=="ArrowUp") document.getElementById(polygontype0+"level").value++;
    if (keypressed=="ArrowDown") document.getElementById(polygontype0+"level").value--;
    if (selectedtype==1){
      if (keypressed=="Enter") matter1=document.getElementById("matter1").value;
      if (keypressed=="[") document.getElementById("matter1").value--;
      if (keypressed=="]") document.getElementById("matter1").value++;
      if (keypressed=="{") document.getElementById("matter1change").value--;
      if (keypressed=="}") document.getElementById("matter1change").value++;
    }
    if (selectedtype==2){
      if (keypressed=="Enter") matter2=document.getElementById("matter2").value;
      if (keypressed=="[") document.getElementById("matter2").value--;
      if (keypressed=="]") document.getElementById("matter2").value++;
      if (keypressed=="{") document.getElementById("matter2change").value--;
      if (keypressed=="}") document.getElementById("matter2change").value++;
    }
    if (selectedtype==3){
      if (keypressed=="Enter") health1=document.getElementById("health1").value;
      if (keypressed=="[") document.getElementById("health1").value--;
      if (keypressed=="]") document.getElementById("health1").value++;
    }
    if (selectedtype==4){
      if (keypressed=="Enter") health2=document.getElementById("health2").value;
      if (keypressed=="[") document.getElementById("health2").value--;
      if (keypressed=="]") document.getElementById("health2").value++;
    }
    if (keypressed=="w" && ypos1>=2) ypos1--;
    if (keypressed=="a" && xpos1>=2) xpos1--;
    if (keypressed=="s" && ypos1<=5) ypos1++;
    if (keypressed=="d" && xpos1<=9) xpos1++;
    if (keypressed==" ") play(ypos1,xpos1);
    if (keypressed=="b") battle();
  }
  if (keypressed==",") save1();
  if (keypressed==".") save2();
}

function save1() {
  var x=prompt("Side 1 save:",document.getElementById("triangleshooterside1rarity").value+"|"+document.getElementById("triangledefenderside1rarity").value+"|"+document.getElementById("triangleattackerside1rarity").value+"|"+document.getElementById("triangleexploderside1rarity").value+"|"+document.getElementById("triangleshooterside1level").value+"|"+document.getElementById("triangledefenderside1level").value+"|"+document.getElementById("triangleattackerside1level").value+"|"+document.getElementById("triangleexploderside1level").value+"|"+document.getElementById("matter1").value+"|"+document.getElementById("matter1change").value+"|"+document.getElementById("health1").value).split("|");
  if (x!=null){
    document.getElementById("triangleshooterside1rarity").value=x[0];
    document.getElementById("triangledefenderside1rarity").value=x[1];
    document.getElementById("triangleattackerside1rarity").value=x[2];
    document.getElementById("triangleexploderside1rarity").value=x[3];
    document.getElementById("triangleshooterside1level").value=x[4];
    document.getElementById("triangledefenderside1level").value=x[5];
    document.getElementById("triangleattackerside1level").value=x[6];
    document.getElementById("triangleexploderside1level").value=x[7];
    document.getElementById("matter1").value=x[8];
    document.getElementById("matter1change").value=x[9];
    document.getElementById("health1").value=x[10];
    matter1=document.getElementById("matter1").value;
    health1=document.getElementById("health1").value;
  }
}

function save2() {
  var x=prompt("Side 2 save:",document.getElementById("triangleshooterside2rarity").value+"|"+document.getElementById("triangledefenderside2rarity").value+"|"+document.getElementById("triangleattackerside2rarity").value+"|"+document.getElementById("triangleexploderside2rarity").value+"|"+document.getElementById("triangleshooterside2level").value+"|"+document.getElementById("triangledefenderside2level").value+"|"+document.getElementById("triangleattackerside2level").value+"|"+document.getElementById("triangleexploderside2level").value+"|"+document.getElementById("matter2").value+"|"+document.getElementById("matter2change").value+"|"+document.getElementById("health2").value)
  if (x!=null){
    x=x.split("|");
    document.getElementById("triangleshooterside2rarity").value=x[0];
    document.getElementById("triangledefenderside2rarity").value=x[1];
    document.getElementById("triangleattackerside2rarity").value=x[2];
    document.getElementById("triangleexploderside2rarity").value=x[3];
    document.getElementById("triangleshooterside2level").value=x[4];
    document.getElementById("triangledefenderside2level").value=x[5];
    document.getElementById("triangleattackerside2level").value=x[6];
    document.getElementById("triangleexploderside2level").value=x[7];
    document.getElementById("matter2").value=x[8];
    document.getElementById("matter2change").value=x[9];
    document.getElementById("health2").value=x[10];
    matter2=document.getElementById("matter2").value;
    health2=document.getElementById("health2").value;
  }
}

var side1=[];
var side2=[];
var side1m=[];
var side2m=[];
var side1p=[];
var side2p=[];
var placed=[[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]];
var menu=3;
var health1=1000;
var health2=1000;
var matter1=10;
var matter2=10;
var use11=1;
var use12=1;
var use13=1;
var use14=1;
var use21=1;
var use22=1;
var use23=1;
var use24=1;
var time11=0;
var time12=0;
var time13=0;
var time14=0;
var time21=0;
var time22=0;
var time23=0;
var time24=0;
var cooldown=false;
var otherplace=true;
var cost=false;
var health=false;
var battlemode=false;
var polygontype=1;
var polygontype1=1;
var polygontype2=1;
var selectedtype=1;
var xpos1=1;
var ypos1=1;
var xpos2=10;
var ypos2=1;
var rainbowcolour=0;
var gg=false;
var add1timeout=setTimeout(add1,document.getElementById("matter1change").value*1000);
var add2timeout=setTimeout(add2,document.getElementById("matter2change").value*1000);
setInterval(update,20);
