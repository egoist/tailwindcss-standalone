# tailwindcss-standalone

> Standalone build of `tailwindcss` that runs in browser.

## Usage

```html
<script src="https://unpkg.com/tailwindcss-standalone"></script>

<script>
  tailwindcss({
    // optional tailwind config
  })
    .process(
      `
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  @apply bg-red-500;
}
`
    )
    .then(result => {
      console.log(result.css);
    });
</script>
```

You can also use it with bundler:

```js
import tailwindcss from 'tailwindcss-standalone'
```

## License

MIT.