const seats = document.getElementsByClassName('seatNumber');
let seatTakenCount = 0;

for (let seat of seats) {
  seat.addEventListener('click', () => {
    if (seat.classList.contains('active')) {
      seatTakenCount--;
      seat.classList.remove('bg-primary-700');
      seat.classList.remove('text-white');
      seat.classList.remove('active');
      return;
    }
    seatTakenCount++;

    if (seatTakenCount <= 4) {
      seat.classList.add('bg-primary-700');
      seat.classList.add('text-white');
      seat.classList.add('active');
      // console.log(seatTakenCount);
    } else {
      alert("can't buy more than 5");
    }

    console.log('a' + seatTakenCount);
  });
}
