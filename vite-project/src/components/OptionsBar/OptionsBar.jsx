import './OptionsBar.css'
import TimerIcon from '../icons/TimerIcon/TimerIcon'
import LettersIcon from '../icons/LetterIcon/LettersIcon'
import TimerConfigIcon from '../icons/TimerConfigIcon/TimerConfigIcon'

export default function OptionsBar(){
  return(
    <div className="container">
        <div className="typingTestConfig">
            <ul>
                <li><TimerIcon color = '#636768'/>time</li>
                <li><LettersIcon color = '#636768'/>words</li>
            </ul>
        </div>
        <div className="timerConfig">
            <ul>
                <li><p>15</p></li>
                <li><p>30</p></li>
                <li><p>60</p></li>
                <li><p>120</p></li>
                <li><TimerConfigIcon color='#636768' /></li>
            </ul>
        </div>
    </div>
  )  
}