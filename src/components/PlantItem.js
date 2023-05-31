import CareScale from "./CareScale";
import "../styles/PlantItem.css";

export function handleClick(e) {
  console.log("Ceci est mon event", e);
}

function PlantItem({ id, cover, name, water, light }) {
  return (
    <li key={id} className="lmj-plant-item">
      <img className="lmj-plant-item-cover" src={cover} alt={`${name} cover`} />
      {name}
      <div>
        <CareScale careType="water" scaleValue={water} />
        <CareScale careType="light" scaleValue={light} />
      </div>
    </li>
  );
}

export default PlantItem;
