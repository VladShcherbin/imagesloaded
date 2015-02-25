# ImagesLoaded Meteor Wrapper

**Table of contents**

- [About](#about)
- [Installation](#installation)
- [Usage](#usage)
- [Example](#example)

## About

[ImagesLoaded](http://imagesloaded.desandro.com) wrapper for [Meteor](http://meteor.com).

The package includes only core js file with **no cache** fix.

The removed cache fixes the mobile chrome bug with image overlaying.

## Installation

```sh
meteor add shcherbin:imagesloaded
```

## Usage

You can view all available options on the [imagesLoaded website](http://imagesloaded.desandro.com).

## Example

### Spacebars template

```html
<template name="photosIsotope">
	<ul class="unstyled" id="isotope-body">
		{{#each photos}}
			<li class="item">
				<img src="/img/photos/{{slug}}.jpg" alt="{{title}}">
			</li>
		{{/each}}
	</ul>
</template>
```

### Client js files

```js
Template.photosIsotope.helpers({
	photos: function () {
		return Photos.find();
	}
});

Template.photosIsotope.rendered = function () {
	var container = $('#isotope-body').isotope({
		itemSelector: '.item',
		masonry: {
			columnWidth: '.item'
		}
	});

	container.imagesLoaded(function () {
		container.isotope('layout');
	});
};
```