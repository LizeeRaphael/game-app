// // import ListGroup from "./components/ListGroup";

import { useState } from "react";

// { items:[], heading: strings }
interface Props {
  items: string[];
  heading: string;
}

function ListGroup(props: Props) {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  //Hook allows us tap into built-in functions in React
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found.</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index ? "list-group-item active" : "list-group"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
