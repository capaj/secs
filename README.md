# secs

[ms](https://github.com/zeit/ms), but with built in conversion to seconds.

```js
import ms from 'ms';

function secs(...args) {
  return Math.round(ms(...args) / 1000);
}
```

