# fanta-filter

A JS plugin written in TypeScript that offers live HTML element filtering.

## Installation

Install using npm:

```sh
npm i git+https://github.com/drewsy1/fanta-filter.git
```

Then add it to HTML:

```html
<script src="[path/to/node_modules]/fanta-filter/dist/js/bundle.js"></script>
<script>
  window.onload = () => {
    const fantaFilterCurrent = FantaFilter.init();
  };
</script>
```

## Usage

### Terminology

fanta-filter uses the following terms to describe its operation:

- **Filter Wrapper:** A collection of items whose visibility is filtered/controlled by manipulators. The `init()` method returns an array of these for each `data-fantaFilter-group` found in the page (see Attributes).
  - **Filter Groups:** An object that combines the outputs of its child Filters to create a final "list" of elements to be filtered, then sets the "hidden" attribute on child items accordingly. **\*Example:** FilterA says "show elements 1 and 3" and FilterB says "show elements 2 and 3". The filter group therefore shows only element 3, because all of the child filters agree that it should be shown.\*
    - **Filter:** An object that contains the logic used to filter Items using input from Manipulators. Passes a list of elements to be shown/hidden up to its Filter Group.
    - **Element:** An HTML element
      - **Item:** An HTML element that is controlled by a filter and its manipulators.
      - **Manipulator:** An HTML element (or collection of them) that filter/manipulate a Filter Wrapper's Items.
        - **Input:** An HTML element, usually with the `<input>` tag, which stores a `value` attribute (or analog) that can be modified within the DOM and/or by the end user. **\*Examples:** text inputs, some custom objects such as [noUiSlider](https://refreshless.com/nouislider/).\*
        - **ToggleGroup:** An HTML element which stores an immutable `value`. This element's state is used to define its output. **_Examples:_** `<button>`_, radios, checkboxes, etc._

This plugin uses a combination of HTML attributes and CSS classes to determine which elements should be filtered or manipulate filters. These can be overriden (see 'Advanced Configuration') but default to the following values:

### HTML Attributes

| Attribute                   | Description                                                                                                                                                                                                   | Value(s)/Example(s)                                                                                                       |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `data-fantaFilter`          | Default root prepended to all attribute names. If overriden (see 'Advanced Configuration'), all subsequent attributes should replace `data-fantaFilter` with the value used here.                             |
| `data-fantaFilter-group`    | Denotes a collection of **Elements** that make up a single **Filter Wrapper**.                                                                                                                                | [A group name]                                                                                                            |
| `data-fantaFilter-selector` | The name of the element attribute to be used by a **Manipulator** to modify the **Filter**.                                                                                                                   | `innerText`, `value`, `data-fantaFilter-[custom attribute]`                                                               |
| `data-fantaFilter-comparer` | The method by which **Items** should be filtered. `match` compares string values, while `value` and `date` compare values mathematically (using `data-fantaFilter-operator` to determine the operation used). | `match` (default), `value`, `date`                                                                                        |
| `data-fantaFilter-operator` | The mathematical operator to be used to compare two **Items**' values, or the name of an operation used to compare two sets of values (such as start/end dates).                                              | Direct one-to-one JS comparers (separated by `|`): `> | < | >= | <= | === | !==`. Group comparers: `contains`, `overlap`. |

### CSS Classes

| Class                  | Description                                                                                                                                                                                                       | Relevant Attributes                                                                                                 |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `js-fafi`              | Default root prepended to all class names. If overriden (see 'Advanced Configuration'), all subsequent classes should replace `js-fafi` with the value used here.                                                 |
| `js-fafi-parent`       | Denotes that this elements' children will contain **Items**. The child **Items** of multiple parent elements within a single **Filter Wrapper** will be filtered as if they all belong to a single, large parent. | `data-fantaFilter-group`                                                                                            |
| `js-fafi-input`        | Denotes that this element is an **Input** that will control a **Filter**.                                                                                                                                         | `data-fantaFilter-group`, `data-fantaFilter-comparer`, `data-fantaFilter-selector`                                  |
| `js-fafi-item`         | Denotes that this element is an **Item** to be filtered.                                                                                                                                                          | `data-fantaFilter-group`, any attribute used by **Input**/**ToggleGroup** elements as a `data-fantaFilter-selector` |
| `js-fafi-hidden`       | Class that is added when an **Item** has been filtered.                                                                                                                                                           |
| `js-fafi-toggle-group` | Denotes that this element is a **ToggleGroup** that will control a **Filter**.                                                                                                                                    | `data-fantaFilter-group`, `data-fantaFilter-comparer`, `data-fantaFilter-selector`                                  |

## Examples

See [Examples](/doc/examples.md) for code examples and their results.

## Advanced Configuration

When initializing a fanta-filter instance, custom overrides of default settings can be provided as an argument:

```html
<script>
  window.onload = () => {
    const customOptions = {
      /* custom options */
    };
    const fantaFilterCurrent = FantaFilter.init((_userOptions = customOptions));
  };
</script>
```

Custom options override the defaults. Information on the options exposed can be found in [Custom Options](/docs/customoptions.md).
