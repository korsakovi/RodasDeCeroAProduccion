import { mapType } from "./helpers";

//TODO Use the Atom Picture
const Icon = ({ type }) => (
 <div>
  <img src={mapType(type)} />
 </div>
);

export default Icon;
