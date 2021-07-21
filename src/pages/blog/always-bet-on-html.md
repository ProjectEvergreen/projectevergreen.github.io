---
template: 'blog'
---

# Always Bet On ~~JavaScript~~ HTML 😎

#### By: [Owen Buckley](https://www.thegreenhouse.io/)
#### Date: MM/DD/YYYY

## There and Back Again

Like many in the frontend web development community, I find myself writing a _lot_ of JavaScript for just about everything I do.  Code, components, configuration, development tools, you can even use it to write your [CSS](https://blog.bitsrc.io/9-css-in-js-libraries-you-should-know-in-2018-25afb4025b9b) and [HTML](https://css-tricks.com/why-javascript-is-eating-html/)!  It's starting to feel like it is becoming the de facto starting point to writing almost anything for the web now.  Personally, I love writing JavaScript and it has been fundamental to the work I've done throughout my career.  I was thrilled to see all the amazing advanvcements in the language with the introduction of ES2015+ along with the meteoric rise of NodeJS.  JavaScript is everywhere!

However, I recently found that even with my own best intentions, I could lead myself astray and get caught up in the tools and technologies that have so come to dominate the landscape today.  But as it turned out, I think it was all for the best as through it. I was able to gain a greater connection with what I love about developing for the web and why after all these years, I have come to love it even more.  I think we're arriving at a great inflection point where the good, if not the best parts of that experience, are starting to come for free from the browser and with that, we can come to rely less on layers of tools and abstractions between us and the code and content we create.  At the end of the day, productivity and maintainability are critical factors to consider to ensure one can quickly go from idea to implementation.

I would like to share a bit about my recent journey in rediscovering my appreciation for the web and with it, a renewed sense of focus and purpose towards contributing to its growth and most importantly, being a better steward to all its users where I can.

<!-- friendly illustration or graphic would be great here! -->

> Yeah JavaScript is cool, but have you ever built your website in HTML before?


## When You Have a Hammer

Around the middle of 2020, I was in a position where some of the technical decisions on [a project](https://docs.google.com/document/d/1MwDkszKvq81QgIYa8utJgyUgSpLZQx9eKCWjIikvfHU) I had been working on were starting to catch up with me.  Initially I had opted to build on top of another tool that I had used a lot throughout my career and while it had certainly allowed for a great amount of speed and momentum in the early stages of this project, I realized in trying to see if I could bend it further to help solve another problem I was having, that I might be going about things the wrong way.  This not only helped snap me out of this "tooling" ensulated bubble I had come to find myself in, but that more fundamentally, I needed to step back and reassess assumptions I was making about what modern web development should look like in the first place.

As I zoomed out and took stock of the frontend ecosystem, I was seeing more and more that there was a rise in tools that were (self labeled or not) [_meta frameworks_](https://en.wiktionary.org/wiki/metaframework), which meant that they were stitching together a handful of tools to achieve a new product from that.  These new domain specific solutions were also often designed to be JavaScript (or a custom DSL) first in terms of how they presented the development experience, and usally aligned to a specific frontend framework or library.  

So before you could even get going you would have to learn:
- JavaScript
- Someone's mental model of the web
- How they opted to [glue it all togther](https://www.oreilly.com/radar/thinking-about-glue/)

Phew, seems like a lot of work!  😅

<div class="image-container">
<img src="/assets/blog/twitter-updating-a-website.png" alt="Tweet from Melissa McEwen. Updating a website made in 2002 is easier than updating a website made in 2017." />
</div>

> In essence, usage of tools that have these characterstics incurs upon themselves (and their users) not only the compexity of all those underlying tools, but also the knot of the bow that it ties around them.

Now, I'm not saying that these types of projects can't be successful or have their uses cases, many of them are and do, but this one-two punch of a trend stuck out to me.  For my own project, it was never my intention to go down any of those routes necessarily and so in this moment of clarity, I realized I had been missing the bigger picture of what I had set out to achieve in the first place.  Worse, that I was committing not only developers to undo points of friction with my approach, but also their end users.  These trends I had grown with throughout my career and had taken for granted were laid more bare than ever before, but thankfully, now with a choice much clearer than before.  

I thought about how I could produce an experience more aligned with how we all relate to and consume the web already, and so like a great band long into their career, with their greatest hits already behind them perhaps, I found inspiration in going [back to the basics](https://github.com/thescientist13/nono-poc/blob/master/notes/DOCS.md).


## A Perfect Circle

I realized what I loved about technologies like [JSX](https://reactjs.org/docs/introducing-jsx.html) and [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) was that I was still (_mostly_) writing HTML, or at least thinking in that way. Something about the declariative nature of it all spoke to me louder now, but I wanted to see how much more of that I could get from just the web itself.  It was around this time tools like **Snowpack**, **Vite**, and **Modern Web** were picking up steam as well, providing compelling solutions for a variety of "next generation" frontend development experiences like [no bundle development and ESM first workflows](https://www.greenwoodjs.io/about/how-it-works/).  It was also at this time that I was re-evaluating **Parcel** as part of my research across the landscape, and while I recall it having HTML as the "entry point" for its bundling process when it came out, it only "clicked" for me now how that single concept could be so innovative in its simplicity.  This is what had flown below my radar this whole time as I was adrift in this world of JavaScript.  HTML!  Of course.  It all made sense to me now and I knew what I needed to do!

I wanted to find a way to enable the creation of sites and apps for the web, in an isomorphic way so that there was ever only one authoring context or paradigm to worry about, and effectively eschewing DSLs or 3rd party templating languages, and focusing on Web Components and template literals as the main drivers of cross context (browser / server) development.  It would heavily leverage standard web technologies like the browser, HTTP and the DOM and emphasize HTML first.  Most importantly, staying ever more true to the web and the browser, or going "vendorless" if you will, would ensure that any gaps in knowledge and information could easily be supplemented by [the great docs over at MDN](https://developer.mozilla.org/).  In addition, I knew that making a mission out of delivering usable HTML at all costs, even if JavaScript was disabled, would be front of mind for this project, and would have a permanent influence in how I approached all other projects and decisions going forward.

> _What I had really wanted to build and failed to conceptualize at the outset, was a bridge between the conventions and convenience of the old, without having to sacrifice the power and elegance of the new._  

## Don't Outsource Your Core Competency

But what really invigorated me in all this was actually two fold.  Although I would shed the conveniences and leg work of the meta-framework foundation, I was also excited to try and meet the general web development community with a wider on-ramp of support.  I really started to dive deeper into topics such as [ESM in the browser and NodeJS](https://nodejs.org/api/esm.html), [Declarative Shadow DOM](https://web.dev/declarative-shadow-dom/), [`import` / `export` maps](https://www.infoq.com/news/2020/08/import-map-javascript-wicg/), and [ASTs](https://astexplorer.net/) to power the project based on a greater adherence and appreciation for first principals and web standards.  This satisfied not only my desires to grow and expand my own knowledge base (and still get to write JavaScript 🤓 ), but would help make the project more flexible and maintainable, more accessible to new comers who may only just be starting out with the web, and yet could also grow to support even the most experienced JavaScript developer's needs!

<div class="image-container">
<img src="/assets/blog/twitter-core-competency.png" alt="Someone said don't outsource your core competency and I think that applies to this case" />
</div>

The more I looked around, the more I found [the web was starting to become much more capable](https://github.com/whatwg) and that [HTML was finding new ways to grow up](https://github.com/webcomponents/community-protocols) to meet the expectations of modern web development for all developers.  With Web Components, you can wire up anything you want in a browser to express custom behavior and styles, and combined with ESM, the browser can keep doing more of the work for us instead of bundlers and build tools.  With those concepts [and more combined](https://www.greenwoodjs.io/about/how-it-works/), we can shed dependencies and overhead along the way without having to sacrifice the developer experiences we would come to expect from a modern web workflow, like fast local development reloading and optimized production builds.

> _From a product development perspective, it felt like the project (and myself) had finally found its true identity and calling._ 💚

## Onwards and Upwards

I think the main reason I chose to share this experience is that through all this, I've been greatly inspired by a lot of the work and projects in the JavaScript ecosystem, each with their own unique solutions and audiences and how fantastic it all is to have such a sheer amount of creativity and talent to draw inspiration from.  One thing I think we forget is just how much we all have in common at the end of the day.  On the flip side, I think we owe it to ourselves as developers to pick the right tools for the job (more on that [coming soon](https://reliablewebsummit.com/speakers/)!), and give ourselves a rest from all the JavaScript and decision fatigue.  

Not only that, but we owe it to all the users out there to be more mindful of the impacts of the work we're putting out there into the world.  As technologists we are trusted to provide pragmatic and useful solutions that are context and environment aware and make the most about the knowledge of the problem at hand.  We should take care to ensure that the long term beneficiaries of our work extends well past not just what is what most convenient for _us_ in the moment.

**I hope everyone goes out there and builds what their most passionate about.  Choose wisely, keep it simple, and have fun!**  ✌️

<!-- friendly illustration or graphic would be great here! -->

----

> _If you're interested in getting in learning more about modern web development or for ways to learn or contribute to our [projects](https://projectevergreen.github.io/projects/), please feel free to reach out and join us [in our Slack](https://join.slack.com/t/thegreenhouseio/shared_invite/enQtMzcyMzE2Mjk1MjgwLTU5YmM1MDJiMTg0ODk4MjA4NzUwNWFmZmMxNDY5MTcwM2I0MjYxN2VhOTEwNDU2YWQwOWQzZmY1YzY4MWRlOGI), [at our GitHub](https://github.com/ProjectEvergreen), or [on Twitter](https://twitter.com/PrjEvergreen)!_
