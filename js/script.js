$(document).ready(function(){

  var scrollToArrow,
      scrollTo,
      room,
      square,
      price100,
      price70,
      price70_1,
      price70_2,
      price70_3,
      price50,
      price50_1,
      price50_2,
      price50_3;


  $('.phone-icon').click(function(){
    $('.phone-block').addClass('phone-block--active');
  });
  $('.phone-block__close').click(function(){
    $('.phone-block').removeClass('phone-block--active');
  });
  $('.phone-icon__exit').click(function(){
    $('.phone-block').removeClass('phone-block--active');
  });

  // Маска на номер телефона
  $("#phone").inputmask("+7-(999)-999-99-99");
  $("#phone-block__phone").inputmask("+7-(999)-999-99-99");
  $('#user-phone').inputmask("+7-(999)-999-99-99");

  $('.contacts__input').on('focus', function(){
    $(this).addClass('texted');
  });
  $('.contacts__input').on('blur', function(){
    if ( $(this).val() == "" ) {
      $(this).removeClass('texted');
    }
  });

  var pricelist = [
    oneRoneS = { square: '33,71', price100: '6 565 022,5', price70: '6 703 233,5', price70_1: '4 692 263', price70_2: '1 005 485', price70_3: '1 005 485', price50: '6 910 550', price50_1: '4 692 263', price50_2: '1 005 485', price50_3: '1 005 485'},
    oneRtwoS = { square: '41,85', price100: '8 150 287', price70: '8 321 872', price70_1: '5 825 310', price70_2: '1 248 280', price70_3: '1 248 280', price50: '8 579 250', price50_1: '4 289 625', price50_2: '2 144 812', price50_3: '2 144 812'},
    oneRtreeS = { square: '42,43', price100: '8 263 242', price70: '8 437 205', price70_1: '5 906 043', price70_2: '1 265 580', price70_3: '1 265 580', price50: '8 698 150', price50_1: '4 349 075', price50_2: '2 174 537', price50_3: '2 174 537'},
    oneRfourS = { square: '42,47', price100: '8 271 032', price70: '8 445 159', price70_1: '5 911 611', price70_2: '1 266 773', price70_3: '1 266 773', price50: '8 706 350', price50_1: '4 353 175', price50_2: '2 176 587', price50_3: '2 176 587'},
    oneRfiveS = { square: '42,48', price100: '8 272 980', price70: '8 447 148', price70_1: '5 913 003', price70_2: '1 267 072', price70_3: '1 267 072', price50: '8 708 400', price50_1: '4 354 200', price50_2: '2 177 100', price50_3: '2 177 100'},
    oneRsixS = { square: '51,16', price100: '9 963 410', price70: '10 173 166', price70_1: '7 121 216', price70_2: '1 525 974', price70_3: '1 525 974', price50: '10 487 800', price50_1: '5 243 900', price50_2: '2 621 950', price50_3: '2 621 950'},
    twoRoneS = { square: '54,62', price100: '10 637 245', price70: '10 861 187', price70_1: '7 602 830', price70_2: '1 629 178', price70_3: '1 629 178', price50: '11 197 100', price50_1: '5 598 550', price50_2: '2 799 275', price50_3: '2 799 275'},
    twoRtwoS = { square: '55,35', price100: '10 779 412', price70: '11 006 347', price70_1: '7 704 443', price70_2: '1 650 952', price70_3: '1 650 952', price50: '11 346 750', price50_1: '5 673 375', price50_2: '2 836 687', price50_3: '2 836 687'},
    twoRthreeS = { square: '58,12', price100: '11 318 870', price70: '11 557 162', price70_1: '8 090 013', price70_2: '1 733 574', price70_3: '1 733 574', price50: '11 914 600', price50_1: '5 957 300', price50_2: '2 978 650', price50_3: '2 978 650'},
    twoRfourS = { square: '59,28', price100: '11 544 780', price70: '11 787 828', price70_1: '8 251 479', price70_2: '1 768 174', price70_3: '1 768 174', price50: '12 152 400', price50_1: '6 076 200', price50_2: '3 038 100', price50_3: '3 038 100'},
    twoRfiveS = { square: '59,36', price100: '11 560 360', price70: '11 803 736', price70_1: '8 262 615', price70_2: '1 770 560', price70_3: '1 770 560', price50: '12 168 800', price50_1: '6 084 400', price50_2: '3 042 200', price50_3: '3 042 200'},
    twoRsixS = { square: '59,38', price100: '11 564 255', price70: '11 807 713', price70_1: '8 265 399', price70_2: '1 771 156', price70_3: '1 771 156', price50: '12 172 900', price50_1: '6 086 450', price50_2: '3 043 225', price50_3: '3 043 225'},
    twoRsevenS = { square: '59,68', price100: '11 622 680', price70: '11 867 368', price70_1: '8 307 157', price70_2: '1 780 105', price70_3: '1 780 105', price50: '12 234 400', price50_1: '6 117 200', price50_2: '3 058 600', price50_3: '3 058 600'},
    twoReightS = { square: '63,3', price100: '12 327 675', price70: '12 587 205', price70_1: '8 811 043', price70_2: '1 888 080', price70_3: '1 888 080', price50: '12 976 500', price50_1: '6 488 250', price50_2: '3 244 125', price50_3: '3 244 125'},
    twoRnineS = { square: '69,93', price100: '13 618 867', price70: '13 905 580', price70_1: '9 733 906', price70_2: '2 085 837', price70_3: '2 085 837', price50: '14 335 650', price50_1: '7 167 825', price50_2: '3 583 912', price50_3: '3 583 912'},
    twoRtenS = { square: '70,41', price100: '13 712 347', price70: '14 001 028', price70_1: '9 800 719', price70_2: '2 100 154', price70_3: '2 100 154', price50: '14 434 050', price50_1: '7 217 025', price50_2: '3 608 512', price50_3: '3 608 512'},
    threeRoneS = { square: '81,36', price100: '15 844 860', price70: '16 178 436', price70_1: '11 324 905', price70_2: '2 426 765', price70_3: '2 426 765', price50: '16 678 800', price50_1: '8 339 400', price50_2: '4 169 700', price50_3: '4 169 700'},
    threeRtwoS = { square: '81,88', price100: '15 946 130', price70: '16 281 838', price70_1: '11 397 286', price70_2: '2 442 275', price70_3: '2 442 275', price50: '16 785 400', price50_1: '8 392 700', price50_2: '4 196 350', price50_3: '4 196 350'},
    threeRthreeS = { square: '85,67', price100: '16 684 232', price70: '17 035 479', price70_1: '11 924 835', price70_2: '2 555 321', price70_3: '2 555 321', price50: '17 562 350', price50_1: '8 781 175', price50_2: '4 390 587', price50_3: '4 390 587'}
  ]
  

  function pricesVars (squareVal) {
    for (let i = 0; i < pricelist.length; i++) {
      if (pricelist[i].square == squareVal) {
        price100 = pricelist[i].price100 + " тг.";
        price70 = pricelist[i].price70 + " тг.";
        price70_1 = pricelist[i].price70_1 + " тг.";
        price70_2 = pricelist[i].price70_2 + " тг.";
        price70_3 = pricelist[i].price70_3 + " тг.";
        price50 = pricelist[i].price50 + " тг.";
        price50_1 = pricelist[i].price50_1 + " тг.";
        price50_2 = pricelist[i].price50_2 + " тг.";
        price50_3 = pricelist[i].price50_3 + " тг.";
      }
    }
  }




  $(window).scroll(function(){
    if (this.scrollY > 0){
      $(".header").addClass("header--scroll");
    }
    else {
      $(".header").removeClass("header--scroll");
    }
  });

  $('.burger__icon').on('click', function(){
    $('.burger').toggleClass('burger-active');
    $('.burger__icon').toggleClass('burger-icon-animation');
    $('.header').toggleClass('header-burger-open');
  });

  scrollToArrow = $('.hero__arow-down').attr('data-scroll');
  $('.hero__arow-down').click(function(){
    $('html,body').stop().animate({ scrollTop: $('.' + scrollToArrow).offset().top - 45 }, 1000);
  });


  $('.nav__link').on('click', function(){
    scrollTo = $(this).attr('data-scroll-path');
    $('html,body').stop().animate({ scrollTop: $('.' + scrollTo).offset().top - 55 }, 1000);
  });

  $('.burger__link').click(function(){
    $('.burger').removeClass('burger-active');
    $('.burger__icon').removeClass('burger-icon-animation');
    $('.header').removeClass('header-burger-open');
  });


  new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },

    speed: 650,

    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  });


  room = 1;
  if (room == 1) {
    $('#1').html('33,71 м<sup>2</sup>');
    $('#2').html('41,85 м<sup>2</sup>');
    $('#3').html('42,43 м<sup>2</sup>');
    $('#4').html('42,47 м<sup>2</sup>');
    $('#5').html('42,48 м<sup>2</sup>');
    $('#6').html('51,16 м<sup>2</sup>');
  }
  $('.price__item--rooms').click(function(){
    $('.price__item--rooms').removeClass('price__item--selected');
    $(this).addClass('price__item--selected');
    $('.price__item--square').removeClass('price__item--selected');
    // вывожу в ценник
    

    room = $(this).attr('data-room');
    $('.rooms').html(room);
    if (room == 1) {
      $('.price__content--ul-square').html(
        '<li class="price__item price__item--square" data-img-path="images/1/33,71" data-square="33,71">33,71 м<sup>2</sup></li>' +
        '<li class="price__item price__item--square" data-img-path="images/1/41,85" data-square="41,85" data-img-path="" data-square="2">41,85 м<sup>2</sup></li>' +
        '<li class="price__item price__item--square" data-img-path="images/1/42,43" data-square="42,43" data-img-path="" data-square="3">42,43 м<sup>2</sup></li>' +
        '<li class="price__item price__item--square" data-img-path="images/1/42,47" data-square="42,47" data-img-path="" data-square="4">42,47 м<sup>2</sup></li>' +
        '<li class="price__item price__item--square" data-img-path="images/1/42,48" data-square="42,48" data-img-path="" data-square="5">42,48 м<sup>2</sup></li>' +
        '<li class="price__item price__item--square" data-img-path="images/1/51,16" data-square="51,16" data-img-path="" data-square="6">51,16 м<sup>2</sup></li>' 
      );
    } else if (room == 2) {
      $('.price__content--ul-square').html(
        '<li class="price__item price__item--square" data-img-path="images/2/54,62" data-square="54,62" data-square="1">54,62 м<sup>2</sup></li>' +
        '<li class="price__item price__item--square" data-img-path="images/2/55,35" data-square="55,35" data-square="2">55,35 м<sup>2</sup></li>' +
        '<li class="price__item price__item--square" data-img-path="images/2/58,12" data-square="58,12" data-square="3">58,12 м<sup>2</sup></li>' +
        '<li class="price__item price__item--square" data-img-path="images/2/59,28" data-square="59,28" data-square="4">59,28 м<sup>2</sup></li>' +
        '<li class="price__item price__item--square" data-img-path="images/2/59,36" data-square="59,36" data-square="5">59,36 м<sup>2</sup></li>' +
        '<li class="price__item price__item--square" data-img-path="images/2/59,38" data-square="59,38" data-square="6">59,38 м<sup>2</sup></li>' +
        '<li class="price__item price__item--square" data-img-path="images/2/59,68" data-square="59,68" data-square="7">59,68 м<sup>2</sup></li>' +
        '<li class="price__item price__item--square" data-img-path="images/2/63,3" data-square="63,3" data-square="8">63,3 м<sup>2</sup></li>' +
        '<li class="price__item price__item--square" data-img-path="images/2/69,93" data-square="69,93" data-square="9">69,93 м<sup>2</sup></li>' +
        '<li class="price__item price__item--square" data-img-path="images/2/70,41" data-square="70,41" data-square="10">70,41 м<sup>2</sup></li>' 
      );
    } else if (room == 3) {
      $('.price__content--ul-square').html(
        '<li class="price__item price__item--square" data-img-path="images/3/81,36" data-square="81,36">81,36 м<sup>2</sup></li>' +
        '<li class="price__item price__item--square" data-img-path="images/3/81,88" data-square="81,88">81,88 м<sup>2</sup></li>' +
        '<li class="price__item price__item--square" data-img-path="images/3/85,67" data-square="85,67">85,67 м<sup>2</sup></li>'
      );
    }

    square = 1;
    $('.price__item--square').click(function(){
      $('.price__item--square').removeClass('price__item--selected');
      $(this).addClass('price__item--selected');
      square = $(this).attr('data-square');

      // задаю значение переменных
      pricesVars (square);
      


      $('#100p').text(price100);
      $('#70p').text(price70);
      $('#70p1').text(price70_1);
      $('#70p2').text(price70_2);
      $('#70p3').text(price70_3);
      $('#50p').text(price50);
      $('#50p1').text(price50_1);
      $('#50p2').text(price50_2);
      $('#50p3').text(price50_3);

      planImgPath = $(this).attr('data-img-path') + '.png';

      $('.price__planing--img').attr('src', planImgPath);

  });
})})