import Pizza from "./Pizza";
import { Vegetariana } from "./PizzaTypes";

interface PizzaVegetariana extends Pizza {
  flavor: Vegetariana,
}

export default PizzaVegetariana;