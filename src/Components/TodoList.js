import ListGroup from "react-bootstrap/ListGroup";

export default function TodoList({ list }) {
  return (
    <ListGroup>
      {list.length ? (
        list.map((todo) => <ListGroup.Item key={todo}>{todo}</ListGroup.Item>)
      ) : (
        <p>The list is empty</p>
      )}
    </ListGroup>
  );
}
