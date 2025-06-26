class MotorsSingleListingGalleryCarouselMini extends elementorModules.frontend.handlers.Base{getDefaultSettings(){return{selectors:{carousel:'.listing-gallery-carousel-mini'},};}
getDefaultElements(){const selectors=this.getSettings('selectors');return{$carousel:this.$element.find(selectors.carousel),};}
onInit(){super.onInit();let data=this.elements.$carousel.data();let options=data.options;let uniqid=this.elements.$carousel.data('widget-id');let slider_options={slidesPerView:3,spaceBetween:20,speed:500,loop:false,}
if(options.hasOwnProperty('slides_per_view'))
slider_options.slidesPerView=options.slides_per_view
if(options.hasOwnProperty('autoplay')&&options.autoplay){slider_options.autoplay={delay:1000,}
if(options.hasOwnProperty('delay')&&options.delay){slider_options.autoplay.delay=options.delay}}
if(options.hasOwnProperty('transition_speed')&&options.transition_speed)
slider_options.speed=options.transition_speed
if(options.hasOwnProperty('navigation')&&options.navigation){slider_options.navigation={nextEl:'.listing-gallery-carousel-mini-nav-'+uniqid+' .listing-gallery-carousel-mini-nav-next',prevEl:'.listing-gallery-carousel-mini-nav-'+uniqid+' .listing-gallery-carousel-mini-nav-prev',}}
let swiper=new Swiper('.listing-gallery-carousel-mini-'+uniqid,slider_options);if(options.hasOwnProperty('pause_on_mouseover')&&options.pause_on_mouseover){$(swiper.$el[0]).hover(swiper.autoplay.stop,swiper.autoplay.start)}}}
jQuery(window).on('elementor/frontend/init',()=>{const addHandler=($element)=>{elementorFrontend.elementsHandler.addHandler(MotorsSingleListingGalleryCarouselMini,{$element})}
elementorFrontend.hooks.addAction('frontend/element_ready/motors-single-listing-gallery-carousel-mini.default',addHandler);})
jQuery(document).on('ready',function(){jQuery('.listing-gallery-carousel-mini').lightGallery({selector:'.stm_fancybox',mode:'lg-fade',download:false,thumbnail:true,});});