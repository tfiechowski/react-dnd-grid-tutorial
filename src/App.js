import React, { useContext } from "react";
import DragItem from "./DragItem";
import { Grid, GridImage, GridItem } from "./Grid";
import GridContext from "./GridContext";

function App() {
  const { items, moveItem } = useContext(GridContext);

  return (
    <div className="App">
      <Grid>
        {items.map(item => (
          <DragItem key={item.id} id={item.id} onMoveItem={moveItem}>
            <GridItem>
              <GridImage src={item.src}></GridImage>
            </GridItem>
          </DragItem>
        ))}
      </Grid>
    </div>
  );
}

export default App;
