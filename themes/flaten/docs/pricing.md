# Pricing

The pricing modular.

**Menu**

* [General](#general)


## **General**

```yaml
pricing:
  - title: 'Standart'               # Title                           (string)
    price: '50€ <i>p.m.</i> '       # Price (i=small)                 (string)
    recommend: false                # Show as recommend price         (string)
    animation: fadeInRight          # Animation                       (string)
    features:                       # List the features               (array)
      - 'Up to 10,000 contacts'
      - 'Unlimited sending'
      - 'Email Marketing'
      - 'Send Newsletters'
      - 'Marketing Automation'
      - 'Basic Subscription Form'
      - 'Up To 3 Users'
    button:                         # Button
      text: 'Buy'                   # Text                            (string)
      link: ''                      # Link to shop                    (string)
      class:                        # Extra classes                   (string)
  - title: 'Ultimative'
    price: '100€ <i>p.m.</i>'
    recommend: true
    icon: 'neon neon-price'
    features:
      - '<b>Everything from Basic</b>'
      - 'Up to 10,000 contacts'
      - 'Unlimited sending'
      - 'CRM w/ Sales Automation'
      - 'Contact & Lead Scoring'
      - 'Dedicated Account Rep'
      - 'Custom User Permissions'
      - 'Advanced Subscription Forms'
      - 'Custom Domain'
      - 'Custom Branding'
    button:
      text: 'Buy'
      class: animated beat infinite hinge
  - title: 'Surreal'
    price: '200€ <i>p.m.</i>'
    recommend: false
    animation: fadeInLeft
    features:
      - '<b>Everything from Plus</b>'
      - 'Up to 10,000 contacts'
      - 'Unlimited sending'
      - 'Custom Mailserver Domain'
      - 'Dedicated Account Rep'
      - 'In-depth Onboarding'
      - 'Free Design Services'
    button:
      text: 'Buy'
```
