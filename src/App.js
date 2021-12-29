import React from 'react'
import logo from './logo.svg';
import Ficha from './componentes/Ficha';
import './App.css';

function MostrarDatosHijo(props) {
  let{id, fila, col, contador} = props.datos

  if(id) {
    return(
    <h3 style={{color: 'red'}}>Ficha id:{id} (f:{fila} c:{col}) - contador({contador})</h3>

  )
    }else{
      return(
        <h3 style={{color: 'blue'}}>Seleccione una ficha </h3>
      )
    }
}

class App extends React.Component {


  constructor(){
    super()

    this.recibirDatosHijo = this.recibirDatosHijo.bind(this)
  }

  state={
    datos : {id:null, fila:null, col:null, contador:null}
  }
  

  recibirDatosHijo(datos){
    this.setState({datos: datos})
  }

  render(){
    

    

    return (
      <div className="App">
      

        
            <MostrarDatosHijo datos={this.state.datos}/>





         
            <Ficha id='1' fila='0' col='0' valor='0' fondo={false} enviarDatosPadre={
              this.recibirDatosHijo
            }/>

            <Ficha id='2' fila='0' col='1' valor='0' fondo={false} enviarDatosPadre={
              this.recibirDatosHijo
            }/>

            <Ficha id='3' fila='0' col='2' valor='0' fondo={false} enviarDatosPadre={
              this.recibirDatosHijo
            }/>

            <Ficha id='4' fila='1' col='0' valor='0' fondo={false} enviarDatosPadre={
              this.recibirDatosHijo
            }/>

            <Ficha id='5' fila='1' col='1' valor='0' fondo={false} enviarDatosPadre={
              this.recibirDatosHijo
            }/>

            <Ficha id='6' fila='1' col='2' valor='0' fondo={false} enviarDatosPadre={
              this.recibirDatosHijo
            }/>

            <Ficha id='7' fila='2' col='0' valor='0' fondo={false} enviarDatosPadre={
              this.recibirDatosHijo
            }/>

            <Ficha id='8' fila='2' col='1' valor='0' fondo={false} enviarDatosPadre={
              this.recibirDatosHijo
            }/>

            <Ficha id='9' fila='2' col='2' valor='0' fondo={false} enviarDatosPadre={
              this.recibirDatosHijo
            }/>
              
            
 


      </div>
    );

  }
  
}

export default App;
