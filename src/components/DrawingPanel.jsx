import '../styles/drawingPanel.scss';

import Row from '../components/Row';

const DrawingPanel = (props) => {
  const { width, height, selectedColor, panelRef } = props;
  let rows = [];

  for (let i = 0; i < height; i++) {
    rows.push(<Row key={i} width={width} selectedColor={selectedColor} />);
  }

  return (
    <div className="drawingPanel">
      <div className="canvas" ref={panelRef}>
        {rows}
      </div>
    </div>
  );
};

export default DrawingPanel;