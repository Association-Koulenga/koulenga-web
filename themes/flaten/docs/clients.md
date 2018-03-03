# Clients

The clients modular.

**Menu**

* [General](#general)


## **General**

```yaml
clients:
  options:
    items: 4                    # Carousel items                (int)
    animation: fadeIn           # Animation                     (string)
    loop: false                 # Loop                          (bool)
    dots: true                  # Dot navigation                (bool)
    nav: false                  # Arrow navigation              (bool)
    autoplay: false             # Autoplay                      (bool)
    timeout: 2800               # Time between animation        (int)
    speed: 1000                 # Animation speed               (int)

  items:
    - title: 'Porsche'          # Title                         (string)
      src: 'porsche.svg'        # Source                        (string)
    - title: 'McLaren'
      src: 'mclaren.svg'
    - title: 'Lamborgini'
      src: 'lamborghini.svg'
    - title: 'Jaguar'
      src: 'jaguar.svg'
```
