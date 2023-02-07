function habilitacao(){
    if(document.getElementById('input_nacionalidade_sim').checked == true){
      document.getElementById('input_nacionalidade_outra').disabled = true;
    }
    if(document.getElementById('input_nacionalidade_sim').checked == false){
      document.getElementById('input_nacionalidade_outra').disabled = false;
    }
  }