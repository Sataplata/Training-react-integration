import './Introduction.css';
import IntroImg from '../../Assets/intro.png';

export const Introduction = () => {

    return(
        <div className="introduction-box">
            <img className="introimg" src={IntroImg} alt="introduction" />
            <p>BOKŌ, épicerie, concept store, ateliers, pour manger local et consommer plus responsable à Béthune.</p>

        </div>
    );

}