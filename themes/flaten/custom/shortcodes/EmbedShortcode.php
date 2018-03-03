<?php

namespace Grav\Plugin\Shortcodes;

use Thunder\Shortcode\Shortcode\ShortcodeInterface;

class EmbedShortcode extends Shortcode
{
    public function init()
    {
        $this->shortcode->getHandlers()->add('embed', function (ShortcodeInterface $sc) {
            $id = 'PLYR-'.$this->random();

            // $inlineJS = `
            // plyr.setup("#$id", {
            //   title: "Inline iframe video",
            //   controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'captions', 'fullscreen'],
            //   autoplay: 0,
            //   volume: 7
            // });
            // `;
            // $this->shortcode->addAssets('inlineJs', $inlineJS);

            $type = $sc->getParameter('type', '');
            $vid = $sc->getParameter('id', null);

            return '<div id="'.$id.'" class="embed" data-type="'.$type.'" data-video-id="'.$vid.'"></div>';
        });
    }

    public function random($length = 10) {
        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $charactersLength = strlen($characters);
        $randomString = '';
        for ($i = 0; $i < $length; ++$i) {
            $randomString .= $characters[rand(0, $charactersLength - 1)];
        }

        return $randomString;
    }
}
