const seats = document.getElementsByClassName('seatNumber');
let seatTakenCount = 0;

for (let seat of seats) {
  seat.addEventListener('click', () => {
    seatTakenCount++;
    if (seatTakenCount <= 4) {
      seat.classList.toggle('bg-primary-700');
      seat.classList.toggle('text-white');
    } else {
      alert("can't buy more than 5");
    }
  });
}
