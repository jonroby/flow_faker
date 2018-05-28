const fs = require("fs");
const faker = require("faker");
const changeCase = require("change-case");
const reactDocs = require("react-docgen");

// This function should take a docgen for flow types
// and output a fake component props object that can
// be passed into the object
function createFakeProps() {
  const file = fs.readFileSync("./reactComponent.js");
  const flowData = reactDocs.parse(file);

  const fakeComponentProps = Object.keys(flowData.props).reduce(
    (acc, propName) => {
      const prop = flowData.props[propName];
      const fakeProp = createFakeProp(prop.flowType);
      const obj = { [propName]: fakeProp };

      return Object.assign({}, acc, obj);
    },
    {}
  );

  //  return flowData;
}

function createFakeProp(prop) {
  switch (changeCase.lowerCase(prop.name)) {
    case "number":
      return getNumber(prop);

    case "string":
      return getString(prop);

    case "boolean":
      return getBoolean(prop);

    case "void":
      return null; // undefined?

    case "array":
      return prop.elements.reduce((acc, element) => {
        const fakeProp = createFakeProp(element);
        return acc.concat(fakeProp);
      }, []);

    case "object":

    case "union":
      return prop.elements.map(p => {
        return createFakeProp(p);
      });

    default:
      console.log("No match.");
  }
}

// TODO: regex on propName and use a corresponding faker function if match
function getNumber(propName, prop) {
  // TODO: regex on propName and use a corresponding faker function if match

  return faker.random.number();
}

function getString(propName, prop) {
  return faker.random.word();
}

function getBoolean(propName, prop) {
  // TODO: Figure out a sensible way to store both true and false
  return faker.random.boolean();
}

function getLiteralsAndUnion() {
  // TODO: literals and union
  // flowDoc.props['primitive'].flowType.name
  // flowDoc.props['primitive'].flowType.elements
  // [ { name: 'literal', value: '\'string\'' },
  //   { name: 'literal', value: '\'otherstring\'' },
  //   { name: 'number' } ]
}

function getArr() {}

function getObj() {}

createFakeProps();

// module.exports = getFakeProps;
