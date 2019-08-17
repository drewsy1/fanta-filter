# Examples

## Example 1

A **ToggleGroup** of radio buttons filter **Items** based on the value of their `data-fantaFilter-color` attributes, while a text **Input** filters them based on the content of their `innerText`.

```html
<h1>testGroup1</h1>
<!-- This div is a toggleGroup of radio buttons that will filter based on Items' data-fantaFilter-color attribute-->
<div
  class="js-fafi-toggle-group"
  id="testGroup1ToggleGroup"
  data-fantafilter-group="testGroup1"
  data-fantafilter-comparer="match"
  data-fantafilter-selector="color"
>
  <input id="testGroup1ColorsDefault" type="radio" name="color" value="" checked />
  <label for="testGroup1ColorsDefault">All</label>
  <input id="testGroup1ColorsBlue" type="radio" name="color" value="blue" />
  <label for="testGroup1ColorsBlue">Blue</label>
  <input id="testGroup1ColorsBlack" type="radio" name="color" value="black" />
  <label for="testGroup1ColorsBlack">Black</label>
</div>
<!-- This div is an input that will filter based on Items' innerText attribute-->
<input
  class="js-fafi-input"
  data-fantafilter-group="testGroup1"
  title="testGroup1, Input 1"
  id="testGroup1TextFilter"
  data-fantafilter-comparer="match"
  data-fantafilter-selector="innerText"
/>
<ul class="js-fafi js-fafi-parent" data-fantafilter-group="testGroup1">
  <li class="js-fafi-item" data-fantafilter-group="testGroup1" data-fantafilter-color="blue">
    testGroup1, Item 0
  </li>
  <li class="js-fafi-item" data-fantafilter-group="testGroup1" data-fantafilter-color="black">
    testGroup1, Item 1
  </li>
  <li class="js-fafi-item" data-fantafilter-group="testGroup1" data-fantafilter-color="blue">
    testGroup1, Item 2
  </li>
  <li class="js-fafi-item" data-fantafilter-group="testGroup1" data-fantafilter-color="blue">
    testGroup1, Item 3
  </li>
  <li class="js-fafi-item" data-fantafilter-group="testGroup1" data-fantafilter-color="black">
    testGroup1, Item 4
  </li>
  <li class="js-fafi-item" data-fantafilter-group="testGroup1" data-fantafilter-color="blue">
    testGroup1, Item 5
  </li>
</ul>
```

![example1](/doc/example1.gif)

## Example 2

A text **Input** filters **Items** spread across multiple `js-fafi-parent` groups based on the content of their `innerText`.

```html
<h1>testGroup2</h1>
<input
  class="js-fafi-input"
  data-fantafilter-group="testGroup2"
  title="testGroup2, Input 0"
  id="testGroup2TextFilter"
  data-fantafilter-comparer="match"
  data-fantafilter-selector="innerText"
/>
<ul class="js-fafi js-fafi-parent" data-fantafilter-group="testGroup2">
  <li class="js-fafi-item" data-fantafilter-group="testGroup2">testGroup2, Item 0</li>
  <li class="js-fafi-item" data-fantafilter-group="testGroup2">testGroup2, Item 1</li>
  <li class="js-fafi-item" data-fantafilter-group="testGroup2">testGroup2, Item 2</li>
</ul>
<ul class="js-fafi js-fafi-parent" data-fantafilter-group="testGroup2">
  <li class="js-fafi-item" data-fantafilter-group="testGroup2">testGroup2, Item 3</li>
  <li class="js-fafi-item" data-fantafilter-group="testGroup2">testGroup2, Item 4</li>
  <li class="js-fafi-item" data-fantafilter-group="testGroup2">testGroup2, Item 5</li>
</ul>
```

![example2](/doc/example2.gif)

## Example 3

A noUiSlider with two handles is used as an **Input** to test whether or not **Items**' datespans overlap that of the noUiSlider. Text inputs are added to show the current value of the slider's handles.

```html
<script>
  let fantaFilterCurrent;
  let dateSlider;
  let dateValues;

  // Creates a Date object from a string, then returns its raw value as a number.
  function timestamp(str) {
    return new Date(str).getTime();
  }

  window.onload = () => {
    // the noUiSlider itself
    dateSlider = document.getElementById('testGroup3Slider');

    // The text inputs used to display the values of the noUiSlider handles
    dateValues = [document.getElementById('dateLow'), document.getElementById('dateHigh')];

    noUiSlider.create(dateSlider, {
      // Create two timestamps to define a range.
      range: {
        min: timestamp('1970-01-01'),
        max: timestamp('2019-08-13'),
      },

      // Steps of one week
      step: 7 * 24 * 60 * 60 * 1000,

      // Two more timestamps indicate the handle starting positions.
      start: [timestamp('1980'), timestamp('2015')],
    });

    // When the noUiSlider is changed, update the values of the text inputs
    dateSlider.noUiSlider.on('update', function(values, handle) {
      dateValues[handle].value = new Date(+values[handle]).toISOString();
    });

    fantaFilterCurrent = FantaFilter.init();
  };
</script>

...

<h1>testGroup3</h1>
<div id="testGroup3">
  <div
    id="testGroup3Slider"
    class="js-fafi-input"
    type="noUiSlider"
    data-fantafilter-group="testGroup3"
    data-fantafilter-comparer="date"
    data-fantafilter-selector="date-start;date-end"
    data-fantafilter-operator="overlap"
  ></div>
  <div id="testGroup3SliderVals">
    <input type="text" id="dateLow" disabled />
    <input type="text" id="dateHigh" disabled />
  </div>
  <table id="testGroup3Table" class="js-fafi js-fafi-parent" data-fantafilter-group="testGroup3">
    <thead>
      <th>Group</th>
      <th>Item #</th>
      <th>Start Date</th>
      <th>End Date</th>
    </thead>
    <tbody>
      <tr
        class="js-fafi-item"
        data-fantafilter-group="testGroup3"
        data-fantafilter-date-start="1977-12-18T05:02:59"
        data-fantafilter-date-end="1987-12-18T05:02:59"
      >
        <td>testGroup3</td>
        <td>0</td>
        <td>1977-12-18T05:02:59</td>
        <td>1987-12-18T05:02:59</td>
      </tr>
      <tr
        class="js-fafi-item"
        data-fantafilter-group="testGroup3"
        data-fantafilter-date-start="2005-05-29T17:32:24"
        data-fantafilter-date-end="2015-05-29T17:32:24"
      >
        <td>testGroup3</td>
        <td>1</td>
        <td>2005-05-29T17:32:24</td>
        <td>2015-05-29T17:32:24</td>
      </tr>
      <tr
        class="js-fafi-item"
        data-fantafilter-group="testGroup3"
        data-fantafilter-date-start="2000-10-13T02:45:37"
        data-fantafilter-date-end="2010-10-13T02:45:37"
      >
        <td>testGroup3</td>
        <td>2</td>
        <td>2000-10-13T02:45:37</td>
        <td>2010-10-13T02:45:37</td>
      </tr>
      <tr
        class="js-fafi-item"
        data-fantafilter-group="testGroup3"
        data-fantafilter-date-start="1985-08-07T05:52:29"
        data-fantafilter-date-end="1995-08-07T05:52:29"
      >
        <td>testGroup3</td>
        <td>3</td>
        <td>1985-08-07T05:52:29</td>
        <td>1995-08-07T05:52:29</td>
      </tr>
      <tr
        class="js-fafi-item"
        data-fantafilter-group="testGroup3"
        data-fantafilter-date-start="1996-03-15T11:07:58"
        data-fantafilter-date-end="2006-03-15T11:07:58"
      >
        <td>testGroup3</td>
        <td>4</td>
        <td>1996-03-15T11:07:58</td>
        <td>2006-03-15T11:07:58</td>
      </tr>
      <tr
        class="js-fafi-item"
        data-fantafilter-group="testGroup3"
        data-fantafilter-date-start="2004-01-19T09:33:29"
        data-fantafilter-date-end="2014-01-19T09:33:29"
      >
        <td>testGroup3</td>
        <td>5</td>
        <td>2004-01-19T09:33:29</td>
        <td>2014-01-19T09:33:29</td>
      </tr>
    </tbody>
  </table>
</div>
```

![example3](/doc/example3.gif)
