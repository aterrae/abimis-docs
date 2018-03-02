## Utilities
Abimis features several tiny yet useful classes that can be used to make small changes that would require css manipulation but that could end up too small to justify the creation of a new class set. These include color changers, margins, padding and more
##### Color
You can change the color of the content and of the background of an object in your markup by using the `.color--{your color}` modifier when it concerns the content and `.background--{your color}` when it comes to the background. You can also use the `.border--{your color}` modifier to change the border color.
```test
<div class="text-align--center">
    <div class="grid">
        <div class="grid__cell phone-up-1of1 tab-up-1of2">
            <div><code class="color--primary">.color--primary</code></div>
            <div><code class="color--secondary">.color--secondary</code></div>
            <div><code class="color--warning">.color--warning</code></div>
            <div><code class="color--danger">.color--danger</code></div>
            <div><code class="color--success">.color--success</code></div>
            <div><code class="color--info">.color--info</code></div>
        </div>
        <div class="grid__cell phone-up-1of1 tab-up-1of2">
            <div><code class="color--black">.color--black</code></div>
            <div><code class="color--coal">.color--coal</code></div>
            <div><code class="color--carbon">.color--carbon</code></div>
            <div><code class="color--smoke">.color--smoke</code></div>
            <div><code class="color--fog">.color--fog</code></div>
            <div><code class="color--white">.color--white</code></div>
        </div>
    </div>
</div>
```
```test
<div class="text-align--center">
    <div class="grid">
        <div class="grid__cell phone-up-1of1 tab-up-1of2">
            <div><code class="background--primary">.background--primary</code></div>
            <div><code class="background--secondary">.background--secondary</code></div>
            <div><code class="background--warning">.background--warning</code></div>
            <div><code class="background--danger">.background--danger</code></div>
            <div><code class="background--success">.background--success</code></div>
            <div><code class="background--info">.background--info</code></div>
        </div>
        <div class="grid__cell phone-up-1of1 tab-up-1of2">
            <div><code class="border--primary">.border--primary</code></div>
            <div><code class="border--secondary">.border--secondary</code></div>
            <div><code class="border--warning">.border--warning</code></div>
            <div><code class="border--danger">.border--danger</code></div>
            <div><code class="border--success">.border--success</code></div>
            <div><code class="border--info">.border--info</code></div>
        </div>
    </div>
</div>
```

## Margin and Padding
Sometimes you just need to add that much of space on the fly, this is what the margin and padding classes are for. Just add the `.margin-{direction}` class or the `.padding-{direction}` and you're done! It's as simple as that. The avable directions are:

| Suffix     | Top | Left | Bottom | Right |
|------------|-----|------|--------|-------|
| `all`      | ✔   | ✔    | ✔      | ✔     |
| `vertical` | ✔   |      | ✔      |       |
| `sides`    |     | ✔    |        | ✔     |
| `top`      | ✔   |      |        |       |
| `left`     |     | ✔    |        |       |
| `bottom`   |     |      | ✔      |       |
| `right`    |     |      |        | ✔     |
| `none`     |     |      |        |        |

##### Modifiers
You can also change the size of the spacing using the following modifiers
* `--tiny`
* `--small`
* `--big`
* `--bigger`
* `--huge`
