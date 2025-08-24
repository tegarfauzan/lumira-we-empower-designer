document.addEventListener('DOMContentLoaded', () => {
  const filterOpenBtn = document.getElementById('Open-Filter-Mobile');
  const filterCloseBtn = document.getElementById('Close-Filter');
  const applyBtn = document.getElementById('Apply-Filter');
  const modal = document.getElementById('Modal-Filter');

  // Klik tombol open
  filterOpenBtn.addEventListener('click', () => {
    document.body.classList.add('overflow-hidden');
    filterOpenBtn.classList.add('active');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  });

  // Klik tombol close
  filterCloseBtn.addEventListener('click', () => {
    document.body.classList.remove('overflow-hidden');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    filterOpenBtn.classList.remove('active');
  });

  applyBtn.addEventListener('click', () => {
    document.body.classList.remove('overflow-hidden');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    filterOpenBtn.classList.remove('active');
  });
  
});
