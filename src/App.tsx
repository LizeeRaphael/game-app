// // import ListGroup from "./components/ListGroup";

// // function App() {
// //   return (
// //     <div>
// //       <h1>List</h1>
// //       <ul className="list-group">
// //         <li className="list-group-item">An item</li>
// //         <li className="list-group-item">A second item</li>
// //         <li className="list-group-item">A third item</li>
// //         <li className="list-group-item">A fourth item</li>
// //         <li className="list-group-item">And a fifth one</li>
// //       </ul>
// //     </div>
// //   );
// // }

// // export default App;

// function ListGroup() {
//   let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

//   return (
//     <>
//       <h1>List</h1>
//       {items.length === 0 && <p>No item found.</p>}
//       <ul className="list-group">
//         {items.map((item) => (
//           <li
//             className="list-group-item"
//             key={item}
//             onClick={() => console.log("Clicked")}
//           >
//             {item}
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }

// export default ListGroup;

// import ListGroup from "./components/ListGroup";

// function App() {
//   return (
//     <div>
//       <h1>List</h1>
//       <ul className="list-group">
//         <li className="list-group-item">An item</li>
//         <li className="list-group-item">A second item</li>
//         <li className="list-group-item">A third item</li>
//         <li className="list-group-item">A fourth item</li>
//         <li className="list-group-item">And a fifth one</li>
//       </ul>
//     </div>
//   );
// }

// export default App;



// handling event

function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found.</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li
            className="list-group-item"
            key={item}
            onClick={() => console.log(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

