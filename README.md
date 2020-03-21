# tailwindcss-browser

> Use `tailwindcss` to compile CSS in browser directly. This is not intended for production use, however it can be used to demonstrate TailwindCSS features in browser.

## Usage

```html
<script src="https://unpkg.com/tailwindcss-browser"></script>

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

## License

MIT.