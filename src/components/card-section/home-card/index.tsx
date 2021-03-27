import './index.scss';

const Card:React.FC<{icon: string ,title:string, desc:string, button:string}> = ({icon, title, desc, button}) => {
  return (
    <div className="card-wrapper">
      <div className="card-wrapper-content flex">
        <div className="card-image">
          <img src={icon} alt="buy a house icon"/>
        </div>
        <div className="card-description">
          <h6>{title}</h6>
          <p>{desc}</p>
          <a href="/sell" className="btn">{button}</a>
        </div>
      </div>
      
    </div>
  );
};
export default Card;