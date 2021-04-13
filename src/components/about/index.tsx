import './index.scss'
import { Link } from 'react-router-dom';

const aboutContent = () => {
    return (
        <div className="about-wrapper">
            <div className="about-hero">
                <h2>We are Real-Estate App.. </h2>
            </div>
            <div className="about-content">
                <h2>Let’s expect more from house, together.</h2>
                <h5>We’re Real Estate App — the best agency made for you.</h5>
                <p>We are changing what it means to be comfortable and elegant. Each house that we offer - today and tomorrow - is tailored to the needs of customers, has a high standard and is tested by our experts! Because everyone deserves their own place on earth. </p>
                <Link to="/contact"><button className="line-item">Contact with us!</button></Link>
            </div>
        </div>
    );
}
export default aboutContent;