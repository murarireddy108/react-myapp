import { useState } from 'react';
import { ColorBox } from './ColorBox';

export function AddColor() {
  const [color, setColor] = useState("red");
  const styles = { backgroundColor: color };

  const [colors, setColors] = useState(["violet", "skyblue", "orange"]);
  return (
    <div className="color-game">
      <input
        value={color} onChange={(event) => setColor(event.target.value)}

        style={styles} placeholder="enter a color" />
      <button onClick={() => setColors([...colors, color])}>Add Color</button>

      {colors.map((clr, index) => (<ColorBox key={index} color={clr} />))}
    </div>
  );
}
