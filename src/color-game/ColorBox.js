export function ColorBox({ color }) {
  const styles = {
    backgroundColor: color,
    height: "25px",
    width: "100%",
    marginTop: "10px",
  };
  return <div style={styles}></div>;
}
