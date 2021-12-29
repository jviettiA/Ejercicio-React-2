import React from 'react'
import './Ficha.css' 

class Ficha extends React.Component {

    constructor(props){
        super(props)
    }

    state = {
        contador : Number(this.props.valor),
        fondo : this.props.fondo,
        fila : this.props.fila,
        col : this.props.col
    }

    enviarDatosPadre(){
        let{ id, enviarDatosPadre} = this.props
        let{ contador} = this.state

        let datos={
            id : id,
            contador : contador
        }

        enviarDatosPadre(datos)
        
    }

    incrementar(){

        this.setState( prevstate => ({ contador : prevstate.contador + 1 }), this.enviarDatosPadre)
        this.setState( prevstate => ({ fondo: !prevstate.fondo}))
    }


    render(){
        let{id, fila, col} = this.props
        let{contador, fondo}= this.state
    
        return(

            <div className='Ficha'>
                <button style={{backgroundColor: !fondo ? 'gray' : fila==col ? 'red' : 'black'}} onClick={() => this.incrementar()}>
                    <h3>ID: {id}</h3>
                    <h3>Fila: {fila}</h3>
                    <h3>Col: {col}</h3>
                    <h3>contador: {contador}</h3>


                </button>



            </div>
            
        )

    }



}

export default Ficha
