/**
 * filterable.js
 * @version 1.2.0
 * @package http://tympanus.net/codrops/2015/06/16/filterable-product-grid/
 *
 * Customized for Flaten GRAV template by Marvin Heilemann
 * @author https://github.com/muuvmuuv
 *
 * Licensed under the MIT license.
 * @license http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2015, Codrops
 * @copyright http://www.codrops.com
 */

class Filterable {

  constructor(element = '.grid', controls = 'menu > filter') {

    const _this = this;

    this.support = {
      animations: Modernizr.cssanimations
    };

    this.animEndEventNames = {
      'WebkitAnimation': 'webkitAnimationEnd',
      'OAnimation': 'oAnimationEnd',
      'msAnimation': 'MSAnimationEnd',
      'animation': 'animationend'
    };

    this.animEndEventName = this.animEndEventNames[Modernizr.prefixed('animation')];

    this.onEndAnimation = (el, callback) => {
      const onEndCallbackFn = function (ev) {
        if (_this.support.animations) {
          if (ev.target != this) return;
          this.removeEventListener(_this.animEndEventName, onEndCallbackFn);
        }
        if (callback && typeof callback === 'function') {
          callback.call();
        }
      };
      if (_this.support.animations) {
        el.addEventListener(_this.animEndEventName, onEndCallbackFn);
      } else {
        onEndCallbackFn();
      }
    };

    this.grid = $(element);

    this.filterCtrls = $(controls);

    // preload images
    imagesLoaded(_this.grid, () => {
      const iso = this.initIsotope();
      this.initEvents(iso);
      _this.grid.removeClass('loading');
    });
  }

  initIsotope() {
    const iso = this.grid.isotope({
      isResizeBound: false,
      itemSelector: '.item',
      percentPosition: true,
      masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: 'sizer'
      },
      layoutMode: 'fitRows',
      transitionDuration: '0.6s'
    });
    return iso;
  }

  initEvents(iso) {
    this.filterCtrls.each((i, filterCtrl) => {
      $(filterCtrl).click(function () {
        $(this).parent().find('.selected').removeClass('selected');
        $(this).addClass('selected');
        iso.isotope({
          filter: $(this).attr('data-filter')
        });
        iso.isotope('layout');
      });
    });

    // window resize / recalculate sizes for both flickity and isotope/masonry layouts
    $(window).resize(() => {
      iso.isotope('layout');
    });
  }
}
