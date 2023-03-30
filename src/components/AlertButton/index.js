import "./index.css"

const AlertButton = ({label, color}) => {
    return <button style={{ color: color}} className="btn" onClick={() => alert(`A label desse botão é: ${label}`)}>{label}</button>
}

AlertButton.defaultProps = {
    label: 'Clique aqui',
    color: '#7B68EE'
}

export default AlertButton