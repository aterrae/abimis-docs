## Buttons
Buttons are a large focus in Abimis webkit since they are a crucial part in making or breaking a web experience. A bad button can totally destroy a users experience in your website so we ship the best buttons possible, both in looks and in usability.

There are a whole bunch of button styles in this webkit and they are all usable across all the tags that would be needed, they work especially good with the `a` tag and `button` tag, just add the `.button` class to get

##### Color
Buttons are provided with all the colors you've set up in your settings file, just add the `.button--[color]` modifier to pick the color you like the most for your button.

```test
<div class="grid">
    <div class="grid__cell global-1of3"><a class="button button--primary margin-bottom--tiny full-width">default button</a></div>
    <div class="grid__cell global-1of3"><a class="button button--secondary margin-bottom--tiny full-width">secondary button</a></div>
    <div class="grid__cell global-1of3"><a class="button button--success margin-bottom--tiny full-width">success button</a></div>
    <div class="grid__cell global-1of3"><a class="button button--warning margin-bottom--tiny full-width">warning button</a></div>
    <div class="grid__cell global-1of3"><a class="button button--danger margin-bottom--tiny full-width">danger button</a></div>
    <div class="grid__cell global-1of3"><a class="button button--info margin-bottom--tiny full-width">info button</a></div>
</div>
```

##### Button
If you don't like rectangle-ish buttons you can resort to the corner radius modifiers that we ship in the package, use `.button--rounded` when you want to just smoothen them a little and `.button--round` when you want a completely round button.

```test
<div class="grid">
    <div class="grid__cell global-1of3"><a class="button margin-bottom--tiny full-width">default button</a></div>
    <div class="grid__cell global-1of3"><a class="button button--rounded margin-bottom--tiny full-width">rounded button</a></div>
    <div class="grid__cell global-1of3"><a class="button button--round margin-bottom--tiny full-width">round button</a></div>
</div>
```

##### Sizes
Abimis provides a couple classes to change your button's sizes too, you can use the `.button--small` and `.button--tiny` modifiers to change your overall button size and you can also tell your button to fill all the available horizontal space with the `.button--fullwidth` class.

```test
<div class="grid">
    <div class="grid__cell global-1of3"><a class="button margin-bottom--tiny full-width">default button</a></div>
    <div class="grid__cell global-1of3"><a class="button button--small margin-bottom--tiny full-width">small button</a></div>
    <div class="grid__cell global-1of3"><a class="button button--tiny margin-bottom--tiny full-width">tiny button</a></div>
</div>
```

##### Styles
If you ever get sick of your solid color and flat button style you can change their style by providing either the `.button--hollow` or the `.button--material` theme modifiers.

```test
<div class="grid">
    <div class="grid__cell global-1of3"><a class="button margin-bottom--tiny full-width">default button</a></div>
    <div class="grid__cell global-1of3"><a class="button button--hollow margin-bottom--tiny full-width">hollow button</a></div>
    <div class="grid__cell global-1of3"><div class="button__shadow-box"><a class="button button--material margin-bottom--tiny full-width">material button</a></div></div>
</div>
```

##### Shapes
Buttons are also provided in a round style, ideal when you are making an action which should be fixed somewhere around the screen while being accessible and easy enough to use to make sense. You can use it using the `.button--circle` class. They can be customized using any of the button modifiers

## Icon buttons
Icon buttons are great when it comes to supplying intuitive actions that don't need a long text to explain their meaning. They only consist on the icon and are ideal in cramped situations.

```test
<div class="grid padding-bottom--small">
	<div class="grid__cell palm-one-whole lap-and-up-one-half push--lap-and-up-one-quarter">
        <div class="card card--composite">
			<div class="card__body">
                <h5>Icon buttons are cool!</h5>
				<p>Sint ad eiusmod occaecat voluptate laboris velit duis ex mollit consectetur sit. Officia consectetur ipsum occaecat non eu culpa esse labore minim voluptate aute amet. Culpa veniam cupidatat commodo tempor exercitation cupidatat aute.</p>
			</div>
			<hr class="card__divider">
			<div class="card__actions card__actions--right">
				<a class="button button--icon button--rounded" href="#"><i class="fa fa-copy" aria-hidden="true"></i></a>
				<a class="button button--icon button--rounded" href="#"><i class="fa fa-trash" aria-hidden="true"></i></a>
			</div>
        </div>
	</div>
</div>
```
