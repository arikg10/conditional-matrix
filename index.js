const core = require('@actions/core');

try {
  const condition = core.getInput('condition', { required: true });
  const array1Json = core.getInput('array1', { required: true });
  const array2Json = core.getInput('array2', { required: true });

  // Since the inputs are passed as JSON strings, parse them
  const array1 = JSON.parse(array1Json);
  const array2 = JSON.parse(array2Json);

  const selectedArray = (condition === 'true') ? array1 : array2;
  const outputMatrix = { include: selectedArray };

  core.setOutput('matrix', JSON.stringify(outputMatrix));
  console.log(`Outputting matrix: ${JSON.stringify(outputMatrix)}`);
} catch (error) {
  core.setFailed(error.message);
}
