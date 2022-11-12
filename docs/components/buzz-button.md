<script setup>
import BuzzButton from '../../src/components/BuzzButton.vue';
import BuzzIcon from '../../src/components/BuzzIcon.vue';
</script>

# BuzzButton

## Props
Documentation is coming

## Events
Documentation is coming

## Colors
<p>The BuzzButton component is available in different colors with primary as default color.</p>

<p><BuzzButton>Primary</BuzzButton></p>
<p><BuzzButton color="success">Success</BuzzButton></p>
<p><BuzzButton color="warning">Warning</BuzzButton></p>
<p><BuzzButton color="danger">Danger</BuzzButton></p>
<p><BuzzButton color="light">Light</BuzzButton></p>
<p><BuzzButton color="dark">Dark</BuzzButton></p>
<p><BuzzButton color="white">White</BuzzButton></p>
<p><BuzzButton color="black">Black</BuzzButton></p>

### Code examples
```html
  <BuzzButton>Primary</BuzzButton>
  <BuzzButton color="success">Success</BuzzButton>
  <BuzzButton color="warning">Warning</BuzzButton>
  <BuzzButton color="danger">Danger</BuzzButton>
  <BuzzButton color="light">Light</BuzzButton>
  <BuzzButton color="dark">Dark</BuzzButton>
  <BuzzButton color="white">White</BuzzButton>
  <BuzzButton color="black">Black</BuzzButton>
```

## Sizes
<p>The BuzzButton component is available in different size with regular as default size.</p>

<p><BuzzButton size="small">Small</BuzzButton></p>
<p><BuzzButton>Regular</BuzzButton></p>
<p><BuzzButton size="medium">Medium</BuzzButton></p>
<p><BuzzButton size="large">Large</BuzzButton></p>

### Code examples
```html
  <BuzzButton size="small">Small</BuzzButton>
  <BuzzButton>Regular</BuzzButton>
  <BuzzButton size="medium">Medium</BuzzButton>
  <BuzzButton size="large">Large</BuzzButton>
```

## Styles

<p><BuzzButton>Filled</BuzzButton></p>
<p><BuzzButton :outlined="true">Outlined</BuzzButton></p>

### Code examples
```html
  <BuzzButton>Filled</BuzzButton>
  <BuzzButton :outlined="true">Outlined</BuzzButton>
```

## Disabled
<BuzzButton :disabled="true">Disabled</BuzzButton>

### Code examples
```html
<BuzzButton :disabled="true">Disabled</BuzzButton>
```

## Icons

<p>
  <BuzzButton color="twitter">
    <BuzzIcon color="white" pack="fa-brands" icon="fa-twitter"></BuzzIcon>
    Twitter
  </BuzzButton>
</p>
<p>
  <BuzzButton color="youtube">
    <BuzzIcon color="white" pack="fa-brands" icon="fa-youtube"></BuzzIcon>
    Youtube
  </BuzzButton>
</p>
<p>
  <BuzzButton color="whatsapp">
    <BuzzIcon color="white" pack="fa-brands" icon="fa-whatsapp"></BuzzIcon>
    Whatsapp
  </BuzzButton>
</p>
<p>
  <BuzzButton color="messenger">
    <BuzzIcon color="white" pack="fa-brands" icon="fa-facebook-messenger"></BuzzIcon>
    Messenger
  </BuzzButton>
</p>
<p>
  <BuzzButton color="twitch">
    <BuzzIcon color="white" pack="fa-brands" icon="fa-twitch"></BuzzIcon>
    Twitch
  </BuzzButton>
</p>
<p>
  <BuzzButton color="reddit">
    <BuzzIcon color="white" pack="fa-brands" icon="fa-reddit"></BuzzIcon>
    Reddit
  </BuzzButton>
</p>
<p>
  <BuzzButton color="discord">
    <BuzzIcon color="white" pack="fa-brands" icon="fa-discord"></BuzzIcon>
    Discord
  </BuzzButton>
</p>
<p>
  <BuzzButton color="facebook">
    <BuzzIcon color="white" pack="fa-brands" icon="fa-facebook"></BuzzIcon>
    Facebook
  </BuzzButton>
</p>
<p>
  <BuzzButton color="linkedin">
    <BuzzIcon color="white" pack="fa-brands" icon="fa-linkedin"></BuzzIcon>
    Linkedin
  </BuzzButton>
</p>

### Code examples
```html
  <BuzzButton color="twitter">
    <BuzzIcon color="white" pack="fa-brands" icon="fa-twitter"></BuzzIcon>
    Twitter
  </BuzzButton>

  <BuzzButton color="youtube">
    <BuzzIcon color="white" pack="fa-brands" icon="fa-youtube"></BuzzIcon>
    Youtube
  </BuzzButton>

  <BuzzButton color="whatsapp">
    <BuzzIcon color="white" pack="fa-brands" icon="fa-whatsapp"></BuzzIcon>
    Whatsapp
  </BuzzButton>

  <BuzzButton color="messenger">
    <BuzzIcon color="white" pack="fa-brands" icon="fa-facebook-messenger"></BuzzIcon>
    Messenger
  </BuzzButton>

  <BuzzButton color="twitch">
    <BuzzIcon color="white" pack="fa-brands" icon="fa-twitch"></BuzzIcon>
    Twitch
  </BuzzButton>

  <BuzzButton color="reddit">
    <BuzzIcon color="white" pack="fa-brands" icon="fa-reddit"></BuzzIcon>
    Reddit
  </BuzzButton>

  <BuzzButton color="discord">
    <BuzzIcon color="white" pack="fa-brands" icon="fa-discord"></BuzzIcon>
    Discord
  </BuzzButton>

  <BuzzButton color="facebook">
    <BuzzIcon color="white" pack="fa-brands" icon="fa-facebook"></BuzzIcon>
    Facebook
  </BuzzButton>

  <BuzzButton color="linkedin">
    <BuzzIcon color="white" pack="fa-brands" icon="fa-linkedin"></BuzzIcon>
    Linkedin
  </BuzzButton>
```