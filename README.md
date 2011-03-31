# HamlJS - Coffeescript Plugin

A plugin that allows you to use coffeescript in your templates instead of javascript.

## Quick Example

<pre>
!!! 5
%html
  %head
    %title Example
  %body
    :javascript
      five = 2 + 3
      multiply = (first, second) ->
        first * second
      alert multiply five, 5
</pre>

Licensed under MIT.