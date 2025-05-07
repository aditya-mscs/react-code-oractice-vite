//@ts-nocheck
import { useState } from "react";
import GoBackToHome from "./GoBacktoHome"

export const PaypalSheetBeamsFrameBolts = () => {
  const [status, setStatus] = useState({
    sheets: true,
    beams: true,
    frame: true,
    bolts: true
  });
  const dependency = {
    sheets: ['beams'],
    beams: ['frame'],
    bolts: ['frame'],
    frame: [],
  }

  const handleStationChange = (station, checked) => {
    console.log(station, checked);
    const newStatus = { ...status, [station]: checked };

    const recheck = (tempStation, value) => {
      for (const dependent of dependency[tempStation] || []) {
        if (newStatus[dependent] !== false) {
          newStatus[dependent] = false;
          recheck(dependent, value);
        }
      }
    }
    if (!checked) recheck(station, false);
    setStatus(newStatus);
  };
  // console.log(JSON.stringify(status, null, 2));

  return (
    <div>
      <GoBackToHome />
      <pre>
        SHEETS → BEAMS → FRAME <br />
        &#9; &#9; &#9; &#9; &nbsp; ↑ <br />
        &#9; &#9;  &nbsp; BOLTS ─┘
      </pre>
      <p>Use recursion</p>
      <br /><br />
      <div>
        <h3>Control Panel</h3>
        <input type="checkbox" id="sheets-status" checked={status['sheets']} onChange={(e) => handleStationChange('sheets', e.target.checked)} />
        <span id="sheets-station" style={{ backgroundColor: status['sheets'] ? "transparent" : "red" }} >SHEETS</span>
      </div>
      <div>
        <input type="checkbox" id="beams-status" checked={status['beams']} onChange={(e) => handleStationChange('beams', e.target.checked)} />
        <span id="beams-station" style={{ backgroundColor: status['beams'] ? "transparent" : "red" }} >BEAMS</span>
      </div>
      <div>
        <input type="checkbox" id="bolts-status" checked={status['bolts']} onChange={(e) => handleStationChange('bolts', e.target.checked)} />
        <span id="bolts-station" style={{ backgroundColor: status['bolts'] ? "transparent" : "red" }} >BOLTS</span>
      </div>
      <div>
        <input type="checkbox" id="frames-status" checked={status['frame']} onChange={(e) => handleStationChange('frame', e.target.checked)} />
        <span id="frames-station" style={{ backgroundColor: status['frame'] ? "transparent" : "red" }} >FRAMES</span>
      </div>
    </div>
  );
}