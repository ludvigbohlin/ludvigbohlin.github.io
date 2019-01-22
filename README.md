ShimmerCat website. Using solid - a Bootstrap theme for Jekyll.
============
This is a [Jekyll](http://jekyllrb.com/) port of the [Solid theme](http://www.blacktie.co/2014/05/solid-multipurpose-theme/) by [blacktie.co](http://www.blacktie.co/).

## Usage
This theme can be customized, built and published straight from GitHub, thanks to [GitHub Pages](https://pages.github.com/). A local installation of Jekyll isn't even necessary!

#### Customize  
Most general settings and data like site name, colors, address, etc. can be configured and changed right in the main config file: `/_config.yml`
The content of the Home page can be changed here: `/index.html`
The content of the About page can be changed here: `/about.html`
The content of the Accelerator page can be changed here: `/accelerator.html`
The content of the Contact page can be changed here: `/contact.html`
The content of the Pricing page can be changed here: `/pricing.html`
##### Navigation Bar
Change the navigation bar by editing the file `navigation.yml` in the `_data` directory
##### Blog post
Create a Blog post by creating a file called `yyyy-mm-dd-name-of-post-like-this.markdown` in the `/_posts/` directory with the following template:
```markdown
---
layout: post          #important: don't change this
title: "Name of post like this"
date: yyyy-mm-dd hh:mm:ss
author: Name
categories:
- blog                #important: leave this here
- category1
- category2
- ...
img: post01.jpg       #place image (850x450) with this name in /assets/img/blog/
thumb: thumb01.jpg    #place thumbnail (70x70) with this name in /assets/img/blog/thumbs/
---
This text will appear in the excerpt "post preview" on the Blog page that lists all the posts.
<!--more-->
This text will not be shown in the excerpt because it is after the excerpt separator.
```
##### Feature entry
Create a Feature entry about ShimmerCat by creating a file called `name-of-the-feature.markdown` in the `/_features/` directory with the below template. Note that the category relates to if the feature is included in the corresponding package (accelerator, regional, global, enterprise), if it is a general feature in ShimmerCat (display), or if it is a feature that can be added to the regional and global package (add-on)
```markdown
---
layout: feature       #important: don't change this
title:  "Name of the project"
categories: [accelerator, regional, global, enterprise, display, add-on]
---
####This is a heading
This is a regular paragraph. Write as much as you like.
```
##### Question/FAQ entry
Create a Question/FAQ entry (that is listed in the Frequently Asked section on the Home page) in this directory by creating a file called `yyyy-mm-dd-do-i-have-a-question.markdown` in the `/_question/` directory with the following template:
```markdown
---
layout: question
title:  "Do I have a question?"
date: yyyy-mm-dd hh:mm:ss
author: First Last
categories:
- question
---
####This is a heading
This is a regular paragraph. Write as much as you like.
```
##### Solution
Create a solution (product) that is listed in the Solutions tab by creating a file called `solution_name.markdown` in the `/_solutions/` directory with the following template:
```markdown
---
layout: solution
title:  "Accelerator Network"
description: Setup your own Accelerator Network
quote: Custom-built edge server network to keep content 'hot' at all times for for high availability e-commerces
---
####This is a heading
This is a regular paragraph. Write as much as you like.
```
##### Plans
Create a plan (package) by creating a file called `plan_name.markdown` in the `/_plans/` directory with the following template:
```markdown
---
layout: plan_enterprise
title:  "Enterprise Plan"
---
####This is a heading
This is a regular paragraph. Write as much as you like.
```
##### Integrations
Create an integration by creating a file called `integration_name.markdown` in the `/_integrations/` directory with the following template:
```markdown
---
layout: integration
title:  "Magento"
description:
website: https://docs.accelerator.shimmercat.com/tutorials/magento/
logo: /assets/img/integration/magento.svg
---
####This is a heading
This is a regular paragraph. Write as much as you like.
```
##### Customercases
Create a customer case by creating a file called `customercase_name.markdown` in the `/_customercases/` directory with the following template:
```markdown
---
layout: customercase
title:  "Global Scale Up"
description: Twistshake is a fast growing global company that sells different products for children.
website: https://www.twistshake.com
logo: /assets/img/customercases/twistshake_logo.png
quote: Our loading times improved a lot globally - especially for mobile formats
---
####This is a heading
This is a regular paragraph. Write as much as you like.
```
#### Publish
To publish with [GitHub Pages](https://pages.github.com/), simply create a branch called `gh-pages`in your repository. GitHub will build your site automatically and publish it at `http://yourusername.github.io/repositoryname/`.  
If there are problems with loading assets like CSS files and images, make sure that the `baseurl` in the `_config.yml`is set correctly (it should say `/repositoryname`).

If you want to host your website somewhere else than GitHub (or just would like to customize and build your site locally), please check out the [Jekyll documentation](http://jekyllrb.com/). 

## License
This theme is licensed under [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/).
