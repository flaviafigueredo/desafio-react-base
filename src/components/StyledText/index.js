import './index.css'

const StyledText = ({text, color, textTransform}) => {
    return (
        <div className="paragraph">
            <p style={{color: color, textTransform: textTransform}}>{text}</p>
        </div>
    )
}

StyledText.defaultProps = {
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium temporibus ipsam ea sequi, ab mollitia repellat ratione pariatur facilis distinctio cupiditate aspernatur quaerat. Debitis quas sunt aliquid ratione autem quod!',
    color: '#7B68EE',
    textTransform: 'uppercase'
}

export default StyledText