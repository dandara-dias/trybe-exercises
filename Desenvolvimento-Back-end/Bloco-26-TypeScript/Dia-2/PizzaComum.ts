import Pizza from "./Pizza";
import { Comum } from "./PizzaTypes";

interface PizzaComum extends Pizza {
  flavor: Comum,
}

export default PizzaComum;