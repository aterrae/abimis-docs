## Cards
Cards are elements that contain blocks of related information such as pictures, text and calls to action.
You can make any container element into a card, this can be achieved using the `.card` class
```test
<div class="grid">
	<div class="grid__cell phone-1of1 tab-up-1of2 tab-up-center">
        <div class="card">
            <h5><strong>Hello world</strong></h5>
			<p>Id id laborum excepteur labore adipisicing pariatur sunt incididunt eiusmod consectetur culpa laborum anim adipisicing fugiat non. Cillum quis pariatur velit sint nostrud minim quis. Excepteur amet cillum magna quis non exercitation fugiat sit dolor anim velit aute ullamco sunt cillum nisi eiusmod. Ullamco proident sint voluptate dolore officia duis enim ea excepteur.</p>
        </div>
	</div>
</div>
```

```
<div class="card">
	<h5><strong>Hello world</strong></h5>
	<p>...</p>
</div>
```

## Composite card
Cards can be split in several components in order to better split between different contents and to make content more appealing and coheseve. In Abimis such a card is defined as a composite card and is defined by the `.card--composite` class which overrides some of the card's styles to make it easier to split its contents into different parts.
```test
<div class="grid padding-bottom--small">
	<div class="grid__cell phone-up-1of1 tab-up-1of2 tab-up-center">
        <div class="card card--composite">
            <div class="card__nav card__nav--large card__nav--dark">
				<div class="card__nav__title">
					Sample Card
				</div>
				<i class="icon-times"></i>
            </div>
			<div class="card__header card__header--horizontal">
				<img src="https://placehold.it/48x48" alt="placeholder" class="margin-right--small" style="border-radius:50%">
				<div>
					<strong>Hello Card</strong>
					<div>Subtitle</div>
				</div>
			</div>
			<div class="card__body">
				<p>Sint ad eiusmod occaecat voluptate laboris velit duis ex mollit consectetur sit. Officia consectetur ipsum occaecat non eu culpa esse labore minim voluptate aute amet. Culpa veniam cupidatat commodo tempor exercitation cupidatat aute.</p>
			</div>
			<hr class="card__divider">
			<div class="card__actions card__actions--right">
				<a class="button button--rounded" href="#">Action 1</a>
				<a class="button button--rounded" href="#">Action 2</a>
			</div>
        </div>
	</div>
</div>
```
A composite card is made out of four components:
##### Card Nav
The card Nav is the element which is used when a card needs to provide a top bar that contains easily accessible actions and buttons to navigate in the website or in the app. It is provided in both light and dark themes and in two sizes. It is advised to use at most one small string of text and at most 3 actions to mantain the element's usability at its best.

The card's nav has to be inside a composite card and is defined by the element class `.card__nav.` The default card nav is the small nav with the dark text. To change the size you can use the `.card__nav--big` modifier. The text color can be changed into white text by using the `.card__nav--dark` modifier.
```test
<div class="grid padding-bottom--small">
	<div class="grid__cell phone-up-1of1 tab-up-1of2">
        <div class="card card--composite">
            <div class="card__nav card__nav--large card__nav--dark">
				<div class="card__nav__title">
					Big nav
				</div>
				<i class="icon-times"></i>
            </div>
			<div class="card__body">
				<p>Sint ad eiusmod occaecat voluptate laboris velit duis ex mollit consectetur sit.</p>
			</div>
        </div>
	</div>
	<div class="grid__cell phone-up-1of1 tab-up-1of2">
        <div class="card card--composite">
            <div class="card__nav">
				<div class="card__nav__title">
					Small nav
				</div>
				<i class="icon-times"></i>
            </div>
			<div class="card__body">
				<p>Sint ad eiusmod occaecat voluptate laboris velit duis ex mollit consectetur sit. Sint ad eiusmod occaecat voluptate.</p>
			</div>
        </div>
	</div>
</div>
```
##### Card Header
When a card need to have a distinct header it's possible to use the card header element to have good separation between the contents, the header is great when it comes to providing information that will be needed to understand the context of the rest of the card such as titles, profile pictures and such content.

To use the card header add the `.card__header` element class to an element inside a composite card. If a horizontally flowing header is needed use `.card__header--horizontal` modifier.
```test
<div class="grid">
	<div class="grid__cell global-1of2">
		<div class="card card--composite">
			<div class="card__header">
				<strong>Basic header</strong>
				<div>This is just another header</div>
			</div>
			<div class="card__body">
				<p>Ut ad nulla eu qui minim dolor deserunt proident do qui Lorem sint sunt eu est voluptate dolore. Ea amet excepteur eu eu labore occaecat ut duis elit commodo do dolore incididunt exercitation aute velit anim. Velit labore voluptate sunt aute ipsum nulla est quis. Et adipisicing voluptate.</p>
			</div>
		</div>
	</div>
	<div class="grid__cell global-1of2">
		<div class="card card--composite">
			<div class="card__header card__header--horizontal">
				<img src="https://placehold.it/48x48" alt="placeholder" class="margin-right--small" style="border-radius:50%">
				<strong>Horizontally flowing header</strong>
			</div>
			<div class="card__body">
				<p>Ut ad nulla eu qui minim dolor deserunt proident do qui Lorem sint sunt eu est voluptate dolore. Ea amet excepteur eu eu labore occaecat ut duis elit commodo do dolore incididunt exercitation aute velit anim. Velit labore voluptate sunt aute ipsum nulla est quis. Et adipisicing voluptate.</p>
			</div>
		</div>
	</div>
</div>
```
##### Card Body
The card body is the most basic component in the whole composite card element, it is used to provide continuity with the rest of the card giving an easy to use container that has the same spacing as the rest of the components, it is ideal to contain text and small pictures. It is accessible through the `.card__body` element class.
```test
<div class="grid">
	<div class="grid__cell phone-up-1of1 tab-up-1of2 tab-up-center">
		<div class="card card--composite">
			<div class="card__body">
				<h5><strong>Card body</strong></h5>
				<p>Ut ad nulla eu qui minim dolor deserunt proident do qui Lorem sint sunt eu est voluptate dolore. Ea amet excepteur eu eu labore occaecat ut duis elit commodo do dolore incididunt exercitation aute velit anim. Velit labore voluptate sunt aute ipsum nulla est quis. Et adipisicing voluptate.</p>
			</div>
		</div>
	</div>
</div>
```
##### Card Actions
When a card needs to have some buttons and calls to action it is ideal to provide them as the last element in the card's flow, to do so it is advided to use the `.card__actions` element class which provides a great container for all your actions. It is also possible to choose weather you want them floated to the left or the right, the default setting provides left alignment of the actions while to have them floated to the right it is possible to use the `.card__actions--right` modifier.

It is a best practice to have at most two buttons or three icon buttons as your actions for each card in order to not overwhelm the user.
```test
<div class="grid">
	<div class="grid__cell global-1of2">
		<div class="card card--composite">
			<div class="card__body">
				<p>The card actions are great to provide actions that make sense in the context of your card, just like these!</p>
			</div>
			<div class="card__actions">
				<a class="button button--rounded button--hollow margin-sides--tiny">Agree</a>
				<a class="button button--rounded button--hollow button--warning margin-sides--tiny">Disagree</a>
			</div>
		</div>
	</div>
	<div class="grid__cell global-1of2">
		<div class="card card--composite">
			<div class="card__body">
				<p>The right floated actions are fantastic too, they look great in many occasions and are so easy to obtain with just a modifier to obtain them!</p>
			</div>
			<div class="card__actions card__actions--right">
				<a class="button button--rounded button--hollow margin-sides--tiny">Agree</a>
				<a class="button button--rounded button--hollow button--warning margin-sides--tiny">Disagree</a>
			</div>
		</div>
	</div>
</div>
```
## Default Cards
The default style of the Abimis webkit follows Google's Material Design Guidelines giving it a personal flavour.
##### Elevation
Cards can receve different elevation levels using the `.card--elevation-{elevation-level}` modifiers. These modifiers change the card shadow to give the illusion of depth to the user.
```test
<div class="grid">
	<div class="grid__cell global-1of5">
		<div class="margin-bottom--bigger card card--elevation-1 flex-v-align-content">
			<h2 class="margin-none"><strong>1</strong></h2>
		</div>
	</div>
	<div class="grid__cell global-1of5">
		<div class="margin-bottom--bigger card card--elevation-2 flex-v-align-content">
			<h2 class="margin-none"><strong>2</strong></h2>
		</div>
	</div>
	<div class="grid__cell global-1of5">
		<div class="margin-bottom--bigger card card--elevation-3 flex-v-align-content">
			<h2 class="margin-none"><strong>3</strong></h2>
		</div>
	</div>
	<div class="grid__cell global-1of5">
		<div class="margin-bottom--bigger card card--elevation-4 flex-v-align-content">
			<h2 class="margin-none"><strong>4</strong></h2>
		</div>
	</div>
	<div class="grid__cell global-1of5">
		<div class="margin-bottom--bigger card card--elevation-5 flex-v-align-content">
			<h2 class="margin-none"><strong>5</strong></h2>
		</div>
	</div>
</div>
```
##### Themes
Abimis material cards come with two themes: dark and light. As of default cards use the light theme, to use the dark theme use the `.card--dark modifier`.
```test
<div class="grid">
	<div class="grid__cell global-1of2">
		<div class="card card--dark">
			Hello from the <span class="color--danger">Dark Side.
		</span></div>
	</div>
	<div class="grid__cell global-1of2">
		<div class="card">
			Hello from the <span class="color--secondary">Light Side</span>.
		</div>
	</div>
</div>
```
##### Spacing
The cards have a slightly larger padding on the bottom but sometimes you'd want to have a regularly padded card or one with no padding at all. This can be achieved with the `.card--balanced` and `.card--borderless` modifiers.
```test
<div class="grid text-align--center">
	<div class="grid__cell global-1of3">
		<p><strong>Default card</strong></p>
		<div class="card">
			<div class="content">Content</div>
		</div>
	</div>
	<div class="grid__cell global-1of3">
		<p><strong>Balanced card</strong></p>
		<div class="card card--balanced">
			<div class="content">Content</div>
		</div>
	</div>
	<div class="grid__cell global-1of3">
		<p><strong>Borderless card</strong></p>
		<div class="card card--borderless">
			<div class="content">Content</div>
		</div>
	</div>
</div>
```

##### Overflow
As of default cards don't allow overflow and therefore hide any piece of content that gets out of it's boundaries. If an overflow management is needed you can either use the `.card--overflow` modifier to let the browser decide on the policy to use to manage the overflow or you can use the `.card--show-overflow` to give a visible proprety to your cards overflow.
```test
<div class="grid text-align--center padding-bottom">
	<div class="grid__cell global-1of3">
		<p><strong>Default card</strong></p>
		<div class="card">
			<div class="content" style="position:absolute; width:80%; ">Content</div>
		</div>
	</div>
	<div class="grid__cell global-1of3">
		<p><strong>Auto overflow card</strong></p>
		<div class="card card--overflow">
			<div class="content" style="position:absolute; width:80%; ">Content</div>
		</div>
	</div>
	<div class="grid__cell global-1of3">
		<p><strong>Visible overflow card</strong></p>
		<div class="card card--show-overflow">
			<div class="content" style="position:absolute; width:80%; ">Content</div>
		</div>
	</div>
</div>
```
