<script setup>
import BuzzButton from '../../src/components/BuzzButton.vue';
import BuzzIcon from '../../src/components/BuzzIcon.vue';
</script>

# BuzzButton

Documentation is coming
[BuzzButton source code](https://github.com/CyprienF/buzzui-vue/blob/main/src/components/BuzzButton.vue)

## Slot
Documentation is coming

## Props
| Prop        | Description                    | Default   | Values                 |
| ----------- | ------------------------------ | --------- | ---------------------- |
| color       | Background color of the button | `primary` | [All color values]()   |
| size        | Size of the button             | `regular` | [All size values]()    |
| shape       | Shape of the button            | `squared` | `squared` or `rounded` |
| disabled    | Is the button disabled?        | `false`   | `true` or `false`      |
| outlined    | Is the button outlined?        | `false`   | `true` or `false`      |

## Events
BuzzButton component has no event yet.

## Colors

<div class="flex-container">
  <BuzzButton>Primary</BuzzButton>
  <BuzzButton color="success">Success</BuzzButton>
  <BuzzButton color="warning">Warning</BuzzButton>
  <BuzzButton color="danger">Danger</BuzzButton>
  <BuzzButton color="light">Light</BuzzButton>
  <BuzzButton color="dark">Dark</BuzzButton>
  <BuzzButton color="white">White</BuzzButton>
  <BuzzButton color="black">Black</BuzzButton>
</div>

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

<div class="flex-container">
  <BuzzButton size="small">Small</BuzzButton>
  <BuzzButton>Regular</BuzzButton>
  <BuzzButton size="medium">Medium</BuzzButton>
  <BuzzButton size="large">Large</BuzzButton>
</div>

### Code examples
```html
<BuzzButton size="small">Small</BuzzButton>
<BuzzButton>Regular</BuzzButton>
<BuzzButton size="medium">Medium</BuzzButton>
<BuzzButton size="large">Large</BuzzButton>
```

## Styles
<div class="flex-container">
  <BuzzButton>Filled</BuzzButton>
  <BuzzButton :outlined="true">Outlined</BuzzButton>
</div>

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

To learn more about icons please refer to the [BuzzIcon documentation]().

<div class="flex-container">
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
</div>

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

<style lang="scss">
.flex-container {
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 0.5rem;
}
</style>