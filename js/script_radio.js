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

  function habilitacao9(){
    if(document.getElementById('input_comissionista_misto_sim').checked == true){
      document.getElementById('input_comissionista_salario_fixo').disabled = false;
      document.getElementById('input_comissionista_salario_fixo').disabled = false;
      document.getElementById('input_comissionista_misto_salario_minimo_sim').disabled = false;
      document.getElementById('input_comissionista_misto_salario_minimo_nao').disabled = false;
      document.getElementById('input_comissionista_misto_dsr_sim').disabled = false;
      document.getElementById('input_comissionista_misto_dsr_nao').disabled = false;
      document.getElementById('input_comissionista_misto_acordo_sim').disabled = false;
      document.getElementById('input_comissionista_misto_acordo_nao').disabled = false;
    }
    if(document.getElementById('input_comissionista_misto_sim').checked == false){
      document.getElementById('input_comissionista_salario_fixo').disabled = true;
      document.getElementById('input_comissionista_misto_salario_minimo_sim').disabled = true;
      document.getElementById('input_comissionista_misto_salario_minimo_nao').disabled = true;
      document.getElementById('input_comissionista_misto_dsr_sim').disabled = true;
      document.getElementById('input_comissionista_misto_dsr_nao').disabled = true;
      document.getElementById('input_comissionista_misto_acordo_sim').disabled = true;
      document.getElementById('input_comissionista_misto_acordo_nao').disabled = true;
    }
    if(document.getElementById('input_comissionista_misto_nao').checked == true){
      document.getElementById('input_comissionista_salario_fixo').value = '';
    }
  }

  function habilitacao10(){
    if(document.getElementById('input_gorjetas_sim').checked == true){
      document.getElementById('input_supressao_sim').disabled = false;
      document.getElementById('input_supressao_nao').disabled = false;
    }
    if(document.getElementById('input_gorjetas_nao').checked == true){
      document.getElementById('input_supressao_sim').disabled = true;
      document.getElementById('input_supressao_nao').disabled = true;
    }
  }

  function habilitacao11(){
    if(document.getElementById('input_supressao_sim').checked == true){
      document.getElementById('input_periodo').disabled = false;
    }
    if(document.getElementById('input_supressao_nao').checked == true){
      document.getElementById('input_periodo').disabled = true;
      document.getElementById('input_periodo').value = '';
    }
  }

    function habilitacao12(){
    if(document.getElementById('input_vale_refeicao_sim').checked == true){
      document.getElementById('input_vale_refeicao_valor').disabled = false;
    }
    if(document.getElementById('input_vale_refeicao_nao').checked == true){
      document.getElementById('input_vale_refeicao_valor').disabled = true;
      document.getElementById('input_vale_refeicao_valor').value = '';
    }
  }

  function habilitacao13(){
    if(document.getElementById('input_plr_sim').checked == true){
      document.getElementById('input_plr_valor').disabled = false;
      document.getElementById('input_plr_periodicidade').disabled = false;
    }
    if(document.getElementById('input_plr_nao').checked == true){
      document.getElementById('input_plr_valor').disabled = true;
      document.getElementById('input_plr_valor').value = '';
      document.getElementById('input_plr_periodicidade').disabled = true;
      document.getElementById('input_plr_periodicidade').value = '';
    }
  }

  function habilitacao14(){
    if(document.getElementById('input_premios_sim').checked == true){
      document.getElementById('input_habitualmente_sim').disabled = false;
      document.getElementById('input_habitualmente_nao').disabled = false;
    }
    if(document.getElementById('input_premios_nao').checked == true){
      document.getElementById('input_habitualmente_sim').disabled = true;
      document.getElementById('input_habitualmente_sim').checked = false;
      document.getElementById('input_habitualmente_nao').disabled = true;
      document.getElementById('input_habitualmente_nao').checked = false;
    }
  }

  function habilitacao15(){
    if(document.getElementById('input_vale_transporte_sim').checked == true){
      document.getElementById('input_vale_transporte_valor').disabled = false;
    }
    if(document.getElementById('input_vale_transporte_nao').checked == true){
      document.getElementById('input_vale_transporte_valor').disabled = true;
      document.getElementById('input_vale_transporte_valor').value = '';
    }
  }

  function habilitacao16(){
    if(document.getElementById('input_salario_familia_sim').checked == true){
      document.getElementById('input_salario_familia_motivo').disabled = false;
    }
    if(document.getElementById('input_salario_familia_nao').checked == true){
      document.getElementById('input_salario_familia_motivo').disabled = true;
      document.getElementById('input_salario_familia_motivo').value = '';
    }
  }

  function habilitacao17(){
    if(document.getElementById('input_teletrabalho_sim').checked == true){
      document.getElementById('textarea_contrato_individual').disabled = false;
      document.getElementById('textarea_atividades').disabled = false;
      document.getElementById('textarea_comparecimento').disabled = false;
      document.getElementById('textarea_horarios').disabled = false;
      document.getElementById('textarea_regime').disabled = false;
      document.getElementById('textarea_despesas').disabled = false;
      document.getElementById('textarea_convencao').disabled = false;
      document.getElementById('textarea_local_contratacao').disabled = false;
      document.getElementById('textarea_local_trabalhava').disabled = false;
    }
    if(document.getElementById('input_teletrabalho_nao').checked == true){
      document.getElementById('textarea_contrato_individual').disabled = true;
      document.getElementById('textarea_contrato_individual').value = '';

      document.getElementById('textarea_atividades').disabled = true;
      document.getElementById('textarea_atividades').value = '';

      document.getElementById('textarea_comparecimento').disabled = true;
      document.getElementById('textarea_comparecimento').value = '';

      document.getElementById('textarea_horarios').disabled = true;
      document.getElementById('textarea_horarios').value = '';

      document.getElementById('textarea_regime').disabled = true;
      document.getElementById('textarea_regime').value = '';

      document.getElementById('textarea_despesas').disabled = true;
      document.getElementById('textarea_despesas').value = '';

      document.getElementById('textarea_convencao').disabled = true;
      document.getElementById('textarea_convencao').value = '';

      document.getElementById('textarea_local_contratacao').disabled = true;
      document.getElementById('textarea_local_contratacao').value = '';

      document.getElementById('textarea_local_trabalhava').disabled = true;
      document.getElementById('textarea_local_trabalhava').value = '';
    }
  }

  function habilitacao18(){
    if(document.getElementById('input_outra_empresa_sim').checked == true){
      document.getElementById('textarea_quais_empresas').disabled = false;
      document.getElementById('textarea_atividades_executadas').disabled = false;
      document.getElementById('textarea_empresa_terceira').disabled = false;
    }
    if(document.getElementById('input_outra_empresa_nao').checked == true){
      document.getElementById('textarea_quais_empresas').disabled = true;
      document.getElementById('textarea_quais_empresas').value = '';

      document.getElementById('textarea_atividades_executadas').disabled = true;
      document.getElementById('textarea_atividades_executadas').value = '';

      document.getElementById('textarea_empresa_terceira').disabled = true;
      document.getElementById('textarea_empresa_terceira').value = '';
    }
  }

  function habilitacao19(){
    if(document.getElementById('input_transferido_sim').checked == true){
      document.getElementById('input_qual_periodo').disabled = false;
      document.getElementById('input_transferencia_provisoria').disabled = false;
      document.getElementById('input_transferencia_definitiva').disabled = false;
      document.getElementById('textarea_qual_local').disabled = false;
      document.getElementById('textarea_mudanca_endereco').disabled = false;
      document.getElementById('input_adicional_transf_sim').disabled = false;
      document.getElementById('input_adicional_transf_nao').disabled = false;

    }
    if(document.getElementById('input_transferido_nao').checked == true){
      document.getElementById('input_qual_periodo').disabled = true;
      document.getElementById('input_qual_periodo').value = '';

      document.getElementById('input_transferencia_provisoria').disabled = true;
      document.getElementById('input_transferencia_provisoria').checked = false;
      document.getElementById('input_transferencia_definitiva').disabled = true;
      document.getElementById('input_transferencia_definitiva').checked = false;

      document.getElementById('textarea_qual_local').disabled = true;
      document.getElementById('textarea_qual_local').value = '';

      document.getElementById('textarea_mudanca_endereco').disabled = true;
      document.getElementById('textarea_mudanca_endereco').value = '';

      document.getElementById('input_adicional_transf_sim').disabled = true;
      document.getElementById('input_adicional_transf_sim').checked = false;
      document.getElementById('input_adicional_transf_nao').disabled = true;
      document.getElementById('input_adicional_transf_nao').checked = false;
    }
  }

  function habilitacao20(){
    if(document.getElementById('input_mudanca_funcao_sim').checked == true){
      document.getElementById('textarea_qual_funcao').disabled = false;
      document.getElementById('textarea_funcao_exercida').disabled = false;
      document.getElementById('textarea_motivo_alteracao').disabled = false;
      document.getElementById('textarea_salario_funcao').disabled = false;
      document.getElementById('textarea_acumulo_funcao').disabled = false;
      document.getElementById('input_funcao_alterada_sim').disabled = false;
      document.getElementById('input_funcao_alterada_nao').disabled = false;

    }
    if(document.getElementById('input_mudanca_funcao_nao').checked == true){
      document.getElementById('textarea_qual_funcao').disabled = true;
      document.getElementById('textarea_qual_funcao').value = '';

      document.getElementById('textarea_funcao_exercida').disabled = true;
      document.getElementById('textarea_funcao_exercida').value = '';

      document.getElementById('textarea_motivo_alteracao').disabled = true;
      document.getElementById('textarea_motivo_alteracao').value = '';

      document.getElementById('textarea_salario_funcao').disabled = true;
      document.getElementById('textarea_salario_funcao').value = '';

      document.getElementById('textarea_acumulo_funcao').disabled = true;
      document.getElementById('textarea_acumulo_funcao').value = '';

      document.getElementById('input_funcao_alterada_sim').disabled = true;
      document.getElementById('input_funcao_alterada_sim').checked = false;

      document.getElementById('input_funcao_alterada_nao').disabled = true;
      document.getElementById('input_funcao_alterada_nao').checked = false;
    }
  }

  function habilitacao21(){
    if(document.getElementById('input_colega_sim').checked == true){
      document.getElementById('textarea_equiparando').disabled = false;
      document.getElementById('textarea_paradigma').disabled = false;
      document.getElementById('textarea_valor_paradigma').disabled = false;
      document.getElementById('input_requisitos_sim').disabled = false;
      document.getElementById('input_requisitos_nao').disabled = false;
      document.getElementById('textarea_trabalho_prestado').disabled = false;
      document.getElementById('textarea_mesma_funcao').disabled = false;
      document.getElementById('textarea_igual_valor').disabled = false;
      document.getElementById('input_tempo_servico_sim').disabled = false;
      document.getElementById('input_tempo_servico_nao').disabled = false;
      document.getElementById('input_tempo_funcao_sim').disabled = false;
      document.getElementById('input_tempo_funcao_nao').disabled = false;
      document.getElementById('input_quadro_pessoal_sim').disabled = false;
      document.getElementById('input_quadro_pessoal_nao').disabled = false;
    }
    if(document.getElementById('input_colega_nao').checked == true){
      document.getElementById('textarea_equiparando').disabled = true;
      document.getElementById('textarea_equiparando').value = '';

      document.getElementById('textarea_paradigma').disabled = true;
      document.getElementById('textarea_paradigma').value = '';

      document.getElementById('textarea_valor_paradigma').disabled = true;
      document.getElementById('textarea_valor_paradigma').value = '';

      document.getElementById('input_requisitos_sim').disabled = true;
      document.getElementById('input_requisitos_sim').checked = false;

      document.getElementById('input_requisitos_nao').disabled = true;
      document.getElementById('input_requisitos_nao').checked = false;

      document.getElementById('textarea_trabalho_prestado').disabled = true;
      document.getElementById('textarea_trabalho_prestado').value = '';

      document.getElementById('textarea_mesma_funcao').disabled = true;
      document.getElementById('textarea_mesma_funcao').value = '';

      document.getElementById('textarea_igual_valor').disabled = true;
      document.getElementById('textarea_igual_valor').value = '';

      document.getElementById('input_tempo_servico_sim').disabled = true;
      document.getElementById('input_tempo_servico_sim').checked = false;

      document.getElementById('input_tempo_servico_nao').disabled = true;
      document.getElementById('input_tempo_servico_nao').checked = false;

      document.getElementById('input_tempo_funcao_sim').disabled = true;
      document.getElementById('input_tempo_funcao_sim').checked = false;

      document.getElementById('input_tempo_funcao_nao').disabled = true;
      document.getElementById('input_tempo_funcao_nao').checked = false;

      document.getElementById('input_quadro_pessoal_sim').disabled = true;
      document.getElementById('input_quadro_pessoal_sim').checked = false;

      document.getElementById('input_quadro_pessoal_nao').disabled = true;
      document.getElementById('input_quadro_pessoal_nao').checked = false;
    }
  }

  function habilitacao22(){
    if(document.getElementById('input_prontidao_sim').checked == true){
      document.getElementById('input_23_normal_sim').disabled = false;
      document.getElementById('input_23_normal_nao').disabled = false;
    }
    if(document.getElementById('input_prontidao_nao').checked == true){
      document.getElementById('input_23_normal_sim').disabled = true;
      document.getElementById('input_23_normal_sim').checked = false;

      document.getElementById('input_23_normal_nao').disabled = true;
      document.getElementById('input_23_normal_nao').checked = false;
    }
  }

  function habilitacao23(){
    if(document.getElementById('input_sobreaviso_sim').checked == true){
      document.getElementById('input_sobreaviso_13_sim').disabled = false;
      document.getElementById('input_sobreaviso_13_nao').disabled = false;
    }
    if(document.getElementById('input_sobreaviso_nao').checked == true){
      document.getElementById('input_sobreaviso_13_sim').disabled = true;
      document.getElementById('input_sobreaviso_13_sim').checked = false;
      
      document.getElementById('input_sobreaviso_13_nao').disabled = true;
      document.getElementById('input_sobreaviso_13_nao').checked = false;
    }
  }

  function habilitacao24(){
    if(document.getElementById('input_reforma_sim').checked == true){
      document.getElementById('input_sumula_sim').disabled = false;
      document.getElementById('input_sumula_nao').disabled = false;
    }
    if(document.getElementById('input_reforma_nao').checked == true){
      document.getElementById('input_sumula_sim').disabled = true;
      document.getElementById('input_sumula_sim').checked = false;
      
      document.getElementById('input_sumula_nao').disabled = true;
      document.getElementById('input_sumula_nao').checked = false;
    }
  }

  function habilitacao25(){
    if(document.getElementById('input_adicional_riscos_sim').checked == true){
      document.getElementById('input_sempre_recebeu_sim').disabled = false;
      document.getElementById('input_sempre_recebeu_parcialmente').disabled = false;
      document.getElementById('input_sempre_recebeu_nao').disabled = false;
      document.getElementById('input_recebeu_de').disabled = false;
      document.getElementById('input_recebeu_a').disabled = false;
      document.getElementById('input_periculosidade_30_sim').disabled = false;
      document.getElementById('input_periculosidade_30_nao').disabled = false;
      document.getElementById('input_periculosidade_contato_inter').disabled = false;
      document.getElementById('input_periculosidade_contato_permanente').disabled = false;
    }
    if(document.getElementById('input_adicional_riscos_nao').checked == true){
      document.getElementById('input_sempre_recebeu_sim').disabled = true;
      document.getElementById('input_sempre_recebeu_sim').checked = false;
      
      document.getElementById('input_sempre_recebeu_parcialmente').disabled = true;
      document.getElementById('input_sempre_recebeu_parcialmente').checked = false;

      document.getElementById('input_sempre_recebeu_nao').disabled = true;
      document.getElementById('input_sempre_recebeu_nao').checked = false;

      document.getElementById('input_recebeu_de').disabled = true;
      document.getElementById('input_recebeu_de').value = '';

      document.getElementById('input_recebeu_a').disabled = true;
      document.getElementById('input_recebeu_a').value = '';

      document.getElementById('input_periculosidade_30_sim').disabled = true;
      document.getElementById('input_periculosidade_30_sim').checked = false;

      document.getElementById('input_periculosidade_30_nao').disabled = true;
      document.getElementById('input_periculosidade_30_nao').checked = false;

      document.getElementById('input_periculosidade_contato_inter').disabled = true;
      document.getElementById('input_periculosidade_contato_inter').checked = false;

      document.getElementById('input_periculosidade_contato_permanente').disabled = true;
      document.getElementById('input_periculosidade_contato_permanente').checked = false;
    }
  }

  function habilitacao26(){
    if(document.getElementById('input_epi_sim').checked == true){
      document.getElementById('input_epi_qual').disabled = false;
      document.getElementById('input_treinamento').disabled = false;
      document.getElementById('input_epi_subs').disabled = false;
      document.getElementById('input_epi_fiscalizacao').disabled = false;
    }
    if(document.getElementById('input_epi_nao').checked == true){
      document.getElementById('input_epi_qual').disabled = true;
      document.getElementById('input_epi_qual').value = '';

      document.getElementById('input_treinamento').disabled = true;
      document.getElementById('input_treinamento').value = '';

      document.getElementById('input_epi_subs').disabled = true;
      document.getElementById('input_epi_subs').value = '';

      document.getElementById('input_epi_fiscalizacao').disabled = true;
      document.getElementById('input_epi_fiscalizacao').value = '';
    }
  }

  function habilitacao27(){
    if(document.getElementById('input_acidente_sim').checked == true){
      document.getElementById('input_data_acidente').disabled = false;
      document.getElementById('input_afastamento').disabled = false;
      document.getElementById('input_tempo_afastamento').disabled = false;
      document.getElementById('input_data_retorno').disabled = false;
      document.getElementById('input_comunicacao_acidente').disabled = false;
      document.getElementById('input_dano_sim').disabled = false;
      document.getElementById('input_dano_nao').disabled = false;
      document.getElementById('input_despesas_medicas').disabled = false;
      document.getElementById('input_supressao_plano_sim').disabled = false;
      document.getElementById('input_supressao_plano_nao').disabled = false;
    }
    if(document.getElementById('input_acidente_nao').checked == true){
      document.getElementById('input_data_acidente').disabled = true;
      document.getElementById('input_data_acidente').value = '';

      document.getElementById('input_afastamento').disabled = true;
      document.getElementById('input_afastamento').value = '';

      document.getElementById('input_tempo_afastamento').disabled = true;
      document.getElementById('input_tempo_afastamento').value = '';

      document.getElementById('input_data_retorno').disabled = true;
      document.getElementById('input_data_retorno').value = '';

      document.getElementById('input_comunicacao_acidente').disabled = true;
      document.getElementById('input_comunicacao_acidente').value = '';

      document.getElementById('input_dano_sim').disabled = true;
      document.getElementById('input_dano_sim').checked = false;

      document.getElementById('input_dano_nao').disabled = true;
      document.getElementById('input_dano_nao').checked = false;

      document.getElementById('input_despesas_medicas').disabled = true;
      document.getElementById('input_despesas_medicas').value = '';

      document.getElementById('input_supressao_plano_sim').disabled = true;
      document.getElementById('input_supressao_plano_sim').checked = false;

      document.getElementById('input_supressao_plano_nao').disabled = true;
      document.getElementById('input_supressao_plano_nao').checked = false;
    }
  }

  function habilitacao28(){
    if(document.getElementById('input_dano_sim').checked == true){
      document.getElementById('input_dano_qual').disabled = false;
    }
    if(document.getElementById('input_dano_nao').checked == true){
      document.getElementById('input_dano_qual').disabled = true;
      document.getElementById('input_dano_qual').value = '';
    }
  }

    function habilitacao29(){
    if(document.getElementById('input_guias_habilitacao_sim').checked == true){
      document.getElementById('input_sacar_fgts_sim').disabled = false;
      document.getElementById('input_sacar_fgts_nao').disabled = false;
      document.getElementById('input_seguro_desemprego_sim').disabled = false;
      document.getElementById('input_seguro_desemprego_nao').disabled = false;
    }
    if(document.getElementById('input_guias_habilitacao_nao').checked == true){
      document.getElementById('input_sacar_fgts_sim').disabled = true;
      document.getElementById('input_sacar_fgts_sim').checked = false;

      document.getElementById('input_sacar_fgts_nao').disabled = true;
      document.getElementById('input_sacar_fgts_nao').checked = false;

      document.getElementById('input_seguro_desemprego_sim').disabled = true;
      document.getElementById('input_seguro_desemprego_sim').checked = false;

      document.getElementById('input_seguro_desemprego_nao').disabled = true;
      document.getElementById('input_seguro_desemprego_nao').checked = false;
    }
  }

 /* function habilitacao30(){
    if(document.getElementById('input_li_compreendi').checked == true){
      document.getElementById('btn_enviar').disabled = false;
    }
    if(document.getElementById('input_li_compreendi').checked == false){
      document.getElementById('btn_enviar').disabled = true;
    }
  }*/