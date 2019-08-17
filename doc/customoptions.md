# Custom Options

The following tables list all options that can be overriden, their description, and their default values, grouped by root key.

## attributeNames

Contains names of default HTML attributes.

| Option     | Value Type | Default Value        | Description                                                                                                                                                                                                   |
| ---------- | ---------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `root`     | `string`   | `'data-fantaFilter'` | The default attribute root prepended to all default attributes.                                                                                                                                               |
| `group`    | `string`   | `'group'`            | Denotes a collection of **Elements** that make up a single **Filter Wrapper**.                                                                                                                                |
| `selector` | `string`   | `'selector'`         | The name of the element attribute to be used by a **Manipulator** to modify the **Filter**.                                                                                                                   |
| `comparer` | `string`   | `'comparer'`         | The method by which **Items** should be filtered. `match` compares string values, while `value` and `date` compare values mathematically (using `data-fantaFilter-operator` to determine the operation used). |
| `operator` | `string`   | `'operator'`         | The mathematical operator to be used to compare two **Items**' values, or the name of an operation used to compare two sets of values (such as start/end dates).                                              |

## classNames

Contains names of default CSS classes.

| Option        | Value Type | Default Value    | Description                                                                    |
| ------------- | ---------- | ---------------- | ------------------------------------------------------------------------------ |
| `root`        | `string`   | `'js-fafi'`      | Default root prepended to all class names.                                     |
| `parent`      | `string`   | `'parent'`       | Denotes that this elements' children will contain **Items**.                   |
| `input`       | `string`   | `'input'`        | Denotes that this element is an **Input** that will control a **Filter**.      |
| `item`        | `string`   | `'item'`         | Denotes that this element is an **Item** to be filtered.                       |
| `hidden`      | `string`   | `'hidden'`       | Class that is added when an **Item** has been filtered.                        |
| `toggleGroup` | `string`   | `'toggle-group'` | Denotes that this element is a **ToggleGroup** that will control a **Filter**. |

## inputTypes

Signature: `string[]`
String array of HTML tags that should be considered inputs by default.
Default value: `['INPUT']`

## InputComparerClasses

Class constructor to be called when a type of input comparer is created.

| Option  | Value Type             | Default Value                                   | Description                                  |
| ------- | ---------------------- | ----------------------------------------------- | -------------------------------------------- |
| `date`  | `(constructor) => any` | `(constructor) => new DateFilter(constructor)`  | Class constructor for input comparer `date`  |
| `match` | `(constructor) => any` | `(constructor) => new MatchFilter(constructor)` | Class constructor for input comparer `match` |
| `value` | `(constructor) => any` | `(constructor) => new ValueFilter(constructor)` | Class constructor for input comparer `value` |

## FilterElementClasses

Class constructor to be called when a type of filter element is created.

| Option        | Value Type             | Default Value                                                 | Description                                        |
| ------------- | ---------------------- | ------------------------------------------------------------- | -------------------------------------------------- |
| `inputs`      | `(constructor) => any` | `(constructor) => FantaFilterInput.create(constructor)`       | Class constructor for filter element `inputs`      |
| `items`       | `(constructor) => any` | `(constructor) => new FantaFilterItem(constructor)`           | Class constructor for filter element `items`       |
| `toggleGroup` | `(constructor) => any` | `(constructor) => FantaFilterToggleGroup.create(constructor)` | Class constructor for filter element `toggleGroup` |

## InputTypeClasses

Class constructor to be called when a type of input is created.

| Option       | Value Type             | Default Value                                                  | Description                                   |
| ------------ | ---------------------- | -------------------------------------------------------------- | --------------------------------------------- |
| `noUiSlider` | `(constructor) => any` | `(constructor) => new FantaFilterInputnoUiSlider(constructor)` | Class constructor for input type `noUiSlider` |
| `text`       | `(constructor) => any` | `(constructor) => new FantaFilterInputText(constructor)`       | Class constructor for input type `text`       |

## ToggleGroupTypeClasses

Class constructor to be called when a type of toggle group is created.

| Option     | Value Type                         | Default Value                                                                        | Description                                        |
| ---------- | ---------------------------------- | ------------------------------------------------------------------------------------ | -------------------------------------------------- |
| `button`   | `(constructor, childNodes) => any` | `(constructor, childNodes) => new FantaFilterButtonGroup(constructor, childNodes)`   | Class constructor for toggle group type `button`   |
| `checkbox` | `(constructor, childNodes) => any` | `(constructor, childNodes) => new FantaFilterCheckboxGroup(constructor, childNodes)` | Class constructor for toggle group type `checkbox` |
| `radio`    | `(constructor, childNodes) => any` | `(constructor, childNodes) => new FantaFilterRadioGroup(constructor, childNodes)`    | Class constructor for toggle group type `radio`    |

## ComparisonOperatorFunctions

Comparison operations using operators as keys.

| Option     | Value Type                              | Default Value                                               | Description                                  |
| ---------- | --------------------------------------- | ----------------------------------------------------------- | -------------------------------------------- |
| `>`        | `(comparisonVal, objectVal) => boolean` | `(comparisonVal, objectVal) => objectVal > comparisonVal`   | Greater-than comparison function             |
| `<`        | `(comparisonVal, objectVal) => boolean` | `(comparisonVal, objectVal) => objectVal < comparisonVal`   | Less-than comparison function                |
| `>=`       | `(comparisonVal, objectVal) => boolean` | `(comparisonVal, objectVal) => objectVal >= comparisonVal`  | Greater-than-or-equal-to comparison function |
| `<=`       | `(comparisonVal, objectVal) => boolean` | `(comparisonVal, objectVal) => objectVal <= comparisonVal`  | Less-than-or-equal-to comparison function    |
| `===`      | `(comparisonVal, objectVal) => boolean` | `(comparisonVal, objectVal) => objectVal === comparisonVal` | Equals comparison function                   |
| `!==`      | `(comparisonVal, objectVal) => boolean` | `(comparisonVal, objectVal) => objectVal !== comparisonVal` | Does-not-equal comparison function           |
| `contains` | `(comparisonVal, objectVal) => boolean` | [external function]                                         | Contains comparison function                 |
| `overlap`  | `(comparisonVal, objectVal) => boolean` | [external function]                                         | Overlap comparison function                  |

## getAttribute

Signature: `(suffix?) => string | string[]`
Function that retrieves the full (w/ root attribute prepended) version of an attribute.

## getClass

Signature: `(suffix?) => string | string[]`
Function that retrieves the full (w/ root class prepended) version of a class
