# Modulars

You can assign some specific options to every modular. Please make note that
some of them are required to make the modular running and are not available
in some case.

##  

```yaml
title: Intro                    # Modular title
menu: Intro                     # Modular menu title
hidemenu: false                 # Hides module in menu
class:                          # Additional module class
fluid: false                    # Set the container fluid
enabled: true                   # Enable this modular

# --- Content

# Styling
style:                          # Section color                   (red/orange/blue/pink/blank)
color: dark                     # Content color                   (light/dark)
wrapper:
  parallax: true                # Parallax                        (bool)
  src: 'background.jpg'         # Source                          (string)
  blur: 0                       # Blur content in px              (int)
```

### Title *(string)*
---

The title is as simple as it is. It defines the modulars title and gives him
a unique ID.

### Menu *(string)*
---

If you don't have a one page site, you can define a menu name. So this will be
the title shown inside your menubar.

### Hidemenu *(bool)*
---

Enable this option to hide this modular in the menu. This option is only
available on one page templates.

### Class *(string)*
---

If you wanna style your section on your own. You can assign some extra classes
for styling here.

### Fluid *(bool)*
---

For full width or fluid content e.g. you wanna show a gallery. You can enable
this option to set the content on 100% viewport width.

### Enabled *(bool)*
---

Maybe you just want to pre work on the modular but do not wanna publish
it right now. You can enable/disable it here.

## Content

### Style *(red/orange/blue/pink/blank)*
---

Choose between some color styles for your content. Text color and other that
are in the main color right now, will changed to your choosen one. Leave it
blank for the default color.

### Color *(light/dark)*

Here you can set the content color. That is a fast way to correct the contrast
if you have a dark or light background.

### Wrapper

I added to some modulars a option to include a background wrapper. Not every
modular has them yet. So try it. For those modulars where it is working. You
have to locate your image and add some blur if you want. The parallax option
enables a smooth image scrolling effect.
