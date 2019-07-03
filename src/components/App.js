import React,{Component} from 'react'

class App extends Component{
  constructor(){
    super()
    this.state={
        usuarios:[
          {
            nombre:"Rodrigo",
            correo:"Rodrigo@gmail.com",
            enlace:"rodrigo.com"
          },
          {
            nombre:"Platzi",
            correo:"Paltzi@Platzi",
            enlace:"platzi.com"
          }
        ]
    }
  }
  ponerFila=()=>(
    this.state.usuarios.map( (usuario,index)=>(
      <tr>
        <td>{usuario.nombre}</td>
        <td>{usuario.correo}</td>
        <td>{usuario.enlace}</td>
      </tr>
    )   )
  )
render(){
  return(
    <div className="margen">
       <table className="tabla">
         <thead>
           <tr>
          <th>
            Nombre
          </th>
          <th>
            Correo
          </th>
          <th>
          Enlace
          </th>
          </tr>
         </thead>
         <tbody>
        {this.ponerFila()}
        
         </tbody>
       </table>
    </div>
  )}
}
export default App
