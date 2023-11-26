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

  // Set the output
  core.setOutput('selectedArray', JSON.stringify(selectedArray));
} catch (error) {
  core.setFailed(error.message);
}
