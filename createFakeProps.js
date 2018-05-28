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
