---
template: 'blog'
---

# Always Bet On ~~JavaScript~~ HTML 😎

#### By: [Owen Buckley](https://www.thegreenhouse.io/)
#### Date: MM/DD/YYYY

## There and Back Again

Like many in the frontend web development community, I find myself writing a _lot_ of JavaScript for just about everything I do these days.  Code, components, configuration, development tools, you can even use it to write your [CSS](https://blog.bitsrc.io/9-css-in-js-libraries-you-should-know-in-2018-25afb4025b9b) and [HTML](https://css-tricks.com/why-javascript-is-eating-html/).  It's starting to feel like it is becoming the de facto entry point to writing almost anything for the web now.  Personally, I love writing JavaScript and it has been fundamental to the work I've done throughout my career; from developing on Set Top Boxes and TVs, to seeing the meteoric rise of NodeJS, to the JavaScript renaissance and catapult of excitement in everything that has come since seeing ES2015 / ES6 land.  

However, I recently found out that even with my own best intentions, I could lead myself astray and get lost in the tools and technologies that have so come to dominate the frontend landscape today.  But as it turned out, I think it was all for the best, as through it I was able to gain a greater connection with what I loved about the early days of the web and why I after all these years, I love the web even more.  I think we're arriving at a great inflection point where the good, if not the best parts, are starting to come for free from the browser, and its an exciting time, more than ever to be part of this web development community.

I want to share a bit about my recent journey in rediscovering (my love for) the web and how I want to focus and contribute to its growth as a platform and make it even easier for new comers to get started.  I think now we can have our cake, and eat it too.

> _Yeah JavaScript is cool, but have you ever built your website in **HTML** before?_

## When You Have a Hammer

Around the middle of 2020, I was in a position where some of the technical decisions on [a project](https://docs.google.com/document/d/1MwDkszKvq81QgIYa8utJgyUgSpLZQx9eKCWjIikvfHU) I had been working on were starting to catch up with me.  Initially I had opted to build on top of another tool that I had used a lot throughout my career and while it had certainly allowed for a great amount of speed and momentum in the early stages of this project, I realized in trying to coerce this tool to bend in the wrong direction for another problem I was having, that I was going about things the wrong way.  This realization not only helped snap me out of this "tooling" bubble I had inadvertently found myself in, but I realized more fundamentally that I needed to step back and reassess some assumptions around web development in general and how it all applied to my project.

As I zoomed out not only from my project, I went a bit further and took a look around at what others were doing in the space and I was seeing more and more, that there was a rise in tools that were (self labeled or not) _meta frameworks_, which meant that they were stitching together a handful of already well established tools to achieve a new product out of that foundation, and presenting that as a domain specific product in and of itself.  Typically, these tools were often JavaScript first and most commonly aligned to a specific frontend framework or library.  

Essentially, before you could even get going, even if you didn't need to know anything about the underlying build tools you were using, you would have to learn JavaScript and someone's mental model of the web.  In addition, tools, especially of the meta variety, tend bring along a lot of dependencies and an additional maintenance cost from the project side.  This seems natural given the situation, as you absorb not only the upstream compexity of these standalone tools, but also the knot of the bow that you tie around them.

<div class="image-container">
<img src="/assets/blog/twitter-updating-a-website.png" alt="Tweet from Melissa McEwen. Updating a website made in 2002 is easier than updating a website made in 2017." />
</div>

Now, I'm not saying that these types of projects can't be successful or good, many of them are, but this one-two punch of a trend stuck out to me, and for my own project, it was never my intention to go down either of those routes necessarily.  So in this moment of clarity, realizing the unintentionally of the path I was going down, and for a project that I wanted to mirror so closely the way that I felt myself so many others related to the web (e.g. HTML -> CSS -> JS), I saw that I was committing not only developers to points of friction, but also their end users.  These trends I had grown with throughout my career and had taken for granted were laid more bare than ever before, but with a choice much clearer than before!

This approach didn't seem justified enough for me anymore, and like a great band long into their career, with their greatest hits behind them perhaps, I found inspiration in going [back to the basics](https://github.com/thescientist13/nono-poc/blob/master/notes/DOCS.md).


## A Perfect Circle

I realized what I loved about technologies like [JSX](https://reactjs.org/docs/introducing-jsx.html) and [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) was that I was still (_mostly_) writing HTML, or at least thinking in that way. Something about the declariative nature of it all spoke to me but I wanted to see how much more of that I could get from just the web itself.  It was around this time tools like **Modern Web**, **Snowpack**, and **Vite** were picking up steam as well, providing compelling solutions for a variety of "next generation" frontend development experiences like [no bundle development and ESM first workflows](https://www.greenwoodjs.io/about/how-it-works/).  In fact, it was also at this time that I was evaluating **Parcel** again and while when it came out I recall it having _HTML_ as an "entry point" for its bundling process, it only "clicked" for me now how that could be so innovative in its simplicity (at least to me), and had flown below my radar this whole time while I've been adrift in this world of JavaScript.  HTML!  Of course.  It all made sense to me now and I knew what I needed to do.

I wanted to find a way to enable the creation of sites and apps for the web, in an isomorphic way so that there was ever only one authoring context or paradigm to worry about, and effectively eschewing DSLs or 3rd party templating languages, and focusing on Web Components and template literals as the main drivers of cross context (browser / server) development.  It would heavily leverage standard web technologies like the browser, HTTP and the DOM.  Most importantly, staying ever more true to the web and the browser and going "vendorless" as I like to put it, would ensure that any gaps in knowledge could easily be supplemented by [the great docs over at MDN](https://developer.mozilla.org/).  In addition, I knew that making a mission out of delivering usable HTML at all costs, even if JavaScript was disabled, would be front of mind for this project, and would have a permanent influence in how I approached all other projects and decisions going forward.

## Don't Outsource Your Core Competency

But what really invigorated me in all this was actually two fold.  Although I would shed the conveniences and leg work of the meta-framework foundation, I was also excited to try and meet the general web development community with a wider on-ramp of support.  I really started to dive deeper into topics such as [ESM in the browser and NodeJS](https://nodejs.org/api/esm.html), [Declarative Shadow DOM](https://web.dev/declarative-shadow-dom/), [`import` / `export` maps](https://www.infoq.com/news/2020/08/import-map-javascript-wicg/), and [ASTs](https://astexplorer.net/) to power the project based on a greater adherence and appreciation for first principals and web standards.  This satisfied not only my desires to grow and expand my own knowledge base (and still get to write JavaScript 🤓 ), but would help make the project more flexible and maintainable, more accessible to new comers who may only just be starting out with the web, and yet could also grow to support even the most experienced JavaScript developer's needs!

<div class="image-container">
<img src="/assets/blog/twitter-core-competency.png" alt="Someone said don't outsource your core competency and I think that applies to this case" />
</div>

What I had really wanted to build and failed to conceptualize at the outset, was a bridge between the conventions and convenience of the old, without having to sacrifice the power and elegance of the new.  The more I looked around, the more I found [the web was starting to become much more capable](https://github.com/whatwg) and that [HTML was finding new ways to grow up](https://github.com/webcomponents/community-protocols) to meet the expectations of modern web development for all developers.  With Web Components, you can wire up anything you want in a browser to express custom behavior and functionality, and combined with ESM, the browser can keep doing more of the work for us, allowing us to shed dependencies and overhead along the way without having to sacrifice the developer experience we would come to expect from a modern workflow, like fast local development reloading and optimized production builds.

> _From a product development perspective, it felt like the project (and myself) had finally found its true identity and calling._ 💚

## Onwards and Upwards

I think the main reason I chose to share this experience is that through all this, I've been greatly inspired by a lot of the work and projects in the JavaScript ecosystem, each with their own unique solutions and audiences and how fantastic it all is to have such a sheer amount of creativity and talent to draw inspiration from.  One thing I think we forget is just how much we all have in common at the end of the day.  On the flip side, I think we owe it to ourselves as developers to pick the right tools for the job (more on that [coming soon](https://reliablewebsummit.com/speakers/)!), and give ourselves a rest from all the JavaScript and decision fatigue.  

Not only that, but we owe it to all the users out there to be more mindful of the impacts of the work we're putting out there into the world.  As technologists we are trusted to provide pragmatic and useful solutions that are context and environment aware and make the most about the knowledge of the problem at hand, to make sure that the long term beneficiaries of our work extends past what is what most convenient for _us_, with work that should be able to extend past the term of a contract with a client.

**I hope everyone goes out there and builds what their most passionate about.  Choose wisely, keep it simple, and have fun!**  ✌️

----

> _If you're interested in getting in learning more about modern web development or for ways to learn or contribute to our [projects](https://projectevergreen.github.io/projects/), please feel free to reach out and join us [in our Slack](https://join.slack.com/t/thegreenhouseio/shared_invite/enQtMzcyMzE2Mjk1MjgwLTU5YmM1MDJiMTg0ODk4MjA4NzUwNWFmZmMxNDY5MTcwM2I0MjYxN2VhOTEwNDU2YWQwOWQzZmY1YzY4MWRlOGI), [at our GitHub](https://github.com/ProjectEvergreen), or [on Twitter](https://twitter.com/PrjEvergreen)!_
