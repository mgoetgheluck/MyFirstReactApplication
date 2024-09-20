import '../styles/Banner.css';
import logo from '../assets/logo.png';

function Banner() {
    const title = 'La maison Jungle';
    return (
        <div className="lmj-banner">
            <img src={logo} alt='La maison Jungle' className='lmj-logo' />
            <h1 className="lmj-title">{title}</h1>
        </div>
    )
}

export default Banner;