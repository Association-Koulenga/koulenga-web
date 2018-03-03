/**
 * Main Javascript file
 *
 * @author Marvin Heilemann <marvin.heilemann@googlemail.com>
 * @version 2.0.3
 */

class Theme {

  constructor() {
    const _this = this;

    /** @var debug */
    this.debug = false;

    /** @var onepage */
    this.onepage = ($('[onepage]').length !== 0) ? true : false;

    if (typeof Breakpoints === 'function') {
      this.breakpoint = new Breakpoints();
    } else {
      console.error('Breakpoint function is not available!');
      return false;
    }

    if (this.isDebug()) this.debug = true;

    // Initialize all scripts

    this.skrollr();
    this.skillbar();
    this.tooltip();
    this.counter();
    this.waypoints();
    this.pageLoad();
    this.copyToClipboard();
    this.singlePagePlyrSetup();
    this.languageSwitcher();
    this.onepageNavigation();
    this.mobileNavigation();
  }

  /**
   * Is the device a phone?
   */
  isPhone() {
    return !(/Android | iPhone | iPad | iPod | BlackBerry | Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera);
  }

  /**
   * Are we debugging?
   */
  isDebug() {
    return ($('[debug]').length !== 0) ? true : false;
  }

  /**
   * Give the body a no-scroll class for overlays/modals
   */
  bodyNoScroll() {
    $('body').addClass('no-scroll');
  }

  /**
   * Remove the body no-scroll class
   */
  bodyScroll() {
    $('body').removeClass('no-scroll');
  }

  /**
   * Init skrollr for parallax effects
   * only on desktop devices!
   */
  skrollr() {
    if (this.isPhone()) {
      skrollr.init({
        forceHeight: false
      });
    }
  }

  /**
   * Enable bootstrap tooltip everywhere
   */
  tooltip() {
    $('[data-toggle="tooltip"]').tooltip();
  }

  /**
   * Init skillbar progress
   */
  skillbar(el) {
    $(el).find('.skillbar-bar').animate({
      width: $(el).attr('data-percent')
    }, 2200);
  }

  /**
   * Init skillbar progress
   */
  singlePagePlyrSetup() {
    const e = $('.single .embed');
    if (e.length !== 0) {
      plyr.setup(e, {
        title: "Inline iframe video",
        controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'captions', 'fullscreen'],
        autoplay: 0,
        volume: 7
      });
    }
  }

  /**
   * Init imagesLoaded to detect images load
   */
  pageLoad() {
    const _this = this;
    let allImages = $('body img, .wrapper .img');
    let countImages = allImages.size();
    let progress = $('#progress');
    let bar = $('#progress .bar');
    let ePer = progress.find('.p');
    let eNum = progress.find('.n');
    let debug = this.debug;

    $('body').imagesLoaded({
        background: true
      })
      .always((instance) => {
        _this.bodyScroll(); // Reenable scrolling
        progress.fadeOut(470, () => {
          $('main, header, nav, footer, bottom').fadeIn();
        });
      })
      .done((instance) => {
        if (debug) console.info('All images successfully loaded');
      })
      .fail(() => {
        if (debug) console.error('All images loaded, at least one is broken');
      })
      .progress((instance, image) => {
        if (image.isLoaded) {
          $(image.img).addClass('loaded');

          let countLoadedImages = allImages.size();

          let width = 100 * (countLoadedImages / countImages) + '%';

          // Change the progress width
          bar.css({
            'width': width
          });

          // Add percentage to html
          if (ePer.length !== 0) ePer.html(width);

          // Add number to html
          if (eNum.length !== 0) {
            eNum.html(`${countImages}/${countLoadedImages}`);
          }
        }
      });
  }

  /**
   * Copy to clipboard for code, pre and with class clip
   */
  copyToClipboard() {
    $('code, .clip').click(() => {
      var $temp = $("<input>");
      $("body").append($temp);
      $temp.val($(this).text()).select();
      document.execCommand("copy");
      $temp.remove();
    });
  }

  /**
   * Init counter
   */
  counter(el) {
    const element = $(el).find('.tweening-counter');
    const countTo = element.text();
    const tweeningCounter = new TweeningCounter().duration(3700);
    element.html(tweeningCounter.el);
    tweeningCounter.to(countTo).start();
  }

  /**
   * Init waypoints
   */
  waypoints() {
    const _this = this;
    $('[waypoint]:not(".animated")').waypoint({
      handler(direction) {
        const element = $(this.element);
        if (!element.hasClass('animated')) {
          element.addClass(element.data('animation'));
          element.addClass('animated');
          if (element.hasClass("skillbar")) _this.skillbar(element);
          if (element.hasClass("counter")) _this.counter(element);
        }
      },
      offset: '85%'
    });
  }

  /**
   * Language switcher
   */
  languageSwitcher() {
    const lngs = $('.lngs');
    const lngsdwn = lngs.find('.lngs-dropdown-click a');
    if (lngs.length !== 0) {
      lngsdwn.click((e) => {
        e.stopPropagation();
        lngs.toggleClass('open');
      });
      $(document).click(() => {
        lngs.removeClass('open');
      });
    }
  }

  /**
   * Navigation
   */
  onepageNavigation() {
    const _this = this;
    if (this.onepage) {
      $('#nav').onePageNav({
        currentClass: 'active',
        changeHash: true,
        scrollSpeed: 750,
        scrollThreshold: 0.5,
        filter: ':not(.external)',
        easing: 'swing',
        begin: function () {
          $('nav').removeClass('show');
        },
        scrollChange: function (current) {
          if (_this.debug) console.log("[onePageNav] current: ", current);
        }
      });
    }
  }

  mobileNavigation() {
    if (this.breakpoint.is("<=md")) {
      const burger = $('.burger');

      // Initial midnight js
      burger.midnight({
        defaultClass: 'primary'
      });

      // new toggleClass click event
      burger.click(function () {
        $('nav').toggleClass('show');
      });
    }
  }
}

// 01010101010101010101010101010101010101010101010101010101010101010101010101010

// New theme
let TE = new Theme();

// New breakpoints
let BP = new Breakpoints();

// New queue with timeout
let queue = new Queue(300);

// Print cool shit to the console [FLATEN]
console.info("%c┌────────────────────────────────────────────────────┐\n│ ███████╗██╗      █████╗ ████████╗███████╗███╗   ██╗│\n│ ██╔════╝██║     ██╔══██╗╚══██╔══╝██╔════╝████╗  ██║│\n│ █████╗  ██║     ███████║   ██║   █████╗  ██╔██╗ ██║│\n│ ██╔══╝  ██║     ██╔══██║   ██║   ██╔══╝  ██║╚██╗██║│\n│ ██║     ███████╗██║  ██║   ██║   ███████╗██║ ╚████║│\n│ ╚═╝     ╚══════╝╚═╝  ╚═╝   ╚═╝   ╚══════╝╚═╝  ╚═══╝│\n└────────────────────────────────────────────────────┘", "color: #24D689;font-size: 10px;");

// Do some debugging things here
if (TE.debug) {
  var styles = `
    background: -webkit-linear-gradient(top, #F44336, #D32F2F);
    border: 1px solid #F44336;
    color: white;
    padding: 15px 40px;
    font-size: 16px;
    font-weight: 400;
    line-height: 60px;
    white-space: nowrap;
  `;
  console.info("%cDebug is on true", styles);
  console.log("Current breakpoint:", BP.current().toUpperCase());

  // Debugger
  $('.debugger').click(function () {
    const _this = $(this);
    if (_this.hasClass('collapsed')) {
      _this.removeClass('collapsed');
    } else {
      _this.addClass('collapsed');
    }
  });
}

// Initial the script when the DOM is ready
$(document).ready(function () {
  // Something when the DOM is ready
});

$(window).on("load", function () {
  // Something on load
});
