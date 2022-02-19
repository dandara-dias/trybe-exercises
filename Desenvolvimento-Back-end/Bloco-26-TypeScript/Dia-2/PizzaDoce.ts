import Pizza from "./Pizza";
import { Doce } from "./PizzaTypes";

interface PizzaDoce extends Pizza {
  flavor: Doce,
  slices: 4,
}

export default PizzaDoce;