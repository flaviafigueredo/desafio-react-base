import './colored-and-uppercase-component.css'

const ColoredAndUppercaseComponent = ({text, color, textTransform}) => {
    return (
        <div className="paragraph">
            <p style={{color: color, textTransform: textTransform}}>{text}</p>
        </div>
    )
}

export default ColoredAndUppercaseComponent