import { FixedSizeList as List } from 'react-window';
import { FixedSizeGrid as Grid } from 'react-window';
import GoBackToHome from './GoBacktoHome';

type VirtualizedListProps = {
  items: string[];
  itemSize: number;
  height: number;
  width: number;
};

// Create virtualized list component
const VirtualizedList = ({ items, itemSize, height, width }: VirtualizedListProps) => {
//OR const VirtualizedList: React.FC<VirtualizedListProps> = ({ items, itemSize, height, width }) => {
  return (
    <List
      height={height}
      itemCount={items.length}
      itemSize={itemSize}
      width={width}
    >
      {({ index, style }) => (
        <div style={style}>
          {items[index]}
        </div>
      )}
    </List>
  );
}
// Example usage
const items = Array.from({ length: 1000 }, (_, index) => `Item ${index + 1}`);
const itemSize = 35; // Height of each item
const height = 300; // Height of the list
const width = 300; // Width of the list


const rows = 1000;
const columns = 1000;

export default function VirtualizedGrid() {
  return (
    <Grid
      columnCount={columns}
      rowCount={rows}
      columnWidth={100}
      rowHeight={35}
      height={400}
      width={600}
    >
      {({ columnIndex, rowIndex, style }) => (
        <div style={style}>
          Cell {rowIndex},{columnIndex}
        </div>
      )}
    </Grid>
  );
}

// Export the virtualized list component
export const VirtualizedListWrapper = () => {
  return (
    <div>
      <GoBackToHome />
      <h1>Virtualized List Example</h1>
      <p>
        <strong>react-window:</strong>
        Use Case: Ideal for simple lists and grids. If you need more complex features (like infinite scrolling or cell measurement), consider react-virtualized.
      </p>

      <VirtualizedList items={items} itemSize={itemSize} height={height} width={width} />
      <h1>Virtualized Grid Example</h1>
      <VirtualizedGrid />
    </div>
  );
}