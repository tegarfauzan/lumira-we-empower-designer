$(() => {
  $('[data-expand]').on('click', function (e) {
    $(this).children('svg').toggleClass('rotate-0').toggleClass('text-[#98A2B3]');;
    let target = $(`#${$(this).data('expand')}`);
    target.slideToggle();
  });
});
