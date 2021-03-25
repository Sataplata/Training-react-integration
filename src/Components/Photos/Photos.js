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
const arrayImg = [gridImg1,gridImg2,gridImg3,gridImg4,gridImg5,gridImg6,gridImg7,gridImg8,gridImg9,gridImg10];

export const Photos = () => {

    return(
        <div className="photos-box">
            <div className="photosTitle">
                <h2>PHOTOS</h2>
                <a className="instaLink" href="https://www.instagram.com/bokobokoldn/?hl=fr">Voir tout</a>
            </div>

            <div className="photosGrid">
                {arrayImg.map((img) => (<img className="gridImg" src={img} alt="feed insta" />))}
            </div>
        </div>
    );

}