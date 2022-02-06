---
theme: penguin
layout: new-section
title: Core Web Vitals
download: true
---

<h1>Core Web Vitals</h1>

<p class="intro">Performance & User Experience Metrics</p>

<p class="author fixed bottom-2 right-8"><small>Speaker: Arnaud CORNILLON</small></p>

<Event showText="true" />

<style>
  .author {
    font-size: 14px;
    color: white;
  }

  p.intro {
    color: white;
  }

  p.intro {
    font-size: 20px;
    background: rgb(30 30 140);
    padding: 5px 5px;
    border-radius: 5px;
    margin-left: 250px;
    margin-right: 250px;
  }
  h1 {
    font-size: 52px !important;
    color: white !important;
  }
  .bg-section {
    --tw-gradient-from: rgba(30, 60, 150, var(--tw-from-opacity, 1));
    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(255, 255, 255, 0));
    --tw-gradient-to: rgba(100, 30, 255, var(--tw-to-opacity, 1));
  }
  .dark .bg-section {
    --tw-gradient-from: rgba(30, 60, 150, var(--tw-from-opacity, 1));
    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(255, 255, 255, 0));
    --tw-gradient-to: rgba(100, 30, 255, var(--tw-to-opacity, 1));
  }
</style>
<!--
  INTRO
-->

---

# What are the Core Web Vitals?

<span>3 core metrics</span> specified by Google to measure **performance** & the **user experience** for web pages.

<div class="h-5"></div>

- 🎨 **Largest Contentful Paint (<span>LCP</span>)** - loading

<div class="h-5"></div>

- <ic-baseline-touch-app /> **First Input Delay (<span>FID</span>)** - interactivity

<div class="h-5"></div>

- <mdi-arrow-down-bold-box /> **Cumulative Layout Shift (<span>CLS</span>)** - visual stability

<div class="h-25"></div>

<img src="/web-vitals.png" class="absolute top-50 right-30 h-50 rounded-35px shadow" />
<Event />
<SlidesCount />

<style>
  span {
    color: rgb(153, 53, 211);
  }
  .dark span {
    color: rgb(52, 211, 153) !important;
  }
  span {
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

# Why should I care?

<div v-click-hide class="absolute right-20 top-30 h-80 w-80">
  <img src="https://media.giphy.com/media/wqbAfFwjU8laXMWZ09/giphy.gif"/>
</div>


<v-clicks at="1">

- Better web vitals indicate a **<span>better user experience</span>**
- Monitoring those vitals can help **<span>identify performance issues</span>**
- **<span>Google Search rankings</span>** take the vitals into account to determine a site's page ranking

</v-clicks>


<v-clicks at="3">

Learn more: [Google Search - page experience](https://developers.google.com/search/docs/advanced/experience/page-experience)

<div class="h-30"></div>


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
  span {
    color: rgb(153, 53, 211);
  }
  .dark span {
    color: rgb(52, 211, 153) !important;
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

--> page **<span>loading speed</span>**

<img class="w-145" src="/lcp_example.png"/>

<v-click at="1">

<div class="absolute right-10 top-20 text-right">
  <img class="w-80 rounded" src="/lcp.png" />
  <p><i>A good LCP is &lt;2.5s </i></p>
</div>
</v-click>

<Event />
<SlidesCount />

<style>
  span {
    color: rgb(153, 53, 211);
  }
  .dark span {
    color: rgb(52, 211, 153) !important;
  }
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
<i>"FID measures the delay between when a user first interacts with a page [...] and when the browser is actually able to begin processing event handlers in response to that interaction"</i> - [web.dev - FID](https://web.dev/fid/)

<small class="pl-5"><i>ex: click a link, tap a button, use a JS-powered control...</i></small>

--> page **<span>interactivity &amp; load responsiveness</span>**

<div class="pt-15"></div>

<div class="absolute right-10 top-20 text-right">
  <img src="/fid.png" class="w-80 rounded ml-30" />
  <p><i>A good FID is &lt;100ms </i></p>
</div>

<div v-click>
FID (and TBT) can help identify <b>performance issues</b>

<small class="pl-5"><i>ex: main thread blocked while parsing/executing a large JS file</i></small>

  <div class="tbt">
    <b><span>Total Blocking Time</span> (<a href="https://web.dev/tbt/">TBT</a>, tasks &gt;50ms)</b> is a substitute to FID when lab testing
    <img class="w-80 mt-5" src="/tbt_example.png" />
    <small><i>TBT representation on main thread timeline</i></small>
  </div>
</div>

<div class="h-20"></div>

<Event />
<SlidesCount />

<style>
  span {
    color: rgb(153, 53, 211);
  }
  .dark span {
    color: rgb(52, 211, 153) !important;
  }
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
    right: 40px;
    bottom: 100px;
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

<p>Schema representing FID:</p>
<p class="caption"><i>- delay after first user input before the browser can respond to the event</i></p>
<div>
  <small class="topRight"><i>See <a href="https://web.dev/fid">web.dev - FID</a></i></small>
  <img class="w-130 rounded ml-30" src="/fid_example.png" />
</div>


<Event />
<SlidesCount />

<style>
  p {
    max-width: 400px;
  }
  p.caption {
    margin-left: 20px;
    margin-bottom: 20px;
  }
  h1 {
    margin-top: 20px !important;
    margin-bottom: 16px !important;
  }
  .topRight {
    position: relative;
    right: -530px;
    top: -7px;
  }
</style>

<!-- 

-->
---
layout: text-image
media: ''
---

# Cumulative Layout Shift (CLS)

#### What is a Layout Shift?
A layout shift is when <span>a visible element changes position</span>, usually due to an element being added to the DOM (above it).

Some layout shifts are *fine* (ex: shortly after user events).


<div class="pl-10">
  <img class="h-60 rounded" src="/cls_example.png"/>
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
    font-weight: bold;
    color: rgb(153, 53, 211);
  }
  .dark span {
    color: rgb(52, 211, 153) !important;
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

--> page **<span>visual stability</span>** over time

<v-click at="1">
  <div class="pl-10">
    <img class="h-60" src="/cls_sessions.png"/>
    <small><i>source: <a href="https://web.dev/cls/">web.dev - CLS</a></i></small>
  </div>
  
  <div class="absolute right-10 top-20 text-right">
    <img class="w-80 rounded" src="/cls.png" />
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
    font-weight: bold;
    color: rgb(153, 53, 211);
  }
  .dark span {
    color: rgb(52, 211, 153) !important;
  }
  p {
    max-width: 460px;
  }
</style>
---
layout: new-section
---


<h1 class="h1">Improving Web Vitals Scores</h1>

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
  .dark .bg-section {
    --tw-gradient-from: rgba(30, 60, 150, var(--tw-from-opacity, 1));
    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(255, 255, 255, 0));
    --tw-gradient-to: rgba(100, 30, 255, var(--tw-to-opacity, 1));
  }
</style>
---
layout: default
---
# Improve the LCP score (1/3)

Make sure your resources are <span>rendered quickly</span>.

  - use SSR or SSG when possible for a faster load
  - use [progressive loading techniques](https://jmperezperez.medium.com/more-examples-of-progressive-image-loading-f258be9f440b)
    <br><i class="inner">ex: lazy-loading on images, blurred placeholders</i>
  - load JS/CSS in a way that is not blocking the HTML parser
    <br><i class="inner">ex: CSS / JS code splitting, load critical files first</i>

<div class="absolute right-1 top-40 h-100 w-100">
  <img src="/lcp_lighthouse.png"/>
  <small><i>PageSpeed Insights report: Render-blocking resources section</i></small>
</div>

<div class="h-100"></div>
<div class="bottomRight">

<ol class="resources">

  - [Efficiently load 3rd party JS](https://web.dev/efficiently-load-third-party-javascript/)
  - [Defer non-critcal CSS](https://web.dev/defer-non-critical-css/)
  - [Optimize 3rd-party JS (lab tutorial)](https://web.dev/codelab-optimize-third-party-javascript/)

</ol>

</div>

<Event />
<SlidesCount />

<!-- 
TBD
-->
<style>
  span {
    font-weight: bold;
    color: rgb(153, 53, 211);
  }
  .dark span {
    color: rgb(52, 211, 153) !important;
  }
  h1 {
    width: 600px;
    font-weight: 500 !important;
    margin-top: 30px !important;
    margin-bottom: 20px !important;
  }
  p {
    max-width: 460px;
  }
  .bottomRight {
    position: fixed;
    bottom: 40px;
    left: 80px;
  }
  .resources {
    li {
      list-style: none;
    }
  }
  i.inner {
    margin-left: 20px;
  }
</style>
---
layout: default
---
# Improve the LCP score (2/3)

Make sure your resources are <span>discovered quickly</span>.

  - load resources direclty from the main HTML document
    <br><i class="inner">ex: inline fonts, inline critical CSS</i>
  - use resource hints to set the loading priority for important resources
    <br><i class="inner">ex: preconnect, prefetch, prerender on links, see [W3 Resource Hints](https://www.w3.org/TR/resource-hints/#resource-hints)</i>


<div class="absolute left-30 top-90 h-140 w-140">
  <img src="/fcp_links.png"/>
  <small><i>Adding resource hints & async/defer to improve page load performance</i></small>
</div>

<div class="h-100"></div>

<Event />
<SlidesCount />

<!-- 
TBD
-->
<style>
  span {
    font-weight: bold;
    color: rgb(153, 53, 211);
  }
  .dark span {
    color: rgb(52, 211, 153) !important;
  }
  h1 {
    width: 600px;
    font-weight: 500 !important;
    margin-top: 30px !important;
    margin-bottom: 20px !important;
  }
  p {
    max-width: 460px;
  }
  i.inner {
    margin-left: 20px;
  }
</style>
---
layout: default
---
# Improve the LCP score (3/3)

Make sure your resources are <span>sent quickly</span>.

  - Use CDNs (closer to the edge user, faster response times)
  - Optimize server response times
  - Use compression for resources
  <br><i class="inner">ex: gzip / brotli compression formats</i>
  - Optimize images and use newer formats
  <br><i class="inner">ex: WebP, AVIF (not fully supported)</i>


<div class="h-100"></div>
<Event />
<SlidesCount />

<!-- 
TBD
-->
<style>
  i.inner {
    margin-left: 20px;
  }
   h1 {
    width: 600px;
    font-weight: 500 !important;
    margin-top: 30px !important;
    margin-bottom: 20px !important;
  }
  span {
    font-weight: bold;
    color: rgb(153, 53, 211);
  }
  .dark span {
    color: rgb(52, 211, 153) !important;
  }
  p {
    max-width: 460px;
  }
</style>
---
layout: default
---
# Improve the FID score

<div class="h-10"></div>

- avoid loading and running heavy Javascript during the initial page load

<div class="h-5"></div>

- use <span>code splitting</span> & <span>lazy-loading</span>, remove dead code, analyze your <span>bundle sizes</span> and 3rd party code

<div class="h-5"></div>

- use LightHouse to identify scripts running <span>long main-thread tasks</span> and the <span>Total Blocking Time</span> metrics

<div class="absolute right-1 top-40 h-110 w-110">
  <img src="/tbt_lighthouse.png"/>
  <small><i>PageSpeed Insights report: "Avoid Long Main Thread Tasks" section</i></small>
</div>


<div class="h-50"></div>
<Event />
<SlidesCount />

<!-- 
TBD
-->
<style>
  i.inner {
    margin-left: 20px;
  }
   h1 {
    width: 600px;
    font-weight: 500 !important;
    margin-top: 30px !important;
    margin-bottom: 20px !important;
  }
  span {
    font-weight: bold;
    color: rgb(153, 53, 211);
  }
  .dark span {
    color: rgb(52, 211, 153) !important;
  }
  p {
    max-width: 460px;
  }
  li {
    max-width: 460px;
  }
</style>
---
layout: default
---
# Improve the CLS score

- Set <span>width/height atttributes</span> on all images, videos, iframes

<div class="h-5"></div>

- Avoid CSS animations that cause layout shifts

<div class="h-5"></div>

- Don't add any element above the loaded content unless its a response to the user interaction
  <br><i class="inner">ex: opening a filter box or a menu</i>

<div class="h-5"></div>

- Use LightHouse's <span><i><small>"Avoid large layout shifts"</small> section</i></span> to identify elements creating a layout shift

<div class="absolute right-1 top-40 h-100 w-100">
  <img src="/cls_lighthouse.png"/>
  <small><i>PageSpeed Insights report: CLS diagnostic on images</i></small>
</div>

<div class="h-50"></div>
<Event />
<SlidesCount />

<!-- 
TBD
-->
<style>
  i.inner {
    margin-left: 20px;
  }
   h1 {
    width: 600px;
    font-weight: 500 !important;
    margin-top: 30px !important;
    margin-bottom: 20px !important;
  }
  span {
    font-weight: bold;
    color: rgb(153, 53, 211);
  }
  .dark span {
    color: rgb(52, 211, 153) !important;
  }
  p {
    max-width: 460px;
  }
  li {
    max-width: 480px;
  }
</style>
---
layout: new-section
---


<h1 class="h1">Measuring Web Vitals</h1>

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
  .dark .bg-section {
    --tw-gradient-from: rgba(30, 60, 150, var(--tw-from-opacity, 1));
    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(255, 255, 255, 0));
    --tw-gradient-to: rgba(100, 30, 255, var(--tw-to-opacity, 1));
  }
</style>
---
layout: default
---

# How to measure those metrics?

- [Page Speed Insights](https://pagespeed.web.dev/) - simplest way, get a full report
- [Web Vitals Chrome Extension](https://github.com/GoogleChrome/web-vitals-extension) - during navigation, in your browser
- [LightHouse in ChromeDevtools](https://developers.google.com/web/tools/lighthouse) - generates lab data
<div class="h-10"></div>

<v-clicks at="1">
<div>

Others:
- [Google Search Console](https://search.google.com/)
- [Web-Vitals library](https://github.com/GoogleChrome/web-vitals) - npm package (145 kB)
- [Web Vitals Report](https://github.com/GoogleChromeLabs/web-vitals-report) - web app with Google Analytics plugin

<div class="absolute right-10 top-90">
<small><i>Logging Web Vitals within the code with WebVitals package</i></small>

```ts
import { getLCP, getFID, getCLS } from 'web-vitals';

// 
getCLS(console.log);
getFID(console.log);
getLCP(console.log);
```
</div>

</div>
</v-clicks>

<div class="h-40"></div>

<Event />
<SlidesCount />

<div class="absolute right-10 top-30 w-60">
  <small><i>Web Vitals via Chrome Extension</i></small>
  <img src="/chrome_extension.png"/>
</div>


<!-- 
- Page Speed Insights is the easiest with the "field data" section (representing real users metrics from the last 28 days) and the lab data section (representing the equivalent of LightHouse simulations)
- Google Search Console provides historical performance data and metrics on each page of the site (but you need to own the website to access those metrics)
- Web-vitals library (available on npm) makes it easier to collect/log the metrics => can be paired with Google Analytics

- [Web Vitals Report]: a web app to visualize Web Vitals reports created by sending Web Vitals data in Google Analytics
- [Web Vitals Chrome Extension]: a Chrome extension to visualize the web vitals of a website during navigation
-->


<style>
  a {
    text-decoration: none !important;
  }
  i.inner {
    margin-left: 20px;
  }
  h1 {
    width: 600px;
    font-weight: 500 !important;
    margin-top: 30px !important;
    margin-bottom: 20px !important;
  }
  span .enhance {
    font-weight: bold;
    color: rgb(153, 53, 211);
  }
  .dark span .enhance {
    color: rgb(52, 211, 153) !important;
  }
  p {
    max-width: 460px;
  }
  li {
    max-width: 430px;
  }
</style>
---
layout: default
---

# Pagespeed Insights



<Event />
<SlidesCount />

<div v-click-hide>
  <p class="mb-20"><small><i>Pagespeed report: Lab data (~LightHouse)</i></small></p>
  
  - LCP, TBT (equivalent to FID), CLS
  - Time To Interactive (TTI, page fully interactive), First Contentful Paint, Speed Index (how quickly the content appears)

  <div class="absolute right-10 top-10 w-130">
    <img src="/pagespeed_example_2.png"/>
  </div>
</div>

<v-clicks at="1">
<div>
  <p><small><i>Pagespeed report: real users data</i></small></p>
  <ul>
  <li>FCP, FID, LCP, CLS</li></ul>
    <div class="absolute right-10 top-40 w-160">
      <img src="/pagespeed_example_1.png"/>
    </div>
</div>
</v-clicks>

<div class="h-100"></div>

<!-- 
TBD
-->


<style>
  h1 {
    width: 600px;
    font-weight: 500 !important;
    margin-top: 30px !important;
    margin-bottom: 20px !important;
  }
  li {
    max-width: 350px;
  }
</style>

---
layout: default
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
- [Measure what matters](https://www.youtube.com/watch?v=wGT9s6NW6hg) 22/03/2021, Google Chrome Developers channel (8min)
- [News on Core Web Vitals](https://www.youtube.com/watch?v=XxvHY4wC8Co) 18/05/2021, Google Chrome Developers channel (14min)

<div class="my-10">

#### Others / Tools
- [Page Speed Insights](https://pagespeed.web.dev/)
- [GitHub Web-vitals library](https://github.com/GoogleChrome/web-vitals#import-web-vitals-from-npm)
- [Web.dev - Lab example on improving 3rd-party JS](https://web.dev/codelab-optimize-third-party-javascript/)

</div>
</div>
</div>
<p class="credits">Slides made with <a href="https://github.com/slidevjs/slidev">slidev</a> using @alvarosabu <a href="https://github.com/alvarosabu/slidev-theme-penguin">theme</a></p>
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
    right: 90px;
    font-size: 14px;
    font-style: italic;
  }
</style>



