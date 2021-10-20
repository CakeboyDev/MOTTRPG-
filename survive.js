setInterval(faminto,1000);
function faminto(){
  if(gamestart){
    if(p1.fomi>0)
    p1.fomi=p1.fomi-0.2;
    vaquinha.fomi= vaquinha.fomi-10;
    if(p1.fomi<=0&&p1.vida>=0){
      p1.vida=p1.vida-0.1;}}}
