
//ParkingLot (address, carHasAccess, addFloor, parkVehicle(vehicle), vacateSpot )
// ---> ParkingFloor[] (level,  vacateSpot(floorLevel, spotId), getAvailableSpot(vehicle))
// ---> ParkingSpot[] (spotNumber, ______ isReserved, canAssign(vehicle), assignVehicle(vehicle), ______ getAvailableSpot)
// ---> Vehicle (platNumber, isReservedVehicle, isInsideTheLot(), isTagExpired())

//Find ParkingLot.nextAvailableSpot()

export enum SpotType {
  Compact = 'Compact',
  Large = 'Large',
  Handicapped = 'Handicapped',
  Emergency = 'Emergency',
}

export enum VehicleType {
  Car = 'Car',
  Truck = 'Truck',
  Bike = 'Bike',
  Emergency = 'Emergency',
}





export class Vehicle {
  constructor(
    public licensePlate: string,
    public type: VehicleType,
    public tagExpiry: Date,
    public isReservedVehicle: boolean = false
  ) {}

  isTagExpired(): boolean {
    return new Date() > this.tagExpiry;
  }
}





export class ParkingSpot {
  constructor(
    public id: string,
    public type: SpotType,
    public isReserved: boolean = false,
    public occupiedBy: Vehicle | null = null
  ) {}
  
  // public occupiedBy: Vehicle | null = null;


  isSpotAvailable(): boolean {
    return !this.occupiedBy;
  }

  canAssign(vehicle: Vehicle): boolean {
    if (!this.isSpotAvailable()) return false;
    if (this.isReserved && !vehicle.isReservedVehicle) return false;
    if (this.type === SpotType.Emergency && vehicle.type !== VehicleType.Emergency) return false;
    return true;
  }

  assignVehicle(vehicle: Vehicle): boolean {
    if (!this.canAssign(vehicle)) return false;
    this.occupiedBy = vehicle;
    return true;
  }

  removeVehicle(): void {
    this.occupiedBy = null;
  }
}




export class ParkingFloor {
  constructor(public level: number) {}

  public spots: ParkingSpot[] = [];

  addSpot(spot: ParkingSpot): void {
    this.spots.push(spot);
  }

  getAvailableSpot(vehicle: Vehicle): ParkingSpot | null {
    const prioritized = this.spots.filter(spot => spot.canAssign(vehicle));
    return prioritized.length ? prioritized[0] : null;
  }

  getExpiredTags(): Vehicle[] {
    return this.spots
      .filter(spot => spot.occupiedBy?.isTagExpired())
      .map(spot => spot.occupiedBy!) as Vehicle[];
  }
}




export class ParkingLot {
  constructor(public address: string) {
    this.address = address; // 👈 not needed — already set via parameter
  }

  private floors: ParkingFloor[] = [];

  addFloor(numberOfFloors: number): void {
    for (let i = 1; i <= numberOfFloors; i++) {
      const level = this.floors.length + 1;
      this.floors.push(new ParkingFloor(level));
    }
  }

  getFloor(level: number): ParkingFloor | null {
    return this.floors.find(f => f.level === level) || null;
  }

  // Add to ParkingLot
  private carHasAccess(vehicle: Vehicle): boolean {
    return !vehicle.isTagExpired(); // Or add other access logic here
  }

  parkVehicle(vehicle: Vehicle): boolean { //_________ IMP
    if (!this.carHasAccess(vehicle)) {
      console.warn(`Vehicle ${vehicle.licensePlate} does not have access.`);
      return false;
    }
    for (const floor of this.floors) {
      const spot = floor.getAvailableSpot(vehicle); //________ LOOP thr floors and get available spot
      if (spot && spot.assignVehicle(vehicle)) {    //_________ THEN assign spot to vehicle and return
        console.log(`Vehicle ${vehicle.licensePlate} parked at Floor ${floor.level} Spot ${spot.id}`);
        return true; //_________ IMP
      }
    }
    console.warn(`No suitable spot for vehicle ${vehicle.licensePlate}`);
    return false;
  }

  vacateSpot(floorLevel: number, spotId: string): void {
    const floor = this.getFloor(floorLevel);
    const spot = floor?.spots.find(s => s.id === spotId);
    if (spot) {
      spot.removeVehicle();
      console.log(`Spot ${spotId} on Floor ${floorLevel} is now free.`);
    }
  }

  highlightExpiredTags(): Vehicle[] {
    return this.floors.flatMap(floor => floor.getExpiredTags());
  }
}



/*

🔍 Applying This to Your Code

✅ public
	•	Vehicle.isTagExpired() — makes sense to expose, used by other classes.
	•	ParkingSpot.canAssign() — helpful for ParkingFloor to check assignment rules.
	•	ParkingSpot.assignVehicle() — needed by external logic to assign a vehicle.
	•	ParkingFloor.getAvailableSpot() — used by ParkingLot, so should be accessible.
	•	ParkingLot.parkVehicle() & vacateSpot() — core public actions expected in the API.
	•	ParkingLot.address — descriptive field, safe to expose.
	•	ParkingFloor.level — identity of the floor; safe and needed externally.

❌ Should Be private
	•	ParkingSpot.occupiedBy — internal state; should be modified only by assignVehicle() and removeVehicle() to enforce rules.
	•	ParkingLot.floors — internal structure, external code should use methods, not access floors directly.
	•	ParkingLot.carHasAccess() — internal logic to validate access; doesn’t need exposure.

*/