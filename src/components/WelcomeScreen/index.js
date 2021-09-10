import './style.css'
import trofeu from '../../img/trofeu.png'

const WelcomeScreen = ({ setWelcomeScreenOn }) => {

    return (
        <div className="welcomeCard">
            <h1>Torneio Tribruxo</h1>
            <img src={trofeu} />
            <h2>Clique no botão para encontrar os bruxos escolhidos!</h2>
            <button className="welcomeButton" onClick={() => { return setWelcomeScreenOn(false) }}>Começar!</button>
        </div>
    );
}

export default WelcomeScreen;