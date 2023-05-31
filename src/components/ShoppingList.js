import { plantList } from "../datas/plantList";
import CareScale from "./CareScale";
import PlanteItem from "./PlantItem";
import "../styles/ShoppingList.css";

function ShoppingList() {
  const categories = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  );

  return (
    <div>
      <ul>
        {categories.map((cat) => (
          <li key={cat}>{cat}</li>
        ))}
      </ul>
      <ul className="lmj-plant-list">
        {plantList.map((plant) => (
          <li key={plant.id} className="lmj-plant-item">
            {plant.name}
            {plant.isSpecialOffer && <div className="lmj-sales">Soldes</div>}
            <CareScale careType="water" scaleValue={plant.water} />
            <CareScale careType="light" scaleValue={plant.light} />
            <PlanteItem name={plant.name} cover={plant.cover} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
