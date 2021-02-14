import '../Style/Item.css';

function Item(props) {
  return (
    <div className="item">
      <h3 className="game">{props.name}</h3>
    </div>
  );
}

export default Item;
