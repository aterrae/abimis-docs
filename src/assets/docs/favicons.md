## Favicons Generation
The Abimis framework comes with favicon generation straight out of the box. The favicon generation is powered by [RealFaviconGenerator](https://realfavicongenerator.net) and provides a lot of functionality and features. The generation settings are provided in the `settings-favicons.json` file.
The following is a cheat sheet with all of the parameters and values that should be provided to the favicon generator in order to customize it to better suit your project.

### Customization

`masterPicture`
Specifies the master picture that the generator can use as master.

`dest`
Specifies which folder the generator can use as destination for all the generated files.

`iconsPath`
This path is used inside the generated html to refer to all the generated files.

---

`design`
If one of the following sections is not present, the corresponding icons are not generated.

- `desktop_browser`
    Design for the classic desktop browsers. This section has no parameters. The philosophy behind is that the master picture is usually designed for this purpose.

- `ios`
    - `picture_aspect`
        - Use the master picture as is.
        - ```
            "ios": {
                "picture_aspect": "no_change"
            }
        ```
        - Apply a background and a margin to the master picture.
        - ```
            "ios": {
                "picture_aspect": "background_and_margin",
                "margin": "pixel value or % value",
                "background_color": "hex value of the color"
            }
        ```
    - `startup_image` This section lets you define a startup image for iOS. If it is not present, no startup image is created.
        - `master_picture` You can override the picture used to created the startup image with a master_picture declaration.
        - `background_color` If no background color was defined at all, the API will generate a startup image with transparent margins. iOS prevents this and will fill the transparent regions with black.
    - `app_name` The app name. When defined, this value is used by Safari as the default home screen caption (instead of the page title).
    - `assets`
        - `ios6_and_prior_icons` Generate icons for iOS 6 and prior.
        - `ios7_and_later_icons` Generate icons for iOS 7 and later.
        - `precomposed_icons` Generate precomposed icons, in addition to regular icons.
        - `declare_only_default_icon` If true, only the default icon are declared in the HTML. Otherwise, all regular (ie. non-precomputed) icons are declared.

- `windows`
    - `picture_aspect`
        - `no_change` Use the master picture as is.
        - `white_silhouette` Turn the master picture into a white silhouette.
    - `background_color` The background color to apply to the tile.
    - `assets`
        - `windows_80_ie_10_tile`
        - `windows_10_ie_11_edge_tiles`
            - `small`
            - `medium`
            - `big`
            - `rectangle`
    - `app_name` The app name. When defined, this value is used by IE as the default home screen caption (instead of the page title).

- `firefox_app`
    - `picture_aspect`
        - Use the master picture as is.
        - ```
            "firefox_app": {
                "picture_aspect": "no_change"
            }
        ```
        - Generate a circular icon.
            - If `keep_picture_in_circle` is true, the master picture is cropped in order to fit the circle. Else, the master picture may extend beyond the circle.
            - If `circle_inner_margin` is true, this is the margin applied to the cropping of the master picture.
            - If `overlay` is true, add the overlay.
        - ```
            "firefox_app": {
                "picture_aspect": "circle",
                "margin": "pixel value or % value",
                "background_color": "hex value of the color"
                "keep_picture_in_circle": bool
                "circle_inner_margin": bool
                "overlay": bool
            }
        ```
        - Generate a square icon with rounded corners.
        - ```
            "firefox_app": {
                "picture_aspect": "rounded_square",
                "margin": "pixel value or % value",
                "background_color": "hex value of the color"
            }
        ```
        - Generate a square icon.
        - ```
            "firefox_app": {
                "picture_aspect": "square",
                "margin": "pixel value or % value",
                "background_color": "hex value of the color"
            }
        ```
    - `manifest`
        - `app_name` The application name.
        - `app_description` A description of the application.
        - `developer_name` The developer name.
        - `developer_url` The Url of the developer personal web site.

- `android_chrome`
    - `picture_aspect`
        - Use the master picture as is.
        - ```
            "android_chrome": {
                "picture_aspect": "no_change"
            }
        ```
        - Generate a square icon with margin and background.
        - ```
            "android_chrome": {
                "picture_aspect": "background_and_margin",
                "margin": "pixel value or % value",
                "background_color": "hex value of the color"
            }
        ```
        - Add a small drop shadow to the master picture.
        - ```
            "android_chrome": {
                "picture_aspect": "shadow"
            }
        ```
    - `manifest`
        - `name` The application name is used as the title of the link when the visitor adds the site to the home screen. This field is mandatory. There is no way to force Android Chrome to use the current page title.
        - `start_url` The page actually added to the home screen. Typically, the home page of the site. Leave this field blank to let a visitor add any page to the home screen.
        - `display` Specify the appearance of the web site when the user clicks the home scren link:
            - The site is opened like any regular bookmark, in a new Chrome tab. Because Android Chrome does not actually support the browser attribute, the display attribute is completely absent of the generated manifest.
            - ```
                "manifest": {
                    "display": "browser"
                }
            ```
            - The web site is somehow treated like a native application. When the home screen link is clicked, a new Chrome instance is opened, the navigation UI is not displayed and the web site is displayed full-screen.
            - Force the screen to a particular orientation. Either portrait or landscape.
            - ```
                "manifest": {
                    "display": "standalone",
                    "orientation": ""
                }
            ```
        - `theme_color` The color applied to the standalone app when using the task switcher. Introduced in Android 5 Lollipop.
    - `assets`
        - `legacy_icon` If true, the service generates icons and HTML markups for Android Chrome running on Android Chrome M38 and prior.
        - `low_resolution_icons` If true, the service creates all documented icons for home screen and splash screen. Else, it creates only recommended, high resolution icons.

- `safari_pinned_tab`
    - `picture_aspect`
        - Use the master picture as is. Since this image must be in SVG format, so must be the master picture if this option is chosen.
        - ```
            "safari_pinned_tab": {
                "picture_aspect": "no_change"
            }
        ```
        - Turn the master picture as a silhouette: transparent regions remain transparent and the opaque regions become black. Since the master picture is often a PNG, it is converted to SVG.
        - ```
            "safari_pinned_tab": {
                "picture_aspect": "silhouette"
            }
        ```
        - Turn the master picture into a black-and-white pictures. Use the `threshold` option (from 0 to 100) to indicate how colors should be turned to black or white. Since the master picture is often a PNG, it is converted to SVG.
        - ```
            "safari_pinned_tab": {
                "picture_aspect": "black_and_white",
                "threshold": 0
            }
        ```
    - `theme_color` The theme color. Usually the dominant color of the master picture.

- `coast`
    - `picture_aspect`
        - Use the master picture as is.
        - ```
            "coast": {
                "picture_aspect": "no_change"
            }
        ```
        - Generate a square icon with margin and background.
        - ```
            "coast": {
                "picture_aspect": "background_and_margin",
                "margin": "pixel value or % value",
                "background_color": "hex value of the color"
            }
        ```

- `open_graph`
    - `picture_aspect`
        - Use the master picture as is.
        - ```
            "open_graph": {
                "picture_aspect": "no_change"
            }
        ```
        - Generate a square icon with margin and background.
        - ```
            "open_graph": {
                "picture_aspect": "background_and_margin",
                "margin": "pixel value or % value",
                "background_color": "hex value of the color",
                "ratio": "square or 1.91:1"
            }
        ```
        - `site_url` The URL of the site, without path information.

- `yandex_browser`
    - `background_color` The background color of the yandex icon
    - `manifest`
        - `show_title` Display the title of the page in the bookmark. Default to true.
        - `version` The manifest version. Default to 1.0.

---

`settings`
- `compression` Set the compression level, from 0 (no compression) to 5 (highest compression level).
- `scaling_algorithm` Set the scaling algorithm. Possible values:
    - `Mitchell`
    - `NearestNeighbor`
    - `Cubic`
    - `Bilinear`
    - `Lanczos`
    - `Spline`

---

`versioning`
Since browsers cache favicons when they first encounter them and hardly remove them from the cache, the versioning parameter sets a version number based on the timestamp in order to let the browser know that he has to load a newer version of the favicon.
