---
template: 'blog'
---

# Always Bet On ~~JavaScript~~ HTML 😎

#### By: [Owen Buckley](https://www.thegreenhouse.io/)
#### Date: MM/DD/YYYY

## There and Back Again

Like many in the frontend web development community, I find myself writing a _lot_ of JavaScript for just about everything I do; components, configuration, development tools, and you can even use it to write your [CSS](https://blog.bitsrc.io/9-css-in-js-libraries-you-should-know-in-2018-25afb4025b9b) and [HTML](https://css-tricks.com/why-javascript-is-eating-html/)!  It's starting to feel like it has become the de facto starting point for writing almost anything for the web now.

I love writing JavaScript and it has been fundamental to the work I've done throughout my career.  However, I recently found that even with my own best intentions, I could lead myself astray and get caught up in the tools and technologies that have so come to dominate the landscape today.  But as it turned out, I think it was all for the best as through it all, I was able to gain a greater connection with what I love about developing for the web and why, after all these years, I have come to love it even more.  

I would like to share this recent journey in rediscovering my appreciation for the web and with it, a renewed sense of focus and purpose towards contributing to its growth and most importantly, being a better steward to all its diverse sets of users.

<!-- friendly illustration or graphic would be great here! bigger picture? -->

> Yeah, JavaScript is cool, but have you ever built your website in HTML before?


## When You Have a Hammer

Around the middle of 2020, I was in a position where some of the technical decisions on [a project](https://docs.google.com/document/d/1MwDkszKvq81QgIYa8utJgyUgSpLZQx9eKCWjIikvfHU) I had been working on were starting to catch up with me.  Initially I had opted to build on top of another tool that I had used a lot throughout my career.  While it had certainly allowed for a great amount of speed and momentum in the early stages of this project, I realized in trying to see if I could bend it further to help solve another problem I was having, that I might be going about things the wrong way.  This pause for reflection and investigation not only helped snap me out of this comfortable "tooling" bubble I had come to find myself in, but that more fundamentally, I needed to step back and reassess assumptions I was making about what modern day web development should look like in the first place.

As I zoomed out and took stock of the frontend ecosystem, I was seeing more and more that there was a rise in tools that were (self-labeled or not) [_meta frameworks_](https://en.wiktionary.org/wiki/metaframework), which meant that they were stitching together a handful of tools to achieve a new product from that.  In some cases, tools even built themselves _on top_ of these meta frameworks!  These new "domain" specific solutions were often designed to be JavaScript or [DSL](https://en.wikipedia.org/wiki/Domain-specific_language) centric in terms of how they presented the development experience, and usually aligned to a specific frontend framework or library. (Or multiple, in some cases!)  

So, before you could even get going you would have to learn:
- JavaScript
- Someone's mental model of the web
- How they [glue it all together](https://www.oreilly.com/radar/thinking-about-glue/)

Phew, seems like a lot of work!  😅

<div class="image-container">
  <img src="/assets/blog/twitter-updating-a-website.png" alt="Tweet from Melissa McEwen. Updating a website made in 2002 is easier than updating a website made in 2017." loading="lazy"/>
</div>

> In essence, these kinds of tools incur upon themselves and their users not only the managed complexity and roadmap of all those underlying tools, but also the knot of the bow they use to tie it all together.

Now, I'm not saying that these types of projects don't have their uses cases, but this one-two punch of a trend stuck out to me, even for trivial tasks like creating a basic static website!  For my own project, which is in the category of being a site builder, it was never my intention to go down any of those routes necessarily and so in this moment of clarity, I realized I had been missing the bigger picture of what I had set out to achieve in the first place.  Worse, that I was committing not only developers to undo points of friction with my approach, but also their end users.  These trends I had grown with throughout my career and had taken for granted were laid more bare than ever before, but thankfully, now with a choice much clearer than before.  

I thought about how I could produce an experience more aligned with how we all relate to and consume the web already.  So, like a great band long into their career, with their greatest hits already behind them perhaps, I found inspiration in going [back to the basics](https://github.com/thescientist13/nono-poc/blob/master/notes/DOCS.md).


## A Perfect Circle

I realized what I loved about technologies like [JSX](https://reactjs.org/docs/introducing-jsx.html) and [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) was that I was still (_mostly_) writing HTML, or at least thinking in that way. Something about the declarative nature of it all spoke to me louder now, but I wanted to see how much more of that I could get from just the web itself.  It was around this time tools like **Snowpack**, **Vite**, and **Modern Web** were picking up steam as well, providing compelling solutions for a variety of "next generation" frontend development experiences like [no bundle development and ESM first workflows](https://www.greenwoodjs.io/about/how-it-works/).  It was also at this time that I was re-evaluating **Parcel** as part of my research across the landscape.  While I recall it having HTML as the "entry point" for its bundling process when it came out, it only "clicked" for me now how that single concept could be so innovative in its simplicity.  This is what had flown below my radar this whole time as I was adrift in this world of JavaScript.  HTML!  Of course.  It all made sense to me now and I knew what I needed to do!

I wanted to find a way to enable the creation of sites and apps for the web, in a seamless way such that there would only be one authoring paradigm to worry about - by eschewing DSLs and 3rd party templating languages, and focusing on HTML, CSS, and Web Components as the main drivers of a web first development experience.  It would heavily leverage standard web technologies and concepts like the browser / HTTP, the DOM and progressive enhancement, and emphasize HTML "first" development.  Most importantly, staying closer to the web and the browser, or going "vendorless" if you will, would ensure that any gaps in knowledge could be supplemented by [the great web developer docs over at MDN](https://developer.mozilla.org/).  Thinking HTML first was just the jolt I needed to help me re-evaluate all my current perceptions and better align future technical decision making.

> _What I had really wanted to build and failed to conceptualize at the outset, was a bridge between the conventions and convenience of the old, without having to sacrifice the power and elegance of the new and its risk for bringing in unnecessary or unreasonable complexity, overhead, and maintenance._  

## Don't Outsource Your Core Competency

But what really invigorated me in all this was actually two-fold.  Although I would shed the conveniences and leg work of the meta-framework foundation, I was also excited to try and meet the general web development community with a broader on-ramp and learning curve of support with this HTML and browser first approach.  It encouraged me to really dive deeper into topics such as [ESM in the browser and NodeJS](https://nodejs.org/api/esm.html), [Declarative Shadow DOM](https://web.dev/declarative-shadow-dom/), [`import` / `export` maps](https://www.infoq.com/news/2020/08/import-map-javascript-wicg/), and [ASTs](https://astexplorer.net/) to power the project based on a greater adherence and appreciation for first principals and web standards.  This satisfied not only my desires to grow and expand my own knowledge base (and still get to write JavaScript 🤓 ), but would help make the project more flexible and maintainable, more accessible to newcomers who may only just be starting out with the web, yet could also grow to support even the most experienced JavaScript developer's needs.

<div class="image-container">
  <img src="/assets/blog/twitter-core-competency.png" alt="Someone said don't outsource your core competency and I think that applies to this case" loading="lazy" />
</div>

The more I looked around, the more I found [the web was starting to become much more capable](https://github.com/whatwg) and that [HTML was finding new ways to grow up](https://github.com/webcomponents/community-protocols) to meet the expectations of modern web development for all developers.  With Web Components, you can wire up anything you want in a browser to express custom behavior and styles, and combined with ESM, the browser can keep doing more of the work for us instead of bundlers and build tools.  With those concepts [and more combined](https://www.greenwoodjs.io/about/how-it-works/), we can shed dependencies and overhead along the way without having to sacrifice the developer experiences we would come to expect from a modern web workflow!

> From a product development perspective, it felt like the project (and myself) had finally found its true identity and calling. 💚

## Onwards and Upwards

I think the main reason I chose to share this experience is that through all this, I've been greatly inspired by a lot of the work and projects in the JavaScript ecosystem, each with their own unique solutions and audiences, and how fantastic it all is to have such a sheer amount of creativity and talent to draw inspiration from.  I think we're arriving at a great inflection point where the good, if not the best parts of that experience are starting to come for free from the browser.  With that, we can come to rely less on layers of tools and abstractions between us and the code and content we create.  At the end of the day, productivity and maintainability are critical factors to consider in ensuring one can quickly go from idea to implementation.

As technologists, we owe it to all users out there to make pragmatic and useful decisions that are context and environment aware and make the most about the knowledge of the problem at hand. (More on that [coming soon](https://twitter.com/ReliableSummit/status/1418694662374625283)!)  We should take care to ensure that the long-term beneficiaries of our work extend well past not just what is what most convenient for _us_ in the moment.

**I hope everyone goes out there and builds what their most passionate about.  Choose wisely, keep it simple, and have fun!**  ✌️

<span>- Owen</span>

<!-- friendly illustration or graphic would be great here! -->

----

> If you're interested in learning more about modern web development or for ways to learn or contribute to our [projects](https://projectevergreen.github.io/projects/), please feel free to reach out and join us [in our Slack](https://join.slack.com/t/thegreenhouseio/shared_invite/enQtMzcyMzE2Mjk1MjgwLTU5YmM1MDJiMTg0ODk4MjA4NzUwNWFmZmMxNDY5MTcwM2I0MjYxN2VhOTEwNDU2YWQwOWQzZmY1YzY4MWRlOGI), [check out our GitHub organization](https://github.com/ProjectEvergreen), or [catch us on Twitter](https://twitter.com/PrjEvergreen)!  ♻️
