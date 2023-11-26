const core = require('@actions/core');
const yaml = require('js-yaml');

try {
  // Get the inputs from the workflow file
  const condition = core.getInput('condition', { required: true });
  const array1Yaml = core.getInput('array1', { required: true });
  const array2Yaml = core.getInput('array2', { required: true });

  // Parse the YAML inputs
  const array1 = yaml.load(array1Yaml);
  const array2 = yaml.load(array2Yaml);

  // Determine which array to output
  const selectedArray = (condition === 'true') ? array1 : array2;

// Prepare the output object with the "include" key
  const outputMatrix = { include: selectedArray };

  let jsonString = JSON.stringify(outputMatrix);
  let escapedJsonString = jsonString.replace(/"/g, '\\"');

  // Set the output in JSON format
  core.setOutput('selectedArray', JSON.stringify(escapedJsonString));
  console.log(`The selected array is: ${JSON.stringify(escapedJsonString)}`);
} catch (error) {
  core.setFailed(error.message);
}
