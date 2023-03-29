import "./index.css"

const AlertButton = ({label}) => {
    return <button className="btn" onClick={() => alert(`A label desse botão é: ${label}`)}>{label}</button>
}

export default AlertButton