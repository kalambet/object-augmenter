# Object Augmenter [![Build Status](https://travis-ci.org/kalambet/object-augmenter.svg?branch=master)](https://travis-ci.org/kalambet/object-augmenter)
###### Small utility to augment one JS object by another

The idea here that we are merging two JS objects like a trees (in depth). There are no special rules or arguments. The augmenter can contain only the fields that are needs to be updated.

## Installation
```
npm install object-augmenter
```

## Usage
```
var augment = rquire('object-augmenter');

var person = {
  name: {
    first: "John",
    second: "Dough"
  }
};

augment(person, {name: {second: "Doe"}, dob: "01.01.1970"});
```

## License
MIT
