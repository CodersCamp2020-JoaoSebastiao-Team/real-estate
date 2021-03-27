import Card from './home-card'
import './index.scss';
import Buy from './icons/buy.png'
import Sell from './icons/sell.png'
import Agent from './icons/agent.png'

const CardsSection = () => {
  return (
    <div className="cards-wrapper">
      <h5>Whether you’re buying, selling or renting, we can help you move forward.</h5>
      <ul>
        <li className="card-holder">
          <Card icon={Buy}
                title="Find a house" 
                desc="you can find a house of your dreams with us. Start by learning how to find the best offers." 
                button="BUY A HOUSE"/>
        </li>
        <li>
          <Card 
          icon={Sell}
          title="Sell a house" 
          desc="Reach the largest audience of shoppers with a free listing on our page. Start by learning how to sell for sale by owner." 
          button="SEE YOUR OPTIONS"/>
        </li>
        <li>
          <Card 
          icon={Agent}
          title="Find your agent" 
          desc="Our Premier Agents are among the best in the business. Learn how to pick the right one for you." 
          button="LOOK FOR AGENTS"/>
        </li>
      </ul>
      
    </div>
  );
};
export default CardsSection;
