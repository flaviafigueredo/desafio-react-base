import "./index.css"

const showLabel = ({label}) => {
    alert(`A label desse botão é: ${label}`)
}

const AlertButton = ({label}) => {
    return <button className="btn" onClick={() => showLabel({label})}>{label}</button>
}

export default AlertButton