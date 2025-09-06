document.addEventListener('DOMContentLoaded', () => {
  const countryOpenBtn = document.getElementById('Open-Country-Mobile');
  const countryCloseBtn = document.getElementById('Close-Country');
  const modal = document.getElementById('Modal-Country');
  const countryTitle = countryOpenBtn.querySelector('.country-title-mobile');
  const countryItemsContainer = modal.querySelectorAll('.country-list-mobile-container');

  // Klik tombol open
  countryOpenBtn.addEventListener('click', () => {
    document.body.classList.add('overflow-hidden');
    countryOpenBtn.classList.add('active');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  });

  // Klik tombol close
  countryCloseBtn.addEventListener('click', () => {
    document.body.classList.remove('overflow-hidden');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    countryOpenBtn.classList.remove('active');
  });

  countryItemsContainer.forEach(container => {
    const item = container.querySelector('.category-list-mobile');
    container.addEventListener('click', () => {
      countryTitle.textContent = item.textContent; // update judul
      document.body.classList.remove('overflow-hidden');
      modal.classList.add('hidden');
      modal.classList.remove('flex');
      countryOpenBtn.classList.remove('active');
    });
  });
});
