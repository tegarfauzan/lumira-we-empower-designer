document.addEventListener('DOMContentLoaded', () => {
  const openBtn = document.getElementById('Open-Categories-Mobile');
  const closeBtn = document.getElementById('Close-Categories');
  const modal = document.getElementById('Modal-Category');
  const categoryTitle = openBtn.querySelector('.category-title-mobile');
  const categoryItemsContainer = modal.querySelectorAll('.category-list-mobile-container');

  // Klik tombol open
  openBtn.addEventListener('click', () => {
    document.body.classList.add('overflow-hidden');
    openBtn.classList.add('active');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  });

  // Klik tombol close
  closeBtn.addEventListener('click', () => {
    document.body.classList.remove('overflow-hidden');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    openBtn.classList.remove('active');
  });

  categoryItemsContainer.forEach(container => {
    const item = container.querySelector('.category-list-mobile');
    container.addEventListener('click', () => {
      categoryTitle.textContent = item.textContent; // update judul
      document.body.classList.remove('overflow-hidden');
      modal.classList.add('hidden');
      modal.classList.remove('flex');
      openBtn.classList.remove('active');
    });
  });
});
