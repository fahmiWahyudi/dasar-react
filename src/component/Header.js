import React from "react"
// import PropTypes from "prop-types"

class Header extends React.Component{
    render(){
        return(
            <div>
                <h1>Contoh View Props : {this.props.propsHeader}</h1>
                <h1>Contoh View Props : {this.props.propsHeader}</h1>
            </div>
        )
    }
}

// Penggunaan Props types untuk validasi props yang di kirimkan
// Header.propTypes = {
//     propsHeader : PropTypes.string.isRequired
// }

// // untuk memberikan nilai default terhadapat props yang di kirimkan
// Header.defaultProps = {
//     propsHeader : "Nilai Default Props"
// }

export default Header;