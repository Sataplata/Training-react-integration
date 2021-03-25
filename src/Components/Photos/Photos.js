import './Photos.css';
import gridImg1 from '../../Assets/gridImg1.png';
import gridImg2 from '../../Assets/gridImg2.png';
import gridImg3 from '../../Assets/gridImg3.png';
import gridImg4 from '../../Assets/gridImg4.png';
import gridImg5 from '../../Assets/gridImg5.png';
import gridImg6 from '../../Assets/gridImg6.png';
import gridImg7 from '../../Assets/gridImg7.png';
import gridImg8 from '../../Assets/gridImg8.png';
import gridImg9 from '../../Assets/gridImg9.png';
import gridImg10 from '../../Assets/gridImg10.png';


export const Photos = () => {

    return(
        <div className="photos-box">
            <div className="photosTitle">
                <h2>PHOTOS</h2>
                <a className="instaLink" href="https://www.instagram.com/bokobokoldn/?hl=fr">Voir tout</a>
            </div>

            <div className="photosGrid">
                <img className="gridImg" src={gridImg1} alt="feed insta" />
                <img className="gridImg" src={gridImg2} alt="feed insta" />
                <img className="gridImg" src={gridImg3} alt="feed insta" />
                <img className="gridImg" src={gridImg4} alt="feed insta" />
                <img className="gridImg" src={gridImg5} alt="feed insta" />
                <img className="gridImg" src={gridImg6} alt="feed insta" />
                <img className="gridImg" src={gridImg7} alt="feed insta" />
                <img className="gridImg" src={gridImg8} alt="feed insta" />
                <img className="gridImg" src={gridImg9} alt="feed insta" />
                <img className="gridImg" src={gridImg10} alt="feed insta" />




            </div>

        </div>
    );

}