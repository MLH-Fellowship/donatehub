import '../../styles/itemcard.css';

const ItemCard = ({ itemName, img }) => {
	return (
		<div className="itmcard-item-cards">
			<div className="itmcard-item-bgcolors">
				<div className="itmcard-item-circle"></div>
			</div>
			<div className="itmcard-item-image-container">
				<div className="itmcard-item-img">
					<img src={img} alt={itemName} />
				</div>
			</div>
			<div className="itmcard-item-name">
				<h2>{itemName}</h2>
			</div>
		</div>
	);
};

export default ItemCard;
