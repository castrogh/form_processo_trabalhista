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

  function habilitacao3(){
    if(document.getElementById('input_cumpriu_aviso_parcialmente_radio').checked == false){
      document.getElementById('input_cumpriu_aviso_parcialmente').disabled = true;
    }
    if(document.getElementById('input_cumpriu_aviso_parcialmente_radio').checked == true){
      document.getElementById('input_cumpriu_aviso_parcialmente').disabled = false;
    }
  }

  function habilitacao4(){
    if(document.getElementById('input_ctps_assinada_sim').checked == true){
      document.getElementById('input_data_registro').disabled = false;
    }
    if(document.getElementById('input_ctps_assinada_sim').checked == false){
      document.getElementById('input_data_registro').disabled = true;
    }
    if(document.getElementById('input_ctps_assinada_nao').checked == true){
      document.getElementById('input_data_registro').disabled = true;
    }
  }