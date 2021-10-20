let colisors={
  _col:[vaquinha, arvore, yasuo],
  atualiza:function(){
    for(i=0, tam=this._col.length;i<tam;i++){
      var col=this._col[i];

      if(p1.x+p1.largura>col.x&&p1.x+p1.largura<col.x+15&&p1.y<col.y+col.altura&&p1.y+p1.altura>col.y){
        p1.x=col.x-p1.largura;}

      if(p1.x<col.x+col.largura&&p1.x>col.x+col.largura-15&&p1.y<col.y+col.altura&&p1.y+p1.altura>col.y){
        p1.x=col.x+col.largura;}

      if(p1.x+p1.largura>col.x&&p1.x<col.x+col.largura&&p1.y+p1.altura>col.y&&p1.y+p1.altura<col.y+10){
        p1.y=col.y-p1.altura;}

      if(p1.x+p1.largura>col.x&&p1.x<col.x+col.largura&&p1.y<col.y+col.altura&&p1.y>col.y+col.altura-10){
        p1.y=col.y+col.altura;}

      if(p1.y+p1.altura<col.y){
        col.fundo=true;}

      if(p1.y>col.y+col.altura){
        col.fundo=false;}

}}}
