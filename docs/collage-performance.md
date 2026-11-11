# The unfiled collage

The sixteen generated objects now occupy individual positions in the same field
as photographs, essays, record controls and five independent post links. There is
no object parade or separate writing/research section. Desktop, tablet and mobile
have independently composed placements. Clicking an object rotates it and changes
the surrounding arrangement; the shuffle control changes the arrangement alone.
Hover/focus previews remain in a viewport-clamped portal. The animation toggle
also respects the initial reduced-motion preference.

## Image delivery

Original artwork remains in `public/generated` and `public/portraits`. Run
`pnpm images:optimize` to regenerate the committed `public/media` variants with
the Sharp version already installed by Next. Regeneration is not part of runtime
or deployment: a fresh visitor receives a static WebP, with no cold image-optimizer
request. Responsive `srcSet` selects 160/320/640px transparent objects, 640/1280px
room imagery, and 480/960px portraits. Dimensions reserve layout space.

The 20 originals total 23,398,880 bytes. Their largest WebP variants together total
1,334,702 bytes, a 94.3% byte reduction. This is an asset-size comparison, not a
measured page-load-time improvement. Smaller screens can select smaller variants.
Only first-screen assets are eager; the rest use native lazy loading and async
decoding. The room popup no longer downloads an invisible PNG while closed.
Static image responses have a one-day browser cache with stale revalidation.
Hover reuses the already loaded image URL rather than starting another request.
