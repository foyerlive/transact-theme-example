## FoyerLive theme documentation

__Table of contents__

* [SASS/CSS](#sass)
* [Variables](#variables)
* [Containers](#containers)
* [Components](#components)
* [Examples](#examples)

### <a name="sass"></a>SASS/CSS

So that you can begin writing code straight away, the sample theme ships with each container and component fully commented and void of styling. 
Simply add your own CSS to start customising.

### <a name="variables"></a>Variables

To assist you with applying your own custom look and feel, several variables have been provided. These can be found in `_variables.scss`.

__Fonts__

| Name                     | Description               | Example                                          |
|--------------------------|---------------------------|--------------------------------------------------|
| `$font-size-base`        | Font size base            | 75%                                              |
| `$font-size-default`     | Default font size         | 18px                                             |
| `$font-family`           | Default font family       | 'Helvetica Neue', Helvetica, Arial, sans-serif   |
| `$font-color-default`    | Default font colour       | #3d3b3b                                          |
| `$line-height-default`   | Default line height       | 150%                                             |

__Colours__

| Name                            | Description                                     | Example                   |
|---------------------------------|-------------------------------------------------|---------------------------|
| `$color-highlight`              | Call to action colo r                           | #ea6953                   |
| `$font-color-body`              | Body text colour                                | #686158                   |
| `$font-color-alt`               | Alternative font colour dark backgrounds        | #ffffff                   |
| `$color-light`                  | Light font colour                               | #c0b8b0                   |
| `$color-default`                | Default colour                                  | #372E2C                   |
| `$background-color-default`     | Default background colour                       | #ffffff                   |
| `$background-color-light`       | Light background colour                         | #f1f1f3                   |
| `$background-color-dark`        | Dark background colour                          | #383330                   |
| `$background-medium`            | Mid range background colour                     | #807974                   |
| `$background-color-active`      | Background colour for active items              | rgba(100, 91, 104, 0.3)   |


### <a name="containers"></a>Containers

Each page is made up of one of more containers, and containers maybe nested within on another. A container may also contain on or more components such as `header`, `footer` or `tabs`.

For an overview of each container, see below:

* [Index](/doc/containers/index.md)
* [Home](/doc/containers/home.md)
* [Category list](/doc/containers/category-list.md)
* [Product list](/doc/containers/product-list.md)
* [Product Detail](/doc/containers/product-detail.md)
* [Search](/doc/containers/search.md)


### <a name="components"></a>Components
* Header
* Footer

### <a name="examples"></a>Examples

* Basic
  * Header
  * Footer 
  * Home page
  * Category page
  * Product list
  * Product detail
  * Search