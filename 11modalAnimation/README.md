
Jab bhi DOM manipulation ke through kisi element me koi class add ho rahi ho jo ki uski style change kar rahi ho , then
always consider applying transition on the properties being changed by the addition of that class .
Also on buttons on hover we generally translate in Y direction , decrease opacity or scale them. So you can consider applying
transition to them

## Inset property is used with position property in CSS

```
inset:0px;
```
is equivalent to

```
top:20px;
right:20px;
bottom:20px;
left:20px;
```

## Line-height 
1. Controls vertical spacing between lines of text.
2. Also often used for vertical centering.

Generally we use 1.5 for better readabiliy.

If height of div=50px and we set line-height=50px then it aligns a single line text in the center vertically

## visibility
Controls whether element is visible or hidden.
```
visibility: visible;
visibility: hidden;
```
Element become hidden but still occupies layout space.

### Important:Also it disables interaction.

### Difference between display:none and visibility: hidden
Element disappears completely and removed from the layout

## Why use both opacity and visibility
Although we can technically just use visibility for the hidden feature but we generally use opacity along with it to give the transition feature

We can't apply transition on the visibility property as it contains only two elements . So we apply transition on visibility.


