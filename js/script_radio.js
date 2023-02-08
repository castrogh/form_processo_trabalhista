function habilitacao(){
    if(document.getElementById('input_nacionalidade_sim').checked == true){
      document.getElementById('input_nacionalidade_outra').disabled = true;
    }
    if(document.getElementById('input_nacionalidade_sim').checked == false){
      document.getElementById('input_nacionalidade_outra').disabled = false;
    }
  }

  function habilitacao2(){
    if(document.getElementById('input_nacionalidade_2a_pessoa_fisica_sim').checked == true){
      document.getElementById('input_nacionalidade_2a_pessoa_fisica_outra').disabled = true;
    }
    if(document.getElementById('input_nacionalidade_2a_pessoa_fisica_sim').checked == false){
      document.getElementById('input_nacionalidade_2a_pessoa_fisica_outra').disabled = false;
    }
  }