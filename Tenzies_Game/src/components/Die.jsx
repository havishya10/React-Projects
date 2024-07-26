export default function Die(props) {
  const styles = {
    backgroundColor: props.held ? "#59E391" : "white",
    color: props.held ? "white" : "black",
  };

  return (
    <div className="die" style={styles} onClick={props.holdDice}>
      {props.value}
    </div>
  );
}
