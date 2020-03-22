# tailwindcss-standalone

[![unpkg size](https://badgen.net/badgesize/normal/https/unpkg.com/tailwindcss-standalone/dist/index.js)](https://unpkg.com/tailwindcss-standalone/) [![jsdelivr](https://badgen.net/jsdelivr/hits/npm/tailwindcss-standalone)](https://www.jsdelivr.com/package/npm/tailwindcss-standalone)

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

[![Edit frosty-pike-uyhoj](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/frosty-pike-uyhoj?fontsize=14&hidenavigation=1&theme=dark)

You can also use it with bundler:

```js
import tailwindcss from 'tailwindcss-standalone'
```

## License

MIT.
