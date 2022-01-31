---
theme: penguin
layout: intro
title: Core Web Vitals
---

# Core Web Vitals

<p class="intro">Performance & User Experience Metrics</p>

<p class="author fixed bottom-2 right-8">Presented by Arnaud CORNILLON</p>

<Event showText="true" />

<style>
  .author {
    font-size: 14px;
  }

  .dark p.intro {
    font-size: 20px !important;
    background: rgb(30 30 140);
    padding: 5px 5px;
    border-radius: 5px;
    margin-left: 250px;
    margin-right: 250px;
  }
</style>
<!--
  INTRO
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
</div>


<v-clicks at="1">

- Better web vitals indicate a **better user experience**
- Monitoring those vitals can help **identify performance issues**
- **Google Search rankings** take the vitals into account to determine a site's page ranking

</v-clicks>

<div class="h-20"></div>

<v-clicks at="3">

Learn more: [Google Search - page experience](https://developers.google.com/search/docs/advanced/experience/page-experience)

<div class="h-10"></div>



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


<h1 class="h1">Metrics Definition</h1>

<Event />

<style>
  .h1 {
    color: white !important;
  }
  .bg-section {
    --tw-gradient-from: rgba(30, 60, 150, var(--tw-from-opacity, 1));
    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(255, 255, 255, 0));
    --tw-gradient-to: rgba(100, 30, 255, var(--tw-to-opacity, 1));
  }
  .dark .h1 {
    color: #34f099 !important;
  }
  .dark .bg-section {
    --tw-gradient-from: rgba(30, 60, 150, var(--tw-from-opacity, 1));
    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(255, 255, 255, 0));
    --tw-gradient-to: rgba(100, 30, 255, var(--tw-to-opacity, 1));
  }
</style>
---
layout: default
---

# Largest Contentful Paint (LCP)

Measures the time at which the **largest content** on the page is **rendered**.

--> page **loading speed**

<img class="w-145" src="/images/lcp_example.PNG"/>

<v-click at="1">

<div class="absolute right-10 top-20 text-right">
  <img class="w-80 rounded" src="/images/lcp.PNG" />
  <p><i>A good LCP is &lt;2.5s </i></p>
</div>
</v-click>

<Event />
<SlidesCount />

<style>
  p {
    max-width: 400px;
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
# First Input Delay (FID)
"FID measures the delay between when a user first interacts with a page [...] and when the browser is actually able to begin processing event handlers in response to that interaction". - [web.dev - FID](https://web.dev/fid/)

<small class="pl-5"><i>ex: click a link, tap a button, use a JS-powered control...</i></small>

--> page **interactivity &amp; load responsiveness**

<div class="pt-15"></div>

<div class="absolute right-10 top-20 text-right">
  <img class="w-80 rounded ml-30" src="/images/fid.PNG" />
  <p><i>A good FID is &lt;100ms </i></p>
</div>

<div v-click>
FID (and TBT) can help to identify <b>performance issues</b>

<small class="pl-5"><i>ex: main thread blocked while parsing/executing a large JS file</i></small>

  <div class="tbt">
    <b>Total Blocking Time (<a href="https://web.dev/tbt/">TBT</a>, tasks &gt;50ms)</b> is a substitute to FID when lab testing
    <img class="w-80 mt-5" src="/images/tbt_example.PNG" />
  </div>
</div>

<div class="h-20"></div>

<Event />
<SlidesCount />

<style>
  h1 {
    margin-top: 16px !important; 
    margin-bottom: 16px !important;
  }
  .tbt {
    a {
      color: white !important;
    }
    background: rgb(45 45 140);
    color: white !important;
    line-height: 22px;
    padding: 15px 20px;
    border-radius: 5px;
    max-width: 350px;
    position: absolute;
    right: 50px;
    bottom: 120px;
  }
  .dark .tbt {
    background: rgb(45 45 140);
    line-height: 22px;
    padding: 15px 20px;
    border-radius: 5px;
    max-width: 350px;
    position: absolute;
    right: 50px;
    bottom: 120px;
  }
  .interactions {
    max-width: 100px !important;
  }
  p {
    width: 440px;
    margin-top: 10px !important;
    margin-bottom: 0px !important;
    padding-bottom: 0px !important;
  }

  li {
    width: 440px;
  }
</style>

<!-- 
- Measures page interactivity (delay between first user interaction after initial page load and browser response)
- FID measures the delay between when a user first interacts with a page (i.e. when they click a link, tap on a button, or use a custom, JavaScript-powered control) and when the browser is actually able to begin processing event handlers in response to that interaction. (from [web.dev FID](https://web.dev/fid/))
- A poor FID indicates that the browser is busy running some other code (ex: parsing and executing a large JS file loaded by the app) and is blocking the main thread to handle and respond to the user events
- No FID in LightHouse report because LightHouse is a simulation of a page load and there is no real user interacting with the page. TBT is a substitute for FID when lab testing

- Total Blocking Time (TBT) is a similar measurement for lab testing (as no real user)
- FID and TBT both both measure the **page responsiveness during the initial page load**
- The Total Blocking Time (TBT) metric measures the total amount of time between FCP and Time-to-Interactive (TTI) where the main thread was blocked for long enough to prevent input responsiveness.

-->

---
layout: default
---
# First Input Delay (FID)
FID: "delay between when a user first interacts with a page [...] and when the browser is actually able to begin processing event handlers in response to that interaction"

<img class="w-160 rounded ml-30" src="/images/fid_example.PNG" />

<Event />
<SlidesCount />

<style>
  h1 {
    margin-top: 20px !important;
    margin-bottom: 16px !important;
  }
</style>

<!-- 

-->
---
layout: text-image
media: ''
---

# Cumulative Layout Shift (CLS)

### What is a Layout Shift?
A layout shift is when <span>a visible element changes position</span>, usually due to an element being added to the DOM above it.

Some layout shifts are *fine* (ex: shortly after user events).


<div class="pl-10">
  <img class="h-60 rounded" src="/images/cls_example.PNG"/>
</div>

<div v-click class="absolute top-30 right-10">
  <div class="h-100 w-100">
    <video loop="" autoplay="" controls="" muted="true" poster="https://storage.googleapis.com/web-dev-assets/layout-instability-api/layout-instability-poster.png" width="658" height="510">
      <source src="https://storage.googleapis.com/web-dev-assets/layout-instability-api/layout-instability2.webm" type="video/webm; codecs=vp8">
      <source src="https://storage.googleapis.com/web-dev-assets/layout-instability-api/layout-instability2.mp4" type="video/mp4; codecs=h264">
    </video>
    <p class="">A layout shift in action... <noto-angry-face /></p>
  </div>
</div>

<Event />
<SlidesCount />

<style>
  h1 {
    width: 600px;
    font-weight: 500 !important;
    margin-top: 30px !important;
    margin-bottom: 20px !important;
  }

  span {
    color: #A305FE;
    font-weight: bold;
  }

  h3 {
    font-weight: 400 !important;
    width: 450px;
    padding-bottom: 0px !important;
    margin: 0 !important;
  }
  p {
    width: 440px;
    margin-top: 10px !important;
    margin-bottom: 0px !important;
    padding-bottom: 0px !important;
  }
</style>

<!-- 
- What is a layout shift? A layout shift is when a visible element changes position
Some layout shifts are fine (ex: after user events)
- A layout shift is when a visible element changes position, ex: when a new element is added it moves elements below it to move further down
- A layout shift is computed based on the importance of the shift

-->
---
layout: default
---
# Cumulative Layout Shift (CLS)

The **CLS** is a measure of the <span>largest burst of layout shift scores</span> for every unexpected layout shift that occurs during the entire lifespan of a page.

--> page **visual stability** over time

<v-click at="1">
  <div class="pl-10">
    <img class="h-60" src="/images/cls_sessions.PNG"/>
    <small><i>source: <a href="https://web.dev/cls/">web.dev - CLS</a></i></small>
  </div>
  
  <div class="absolute right-10 top-20 text-right">
    <img class="w-80 rounded" src="/images/cls.PNG" />
    <p><i>A good CLS is &lt;0.1 </i></p>
  </div>
</v-click>

<div class="h-100"></div>



<Event />
<SlidesCount />

<!-- 
CLS: Measures visual stability
- Measure of the largest burst of layout shift scores for every unexpected layout shift that occurs during the entire lifespan of a page.
- the score formula for CLS has changed recently (retrieves the largest burst of layout shift and not the total sum of all layout shifts)
- A good CLS is <0.1, a poor CLS is >0.25
-->
<style>
   h1 {
    width: 600px;
    font-weight: 500 !important;
    margin-top: 30px !important;
    margin-bottom: 20px !important;
  }
  span {
    color: #A305FE;
    font-weight: bold;
  }
  p {
    max-width: 460px;
  }
</style>
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
<p class="credits">Slides made with <a href="https://github.com/slidevjs/slidev">slidev</a> using @alvarosabu <a href="https://github.com/alvarosabu/slidev-theme-penguin">theme</a>.</p>
<Event />
<SlidesCount />

<style>
  h1 {
    margin-top: 0px !important;
    margin-bottom: 10px !important;
  }
  h4 {
    margin-top: 0px !important;
    margin-bottom: 0px !important;
  }
  .credits {
    position: absolute;
    margin: 0 !important;
    bottom: 8px;
    right: 70px;
    font-size: 14px;
    font-style: italic;
  }
</style>



