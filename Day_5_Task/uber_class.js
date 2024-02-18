class UberPriceCalculator {
  constructor(baseFare, costPerMinute, costPerKM, bookingFee) {
    this.baseFare = baseFare;
    this.costPerMinute = costPerMinute;
    this.costPerKM = costPerKM;
    this.bookingFee = bookingFee;
  }
  calculatePrice(distanceInKM, timeInMinutes) {
    const distanceCost = distanceInKM * this.costPerKM;
    const timeCost = timeInMinutes * this.costPerMinute;
    const totalPrice =
      this.baseFare + distanceCost + timeCost + this.bookingFee;
    return totalPrice;
  }
}
const calculator = new UberPriceCalculator(2.5, 0.5, 2, 1);

const totalPrice = calculator.calculatePrice(20, 40);

console.log("Total Price:", totalPrice.toFixed(2), "RS");
