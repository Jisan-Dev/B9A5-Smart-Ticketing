const seats = document.getElementsByClassName('seatNumber');

for (let seat of seats) {
  seat.addEventListener('click', () => {
    seat.classList.toggle('bg-primary-700');
    seat.classList.toggle('text-white');
  });
}
