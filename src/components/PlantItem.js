import "../styles/PlantItem.css";
import CareScale from "./CareScale";

function PlantItem({ id, cover, name, water, light }) {
  return (
    <div>
      <li key={id} className="lmj-plant-item">
        <img
          src={cover}
          alt={`${name} cover`}
          className="lmj-plant-item-cover"
        />
        {name}
        <div>
          <CareScale careType="water" scaleValue={water} />
          <CareScale careType="light" scaleValue={light} />
        </div>
      </li>
    </div>
  );
}

export default PlantItem;
