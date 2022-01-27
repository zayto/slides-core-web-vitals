---
theme: penguin
layout: intro
title: Core Web Vitals
---

# Core Web Vitals

Performance & User Experience Metrics

<p class="author fixed bottom-2 right-8">Presented by Arnaud CORNILLON</p>

<Event showText="true" />

<style>
  .author {
    font-size: 14px;
  }
  h1 {
    /* color: #34ff99 !important; */
  }
</style>
<!--
  Some comment for presentator mode
-->

---

# What are the Core Web Vitals?

<span>3 core metrics</span> specified by Google to define **performance** & **good user experience metrics** for web pages.

- 🎨 **Largest Contentful Paint (LCP)** - loading
- <ic-baseline-touch-app /> **First Input Delay (FID)** - interactivity
- <mdi-arrow-down-bold-box /> **Cumulative Layout Shift (CLS)** - visual stability

<br>
<br>
<img src="/images/web-vitals.PNG" class="absolute top-50 right-30 h-50 rounded-35px shadow" />
<Event />
<SlidesCount />

<style>
  span {
    color: #A305FE;
    font-weight: bold;
  }
  p {
    max-width: 460px;
  }
</style>

<!--
- 3 core metrics specified by Google to define performance & good user experience metrics for web pages
- They apply to all web pages, are measurable in the field and are user-centric
- Each metric measures a different aspect of page experience
- 3 core metrics: LCP, FID, CLS to represent "Loading", "Interactivity" and "Visual Stability"
- Low number of metrics to make it easier for developers to focus on improving their website performance
- You need at least 75% of the page visits to be within the "good metrics" thresholds (for each metric) to meet the Web Vitals standards
-->

---
layout: text-image
clicks: 3
---

# Why should we care?

<div v-click-hide class="absolute right-20 top-30 h-80 w-80">
  <img src="https://media.giphy.com/media/wqbAfFwjU8laXMWZ09/giphy.gif"/>
  <span class="text-sm relative -top-10 -right-52 italic" >source: The Office</span>
</div>


<v-clicks at="1">

- Better web vitals indicate a better user experience
- Monitoring those vitals can help identify performance issues
- **Google Search rankings** take the vitals into account to determine a site's page ranking

</v-clicks>


<v-clicks at="3">


Learn more: [Google Search - page experience](https://developers.google.com/search/docs/advanced/experience/page-experience)

</v-clicks>

<Event />
<SlidesCount />

<style>
  h1 {
    width: 500px;
    font-weight: 500 !important;
  }
  li {
    width: 500px !important;
  }
  a {
    text-decoration: none !important;
  }
</style>

<!--
- Monitoring those vitals can help with identifying existing or new performance issues in a project
- Better web vitals => better user experience
- Google Search rankings take this into account to determine a site ranking
-->

---
layout: new-section
---

# Vitals Definition

<Event />

<style>
  h1 {
    color: #34f099 !important;
  }
  .bg-section {
    --tw-gradient-from: rgba(30, 60, 150, var(--tw-from-opacity, 1));
    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(255, 255, 255, 0));
    --tw-gradient-to: rgba(100, 30, 255, var(--tw-to-opacity, 1));
  }
</style>
---
layout: default
---

# Largest Contentful Paint (LCP)

Measures the time at which the largest content on the page is rendered (page **loading speed**)

<img class="w-150" src="/images/lcp_example.PNG"/>

<v-click at="1">

<div class="absolute right-10 top-20 text-right">
  <img class="w-80" src="/images/lcp.PNG" />
  <p><i>A good LCP is &lt;2.5s </i></p>
</div>
</v-click>

<Event />
<SlidesCount />

<style>
  p {
    max-width: 460px;
  }
</style>
<!-- 
- Measures page loading speed
- LCP measures the time at which the largest content on the page (image or text block) is rendered
- Ex: on pre-rendered pages, the title/text will be the largest content and maybe an image will load afterwards and become the largest "contentful" element (increasing the LCP score)
- A good LCP is <2.5s, a poor LCP is >4s
-->


---
layout: default
---
### First Input Delay (FID)
- Measures page interactivity (delay between load and interactive to the user)
- FID measures the delay between when a user first interacts with a page (i.e. when they click a link, tap on a button, or use a custom, JavaScript-powered control) and when the browser is actually able to begin processing event handlers in response to that interaction. (from [web.dev FID](https://web.dev/fid/))
- A good FID is <100ms, a poor FID is >300ms
- A poor FID indicates that the browser is busy running some other code (ex: parsing and executing a large JS file loaded by the app) and is blocking the main thread to handle and respond to the user events
- No FID in LightHouse report because LightHouse is a simulation of a page load and there is no real user interacting with the page. TBT is a substitute for FID
- TBT and FID measure the same thing: the responsiveness of the page during the initial page load

<Event />
<SlidesCount />

---
layout: text-image
media: ''
---

# Cumulative Layout Shift (CLS)

## What is a Layout Shift?
A layout shift is when a visible element changes position
Some layout shifts are fine (ex: after user events)


<img class="h-60" src="/images/cls_example.PNG"/>

<div v-click class="absolute top-40 right-10 h-80 w-80">
<video loop="" autoplay="" controls="" muted="true" poster="https://storage.googleapis.com/web-dev-assets/layout-instability-api/layout-instability-poster.png" width="658" height="510">
  <source src="https://storage.googleapis.com/web-dev-assets/layout-instability-api/layout-instability2.webm" type="video/webm; codecs=vp8">
  <source src="https://storage.googleapis.com/web-dev-assets/layout-instability-api/layout-instability2.mp4" type="video/mp4; codecs=h264">
</video>
</div>

<Event />
<SlidesCount />

<style>
  h1 {
    width: 600px;
  }

  h2 {
    width: 450px;
  }
  p {
    width: 440px;
  }
</style>

<!-- 
- What is a layout shift? A layout shift is when a visible element changes position
Some layout shifts are fine (ex: after user events)
Measures visual stability
- It measures the impact of the layout shifts that occur over the lifespan of the page
- CLS is a measure of the largest burst of layout shift scores for every unexpected layout shift that occurs during the entire lifespan of a page.
- A layout shift is when a visible element changes position, ex: when a new element is added it moves elements below it to move further down
- A layout shift is computed based on the importance of the shift, the score formula has changed recently (retrieves the largest burst of layout shift and not the total sum)
- A good CLS is <0.1, a poor CLS is >0.25

-->
---
layout: text-image
media: ''
---
# Cumulative Layout Shift (CLS)

The CLS measures visual stability during the lifespan of the page

<Event />
<SlidesCount />

--- 

# Resources

<div class="flex flex-row flex-space-between">
<div class="flex-1">

#### Web.dev Google Documentation
- [Vitals](https://web.dev/vitals/)
- [Learn Web Vitals](https://web.dev/learn-web-vitals/)
- [Metrics](https://web.dev/metrics/)
- [Improving load times](https://web.dev/fast/)
- [Web Vitals patterns](https://web.dev/patterns/web-vitals-patterns/)

<div class="my-10">

#### Blog posts
- [Efficiently loading 3rd-party JS](https://web.dev/efficiently-load-third-party-javascript/)
- [Defer non-critical CSS](https://web.dev/defer-non-critical-css/)
</div>
</div>

<div class="flex-1">

#### Videos
- [Measure what matters](https://www.youtube.com/watch?v=wGT9s6NW6hg) 22/03/2021, Google Chrome Developers channel
- [News on Core Web Vitals](https://www.youtube.com/watch?v=XxvHY4wC8Co) 18/05/2021, Google Chrome Developers channel

<div class="my-10">

#### Others / Tools
- [Page Speed Insights](https://pagespeed.web.dev/)
- [GitHub Web-vitals library](https://github.com/GoogleChrome/web-vitals#import-web-vitals-from-npm)
- [Web.dev - Lab example on improving 3rd-party JS](https://web.dev/codelab-optimize-third-party-javascript/)

</div>
</div>
</div>

<Event />
<SlidesCount />



