'use strict';
{

 /* alert('このサイトは練習用です。（只今ポートフォリオサイト作成中！）Hair Salon Kotoriは実在しません。')*/

  /**********************************/
  /*************ハンバーガーメニュー*********************/

  const show = document.getElementById('open');
  const hide = document.getElementById('close');

  show.addEventListener('click', () => {
    document.body.className = 'menu-open';
  });

  hide.addEventListener('click', () => {
    document.body.className = '';
  });

  /*************ハンバーガーメニュー*********************/
  /*************ふわっとスクロール*********************/

  window.onload = function () {
    scroll_effect();

    $(window).scroll(function () {
      scroll_effect();
    });

    function scroll_effect() {
      $('.effect-fade').each(function () {
        let elemPos = $(this).offset().top;//要素の画面上部からの位置を取得
        let scroll = $(window).scrollTop();//ページ上部からスクロールされた距離
        let windowHeight = $(window).height();//windowの高さ
        if (scroll > elemPos - windowHeight) {
          $(this).addClass('effect-scroll');
        }
      });
    }
  };
  /*************ふわっとスクロール*********************/


}