import './index.css'

const StyledText = ({text, color, textTransform}) => {
    return (
        <div className="paragraph">
            <p style={{color: color, textTransform: textTransform}}>{text}</p>
        </div>
    )
}

export default StyledText