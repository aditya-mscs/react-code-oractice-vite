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
  public occupiedBy: Vehicle | null = null;

  constructor(
    public id: string,
    public type: SpotType,
    public isReserved: boolean = false
  ) {}

  isAvailable(): boolean {
    return !this.occupiedBy;
  }

  canAssign(vehicle: Vehicle): boolean {
    if (!this.isAvailable()) return false;
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
  public spots: ParkingSpot[] = [];

  constructor(public level: number) {}

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

  parkVehicle(vehicle: Vehicle): boolean {
    for (const floor of this.floors) {
      const spot = floor.getAvailableSpot(vehicle);
      if (spot && spot.assignVehicle(vehicle)) {
        console.log(`Vehicle ${vehicle.licensePlate} parked at Floor ${floor.level} Spot ${spot.id}`);
        return true;
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