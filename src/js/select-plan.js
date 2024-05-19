'use stict';

const checkbox = document.querySelector('.plays-switch');
const prices = document.querySelectorAll('.plans-item-price');

checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    prices.forEach(price => {
      const monthlyPrice = parseFloat(price.textContent.replace('$', ''));
      const yearlyPrice = monthlyPrice * 12 * 0.75; // 25% знижка
      price.innerHTML = `$${yearlyPrice.toFixed(2)} <span>/ year</span>`;
    });
  } else {
    prices.forEach(price => {
      const yearlyPrice = parseFloat(price.textContent.replace('$', ''));
      const monthlyPrice = yearlyPrice / 12 / 0.75; // 25% знижка
      price.innerHTML = `$${monthlyPrice.toFixed(2)} <span>/ month</span>`;
    });
  }
});
