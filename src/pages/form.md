## Forms
Forms are a very important part of any active web experience, users must know where and how to input their personal data, Abimis provides a basic styling for all of the default input methods that the web needs.
##### Fields
Fields are the most basic and important case of form UI elements, Abimis overrides the default form style so that you can use it's style without clogging up your markup with classes
```test
<input type="text" name="test" value="" placeholder="Username" class="full-width">
```
This basic styling also applies to `textarea` and `select`
```test
<textarea name="test" rows="8" cols="80" placeholder="Now write Star Wars here" class="full-width"></textarea>
<select name="test" class="full-width">
    <option value="">Select me hun!</option>
    <option value="">Busted!</option>
    <option value="">Sweet talk always gets you men</option>
</select>
```
---
##### SASS Customization
|Name               |Value                |Description                         |
|-------------------|---------------------|------------------------------------|
|`$field-height`    |44px                 |The default height of a field       |
|`$field-padding`   |0 20px               |The default padding of a field      |
|`$field-radius`    |6px                  |The border radius of a field        |
|`$field-background`|rgba(255,255,255,0.2)|	The background color of a field    |
