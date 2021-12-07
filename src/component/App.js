import React from "react"
import Header from "./Header"
import List from "./List"

class App extends React.Component{
    state = {
        name : "Fahmi Wahyudi",
        jabatan : "Programmer",
        divisi : "Pengembangan Aplikasi TI"
    }

    change = () =>{
        this.setState({
            name : "Wahyudi Fahmi",
        })
    }
    render(){
        const myStyle = {
            color : "blue"
        }
        return(
            <div>
                <Header propsHeader="Value Props Header From APP" prospKedua="Contoh Props kedua"/>
                <List propsInState={this.state.name}>Ini Props Child</List>
                <h1 style={{ color:"red" }}>Data Diri</h1>
                <h3 style={myStyle}>Nama : { this.state.name } </h3> 
                <h3 onClick={this.change}>Jabatan : { this.state.jabatan }</h3>
            </div>
        )
    }
}
    
// CONTOH CLASS COMPONENT
// class App extends React.Component{
//     render(){
//         return(
//             <div>
//                 <h1>Hellow World</h1>
//             </div>
//         )
//     }
// }

// CONTOH FUNCTIONAL COMPONENT
// const App = () => {
//     return(
//         <div>
//             <h1>Hellow World 2</h1>
//         </div>
//     )
// }

export default App;