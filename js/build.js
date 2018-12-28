 $( document ).ready(function() {

       
      $('.js-do-slider').slick({
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: '.do-slider-next',
        prevArrow: '.do-slider-prev',
        responsive: [

    {
      breakpoint: 950,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 510,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
     });


      $('.js-clients-slider').slick({
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: '.clients-slider-next',
        prevArrow: '.clients-slider-prev',
        responsive: [

          {
            breakpoint: 950,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3
            }
          },
          {
            breakpoint: 750,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 510,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
     });

      $('.js-work-slider').slick({
        //autoplay: true,
        autoplaySpeed: 3000
     });

      //инициализация карты
      var map = new GMaps({
      el: '#map',
      lat: -12.043333,
      lng: -77.028333,
      styles: [
            {elementType: 'geometry', stylers: [{color: '#e6e9ee'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#d4d8e0'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#d4d8e0'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#67747f'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#67747f'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#ffffff'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#ffffff'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#ffffff'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#ffffff'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#67747f'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#ffffff'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#ffffff'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#67747f'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#67747f'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#67747f'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#ffffff'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#67747f'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}]
            }
          ]
      });

      //изменение значка карты
       var image = '../images/map_icon.png';
        map.addMarker({
          lat: -12.043333,
          lng: -77.028333,
          title: 'Lima',
          icon: image

       });

          $('.nav-mobile').click(function(){
            //toggleClass - класс добавляется и удаляется автоматом при клике
            $(this).toggleClass('active');
            $('.menu').toggleClass('mobile-show');
        });

        //функция, наведение задает свой стиль
        function MouseHover($object, className){
          $($object).mouseover(function() {
          $(this).addClass(className);
          });
          $($object).mouseout(function() {
          $(this).removeClass(className);
          });
        };

        MouseHover($('.menu-item a'),'change-color');
        MouseHover($('.do-slider-next'),'change-color');
        MouseHover($('.do-slider-prev'),'change-color');
        MouseHover($('.clients-slider-prev'),'change-color');
        MouseHover($('.clients-slider-next'),'change-color');
        MouseHover($('.work-button'),'change-color-selector');
        
        //для слайдеров в разделе клиенты
        $('.client-img img').mouseover(function() {
           var id = $(this).attr('id');
          $(this).attr('src','../images/cl_'+id+'_active.png');   
          });

        $('.client-img img').mouseout(function() {
           var id = $(this).attr('id');
          $(this).attr('src','../images/cl_'+id+'.png');   
          });


        //для слайдера do
         $('.do-block').mouseover(function() {
            $(this).find('img').attr('src','../images/icon_do_active.svg');   
            $(this).find('.do-block-title').addClass('change-color');     
          });

         $('.do-block').mouseout(function() {
            $(this).find('img').attr('src','../images/do_slide.svg');
            $(this).find('.do-block-title').removeClass('change-color');            
          });


         //функция для слайдера с работам
         $('.work-button').click(function() {
          //удалили у всех кнопок цвет активный
          $('.work-button').removeClass('assign');   
          $(this).addClass('assign');
          //получили атрибут, по которому показываются работы
          var dataType = $(this).attr('data-type');
          var allImages = $('.work-img img');

          //если юзер нажал - покажи все фотки,то все показываем
          if(dataType == "all"){
            $(allImages).show('slow');
          }else{
            //спрятали все картинки

            $(allImages).hide('slow');
            var actualImg = $('.work-img[data-type='+'"'+dataType+'"'+'] img');
            for (i=0; i<actualImg.length; i++){
              $(actualImg).eq(i).show('slow');
            }
          }
      
          });

         //показываем подробную информацию по каждому слайду в работах
         $('.work-img').mouseover(function() {
            $(this).find('.work-active').show();   
          });
         

         $('.work-img').mouseout(function() {
            $(this).find('.work-active').hide();            
          });

          //просто какой-то код с инета, который позволяет скроллить к разделу
           $('.scroll-link').click(function() {

                  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

                      var target = $(this.hash);
                      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                      if (target.length) {
                          $('html,body').animate({
                              scrollTop: target.offset().top
                          }, 1000);
                          return false;
                      }
                  }
              
            });

 });