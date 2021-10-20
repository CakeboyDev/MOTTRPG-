let chapeuteste ={
  x : 10,
  y : 10,
  altura : 40,
  largura : 50,
  atualiza :function(){
    if(equipado&&p1.vida>0){
      this.x=p1.headx+1;
      this.y=p1.head+10;
      ctx.drawImage(xapew,this.x,this.y,this.largura,this.altura)}}};

let bermateste ={
  x : 10,
  y : 10,
  altura : 100,
  largura : 88,
  atualiza :function(){
    if(equipado&&p1.vida>0){
      this.x=p1.waistx-2;
      this.y=p1.waist;
      ctx.drawImage(brema,this.x,this.y,this.largura,this.altura)}}};

let camisateste ={
  x : 10,
  y : 10,
  altura : 110,
  largura : 118,
  atualiza :function(){
    if(equipado&&p1.vida>0){
      this.x=p1.bodyx-20;
      this.y=p1.body+11;
      ctx.drawImage(kmisa,this.x,this.y,this.largura,this.altura)}}};
