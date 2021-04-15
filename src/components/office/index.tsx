import './index.scss';
import { HiSearch } from "react-icons/hi";

const OfficeCard:React.FC<{country: String, city: String ,street:String}> = ({country, city, street}) => {
  return (
    <div className="courses-container">
	<div className="course">
		<div className="course-preview">
			<h6>Office location</h6>
			<h5>{city}</h5>
			<a href="/contact">View on map <HiSearch/></a>
		</div>
		<div className="course-info">
			<h6>Address</h6>
			<h5>{street}</h5>
			<h6>Opening hours</h6>
			<h5>Every day from 9am to 5pm</h5>
			<a href='/contact' className=" btn btn-office">Contact</a>
		</div>
	</div>
</div>
  );
};
export default OfficeCard;