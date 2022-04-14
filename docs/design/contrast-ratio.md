---
tags:
  - Accessibility
  - "UI/UX"
---
# Contrast Ratio

WCAG guidelines specify minimum contrast ratios for content. This contrast ratio
is beneficial to everyone reading your content, but is also incredibly valuable
for those with colour blindness or other visual impairments.

> It is good to have a cool design on your website, but the design is worthless
if your users can't read your content.[^1]

## Contrast Ratios

Sourced from MDN, licened under [CC-BY-SA
2.5](https://creativecommons.org/licenses/by-sa/2.5/)

| Type of content                                   | Minimum ratio for AA rating | Minimum ratio for AAA rating |
|---------------------------------------------------|-----------------------------|------------------------------|
| Body text                                         | 4.5 : 1                     | 7 : 1                        |
| Large-scale text (120-150% larger than body text) | 3 : 1                       | 4.5 : 1                      |
| Active user interface components and graphics     | 3 : 1                       | Not defined                  |

## Calculating Contrast Ratio

Contrast is calculated by looking at the relative luminance values ($L1$ and
$L2$) of the two colours. $(L1 + 0.05) / (L2 + 0.05)$ is the equation.

Because luminance is the sole factor looked at, the tone has no bearing on the
contrast ratio[^2].

For example, take `#FFFFFF` and `#323286`. `#FFFFFF` has a luminance value of
1.0, and `#323286` has a luminance value of 0.046, which roughly works out to a
contrast ratio of 10.8, passing all WCAG contrast ratio checks.

Example code from the WebAIM contrast checker is as follows:
```javascript
function getL(c) {
  // I don't know where these magic numbers come from
  return (
    0.2126 * getsRGB(c.substr(1, 2)) +
    0.7152 * getsRGB(c.substr(3, 2)) +
    0.0722 * getsRGB(c.substr(-2))
  );
}
var L1 = getL(f),
    L2 = getL(b),
    ratio = (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05);
```

## Resources

* [WebAIM: Contrast Checker](https://webaim.org/resources/contrastchecker/)

[^1]:
https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast
[^2]:
https://www.accessibility-developer-guide.com/knowledge/colours-and-contrast/how-to-calculate/#tone-is-not-a-key-factor
