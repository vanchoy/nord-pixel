import { useState, useRef } from 'react';
import { ChromePicker } from 'react-color';
import { exportComponentAsPNG, exportComponentAsJPEG } from 'react-component-export-image';

import '../styles/editor.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

import { ButtonRegular } from '../components/buttons/ButtonRegular';
import { buttonColor, whiteRegular, buttonHoverColor } from '../constants/styles';

import DrawingPanel from './DrawingPanel';

const Editor = () => {
  const [panelWidth, setPanelWidth] = useState(16); // Drawing panel dimensions. Default width is 16px
  const [panelHeight, setPanelHeight] = useState(16); // Drawing panel dimensions. Default height is 16px
  const [hideOptions, setHideOptions] = useState(false); // Hiding the user input options for panel dimension when start drawing
  const [hideDrawingPanel, setHideDrawingPanel] = useState(true); // Hide/show drawing panel (hide before start to draw and show when the user start to draw)
  const [buttonText, setButtonText] = useState("Click to start"); // Default button text
  const [selectedColor, setColor] = useState("#000"); // Default first color for the color picker
  const panelRef = useRef();

  const initDrawPanel = () => {
    setHideOptions(!hideOptions);
    setHideDrawingPanel(!hideDrawingPanel);

    if (!hideOptions && hideDrawingPanel) {
      setButtonText("Reset");
    }
    else {
      setButtonText("Click to start");
    }
  };

  const changeColor = (color) => {
    setColor(color.hex); // setting the color value from the picker itself in hex format
  };

  return (
    <div className="grid">
      { 
        hideDrawingPanel &&
        (
          <>
            <div id="options" className="grid-col-all center">
              <h3>Choose canvas size</h3>
              <div className="option">
                <span>Width(px):</span>
                <input type="number" className="panelInput" defaultValue={panelWidth} onChange={(e) => { setPanelWidth(e.target.value); } } min="1" />
              </div>
              <div className="option grid-col-all">
                <span>Height(px):</span>
                <input type="number" className="panelInput" defaultValue={panelHeight} onChange={(e) => { setPanelHeight(e.target.value); } } min="1" />
              </div>
            </div>
            <div className="grid-col-all">
              <ButtonRegular type="button" onClick={initDrawPanel} btnColor={buttonColor} btnHover={buttonHoverColor} btnTextColor={whiteRegular} btnTextHoverColor={buttonColor} btnText={buttonText}>
                <FontAwesomeIcon pull="right" icon={solid('play')} size="1x" />
              </ButtonRegular>
            </div>
          </>
        )
      } 

      {
        hideOptions && (
          <>
            <h3 className="grid-col-all">Select a color and start drawing on the white canvas</h3>
            <div className="grid-col-2-6 center">
              <ChromePicker className="colorPicker center" color={selectedColor} onChangeComplete={changeColor} />
              <div className="button-pos">
                <ButtonRegular type="button" onClick={() => exportComponentAsPNG(panelRef, {fileName: "Pixel Art"})} btnColor={buttonColor} btnHover={buttonHoverColor} btnTextColor={whiteRegular} btnTextHoverColor={buttonColor} btnText="Export as PNG">
                  <FontAwesomeIcon pull="right" icon={solid('image')} size="1x" />
                </ButtonRegular>
              </div>
              <div className="button-pos">
                <ButtonRegular type="button" onClick={() => exportComponentAsJPEG(panelRef, {fileName: "Pixel Art"})} btnColor={buttonColor} btnHover={buttonHoverColor} btnTextColor={whiteRegular} btnTextHoverColor={buttonColor} btnText="Export as JPEG">
                  <FontAwesomeIcon pull="right" icon={solid('image')} size="1x" />
                </ButtonRegular>
              </div>
              <div className="button-pos">
                <ButtonRegular type="button" onClick={initDrawPanel} btnColor="#D63103" btnHover={buttonHoverColor} btnTextColor={whiteRegular} btnTextHoverColor={buttonColor} btnText={buttonText}>
                  <FontAwesomeIcon pull="right" icon={solid('arrow-rotate-left')} size="1x" />
                </ButtonRegular>
              </div>
            </div>
          </>
        )
      }

      {
        hideOptions && (
          <div className="grid-col-6-12">
            <DrawingPanel width={panelWidth} height={panelHeight} selectedColor={selectedColor} panelRef={panelRef} />
          </div>
        )
      }
    </div>
  );
};

export default Editor;