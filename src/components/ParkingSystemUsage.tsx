import React, { useState } from 'react';
import { ParkingLot, ParkingSpot, SpotType, Vehicle, VehicleType } from './ParkingSystem';
import GoBackToHome from './GoBacktoHome';

// --- Assume the classes from the previous message are already imported here ---

const lot = new ParkingLot();
lot.addFloor(1);

const floor = lot.getFloor(1);
floor?.addSpot(new ParkingSpot('1A', SpotType.Compact));
floor?.addSpot(new ParkingSpot('1B', SpotType.Emergency));
floor?.addSpot(new ParkingSpot('1C', SpotType.Compact, true)); // Reserved

export default function ParkingLotUI() {
  const [log, setLog] = useState<string[]>([]);
  const [license, setLicense] = useState('');
  const [type, setType] = useState<VehicleType>('Car');
  const [reserved, setReserved] = useState(false);

  const handlePark = () => {
    const vehicle = new Vehicle(
      license,
      type as VehicleType,
      new Date('2025-12-31'),
      reserved
    );

    const success = lot.parkVehicle(vehicle);
    setLog(prev => [...prev, success
      ? `✅ Parked: ${license}`
      : `❌ Failed to park: ${license}`
    ]);
  };

  return (
    <div className="p-4 max-w-lg mx-auto space-y-4">
      <GoBackToHome />
      <h1 className="text-2xl font-bold">🚗 Parking Lot System</h1>

      <input
        className="border p-2 w-full"
        placeholder="License Plate"
        value={license}
        onChange={(e) => setLicense(e.target.value)}
      />

      <select
        className="border p-2 w-full"
        value={type}
        onChange={(e) => setType(e.target.value as VehicleType)}
      >
        {Object.values(VehicleType).map(v => (
          <option key={v} value={v}>{v}</option>
        ))}
      </select>

      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={reserved}
          onChange={() => setReserved(!reserved)}
        />
        Reserved Vehicle?
      </label>

      <button type='button' onClick={handlePark} className="bg-blue-500 text-white px-4 py-2 rounded">
        Park Vehicle
      </button>

      <div className="bg-gray-100 p-2 rounded">
        <h2 className="font-semibold">Activity Log:</h2>
        <ul className="text-sm list-disc list-inside">
          {log.map((entry, idx) => (
            <li key={idx}>{entry}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}