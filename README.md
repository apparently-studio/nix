# Nix

Nix is set of utils for React / Preact.

## Components

### Stack
Stack is component for using Flex Box easily in React as an Component Also it's have some abstract login around align mess in flexbox You don't have to think about if it's row or column you simple align stuff With `verticalAlign` or` horizontalAlign` .'

```jsx
<HStack verticalAlign="center" horizontalAlign="center">
    <div>Item</div>
    <div>Item</div>
    <div>Item</div>
</HStack>
```

```jsx
<VStack verticalAlign="flex-start" horizontalAlign="center">
    <div>Item</div>
    <div>Item</div>
    <div>Item</div>
</VStack>
```

## Hooks

### useClickOutside
Hook for creating click away functionality. It's usefull when you creating some sort of dropdown and you need to close that dropdown when user click outside of the dropdown.

### useMedia
Hook for simulating media queries inside React.

`const mobile = useMedia("screen and (max-width: 800px)");`



