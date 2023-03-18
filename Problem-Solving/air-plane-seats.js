class AirplaneSeatingController {
    constructor(seats, passengers = 1) {
        this.seats = this.createSeats([...seats]);
        this.remainingPassengers = passengers;
        this.assignedSeats = this.seats;
        this.nextSeatNumber = 1;
    }
    createSeats(input) {
        const maxColumns = Math.max(...input.map((arr) => arr[1]));
        let seats = [];
        for (let colIndex = 0; colIndex < maxColumns; colIndex++) {
            let block = [];

            input.forEach((arr) => {
                const row = arr[0];
                let col = arr[1];
                if (this.remainingPassengers < 1) {
                    return;
                  }
                for (let i = 0; i < row; i++) {
                    if (col - colIndex > 0) {
                        block.push("seat");
                    } else {
                        block.push("empty");
                    }
                }
                block.push("aisle");
            });
            block = block.slice(0, -1);
            seats.push(block);
        }
        return seats;
    }

    get autoAssignedSeats() {
        this.assignAllSeats();
        return {
            seats: this.assignedSeats,
            remainingPassengers: this.remainingPassengers,
        };
    }

    assignAllSeats() {
        this.assignAisleSeats();
        this.assignWindowSeats();
        this.assignMiddleSeats();
    }

    assignAisleSeats() {
        let seats = [...this.seats];

        seats.forEach((row, rowIndex) => {
            row.forEach((seat, seatIndex) => {
                if (seatIndex > 0 && seatIndex < row.length) {
                    if (this.remainingPassengers < 1) {
                        return;
                      }
                    if (
                        seat === "seat" &&
                        (row[seatIndex - 1] === "aisle" ||
                            row[seatIndex + 1] === "aisle")
                    ) {
                        seats[rowIndex][seatIndex] = this.nextSeatNumber;
                        this.nextSeatNumber++;
                        this.remainingPassengers--;
                    }
                }
            });
        });
        this.assignedSeats = seats;
    }

    assignWindowSeats() {
        let seats = [...this.seats];
        seats.forEach((row, rowIndex) => {
            row.forEach((seat, seatIndex) => {
                if (this.remainingPassengers < 1) {
                    return;
                  }
                if (
                    seat === "seat" &&
                    (seatIndex === 0 || seatIndex === row.length - 1)
                ) {
                    seats[rowIndex][seatIndex] = this.nextSeatNumber;
                    this.nextSeatNumber++;
                    this.remainingPassengers--;
                }
            });
        });
        this.assignedSeats = seats;
    }

    assignMiddleSeats() {
        let seats = [...this.seats];

        seats.forEach((row, rowIndex) => {
            row.forEach((seat, seatIndex) => {
                if (this.remainingPassengers < 1) {
                    return;
                  }
                if (
                    seat === "seat" &&
                    !(
                        seatIndex === 0 ||
                        seatIndex === row.length - 1 ||
                        row[seatIndex - 1] === "aisle" ||
                        row[seatIndex + 1] === "aisle"
                    )
                ) {
                    seats[rowIndex][seatIndex] = this.nextSeatNumber;
                    this.nextSeatNumber++;
                    this.remainingPassengers--;
                }
            });
        });
        this.assignedSeats = seats;
    }
}

const result = new AirplaneSeatingController([[3,2],[4,3],[2,3],[3,4]], 30);
console.log(result.autoAssignedSeats)

// time complexity: 0(n^2)
// space complexity: 0(n)