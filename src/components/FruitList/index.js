function FruitList({ fruits }) {
  return (
    <div>
      <ul>
        {fruits.map((element) => (
          <li key={element.name}> {element.name} </li>
        ))}
      </ul>
    </div>
  );
}
export default FruitList;
