import { plantList } from "../datas/plantList";
import PlantItem from "./PlantItem";
import { handleClick } from "./PlantItem";
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
      <ul className="lmj-plant-list" onClick={() => handleClick()}>
        {plantList.map(({ id, cover, name, water, light }) => (
          <PlantItem
            key={id} // Add the key prop here
            id={id}
            cover={cover}
            name={name}
            water={water}
            light={light}
          />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
