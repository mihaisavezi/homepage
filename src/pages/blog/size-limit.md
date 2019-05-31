---
path: "/blog/size-limit"
date: "2019-05-31"
title: "Today I learned: Size-limit - calculate the real cost of your JS for end users"
---

I found a tool that calculates the cost of your JS for end users. Found it [here](https://github.com/ai/size-limit).

You install it, add a [configuration file](https://github.com/ai/size-limit#config), then you run ```npm run size``` and get an output like this.

```
$ npm run size

  Package size: 177 B with all dependencies, minified and gzipped
  Loading time: 10 ms on slow 3G
  Running time: 49 ms on Snapdragon 410
  Total time:   59 ms
```

You can also configure a size budget and it will alert you when you exceed it. So now you know how much time it adds in different scenarios, like a slow connection or on a slow processor.


