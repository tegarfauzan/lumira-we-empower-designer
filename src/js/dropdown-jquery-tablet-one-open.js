$(() => {
  $('[data-accordion]').on('click', function () {
    const targetId = $(this).data('accordion');
    const target = $(`#${targetId}`);

    // Tutup semua dropdown lain
    $('[data-accordion]').each(function () {
      const otherTarget = $(`#${$(this).data('accordion')}`);
      if (otherTarget.attr('id') !== targetId) {
        otherTarget.slideUp();
        // Reset both light and dark SVGs
        $(this).children('svg.light').removeClass('-rotate-180 !text-[#101828]');
        $(this).children('svg.dark').removeClass('-rotate-180 !text-[#98A2B3]');
      }
    });

    // Toggle dropdown yang diklik
    target.slideToggle();
    // Toggle both light and dark SVGs
    $(this).children('svg.light').toggleClass('-rotate-180 !text-[#101828]');
    $(this).children('svg.dark').toggleClass('-rotate-180 !text-[#98A2B3]');
  });
});
