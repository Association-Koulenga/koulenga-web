<?php

namespace Grav\Theme;

use Grav\Common\Theme;
use Grav\Common\Assets;
use Grav\Common\Plugin;
use Grav\Common\Uri;

class flaten extends Theme
{
  /**
   * @return array
   *
   * The getSubscribedEvents() gives the core a list of events
   */
  public static function getSubscribedEvents()
  {
    return [
      'onShutdown' => ['onShutdown', 0],
      'onPluginsInitialized' => ['onPluginsInitialized', 0],
    ];
  }

  public function onShutdown()
  {
    // Don't proceed if we are in the admin plugin
    if ($this->isAdmin()) return;

    $grav = $this->grav;
    $twig = $grav['twig'];

    // Check if the site config is set
    if (!$grav['config']->get('themes.flaten')) {
      $grav['log']->critical('You need to configure the site configuration.');
      $html = $twig->processTemplate('partials/fatal.html.twig');
      echo $html;
    }
  }

  public function onPluginsInitialized()
  {
    /** @var Uri $uri */
    $uri = $this->grav['uri'];
    $route = $this->config->get('plugins.admin.route');

    if ($route && preg_match('#'.$route.'#', $uri->path())) {
        $this->enable([
            'onPageInitialized' => ['onPageInitialized', 0],
        ]);
    }
  }

  public function onPageInitialized()
  {
      $assets = $this->grav['assets'];
      $assets->addCss('user/themes/flaten/custom/admin/admin.css', 1);
      $assets->addJs('user/themes/flaten/custom/admin/admin.js', 1);
  }
}
