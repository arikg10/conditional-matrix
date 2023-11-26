# Conditional Array Selector Action

This GitHub Action selects one of two provided YAML arrays based on a given condition and outputs the selected array in JSON format. It enhances workflow flexibility by dynamically choosing array inputs based on conditions.

## Usage

Use this action to select between two arrays in your workflows, based on a specified condition. It's useful for scenarios where different configurations or parameters are needed based on branch names, pull request states, or other conditional logic.

### Inputs

- `condition`: A string condition to determine array selection ('true' or 'false').
- `array1`: First YAML formatted array.
- `array2`: Second YAML formatted array.

### Outputs

- `selectedArray`: The selected array, output in JSON format.

### Example Workflow

In this example, the action selects one of two arrays based on whether the branch name contains 'feature'.

```yaml
jobs:
  select-array-job:
    runs-on: ubuntu-latest
    outputs:
      selectedArray: ${{ steps.array_selector.outputs.selectedArray }}
    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Run Conditional Array Selector
        id: array_selector
        uses: arikg10/conditional-matrix@main
        with:
          condition: ${{ contains(github.ref, 'feature') }}
          array1: |
            - suite_name: 'Feature A'
              test_command: 'command1'
            - suite_name: 'Feature B'
              test_command: 'command2'
          array2: |
            - suite_name: 'Regular A'
              test_command: 'command3'
            - suite_name: 'Regular B'
              test_command: 'command4'

      - name: Use Selected Array
        run: echo "The selected array is ${{ steps.array_selector.outputs.selectedArray }}"
