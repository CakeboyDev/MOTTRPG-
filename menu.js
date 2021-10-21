let hud=document.getElementById('cnvhud');
let hux=hud.getContext('2d');
let equipado=true;
let equipadob=false;
let equipadoc=false;
let normalizado=true;
let encolhido=false;
let aumentado=false;
let maisT=107; menosT=109;


savengo=document.getElementById('a3');
savengo.addEventListener('click', savengoo);

roupas=document.getElementById('ol31');
roupas.addEventListener('click', troca);

function troca(){
  if(equipado==false){
    document.getElementById('hat').style.cssText='top:24vh; left:17vw; min-width:6vw;max-width:6vw;';
    document.getElementById('berma').style.cssText='top:48.5vh; left:15vw;  min-width:12.2vw;max-width:12.2vw; min-height:25vh;max-height:25vh;';
    document.getElementById('shirt').style.cssText='top:31vh; left:12vw; min-width:16vw;max-width:16vw; min-height:30vh;max-height:30vh; transform: rotate(-2deg)';
    equipei();}

  if(equipado){
    document.getElementById('hat').style.cssText='display: none;';
    document.getElementById('berma').style.cssText='display: none;';
    document.getElementById('shirt').style.cssText='display: none;';
    desequipei();}}


function equipei(){
  setTimeout(function(){
    equipado=true;},100)}

function desequipei(){
  setTimeout(function(){
    equipado=false},100)}

function equipeib(){
  setTimeout(function(){
    equipadob=true;},100)}

function desequipeib(){
  setTimeout(function(){
    equipadob=false},100)}

function equipeic(){
  setTimeout(function(){
    equipadoc=true;},100)}

function desequipeic(){
  setTimeout(function(){
    equipadoc=false},100)}

window.addEventListener('keydown',teclin);

function teclin(e){
key = e.keyCode;

if(key==maisT){
quesonos();
}
if(key==menosT){
quesono();
}
}

let zoomout = document.getElementById('a44');
zoomout.addEventListener('click', quesono);
function quesono(){
  if(normalizado){
    encolhido=true;
    normalizado=false;
    cnvass.width=1920;
    cnvass.height=1080;
    cnvasss.largura=1920;
    cnvasss.altura=1080;}
  if(aumentado){
    normalizado=true;
    aumentado=false;
    cnvass.width=1600;
    cnvass.height=950;
    cnvasss.largura=1600;
    cnvasss.altura=950;}}

let zoomin = document.getElementById('a46');
zoomin.addEventListener('click', quesonos);
function quesonos(){
  if(normalizado){
    aumentado=true;
    normalizado=false;
    cnvass.width=1200;
    cnvass.height=720;
    cnvasss.largura=1200;
    cnvasss.altura=720;
    mundo.x=p1.x-400;
    mundo.y=p1.y-500;}
  if(encolhido){
    normalizado=true;
    encolhido=false;
    cnvass.width=1600;
    cnvass.height=950;
    cnvasss.largura=1600;
    cnvasss.altura=950;
    mundo.x=p1.x-400;
    mundo.y=p1.y-500;}}


 // let sombrinha= new Spraite(300,590,150,600,'black');
    // let vidinha= new Spraite(440,602,30,440,'red');
    // let energia= new Spraite(440,678,30,440,'yellow');
    // let fome= new Spraite(440,640,30,440,'orange');
// let carinha= new Spraite(310,600,110,110,'grey');

let hudzinha={
  x:0,
  y:0,
  largura:0,
  altura:0,
  atualiza:function(){
    this.y=cnvasss.altura/1.2;
    this.x=cnvasss.x;
    this.largura=cnvasss.largura/2;
    this.altura=cnvasss.altura/6;
    sombrinha.x=this.x;
    sombrinha.y=this.y;
    sombrinha.largura=this.largura;
    sombrinha.altura=this.altura;
    vidinha.x=this.largura/4.47;
    vidinha.y=this.y*1.025;
    vidinha.largura=(this.largura/1.4)*p1.vidatual;
    vidinha.altura=cnvasss.altura/25;
    energia.x=this.largura/4.47;
    energia.y=this.y*1.14;
    energia.largura=this.largura/1.4;
    energia.altura=cnvasss.altura/25;
    fome.x=this.largura/4.47;
    fome.y=this.y*1.0825;
    fome.largura=(this.largura/1.4)*p1.fometual;
    fome.altura=cnvasss.altura/25;
    carinha.x=this.largura/75;
    carinha.y=this.y*1.025;
    carinha.largura=this.largura/6;
    carinha.altura=cnvasss.altura/7;
}
}
