let data={
  dia:1,
  hora:12,
  minuto:0,
  segundo:0,
  atualiza:function(){
    if(this.segundo>60){
      this.segundo = 0;
      this.minuto+=1;
      if(this.hora>=18&&this.hora<24&&noite<0.035){
        noite+=0.0003}}

    if(this.minuto>=20){
      this.minuto = 0;
      this.hora+=1;
}
    if(this.hora>23){
      this.hora = 00;
      this.dia+=1;}}}

let horario={
  valord:'Estágio ',
  valor:0,
  atualiza:function(){
    ctx.fillStyle='white';
    ctx.font='50px arial';
    ctx.fillText(this.valord+data.dia,120,60)
    ctx.fillText(data.hora+'h', 50,130)
    ctx.fillText(data.minuto+'s', 130,130)}}

setInterval(function(){
if(p1.vida>0){
data.segundo+=10;}
},1.6);
