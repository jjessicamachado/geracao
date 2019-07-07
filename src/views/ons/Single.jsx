import React, { Component } from "react";
import Audio from "assets/audio.mp3";


class Single extends Component {
  constructor(){
    super();
    this.state = {
    }
  };
    
  render(){
    return (
      <div class="boxSolicitacao">
        <h2 id="subSol">Solicitação</h2><br></br>
        <b>Solicitado em:</b> 26/06/2019<br></br>
        <b>Agente requisidor:</b> ONS<br></br>
        <b>Solicitante:</b> José Antonio<br></br>
        <b>Agente solicitado:</b> ONS<br></br>
        <b>Responsável:</b>  Antonio Machado<br></br>
        <b>Complexidade:</b> Simples<br></br>
        <b>Manobra:</b><br></br>

        <b>Agendamento:</b> 26/06/2019 22:01:00<br></br>
        <b>Solicitação:</b>
        <textarea>
            Prado você já tá com sono isso aí ele tá 4% quase 4% desse jeito 
            Agora nós estamos orando a manutenção toda hora para verificar lock 
            Oi sobrecorrente isso mesmo valeu até mais obrigado testando este é o seguinte dia 25 né 
            Isso chega a 10% no parque Ok você vai buscar aqui tá bom você me diz aí o pessoal que sabe o que operou 25oc sobre a corrente que você for tiver alguma posição 
            Se Liga para mim para voltar OK tá bom obrigado aí viu até mais tchau
        </textarea>
        <audio controls>
        <source src={Audio} type="audio/ogg"></source>
        Your browser does not support the audio element.
        </audio>
    </div>
    );
  }
}


export default Single;
