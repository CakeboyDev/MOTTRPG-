setInterval(faminto,1000);
function faminto(){
  if(gamestart){
    if(p1.fomi>0){
    p1.fomi=p1.fomi-0.5;}
    if(p1.fomi<=0&&p1.vida>=0){
      p1.vida=p1.vida-0.1;}}
    vaquinha.fomi= vaquinha.fomi-10;
    if(vaquinha.fomi<=0&&vaquinha.vida>=0){
      vaquinha.vida=vaquinha.vida-10;}}
