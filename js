$(function(){
  function initFontSize() {
    var size = (sessionStorage.getItem('fontSize'))? sessionStorage.getItem('fontSize') : '16';
    changeFontSize(size);
  }

  function changeFontSize(size){
    $('html').css('font-size', size + 'px');
    $('[data-font!=' + size + ']').removeClass('active');
    $('[data-font=' + size + ']').addClass('active');
    sessionStorage.setItem('fontSize', size);
  }

  function addListeners() {
    $('[data-font]').on('click', function(){
      changeFontSize($(this).data('font'));
    });
  }

  function init() {
    initFontSize();
    addListeners();
  }

  init();
});




function color1(){

	document.bgColor = "black"; // bgcolor：背景色
	document.fgColor = "#0080ff"; // text：文字の基本色
	document.linkColor = "#ff0000"; // link：リンク文字の色
	document.vlinkColor = "#ff0000"; // vlink：リンク文字の色（アクセス済みのリンク）
	document.alinkColor = "#ff8000"; // alink：リンク文字の色（クリックした瞬間の色）

}


// body7

$('.faq-list-item').click(function() {
    var $answer = $(this).find('.answer');
    if($answer.hasClass('open')) {
      $answer.removeClass('open');
      // slideUpメソッドを用いて、$answerを隠してください
      $answer.slideUp();

      // 子要素のspanタグの中身をtextメソッドを用いて書き換えてください
      $(this).find('span').text('+');

    } else {
      $answer.addClass('open');
      // slideDownメソッドを用いて、$answerを表示してください
      $answer.slideDown();

      // 子要素のspanタグの中身をtextメソッドを用いて書き換えてください
      $(this).find('span').text('-');


    }
  });


// body9
