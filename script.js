const seats = document.getElementsByClassName('seatNumber');
let seatTakenCount = 0;
let remainingSeats = document.getElementById('remainingSeats-count').innerText;
const totalPrice = document.getElementById('totalPrice');
let totalPriceCount = 0;

for (let seat of seats) {
  seat.addEventListener('click', (e) => {
    const seatNumber = e.target.innerText;
    const seatNumberElem = document.getElementById(seatNumber);

    if (seat.classList.contains('active')) {
      seatTakenCount--;
      remainingSeats++;
      seat.classList.remove('bg-primary-700');
      seat.classList.remove('text-white');
      seat.classList.remove('active');
      document.getElementById('badge-seatCheckedCount').innerText = seatTakenCount;
      document.getElementById('remainingSeats-count').innerText = remainingSeats;
      seatNumberElem.parentNode.removeChild(seatNumberElem);
      totalPriceCount -= 550;
      totalPrice.innerText = totalPriceCount;

      if (document.getElementById('badge-seatCheckedCount').innerText === '0') {
        document.getElementById('modalOpenerBtn').classList.remove('text-white');
        document.getElementById('modalOpenerBtn').classList.remove('bg-primary-700');
        document.getElementById('modalOpenerBtn').classList.remove('cursor-pointer');
        document
          .getElementById('modalOpenerBtn')
          .classList.add('text-gray-600', 'cursor-not-allowed', 'bg-gray-300');
      }
      return;
    }

    if (seatTakenCount >= 4) {
      alert("can't book more than 4");
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
      document.getElementById('grandPrice').innerText = totalPriceCount;

      document
        .getElementById('modalOpenerBtn')
        .classList.add('text-white', 'bg-primary-700', 'cursor-pointer');
    }

    if (seatTakenCount <= 4) {
      seat.classList.add('bg-primary-700');
      seat.classList.add('text-white');
      seat.classList.add('active');
    }
  });
}

const coupon = document.getElementsByClassName('grow')[0];
const applyBtn = document.getElementById('applyBtn');

applyBtn.addEventListener('click', () => {
  // write me code to stop event propagation
  if (coupon.value === 'NEW15') {
    const percentage = totalPriceCount * 0.15;
    const afterPercentage = totalPriceCount - percentage;
    document.getElementById('couponInputField').classList.add('hidden');
    document.getElementById('grandPrice').innerText = afterPercentage;
  } else if (coupon.value === 'Couple 20') {
    const percentage = totalPriceCount * 0.2;
    const afterPercentage = totalPriceCount - percentage;
    document.getElementById('couponInputField').classList.add('hidden');
    document.getElementById('grandPrice').innerText = afterPercentage;
  } else {
    alert('invalid code');
    return;
  }
});
