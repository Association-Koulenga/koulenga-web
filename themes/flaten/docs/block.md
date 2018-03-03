# Block

The block modular.

**Menu**

* [General](#general)


## **General**

```yaml
# Reverse the content (bool)
reverse: false

# Headline
headline_animation: fadeInLeft  # Animation                       (string)
headline: 'Such a cool site'    # Headline                        (string)

# Content
content_animation: fadeIn       # Animation                       (string)

# Buttons
buttons_animation: fadeInUp     # Animation                       (string)
buttons:
  - title: 'Learn more'         # Title                           (string)
    icon: 'bookmarks'           # Icon before                     (string)
    link: ''                    # Link                            (string)
    target: '_blank'            # Target                          (string)

# Screen
screen:
  options:
    kind: carousel              # Screen kind                     (string)
    animation: fadeInRight      # Animation                       (string)
    carousel:
      enabled: false            # Enable/disable carousel         (bool)
      loop: false               # Loop                            (bool)
      dots: true                # Dot navigation                  (bool)
      nav: false                # Arrow navigation                (bool)
      autoplay: false           # Autoplay                        (bool)
      timeout: 2700             # Time between each slide         (int)
      speed: 1100               # Speed between animation         (int)

  items:
    - enabled: false            # Enable/disable item             (bool)
      kind: youtube             # Kind                            (image/url/video/youtube/vimeo)
      src: '_zDZYrIUgKE'        # Source/id                       (string)

      # Video settings
      controls: true            # Controls                        (bool)
      autoplay: false           # Autoplay                        (bool)
      preload: 'auto'           # Preload data                    (auto/metadata/none)
      poster: 'poster.jpg'      # Poster location                 (string)
      muted: true               # Mute                            (bool)
      loop: false               # Loop                            (bool)
      type: 'mp4'               # Video type                      (string)
      nosupport: 'No Support'   # No support message              (string)

    - enabled: true             # Enable/disable item             (bool)
      kind: image
      src: 'image.jpg'

  skillbar:
    - title: HTML5              # Title                           (string)
      percent: 100              # Percentage                      (int)
      color: ''                 # Background color                (string)
    - title: CSS3
      percent: 60
      color: '#2980b9'
    - title: PHP
      percent: 40
      color: '#333333'
    - title: jQuery
      percent: 75
      color: '#2c3e50'
```
