function atkcd(){
  setTimeout(function(){
    atacarei=false;
    atacar=false;
    combate=true;
    atkcdv();
    atkcdr();
    countcombat+=5;},1)}

function atkcdyi(){
  if(countcombat>0){
  countcombat-=countcombat/200;}
  if(countcombat<1){
    countcombat=0;}
  if(countcombat==0){
    combate=false;}}

function atkcdv(){
  setTimeout(function(){
    atacarei=true;},700)}

function atkcdr(){
  setTimeout(function(){
    atacarius=true;
    atkcdrr();},1)}

function atkcdrr(){
  setTimeout(function(){
    atacarius=false;},500)}


let inimigos={
  _enm:[vaquinha, ],
  atualiza:function(){
    for(i=0, tam=this._enm.length;i<tam;i++){
      var enm=this._enm[i];
      if(enm.vida>0){
        if(atkbasD.x+atkbasD.largura>enm.x&&atkbasD.x<enm.x+enm.largura&&atkbasD.y<enm.y+enm.altura&&atkbasD.y+atkbasD.altura>enm.y){
          enm.vida-=p1.power;
          enm.x+=p1.power;
          console.log('Você causou '+p1.power+' de dano');}
          if(atkbasE.x+atkbasE.largura>enm.x&&atkbasE.x<enm.x+enm.largura&&atkbasE.y<enm.y+enm.altura&&atkbasE.y+atkbasE.altura>enm.y){
            enm.vida-=p1.power;
            enm.x-=p1.power;
            console.log('Você causou '+p1.power+' de dano');}

        if(enm.fomi<50){
          if(p1.x+p1.largura+10<enm.x){
            enm.x-=enm.velocidade;}
          if(p1.x-10>enm.x+enm.largura){
            enm.x+=enm.velocidade;}
          if(p1.y+p1.altura+10<enm.y){
            enm.y-=enm.velocidade;}
          if(p1.y-10>enm.y+enm.altura){
            enm.y+=enm.velocidade;}
}}}}}

/*  desenha:function(){
    if(gamestart){
      this.vidatual=this.vida/this.vidamax;
      vidavak.x=this.x-50;
      vidavak.y=this.y-200;
      if(this.vida>=0){
        vidavak.largura = 440*this.vidatual;
        vidavak.largura = 200*this.vidatual;}
    if(this.vida>0){
      sede2.x=this.x;
      sede2.y=this.y;
      sede2.altura=this.altura;
      sede2.largura=this.largura;
      ctx.drawImage(sombrinham,this.x-70,this.y,350,100);
      ctx.drawImage(vaqa,this.x-90,this.y-265,this.largura1,this.altura1);}
    else{
      ctx.drawImage(vaqqa,this.x-130,this.y-255,520,470);}}}*/
