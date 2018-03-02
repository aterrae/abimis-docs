## Alert
Sometimes you just need to shout out to the user with a big alert in orfer to let him know that something's happening, alerts are what you use in that case. You just embed the bad boys into an overlay and show it to the user when the time comes.

## How to use
You can create an alert using the following code snippet and classes, the alert automatically fills up the container so make sure to embed it into a well sized component or in a nice grid cell.

```test
<div class="grid">
    <div class="grid__cell phone-up-1of1 lap-up-1of2 lap-up-center">
        <div class="button__shadow-box">
            <div class="alert">
                <i class="icon-badges fa fa-exclamation-circle fa-5x alert__icon" aria-hidden="true"></i>
                <p>Don't you think alerts are awesome?</p>
                <div class="alert__actions">
                    <a class="button button--rounded button--success">Agree</a>
                    <a class="button button--rounded button--danger">Disagree</a>
                </div>
            </div>
        </div>
    </div>
</div>
```

## Customization
Alerts come in different colors depending on their purpose, don't ever show a dangerous alert with a cheerful color! You can change the appearence of your alert by adding the `.alert--{color}` modifier.

```test
<div class="grid">
	<div class="grid__cell phone-up-1of1 lap-up-1of2 desk-1of4">
		<div class="alert alert--success margin-bottom--small">
			<i class="fa fa-exclamation-circle fa-5x alert__icon" aria-hidden="true"></i>
			<p>I'm a successful guy</p>
			<div class="alert__actions">
				<a class="button button--rounded button--success">Sure thing</a>
			</div>
		</div>
	</div>
	<div class="grid__cell phone-up-1of1 lap-up-1of2 desk-1of4">
		<div class="alert alert--info margin-bottom--small">
			<i class="fa fa-exclamation-circle fa-5x alert__icon" aria-hidden="true"></i>
			<p>I like to give good info</p>
			<div class="alert__actions">
				<a class="button button--rounded button--success">Teach me</a>
			</div>
		</div>
	</div>
	<div class="grid__cell phone-up-1of1 lap-up-1of2 desk-1of4">
		<div class="alert alert--warning margin-bottom--small">
			<i class="fa fa-exclamation-circle fa-5x alert__icon" aria-hidden="true"></i>
			<p>Be careful...</p>
			<div class="alert__actions">
				<a class="button button--rounded button--success">What?</a>
			</div>
		</div>
	</div>
	<div class="grid__cell phone-up-1of1 lap-up-1of2 desk-1of4">
		<div class="alert alert--danger margin-bottom--small">
			<i class="fa fa-exclamation-circle fa-5x alert__icon" aria-hidden="true"></i>
			<p>Watch out!</p>
			<div class="alert__actions">
				<a class="button button--rounded button--success">Scream</a>
			</div>
		</div>
	</div>
</div>
```
