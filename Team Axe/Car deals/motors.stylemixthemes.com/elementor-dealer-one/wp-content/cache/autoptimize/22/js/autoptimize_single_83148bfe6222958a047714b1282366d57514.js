class MotorsSingleListingGalleryCarousel extends elementorModules.frontend.handlers.Base{getDefaultSettings(){return{selectors:{carousel:'.listing-gallery-carousel'},};}
getDefaultElements(){const selectors=this.getSettings('selectors');return{$carousel:this.$element.find(selectors.carousel),};}
onInit(){super.onInit();let data=this.elements.$carousel.data();let options=data.options;if(options){let uniqid=this.elements.$carousel.data('widget-id');let slider_options={slidesPerView:3,spaceBetween:0,speed:500,loop:true,}
if(options.hasOwnProperty('slides_per_view'))
slider_options.slidesPerView=options.slides_per_view
if(options.hasOwnProperty('loop')&&options.loop)
slider_options.loop=true
if(options.hasOwnProperty('autoplay')&&options.autoplay){slider_options.autoplay={delay:1000,}
if(options.hasOwnProperty('delay')&&options.delay){slider_options.autoplay.delay=options.delay}}
if(options.hasOwnProperty('transition_speed')&&options.transition_speed)
slider_options.speed=options.transition_speed
if(options.hasOwnProperty('navigation')&&options.navigation){slider_options.navigation={nextEl:'.listing-gallery-carousel-'+uniqid+' .listing-gallery-carousel-nav-next',prevEl:'.listing-gallery-carousel-'+uniqid+' .listing-gallery-carousel-nav-prev',}}
let swiper=new Swiper('.listing-gallery-carousel-'+uniqid+'.listing-gallery-carousel',slider_options);if(options.hasOwnProperty('pause_on_mouseover')&&options.pause_on_mouseover){jQuery(swiper.$el[0]).hover(swiper.autoplay.stop,swiper.autoplay.start)}}
jQuery('body').on('click','.listing-gallery-carousel .swiper-slide-duplicate a',function(e){var index=jQuery(this).closest('.swiper-slide').attr('data-swiper-slide-index');jQuery(this).closest('.swiper-wrapper').find('.item:not(.swiper-slide-duplicate)[data-swiper-slide-index="'+index+'"] a').click();})}}
jQuery(window).on('elementor/frontend/init',()=>{const addHandler=($element)=>{elementorFrontend.elementsHandler.addHandler(MotorsSingleListingGalleryCarousel,{$element})}
elementorFrontend.hooks.addAction('frontend/element_ready/motors-single-listing-gallery-carousel.default',addHandler);})
jQuery(document).on('ready',function(){jQuery('.listing-gallery-carousel').lightGallery({selector:'.stm_fancybox',mode:'lg-fade',download:false,thumbnail:true,});});