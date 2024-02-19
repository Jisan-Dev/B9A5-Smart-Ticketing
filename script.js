const seats = document.getElementsByClassName('seatNumber');
let seatTakenCount = 0;
let remainingSeats = document.getElementById('remainingSeats-count').innerText;
const totalPrice = document.getElementById('totalPrice');
let totalPriceCount = 0;

for (let seat of seats) {
  seat.addEventListener('click', (e) => {
    let seatNumber = e.target.innerText;

    if (seat.classList.contains('active')) {
      seatTakenCount--;
      remainingSeats++;
      seat.classList.remove('bg-primary-700');
      seat.classList.remove('text-white');
      seat.classList.remove('active');
      document.getElementById('badge-seatCheckedCount').innerText = seatTakenCount;
      document.getElementById('remainingSeats-count').innerText = remainingSeats;
      document.getElementById(seatNumber).classList.add('hidden');
      totalPriceCount -= 550;
      totalPrice.innerText = totalPriceCount;
      return;
    }

    if (seatTakenCount >= 4) {
      alert("can't buy more than 5");
      return;
    } else {
      seatTakenCount++;
      document.getElementById('badge-seatCheckedCount').innerText = seatTakenCount;

      remainingSeats--;
      document.getElementById('remainingSeats-count').innerText = remainingSeats;

      const p = document.createElement('p');
      p.innerText = seatNumber;
      document.getElementById('seatDetailMemo').innerHTML += `
        <div id="${seatNumber}" class="flex justify-between w-full"><p>${seatNumber}</p> <p>Economy</p> <p>550</p></div>
      `;

      totalPriceCount += 550;
      totalPrice.innerText = totalPriceCount;
    }

    if (seatTakenCount <= 4) {
      seat.classList.add('bg-primary-700');
      seat.classList.add('text-white');
      seat.classList.add('active');
    }
  });
}
