import React, { Component } from "react";


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
        <textarea></textarea>
        <audio controls>
        <source src="horse.ogg" type="audio/ogg"></source>
        <source src="horse.mp3" type="audio/mpeg"></source>
        Your browser does not support the audio element.
        </audio>
    </div>
    );
  }
}


export default Single;
