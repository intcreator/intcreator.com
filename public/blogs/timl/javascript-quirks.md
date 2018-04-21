# JavaScript Quirks

There are seemingly endless quirks to the JavaScript language.  Here are a few which I did not realize until I had worked with JavaScript for a couple of years:

## Duplicate Object Properties

If you have a duplicate property in an object, no error will be thrown.  However, the second property will overrule the first property (in order).

### Example

```javascript
const myObj = {
    foo: 1,
    bar: 2,
    foo: 'one'
}
```

is equivalent to

```javascript
const myObj = {
    bar: 2,
    foo: 'one'
}
```