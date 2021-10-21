let noite = 0;

let modo={
  valor: 0,
  valory: 0,
  mudar:function(){
    if(encolhido){
      this.valor=130;
      this.valory=130;}
    if(normalizado){
      this.valor=-40;
      this.valory=60;}
    if(aumentado){
      this.valor=-240;
      this.valory=-20;}}}

let luzeira={
  x:0,
  y:0,
  seila:function(){
  cttx.save();
    cttx.fillStyle="rgba(0,0,14,"+noite+")";
    cttx.fillRect(p1.x-4000,p1.y-4000,8000 ,8000);
  cttx.restore();}}


let luzeiras={
  x:230,
  y:450,
  seila:function(){
  this.x=p1.x;
  this.y=p1.y;
  cttx.save();
    cttx.globalAlpha=0.02;
    let grd=cttx.createRadialGradient(p1.x-modo.valor,p1.y-modo.valory,100,p1.x-modo.valor,p1.y-modo.valory,600);
    grd.addColorStop(0.0, "rgba(0,0,55,1)");
    grd.addColorStop(0.2, "rgba(0,0,55,0.8)");
    grd.addColorStop(0.4, "rgba(0,0,55,0.7)");
    grd.addColorStop(0.8, "rgba(0,0,55,0.2");
    grd.addColorStop(0.9,"rgba(0,0,55,0.2)");
    grd.addColorStop(1.0,"rgba(0,0,55,0.1)");
    cttx.globalCompositeOperation = 'destination-out';
    cttx.fillStyle=grd;
    cttx.fillRect(p1.x-2000,p1.y-2000,4000,4000);
  cttx.restore();}}

let luzeirass={
  x:230,
  y:450,
  seila:function(){
    cttx.save();
      cttx.globalAlpha=0.01;
      let grd=cttx.createRadialGradient(200,300,110,300,100,500);
      grd.addColorStop(0.0, "rgba(0,0,55,1)");
      grd.addColorStop(0.4, "rgba(0,0,55,0.6)");
      grd.addColorStop(0.8, "rgba(0,0,55,0.2)");
      grd.addColorStop(1.0,"rgba(0,0,55,0)");
      cttx.globalCompositeOperation = 'destination-out';
      cttx.fillStyle=grd;
      cttx.fillRect(0-400,0-400,2000,2000);
    cttx.restore();}}

  let luzlight={
    x:510,
    y:610,
    ligthenGradient:function() {
      cttx.save();
      cttx.globalCompositeOperation = 'lighter';
      var rnd = 0.05 * Math.sin(1.1 * Date.now() / 1000);
      radius = 100 * (1 + rnd);
      var radialGradient = cttx.createRadialGradient(p1.x, p1.y, 30, p1.x, p1.y, 100);
      radialGradient.addColorStop(0.0, '#BB9');
      radialGradient.addColorStop(0.2 + rnd, '#AA8');
       radialGradient.addColorStop(0.7 + rnd, '#330');
      radialGradient.addColorStop(0.90, '#110');
      radialGradient.addColorStop(1, '#000');
      cttx.fillStyle = radialGradient;
      cttx.beginPath();
      cttx.arc(0, 0, 1, 0, 2 * 3.14);
      cttx.fillRect(p1.x,p1.y,1000,1000);
      cttx.restore();}}
