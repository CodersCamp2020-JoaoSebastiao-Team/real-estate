import './index.scss';
import { HiSearch } from "react-icons/hi";

const AgentCard:React.FC<{name: String, surname: String ,email:String}> = ({name, surname, email}) => {
  return (
    <div className="courses-container">
	<div className="course">
		<div className="course-preview">
			<h6>Agent</h6>
			<h5>{name}</h5>
            <h5>{surname}</h5>
			<a href="/contact"> Check more info<HiSearch/></a>
		</div>
		<div className="course-info">
			<h6>Email</h6>
            <h5>{email}</h5>
			<a href='/contact' className=" btn btn-office">Contact</a>
		</div>
	</div>
</div>
  );
};
export default AgentCard;