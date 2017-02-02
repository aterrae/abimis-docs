## Grid
A grid is the basic component used in a responsive web layout. The Abimis implementation of grids is made to accomplish responsiveness without the use of nasty rows in order to make it versatile for element auto generation such as in loops and in maps.

The Abimis grid is based upon the Inuit.css grid but is still in development and under heavy analysis to find and correct every issue and problem that will be encountered. The grid still has some known issues so feel free to add an issue to the Abimis Webkit repository if you encounter one of such. The class name definition is based on the BEM definition and uses intuitive names that can communicate the width and the proprieties of the elements.

## Basic grid
The basic grid uses the `.grid` and the `.grid__cell` classes as its basic components. The grid item components need to get a width class too in order to know what size they should have, this is provided with a **scope** class prefix, which can be one of the responsive prefixes or the `global` prefix which applies the width on all screen sizes, and a **width** suffix that specifies the width that the cell should take when it's in the selected scope.
In short a grid cell width class is made out of `.{scope}-{width}`.

The available widths for the Abimis grid are the following:

##### Usage
```test
<div class="grid button__shadow-box">
    <div class="grid__cell global-1of2">
        <div class="card">A <code>global-1of2</code> cell</div>
    </div>
    <div class="grid__cell global-1of4">
        <div class="card">A <code>global-1of4</code> cell</div>
    </div>
    <div class="grid__cell global-1of4">
        <div class="card">A <code>global-1of4</code> cell</div>
    </div>
</div>
```
```
<div class="grid">
    <div class="grid__cell global-1of2">
        ...
    </div>
    <div class="grid__cell global-1of4">
        ...
    </div>
    <div class="grid__cell global-1of4">
        ...
    </div>
</div>
```

##### Screen Sizes

| Advanced grid prefix   | Default grid prefix   | Variable | Max value  |
|------------------------|-----------------------|----------|------------|
| `.phone-S`             | `.phone`              | $phone-S | 360px      |
| `.phone-M`             | `.phablet`            | $phone-M | 400px      |
| `.phone-L`             |                       | $phone-L | 480px      |
| `.tab-S`               | `.tab`                | $tab-S   | 600px      |
| `.tab-M`               |                       | $tab-M   | 720px      |
| `.tab-L`               |                       | $tab-L   | 840px      |
| `.tab-XL`              |                       | $tab-XL  | 960px      |
| `.desk-S`              | `.lap`                | $desk-S  | 1024px     |
| `.desk-M`              | `.desk`               | $desk-M  | 1280px     |
| `.desk-L`              |                       | $desk-L  | 1440px     |
| `.desk-XL`             |                       | $desk-XL | 1600px     |
| `.tv`                  |                       | $tv      | none       |

##### Widths

|Suffix             |Conceptual Width|1 of n Percentage Width|
|-------------------|----------------|-----------------------|
|`1of1`             |Wholes          |100%                   |
|`1of2`             |Halves          |50%                    |
|`1of3` to `2of3`   |Thirds          |33.33%                 |
|`1of4` to `3of4`   |Quarters        |25%                    |
|`1of5` to `4of5`   |Fifths          |20%                    |
|`1of6` to `5of6`   |Sixths          |16.66%                 |
|`1of8` to `7of8`   |Eighths         |12.5%                  |
|`1of10` to `9of10` |Tens            |10%                    |
|`1of12` to `11of12`|Twelfths        |8.33%                  |


## Responsive grid

Abimis features two different breakpoint sets, these are togglable through the SASS `$advanced-breakpoints` setting. These allows you to change the number of breakpoints that are usable in your project to fine tune them even better.

You can also use the responsive classes to make a grid cell morph into another size on different screens, this is obtained by using one of the prefixes in the following table followed by the size it should display on that screen.
(Ex: `.phone-1of1` displays a full size cell on phone sized screens)

If you don't want to define a size for every screen size in your breakpoint setting add -up- after the screen prefix. By adding that keyword all the screens that are above the specified size until the next breakpoint will use the size defined in this class
(Ex: `.phone-up-1of1 .desk-1of2` displays a full size cell on all screens that are smaller than a desktop sized one)

##### Usage
```test
<div class="grid button__shadow-box">
    <div class="grid__cell phone-up-1of1 tab-up-1of1 desk-1of2">
        <div class="card margin-bottom">
            This cell is
            <ul>
                <li>1of1 on mobile</li>
                <li>1of1 on tablets and small laptops</li>
                <li>1of2 on desktops</li>
            </ul>
        </div>
    </div>
    <div class="grid__cell phone-up-1of1 tab-up-1of2 desk-1of4">
        <div class="card margin-bottom">
            This cell is
            <ul>
                <li>1of1 on mobile</li>
                <li>1of2 on medium screens</li>
                <li>1of4 on desktops</li>
            </ul>
        </div>
    </div>
    <div class="grid__cell phone-up-1of1 tab-up-1of2 desk-1of4">
        <div class="card margin-bottom">
            This cell is
            <ul>
                <li>1of1 on mobile</li>
                <li>1of2 on medium screens</li>
                <li>1of4 on desktops</li>
            </ul>
        </div>
    </div>
</div>
```
```
<div class="grid">
    <div class="grid__cell phone-up-1of1 tab-up-1of1 desk-1of2">
        ...
    </div>
    <div class="grid__cell phone-up-1of1 tab-up-1of2 desk-1of4">
        ...
    </div>
    <div class="grid__cell phone-up-1of1 tab-up-1of2 desk-1of4">
        ...
    </div>
</div>
```

## Nested grids
Grids can be nested to create particularly complex layouts, this can be accomplished by using a `.grid` inside a `.grid__cell` creating a new grid context
```test
<div class="grid button__shadow-box">
    <div class="grid__cell phone-up-1of1 desk-1of2">
        <div class="card margin-bottom">
            <div class="grid">
                <div class="grid__cell phone-up-1of1 desk-1of2 button__shadow-box">
                    <div class="card">Lorem ipsum dolor</div>
                </div>
                <div class="grid__cell phone-up-1of1 desk-1of2 button__shadow-box">
                    <div class="card">Lorem ipsum dolor</div>
                </div>
            </div>
        </div>
    </div>
    <div class="grid__cell phone-up-1of1 desk-1of2">
        <div class="card margin-bottom">
            <div class="grid">
                <div class="grid__cell phone-up-1of1 desk-1of2 button__shadow-box">
                    <div class="card">Lorem ipsum dolor</div>
                </div>
                <div class="grid__cell phone-up-1of1 desk-1of2 button__shadow-box">
                    <div class="card">Lorem ipsum dolor</div>
                </div>
            </div>
        </div>
    </div>
</div>
```
```
<div class="grid button__shadow-box">
    <div class="grid__cell phone-up-1of1 desk-1of2">
        <div class="grid">
            <div class="grid__cell phone-up-1of1 desk-1of2 button__shadow-box">
                ...
            </div>
            <div class="grid__cell phone-up-1of1 desk-1of2 button__shadow-box">
                ...
            </div>
        </div>
    </div>
    <div class="grid__cell phone-up-1of1 desk-1of2">
        <div class="grid">
            <div class="grid__cell phone-up-1of1 desk-1of2 button__shadow-box">
                ...
            </div>
            <div class="grid__cell phone-up-1of1 desk-1of2 button__shadow-box">
                ...
            </div>
        </div>
    </div>
</div>
```

## Grid Utilities
The Abimis grid comes with a bunch of utilities that help you customize your grids even further.

##### Push
There is often the need to have some margin for your grid cell, when you want to provide your cell with some spacing you can use the `.push` class, this class needs to receve the spacing specifications through a modifier which has the same class as the blank cell which would represent it's spacing. This means you should use the following structure when using the push class: `.push--{spacer}`.

For example to make your cell have a **1of4** spacing on mobile you should provide it with a `.push--phone-1of4` class.

##### Center
For as much as you can achieve centering your cell with the correct **push** class you can achieve the same result with a much easier to use class, the `.{scope}-center` class.
