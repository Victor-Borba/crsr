import './LinkButton.css'

function LinkButton({to, text}) {
    return(
        <div className='link'>
        <a nameClass="link" href={to}>
        
        {text}
        </a>
        </div>
    )
}

export default LinkButton