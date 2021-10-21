//VARIÁVEIS CHAVE//
let cnvass = document.getElementById('ccanva');
let ctx = cnvass.getContext('2d');
cnvv=document.getElementById('canvasco');
cttx=cnvv.getContext('2d');
document.body.appendChild(cnvv);
let tDireita=39;tEsquerda=37;tCima=38;tBaixo=40;tZ=90;tShif=16;toxaxa=192;
let mDireita=false;mEsquerda=false;mCima=false;mBaixo=false; fundo=false; correr=false;atacar=false;atacarei=true;atacarius=false;praEsquerda=false;
let praDireita=true; gamestart=false;combate=false;countcombat=0;
document.getElementById('rardcor').value='';
////////////////////////////////////////////////////////////////////////////////
//IMAGENS
let grass = document.getElementById('gram');
let p1teste1 = document.getElementById('p1test1');
let p1teste2 = document.getElementById('aaa');
let tree = document.getElementById('vore');
let npc1 = document.getElementById('ousay');
let sombrinham = document.getElementById('sheid');
let rio = document.getElementById('riu');
let vaqa = document.getElementById('vaca');
let vaqqa = document.getElementById('vacca');
let xapew = document.getElementById('hat');
let kmisa = document.getElementById('shirt');
let brema = document.getElementById('berma');
let soco = document.getElementById('soko');
let soco1 = document.getElementById('soko1');
let soco2 = document.getElementById('soko2');
let soco3 = document.getElementById('soko3');
let toxanamao = false;
////////////////////////////////////////////////////////////////////////////////
function savengoo(){
let inpute=document.getElementById('rardcor').value;
ctx.textAlign = 'center';
ctx.fillStyle='black';
ctx.font='3vw serif';
ctx.fillText(inpute,p1.x+40,p1.head-28, 180,250);
gamestart=true;
document.getElementById('menuzera').style.cssText='display:none';}

ctx.font='10vh arial';


var cnvasss = {
x:0,
y:0,
altura:950,
largura:1600
}

//CÂMERA
let mundo ={
  x:0,
  y:0,
  largura:0,
  altura: 0,
  atualiza:function(){
    this.largura=cnvass.largura;
    this.altura=cnvass.altura;
    if(p1.x+p1.largura+500>this.x+cnvasss.largura){
      this.x+=p1.velocidade;}
    if(p1.x<this.x+600){
      this.x-=p1.velocidade;}
    if(p1.y-600<this.y){
      this.y-=p1.velocidade;}
    if(p1.y+p1.altura+400>this.y+cnvasss.altura){
      this.y+=p1.velocidade;}}}

let cam ={
  x: 0,
  y: 0,
largura:1600,
altura:950,
  atualiza:function(){
    this.x=p1.x-cnvasss.largura/2;
    this.y=p1.y-cnvasss.altura/2;
  if(this.x>3500){
    this.x=3500;}
  if(this.x<-4000){
    this.x=-4000;}
  if(this.y>3500){
    this.y=3500;}
  if(this.y<-4600){
    this.y=-4600;}}}
////////////////////////////////////////////////////////////////////////////////
//OBJETOS

let bg ={
  desenha:function(){
    ctx.drawImage(grass,-4000,-4000,500,500);
    ctx.drawImage(grass,-3500,-4000,500,500);
    ctx.drawImage(grass,-3000,-4000,500,500);
    ctx.drawImage(grass,-2500,-4000,500,500);
    ctx.drawImage(grass,-2000,-4000,500,500);
    ctx.drawImage(grass,-1500,-4000,500,500);
    ctx.drawImage(grass,-1000,-4000,500,500);
    ctx.drawImage(grass,-500,-4000,500,500);
    ctx.drawImage(grass,0,-4000,500,500);
    ctx.drawImage(grass,500,-4000,500,500);
    ctx.drawImage(grass,1000,-4000,500,500);
    ctx.drawImage(grass,1500,-4000,500,500);
    ctx.drawImage(grass,2000,-4000,500,500);
    ctx.drawImage(grass,2500,-4000,500,500);
    ctx.drawImage(grass,3000,-4000,500,500);
    ctx.drawImage(grass,3500,-4000,500,500);
    ctx.drawImage(grass,4000,-4000,500,500);

    ctx.drawImage(grass,-4000,-3500,500,500);
    ctx.drawImage(grass,-3500,-3500,500,500);
    ctx.drawImage(grass,-3000,-3500,500,500);
    ctx.drawImage(grass,-2500,-3500,500,500);
    ctx.drawImage(grass,-2000,-3500,500,500);
    ctx.drawImage(grass,-1500,-3500,500,500);
    ctx.drawImage(grass,-1000,-3500,500,500);
    ctx.drawImage(grass,-500,-3500,500,500);
    ctx.drawImage(grass,0,-3500,500,500);
    ctx.drawImage(grass,500,-3500,500,500);
    ctx.drawImage(grass,1000,-3500,500,500);
    ctx.drawImage(grass,1500,-3500,500,500);
    ctx.drawImage(grass,2000,-3500,500,500);
    ctx.drawImage(grass,2500,-3500,500,500);
    ctx.drawImage(grass,3000,-3500,500,500);
    ctx.drawImage(grass,3500,-3500,500,500);
    ctx.drawImage(grass,4000,-3500,500,500);

    ctx.drawImage(grass,-4000,-3000,500,500);
    ctx.drawImage(grass,-3500,-3000,500,500);
    ctx.drawImage(grass,-3000,-3000,500,500);
    ctx.drawImage(grass,-2500,-3000,500,500);
    ctx.drawImage(grass,-2000,-3000,500,500);
    ctx.drawImage(grass,-1500,-3000,500,500);
    ctx.drawImage(grass,-1000,-3000,500,500);
    ctx.drawImage(grass,-500,-3000,500,500);
    ctx.drawImage(grass,0,-3000,500,500);
    ctx.drawImage(grass,500,-3000,500,500);
    ctx.drawImage(grass,1000,-3000,500,500);
    ctx.drawImage(grass,1500,-3000,500,500);
    ctx.drawImage(grass,2000,-3000,500,500);
    ctx.drawImage(grass,2500,-3000,500,500);
    ctx.drawImage(grass,3000,-3000,500,500);
    ctx.drawImage(grass,3500,-3000,500,500);
    ctx.drawImage(grass,4000,-3000,500,500);

    ctx.drawImage(grass,-4000,-2500,500,500);
    ctx.drawImage(grass,-3500,-2500,500,500);
    ctx.drawImage(grass,-3000,-2500,500,500);
    ctx.drawImage(grass,-2500,-2500,500,500);
    ctx.drawImage(grass,-2000,-2500,500,500);
    ctx.drawImage(grass,-1500,-2500,500,500);
    ctx.drawImage(grass,-1000,-2500,500,500);
    ctx.drawImage(grass,-500,-2500,500,500);
    ctx.drawImage(grass,0,-2500,500,500);
    ctx.drawImage(grass,500,-2500,500,500);
    ctx.drawImage(grass,1000,-2500,500,500);
    ctx.drawImage(grass,1500,-2500,500,500);
    ctx.drawImage(grass,2000,-2500,500,500);
    ctx.drawImage(grass,2500,-2500,500,500);
    ctx.drawImage(grass,3000,-2500,500,500);
    ctx.drawImage(grass,3500,-2500,500,500);
    ctx.drawImage(grass,4000,-2500,500,500);

    ctx.drawImage(grass,-4000,-2000,500,500);
    ctx.drawImage(grass,-3500,-2000,500,500);
    ctx.drawImage(grass,-3000,-2000,500,500);
    ctx.drawImage(grass,-2500,-2000,500,500);
    ctx.drawImage(grass,-2000,-2000,500,500);
    ctx.drawImage(grass,-1500,-2000,500,500);
    ctx.drawImage(grass,-1000,-2000,500,500);
    ctx.drawImage(grass,-500,-2000,500,500);
    ctx.drawImage(grass,0,-2000,500,500);
    ctx.drawImage(grass,500,-2000,500,500);
    ctx.drawImage(grass,1000,-2000,500,500);
    ctx.drawImage(grass,1500,-2000,500,500);
    ctx.drawImage(grass,2000,-2000,500,500);
    ctx.drawImage(grass,2500,-2000,500,500);
    ctx.drawImage(grass,3000,-2000,500,500);
    ctx.drawImage(grass,3500,-2000,500,500);
    ctx.drawImage(grass,4000,-2000,500,500);

    ctx.drawImage(grass,-4000,-1500,500,500);
    ctx.drawImage(grass,-3500,-1500,500,500);
    ctx.drawImage(grass,-3000,-1500,500,500);
    ctx.drawImage(grass,-2500,-1500,500,500);
    ctx.drawImage(grass,-2000,-1500,500,500);
    ctx.drawImage(grass,-1500,-1500,500,500);
    ctx.drawImage(grass,-1000,-1500,500,500);
    ctx.drawImage(grass,-500,-1500,500,500);
    ctx.drawImage(grass,0,-1500,500,500);
    ctx.drawImage(grass,500,-1500,500,500);
    ctx.drawImage(grass,1000,-1500,500,500);
    ctx.drawImage(grass,1500,-1500,500,500);
    ctx.drawImage(grass,2000,-1500,500,500);
    ctx.drawImage(grass,2500,-1500,500,500);
    ctx.drawImage(grass,3000,-1500,500,500);
    ctx.drawImage(grass,3500,-1500,500,500);
    ctx.drawImage(grass,4000,-1500,500,500);

    ctx.drawImage(grass,-4000,-1000,500,500);
    ctx.drawImage(grass,-3500,-1000,500,500);
    ctx.drawImage(grass,-3000,-1000,500,500);
    ctx.drawImage(grass,-2500,-1000,500,500);
    ctx.drawImage(grass,-2000,-1000,500,500);
    ctx.drawImage(grass,-1500,-1000,500,500);
    ctx.drawImage(grass,-1000,-1000,500,500);
    ctx.drawImage(grass,-500,-1000,500,500);
    ctx.drawImage(grass,0,-1000,500,500);
    ctx.drawImage(grass,500,-1000,500,500);
    ctx.drawImage(grass,1000,-1000,500,500);
    ctx.drawImage(grass,1500,-1000,500,500);
    ctx.drawImage(grass,2000,-1000,500,500);
    ctx.drawImage(grass,2500,-1000,500,500);
    ctx.drawImage(grass,3000,-1000,500,500);
    ctx.drawImage(grass,3500,-1000,500,500);
    ctx.drawImage(grass,4000,-1000,500,500);

    ctx.drawImage(grass,-4000,-500,500,500);
    ctx.drawImage(grass,-3500,-500,500,500);
    ctx.drawImage(grass,-3000,-500,500,500);
    ctx.drawImage(grass,-2500,-500,500,500);
    ctx.drawImage(grass,-2000,-500,500,500);
    ctx.drawImage(grass,-1500,-500,500,500);
    ctx.drawImage(grass,-1000,-500,500,500);
    ctx.drawImage(grass,-500,-500,500,500);
    ctx.drawImage(grass,0,-500,500,500);
    ctx.drawImage(grass,500,-500,500,500);
    ctx.drawImage(grass,1000,-500,500,500);
    ctx.drawImage(grass,1500,-500,500,500);
    ctx.drawImage(grass,2000,-500,500,500);
    ctx.drawImage(grass,2500,-500,500,500);
    ctx.drawImage(grass,3000,-500,500,500);
    ctx.drawImage(grass,3500,-500,500,500);
    ctx.drawImage(grass,4000,-500,500,500);

    ctx.drawImage(grass,-4000,0,500,500);
    ctx.drawImage(grass,-3500,0,500,500);
    ctx.drawImage(grass,-3000,0,500,500);
    ctx.drawImage(grass,-2500,0,500,500);
    ctx.drawImage(grass,-2000,0,500,500);
    ctx.drawImage(grass,-1500,0,500,500);
    ctx.drawImage(grass,-1000,0,500,500);
    ctx.drawImage(grass,-500,0,500,500);
    ctx.drawImage(grass,0,0,500,500);
    ctx.drawImage(grass,500,0,500,500);
    ctx.drawImage(grass,1000,0,500,500);
    ctx.drawImage(grass,1500,0,500,500);
    ctx.drawImage(grass,2000,0,500,500);
    ctx.drawImage(grass,2500,0,500,500);
    ctx.drawImage(grass,3000,0,500,500);
    ctx.drawImage(grass,3500,0,500,500);
    ctx.drawImage(grass,4000,0,500,500);

    ctx.drawImage(grass,-4000,4000,500,500);
    ctx.drawImage(grass,-3500,4000,500,500);
    ctx.drawImage(grass,-3000,4000,500,500);
    ctx.drawImage(grass,-2500,4000,500,500);
    ctx.drawImage(grass,-2000,4000,500,500);
    ctx.drawImage(grass,-1500,4000,500,500);
    ctx.drawImage(grass,-1000,4000,500,500);
    ctx.drawImage(grass,-500,4000,500,500);
    ctx.drawImage(grass,0,4000,500,500);
    ctx.drawImage(grass,500,4000,500,500);
    ctx.drawImage(grass,1000,4000,500,500);
    ctx.drawImage(grass,1500,4000,500,500);
    ctx.drawImage(grass,2000,4000,500,500);
    ctx.drawImage(grass,2500,4000,500,500);
    ctx.drawImage(grass,3000,4000,500,500);
    ctx.drawImage(grass,3500,4000,500,500);
    ctx.drawImage(grass,4000,4000,500,500);

    ctx.drawImage(grass,-4000,3500,500,500);
    ctx.drawImage(grass,-3500,3500,500,500);
    ctx.drawImage(grass,-3000,3500,500,500);
    ctx.drawImage(grass,-2500,3500,500,500);
    ctx.drawImage(grass,-2000,3500,500,500);
    ctx.drawImage(grass,-1500,3500,500,500);
    ctx.drawImage(grass,-1000,3500,500,500);
    ctx.drawImage(grass,-500,3500,500,500);
    ctx.drawImage(grass,0,3500,500,500);
    ctx.drawImage(grass,500,3500,500,500);
    ctx.drawImage(grass,1000,3500,500,500);
    ctx.drawImage(grass,1500,3500,500,500);
    ctx.drawImage(grass,2000,3500,500,500);
    ctx.drawImage(grass,2500,3500,500,500);
    ctx.drawImage(grass,3000,3500,500,500);
    ctx.drawImage(grass,3500,3500,500,500);
    ctx.drawImage(grass,4000,3500,500,500);

    ctx.drawImage(grass,-4000,3000,500,500);
    ctx.drawImage(grass,-3500,3000,500,500);
    ctx.drawImage(grass,-3000,3000,500,500);
    ctx.drawImage(grass,-2500,3000,500,500);
    ctx.drawImage(grass,-2000,3000,500,500);
    ctx.drawImage(grass,-1500,3000,500,500);
    ctx.drawImage(grass,-1000,3000,500,500);
    ctx.drawImage(grass,-500,3000,500,500);
    ctx.drawImage(grass,0,3000,500,500);
    ctx.drawImage(grass,500,3000,500,500);
    ctx.drawImage(grass,1000,3000,500,500);
    ctx.drawImage(grass,1500,3000,500,500);
    ctx.drawImage(grass,2000,3000,500,500);
    ctx.drawImage(grass,2500,3000,500,500);
    ctx.drawImage(grass,3000,3000,500,500);
    ctx.drawImage(grass,3500,3000,500,500);
    ctx.drawImage(grass,4000,3000,500,500);

    ctx.drawImage(grass,-4000,2500,500,500);
    ctx.drawImage(grass,-3500,2500,500,500);
    ctx.drawImage(grass,-3000,2500,500,500);
    ctx.drawImage(grass,-2500,2500,500,500);
    ctx.drawImage(grass,-2000,2500,500,500);
    ctx.drawImage(grass,-1500,2500,500,500);
    ctx.drawImage(grass,-1000,2500,500,500);
    ctx.drawImage(grass,-500,2500,500,500);
    ctx.drawImage(grass,0,2500,500,500);
    ctx.drawImage(grass,500,2500,500,500);
    ctx.drawImage(grass,1000,2500,500,500);
    ctx.drawImage(grass,1500,2500,500,500);
    ctx.drawImage(grass,2000,2500,500,500);
    ctx.drawImage(grass,2500,2500,500,500);
    ctx.drawImage(grass,3000,2500,500,500);
    ctx.drawImage(grass,3500,2500,500,500);
    ctx.drawImage(grass,4000,2500,500,500);

    ctx.drawImage(grass,-4000,2000,500,500);
    ctx.drawImage(grass,-3500,2000,500,500);
    ctx.drawImage(grass,-3000,2000,500,500);
    ctx.drawImage(grass,-2500,2000,500,500);
    ctx.drawImage(grass,-2000,2000,500,500);
    ctx.drawImage(grass,-1500,2000,500,500);
    ctx.drawImage(grass,-1000,2000,500,500);
    ctx.drawImage(grass,-500,2000,500,500);
    ctx.drawImage(grass,0,2000,500,500);
    ctx.drawImage(grass,500,2000,500,500);
    ctx.drawImage(grass,1000,2000,500,500);
    ctx.drawImage(grass,1500,2000,500,500);
    ctx.drawImage(grass,2000,2000,500,500);
    ctx.drawImage(grass,2500,2000,500,500);
    ctx.drawImage(grass,3000,2000,500,500);
    ctx.drawImage(grass,3500,2000,500,500);
    ctx.drawImage(grass,4000,2000,500,500);

    ctx.drawImage(grass,-4000,1500,500,500);
    ctx.drawImage(grass,-3500,1500,500,500);
    ctx.drawImage(grass,-3000,1500,500,500);
    ctx.drawImage(grass,-2500,1500,500,500);
    ctx.drawImage(grass,-2000,1500,500,500);
    ctx.drawImage(grass,-1500,1500,500,500);
    ctx.drawImage(grass,-1000,1500,500,500);
    ctx.drawImage(grass,-500,1500,500,500);
    ctx.drawImage(grass,0,1500,500,500);
    ctx.drawImage(grass,500,1500,500,500);
    ctx.drawImage(grass,1000,1500,500,500);
    ctx.drawImage(grass,1500,1500,500,500);
    ctx.drawImage(grass,2000,1500,500,500);
    ctx.drawImage(grass,2500,1500,500,500);
    ctx.drawImage(grass,3000,1500,500,500);
    ctx.drawImage(grass,3500,1500,500,500);
    ctx.drawImage(grass,4000,1500,500,500);

    ctx.drawImage(grass,-4000,1000,500,500);
    ctx.drawImage(grass,-3500,1000,500,500);
    ctx.drawImage(grass,-3000,1000,500,500);
    ctx.drawImage(grass,-2500,1000,500,500);
    ctx.drawImage(grass,-2000,1000,500,500);
    ctx.drawImage(grass,-1500,1000,500,500);
    ctx.drawImage(grass,-1000,1000,500,500);
    ctx.drawImage(grass,-500,1000,500,500);
    ctx.drawImage(grass,0,1000,500,500);
    ctx.drawImage(grass,500,1000,500,500);
    ctx.drawImage(grass,1000,1000,500,500);
    ctx.drawImage(grass,1500,1000,500,500);
    ctx.drawImage(grass,2000,1000,500,500);
    ctx.drawImage(grass,2500,1000,500,500);
    ctx.drawImage(grass,3000,1000,500,500);
    ctx.drawImage(grass,3500,1000,500,500);
    ctx.drawImage(grass,4000,1000,500,500);

    ctx.drawImage(grass,-4000,500,500,500);
    ctx.drawImage(grass,-3500,500,500,500);
    ctx.drawImage(grass,-3000,500,500,500);
    ctx.drawImage(grass,-2500,500,500,500);
    ctx.drawImage(grass,-2000,500,500,500);
    ctx.drawImage(grass,-1500,500,500,500);
    ctx.drawImage(grass,-1000,500,500,500);
    ctx.drawImage(grass,-500,500,500,500);
    ctx.drawImage(grass,0,500,500,500);
    ctx.drawImage(grass,500,500,500,500);
    ctx.drawImage(grass,1000,500,500,500);
    ctx.drawImage(grass,1500,500,500,500);
    ctx.drawImage(grass,2000,500,500,500);
    ctx.drawImage(grass,2500,500,500,500);
    ctx.drawImage(grass,3000,500,500,500);
    ctx.drawImage(grass,3500,500,500,500);
    ctx.drawImage(grass,4000,500,500,500);}}

function Arvorea(x, y, altura1, largura1){
  this.x=x,
  this.y=y,
  this.altura=50,
  this.largura=50,
  this.altura1=altura1,
  this.largura1=largura1,
  this.fundo=false,
  this.desenha=function(){
    ctx.drawImage(tree,this.x,this.y,this.largura1,this.altura1);
    sede3.x=this.x;
    sede3.y=this.y;
    sede3.altura=this.altura;
    sede3.largura=this.largura;}}

let arvore=new Arvorea(900, -200, 800, 700);
////////////////////////////////////////////////////////////////////////////////
//JOGADORES
let p1={
  x:0,
  y:500,
  head:0,
  headx:0,
  body:0,
  bodyx:0,
  waist:0,
  waistx:0,
  altura:50,
  largura:100,
////////////////////////////////////////////////////////////////////////////////
//STATUS
  vida:100,
  vidamax:100,
  vidatual:1,
  fomi:100,
  fomemax:100,
  fometual:1,
  energia:100,
  energiamax:100,
  energiatual:1,
  power:10,
  velocidade:4,
////////////////////////////////////////////////////////////////////////////////
//SPRITES DO PERSONAGEM
  desenha:function(){
    if(gamestart){

      if(p1.vida<=0){
      alert('Você sobreviveu a '+data.dia+' estágio e '+data.minuto+' segundos.')};


      if(this.vida>0){
        vidinha1.x = this.x-60;
        vidinha1.y = this.y-240;
        sede4.x=this.x;
        sede4.y=this.y;
        sede4.altura=this.altura;
        sede4.largura=this.largura;
        ctx.drawImage(sombrinham,this.x-10,this.y+15+this.altura-70,120,50);
      if(praDireita){
          if(atacarius==false&&combate){
            ctx.drawImage(soco,this.x-53,this.y-216,180,250);}
          if(atacarius){
            ctx.drawImage(soco1,this.x-35,this.y-217,175,251)};
          if(atacarius==false&&combate==false){
            ctx.drawImage(p1teste1,this.x-85,this.y-216,290,250);}}

            if(praEsquerda){
                if(atacarius==false&&combate){
                  ctx.drawImage(soco2,this.x-55,this.y-216,180,250);}
                if(atacarius){
                  ctx.drawImage(soco3,this.x-68,this.y-217,175,251)};
                if(atacarius==false&&combate==false){
                    ctx.drawImage(p1teste2,this.x-135,this.y-216,290,250);}

}}}},
////////////////////////////////////////////////////////////////////////////////
//ATUALIZAÇÕES DO PERSONAGEM
  atualiza:function(){
    if(gamestart&&this.vida>0){
      this.head=p1.y-222;
      this.headx=p1.x+10;
      this.body=p1.y-192;
      this.bodyx=p1.x;
      this.waist=p1.y-115;
      this.waistx=p1.x+3;

      if(this.x<-3000){
        this.x=this.x+this.velocidade;}

      if(this.x+this.largura>4400){
        this.x=this.x-this.velocidade;}

      if(this.y+this.altura>4000){
        this.y=this.y-this.velocidade;}

      if(this.y<-4000){
        this.y=this.y+p1.velocidade;}

        this.vidatual = this.vida/this.vidamax;
        this.fometual = this.fomi/this.fomemax;

      if(this.vida>=0){
        vidinha.largura = 440*this.vidatual;
        vidinha1.largura = 200*this.vidatual;}

      if(this.fomi>=0){
        fome.largura = fome.largura*this.fometual;}}},
//ATAQUES E HABILIDADES
  ataca:function(){
    if(atacar&&atacarei&&praDireita){
      atkbasD.x=this.x+80;
      atkbasD.y=this.waist+30;
      atkbasD.altura=100;
      atkbasD.largura=100;
      atkcd();}
    else{
      atkbasD.x=-9999;
      atkbasD.y=-9999;
      atkbasD.altura=0;
      atkbasD.largura=0;}},

  atacae:function(){
    if(atacar&&atacarei&&praEsquerda){
      atkbasE.x=this.x-100;
      atkbasE.y=this.waist+30;
      atkbasE.altura=100;
      atkbasE.largura=100;
      atkcd();}
    else{
      atkbasE.x=-9999;
      atkbasE.y=-9999;
      atkbasE.altura=0;
      atkbasE.largura=0;}
}
////////////////////////////////////////////////////////////////////////////////
}
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////


//NPCS
let yasuo={
  x:990,
  y:490,
  altura:62,
  largura:130,
  fundo:false,
//SPRITES DO PERSONAGEM
  desenha:function(){
    sede.x=this.x;
    sede.y=this.y;
    sede.altura=this.altura;
    sede.largura=this.largura;
    ctx.drawImage(npc1,950,370,180,180);}
//ATUALIZAÇÕES DO PERSONAGEM
}

var vacalist = {};

Vaqua = function(id,x,y,altura,largura){
  var vakratos={
    x:x,
    y:y,
    altura:altura,
    largura:largura,
    id:id,
    vida:100,
    name:'aa',
    color:'black',
    vidamax:100,
    vidatual:1,
    velocidade:4,
    fomi:100,};

    vacalist[id] = vakratos;
}

draww= function(algo){
  ctx.save();
  ctx.fillStyle=algo.color;
  for(var key in vacalist){
    if(vacalist[key].vida>0){
	   ctx.drawImage(vaqa,algo.x,algo.y,algo.altura,algo.largura);}
    if(vacalist[key].vida<=0){
      ctx.drawImage(vaqqa,algo.x-130,algo.y-255, algo.altura,algo.largura);}}
  ctx.restore();}

  function vakakaka(){
      if(gamestart){
        let id= parseInt(Math.random()*100);
        let x= Math.random()*1300;
        let y= Math.random()*500;
        let altura= Math.random()*1000;
        let largura= Math.random()*1000;
        Vaqua(id,x,y,altura,largura)}
  }

setTimeout(vakakaka,1000);

let vaquinha ={
  x:710,
  y:400,
  altura:100,
  largura:210,
  fundo: false,
  vida:100,
  vidamax:100,
  vidatual:1,
  velocidade:5,
  fomi:100,
  desenha:function(){
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
      ctx.drawImage(vaqa,this.x-90,this.y-265,350,350);}
    else{
      ctx.drawImage(vaqqa,this.x-130,this.y-255,520,470);
}}}}
////////////////////////////////////////////////////////////////////////////////
//FUNÇÕES
window.addEventListener('keydown',tecla);
window.addEventListener('keyup',teclanot);
//MOVIMENTAÇÃO E COMANDOS
function tecla(e){
  key = e.keyCode;
  if(key === toxaxa){
    toxanamao=true;}

  if(key === tDireita){
    mDireita=true;
    praDireita=true;
    praEsquerda=false;}
  if(key === tEsquerda){
    mEsquerda=true;
    praEsquerda=true;
    praDireita=false;}
  if(key === tCima){
    mCima=true;}
  if(key === tBaixo){
    mBaixo=true;}
    if(key === tShif){
      correr=true;}
      if(key === tZ){
        atacar=true;}}

function teclanot(e){
  key = e.keyCode;

  if(key === tDireita){
    mDireita=false;}
  if(key === tEsquerda){
    mEsquerda=false;}
  if(key === tBaixo){
    mBaixo=false;}
  if(key === tCima){
    mCima=false;}
  if(key === tShif){
    correr=false;}
  if(key === tZ){
    atacar=false;}}

function move(){
  if(p1.vida>0){
  if(atacar){
    p1.ataca();
    p1.atacae();}
  if(mDireita==true&&p1.vida>=0){
    p1.x+=p1.velocidade;

    if(p1.fomi>=0){
    p1.fomi-=0.002}}
  if(mEsquerda==true&&p1.vida>0){
    p1.x-=p1.velocidade;

    if(p1.fomi>=0){
    p1.fomi-=0.002}}
  if(mBaixo==true&&p1.vida>0){
    p1.y+=p1.velocidade;

    if(p1.fomi>=0){
    p1.fomi-=0.002}}
  if(mCima==true&&p1.vida>0){
    p1.y-=p1.velocidade;

    if(p1.fomi>=0){
    p1.fomi-=0.002}}
  if(correr==true){
    p1.velocidade=8;
    if(p1.fomi>=0){
    p1.fomi-=0.002}
    if(p1.fomi<=0&&p1.vida>=0){
      p1.vida-=0.05;}
}
  if(correr==false){
    p1.velocidade=4;}}}
////////////////////////////////////////////////////////////////////////////////
//NOVOS SPRITES

function Spraite(x,y,altura,largura, cor){
  this.x = x;
  this.y = y;
  this.altura = altura;
  this.largura = largura;
  this.cor=cor;
  this.atualiza =function(){
    ctx.fillStyle=this.cor;
    ctx.fillRect(this.x,this.y,this.largura,this.altura)}}

  let sombrinha= new Spraite(300,590,150,600,"rgba(0, 0, 0, 0.8)");
  let vidinha= new Spraite(440,602,30,440,"rgba(255, 0, 0, 0.5)");
  let energia= new Spraite(440,678,30,440,"rgba(255, 255, 0, 0.5)");
  let fome= new Spraite(440,640,30,440,"rgba(255, 180, 0, 0.5)");
  let sede= new Spraite(450,610,30,440,'transparent');
  let sede2= new Spraite(450,610,30,440,'transparent');
  let sede3= new Spraite(450,610,30,440,'transparent');
  let sede4= new Spraite(450,610,30,440,'transparent');
  let sede5= new Spraite(450,610,30,440,'purple');
  let atkbasD= new Spraite(0,0,0,0,'transparent');
  let atkbasE= new Spraite(0,0,0,0,'transparent');
  let carinha= new Spraite(310,600,110,110,"rgba(200, 200, 200, 0.4)");
  let vidinha1= new Spraite(0,0,10,200,'red');
  let vidavak= new Spraite(0,0,10,200,'red');
////////////////////////////////////////////////////////////////////////////////
//RENDERIZAÇÃO

function render(){

    window.requestAnimationFrame(render);

  if(gamestart){
    cttx.clearRect(cnvv.x,cnvv.y,cnvv.height,cnvv.width);
    ctx.clearRect(cnvass.x,cnvass.y,cnvass.height,cnvass.width);

    cttx.save();
    ctx.save();

    ctx.translate(-cam.x,-cam.y);
    cttx.translate(-cam.x,-cam.y);

      atkcdyi();
      mundo.atualiza();
      cam.atualiza();
      bg.desenha();
      colisors.atualiza();
      inimigos.atualiza();
      modo.mudar();
      sede.atualiza();
      sede2.atualiza();
      sede3.atualiza();
      sede4.atualiza();
      for(var key in vacalist){
        if(vacalist[key].vida>0){
        draww(vacalist[key])}};

      if(vaquinha.fundo==false){
          vaquinha.desenha();
          vidavak.atualiza();}
      if(arvore.fundo==false){
          arvore.desenha();}
      if(yasuo.fundo==false){
          yasuo.desenha();}

      p1.desenha();
      p1.atualiza()
      p1.ataca();
      p1.atacae();
      savengoo();
      chapeuteste.atualiza();
      bermateste.atualiza();
      camisateste.atualiza();
      atkbasD.atualiza();
      atkbasE.atualiza();
      if(p1.vida>0){
      vidinha1.atualiza();}
      luzeira.seila();
      if(toxanamao){
        luzeiras.seila();}

      if(vaquinha.fundo){
          vaquinha.desenha();
          vidavak.atualiza();}
      if(arvore.fundo){
          arvore.desenha();}
      if(yasuo.fundo){
          yasuo.desenha();}
    move();
    cttx.restore()
    ctx.restore();
data.atualiza();
      horario.atualiza();
      hudzinha.atualiza();
      sombrinha.atualiza();
      carinha.atualiza();
      vidinha.atualiza();
      fome.atualiza();
      energia.atualiza();
}}







Vaqua('a1',100,400,100,100);
Vaqua('a2',500,400,200,100);
Vaqua('a3',300,400,100,100);

render();
////////////////////////////////////////////////////////////////////////////////
