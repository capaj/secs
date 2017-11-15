# secs

[ms](https://github.com/zeit/ms), but with built in conversion to seconds. Usage is trivial

```js
secs(2 * 24 * 60 * 60)// '2d'
secs(2 * 24 * 60 * 60, {long: true})// '2 days'
secs('2d') // 172800
```

