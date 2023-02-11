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

  function habilitacao5(){
    if(document.getElementById('input_salario_pago_fora_sim').checked == true){
      document.getElementById('input_salario_pago_fora_valor').disabled = false;
    }
    if(document.getElementById('input_salario_pago_fora_sim').checked == false){
      document.getElementById('input_salario_pago_fora_valor').disabled = true;
    }

    if(document.getElementById('input_salario_pago_fora_nao').checked == true){
      document.getElementById('input_salario_pago_fora_valor').value = '';
    }
  }

  function habilitacao6(){
    if(document.getElementById('input_comissoes_porcentagens_sim').checked == true){
      document.getElementById('input_comissoes_comissionista_puro_sim').disabled = false;
      document.getElementById('input_comissoes_comissionista_puro_nao').disabled = false;
    }
    if(document.getElementById('input_comissoes_comissionista_puro_nao').checked == true){
      document.getElementById('input_comissoes_comissionista_puro_sim').disabled = true;
    }
  }

  function habilitacao7(){
    if(document.getElementById('input_comissoes_comissionista_puro_sim').checked == true){
      document.getElementById('input_percentual').disabled = false;
      document.getElementById('input_periodicidade_pagamento').disabled = false;
      document.getElementById('input_valor_comissoes').disabled = false;
      document.getElementById('input_piso_salarial_sim').disabled = false;
      document.getElementById('input_piso_salarial_quanto').disabled = false;
      document.getElementById('input_piso_salarial_nao').disabled = false;
      document.getElementById('input_salario_minimo_sim').disabled = false;
      document.getElementById('input_salario_minimo_nao').disabled = false;
      document.getElementById('input_dsr_sim').disabled = false;
      document.getElementById('input_dsr_nao').disabled = false;
      document.getElementById('input_acordo_sim').disabled = false;
      document.getElementById('input_acordo_nao').disabled = false;
    }
    if(document.getElementById('input_comissoes_comissionista_puro_nao').checked == true){
      document.getElementById('input_percentual').disabled = true;
      document.getElementById('input_periodicidade_pagamento').disabled = true;
      document.getElementById('input_valor_comissoes').disabled = true;
      document.getElementById('input_piso_salarial_sim').disabled = true;
      document.getElementById('input_piso_salarial_quanto').disabled = true;
      document.getElementById('input_piso_salarial_nao').disabled = true;
      document.getElementById('input_salario_minimo_sim').disabled = true;
      document.getElementById('input_salario_minimo_nao').disabled = true;
      document.getElementById('input_dsr_sim').disabled = true;
      document.getElementById('input_dsr_nao').disabled = true;
      document.getElementById('input_acordo_sim').disabled = true;
      document.getElementById('input_acordo_nao').disabled = true;
    }
  }


  function habilitacao8(){
    if(document.getElementById('input_piso_salarial_sim').checked == true){
      document.getElementById('input_piso_salarial_quanto').disabled = false;
    }
    if(document.getElementById('input_piso_salarial_sim').checked == false){
      document.getElementById('input_piso_salarial_quanto').disabled = true;
    }

    if(document.getElementById('input_piso_salarial_nao').checked == true){
      document.getElementById('input_piso_salarial_quanto').value = '';
    }
  }