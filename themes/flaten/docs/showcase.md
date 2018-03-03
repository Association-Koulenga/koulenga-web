# Showcase

The showcase is not a modular page. It is implemented into the history core. To
activate it follow the steps below. Make sure you have all files you need for
you showcase inside the 0X.page folder. You can create a folder for your Showcase
resources too.

**Menu**

* [General](#general)
* [Options](#options)
  * [Parallax](#parallax-bool-)
  * [Small](#small-bool-)
  * [Carousel](#carousel)
* [Items](#-items-)
  * [Alignment](#alignment-left-right-center-justify-)
  * [Reverse](#reverse-bool-)
  * [Title & Subtitle](#title-and-subtitle)
  * [Buttons](#buttons)
  * [Wrapper](#wrapper)
  * [Screen](#screen)


## **General**

Before we start. All options below needs to intend to the `showcase` parameter.

> Its equal if you use 2 step tabs or 4. It just have to be ordered.

```yaml
showcase:
  parameter: ...
    deeper-parameters: ...
```

## **Options**

The showcase option are just for the showcase itself. Item options
are listed [here](#items).

```yaml
options:
  small: false                # Change the size         (bool)
  carousel:
    enabled: true             # Carousel                (bool)
    loop: false               # Loop all items          (bool)
    dots: false               # Bottom navigation dots  (bool)
    nav: false                # Navigation arrows       (bool)
    autoplay: false           # Enable autoplay         (bool)
    timeout: 3100             # Time between each slide (int)
    speed: 1100               # Speed between animation (int)
```

### Small *(bool)*
---

If you build a page where you have need of a banner with just title and
subtitle, here you can half size the showcase. The demo blog/portfolio/etc.
pages has this one enabled.

### Carousel
---

#### Enabled *(bool)*

This option enable and disable the carousel. If you want to display a single
item turn it off to prevent loading of the carousel script. Otherwise if you
leave it active and have more then one item. Just the first one will be visible.

#### Loop *(bool)*
> DEFAULT: false

Enable this option for looping you carousel. So the last slide will cloned just
before the first slide. Its recommend if you have autoplay enabled, so the
carousel won't stop at the last slide.

#### Dots *(bool)*
> DEFAULT: false

This option enables this dots. There will be shown on the bottom of the
carousel.

#### Nav *(bool)*
> DEFAULT: false

Here you have the option to give the user the control of you carousel. On the
right and left side are then arrows to control forward and backward sliding.

#### Autoplay *(bool)*
> DEFAULT: false

Enable autoplay to automatically slide to the next slider.

#### Timeout *(int)*
> DEFAULT: 3100

Set a time between each slide. Autoplay has to be enabled.

#### Speed *(int)*
> DEFAULT: 1100

How fast you want to slide in and out the slides. Autoplay has to be enabled.

## **Items**

In order you are a beginner I will explain this step by step. The items
parameter need to be ordered on the same level as the options. Each items is
declared with the `-`. So if you have the carousel enabled and what to add a
new slide, just write the next item right under the item before.

> Make sure each item is listed on the same level.

```yaml
items:
  - enabled: true             # Show/Hide the item      (bool)
    alignment: left           # Text alignment          (left/right/center/justify)
    reverse: false            # Reverse the content     (bool)

    # Parallax
    parallax:
      enabled: true           # Enable parallax         (bool)
      begin: '-300px'         # Set the begin position  (string)
      end: '700px'            # Set the end position    (string)

    # Title
    title:
      text: 'Awesome'         # Title                   (string)
      effect: true            # Blink effect            (bool)
      animation: fadeInDown   # Waypoint animation      (string)

    # Subtitle
    subtitle:
      text: 'Look a like'     # Subtitle                (string)
      animation: fadeInLeft   # Waypoint animation      (string)

    # Buttons
    buttons_animation: fadeInLeft # Buttons animation (string)
    buttons:
      - title: 'Buy now!'     # Title                   (string)
        icon: 'ios-cart'      # Icon                    (string)
        link: 'home'          # Link                    (string)
        target: '_blank'      # Target                  (string)
        animation: fadeInLeft # Waypoint animation      (string)

    # Background wrapper
    wrapper:
      kind: 'video'             # Kind                    (image/video)
      src: 'video.mp4'          # Source                  (string)
      type: 'mp4'               # Video type              (string)
      autoplay: true            # Autoplay                (bool)
      loop: true                # Loop                    (bool)
      poster: 'poster.jpg'      # Poster                  (string)
      blur: 5                   # Blur content in px      (int)

    # Screen (on the right of the title etc.)
    screen:
      enabled: true           # Enable/Disable          (bool)
      animation: fadeInRight  # Waypoint animation      (string)
      kind: 'image'           # Kind                    (image/video/youtube/vimeo)
      src: 'background.jpg'        # Source/Id               (string)
      type: 'mp4'             # Video type              (string)
      autoplay: true          # Autoplay                (bool)
      controls: false         # Controls                (bool)
      preload: 'auto'         # Preload                 (none/meta/auto)
      loop: true              # Loop                    (bool)
```

### Enabled *(bool)*
---

Enable/disable the item.

### Alignment *(left/right/center/justify)*
---

Set the alignment of the item. This is very useful if you don't have a screen
enabled.

### Reverse *(bool)*
---

Reverse the hole content.

### Parallax *(bool)*
---

Everyone knows parallax effects and here you can set it to the item
background. While scrolling the background will move up depend on you scrolling
speed. So it gives a nice eye catching effect.

Here you have some options to set the begin and end position of the parallax
effect. Play with it, you will fast find out how it works.

> If you have small content such on calendar page. Use smaller numbers, so it
looks smoother.

### Title and subtitle
---

#### Text *(string)*

The title text

#### Effect *(bool)*

Add a blink effect just to the title.

#### Title animation *(bool)*

Add a on load animation. You can choose between these [animations][animation].


### Buttons
---

You can declare a `animation: animationClass`. The button became an animation
like title and subtitle.

#### Title *(string)*

Choose a button title

#### Icon *(string)*

Select a icon if you want one. The icon is placed before the title inside the
button. You can see a full list of all icons on the [ionicons](http://ionicons.com/)
homepage. Just remove the `ion-` at the beginning.

#### Link *(string)*

Link the button to somewhere out there.

#### Target *(string)*

Set the link target. If you dont know what that mean. Click on that
[selfhtml](https://wiki.selfhtml.org/wiki/Referenz:HTML/Attribute/target) link
and look for the options you have here.

#### Button animation *(string)*

Equal to [title and subtitle animation](#title-animation-bool-)

### Wrapper
---

#### Kind *(image/url/video/youtube/vimeo)*

Here you have to select which kind of background style you want to have on your
slide. Choose between the options below:

**Kinds**
- Image: Image will be loaded from the local system.
- Video: Video will be loaded from the local system.

#### Src *(string)*

Here you type in the image/video url.

#### Type *(string)*

If you want to assign a video as background. Please type in the video type. So
the HTML5 Video player know which type of video you are playing.

#### Autoplay *(bool)*

If you want to autoplay the video.

#### Loop *(bool)*

If you want to loop the video.

#### Poster *(string)*

Select a poster for the loading time of the video.

#### blur *(int)*

Blur the content.

### Screen
---

So this one is a bit difficult. I added some cool options here. You can have a
screen on the right or left side of your sliders content with a image or video
in it. For each kind of item there are other options available, so I will wrote
to each option for what they are available.

#### Enabled *(bool)*

Enable or disable the screen. It looks better if you set the item align to
center when you disable the screen.

#### Screen animation *(string)*

Equal to [title and subtitle animation](#title-animation-bool-)

#### Kind *(image/url/video/youtube/vimeo)*

Here you have to select which kind of screen you want. You can choose
between these options:

**Kinds**
- Image   : Image will be loaded from the local system.
- Url     : Image will be loaded from a url.
- Video   : Video will be loaded from the local system.
- YouTube : A YouTube video will be loaded.
- Vimeo   : A Vimeo video will be loaded.

#### Src *(string)*

Here you type in the image/video url or id of the video. If you have a YouTube
or Vimeo video I will show you where you find the ID:

* YouTube: `https://www.youtube.com/watch?v=[ID]`
* Vimeo: `https://vimeo.com/[ID]`

#### Type *(string)*

Equal to [wrapper type](#type-bool-)

#### Autoplay *(bool)*
> DEFAULT: false

Equal to [wrapper autoplay](#autoplay-bool-)

#### Controls *(bool)*
> DEFAULT: false

This option is just for HTML5 video and disable or enable the video controls.

#### Preload *(string)*
> DEFAULT: 'none'

This option is just for HTML5 video and let you choose the video preload. If
you dont know what that mean look at this
[w3schools](http://www.w3schools.com/tags/att_video_preload.asp) page.

#### Loop *(bool)*
> DEFAULT: true

Equal to [wrapper loop](#loop-bool-)




[animation]: http://daneden.github.io/animate.css/ "Daneden animation.css"
