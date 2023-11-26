# Conditional Array Selector Action

This GitHub Action selects one of two provided YAML arrays based on a given condition. It's designed to enhance workflow flexibility by dynamically choosing array inputs.

## Usage

This action can be used in any workflow to select between two arrays based on a specified condition. It's particularly useful in scenarios where the workflow needs to make decisions based on branch names, pull request states, or any other conditional logic.

### Inputs

- `condition`: A string condition that determines which array to select. Typically 'true' or 'false'.
- `array1`: The first YAML formatted array.
- `array2`: The second YAML formatted array.

### Outputs

- `selectedArray`: The selected array in JSON format.

### Example Workflow

```yaml
jobs:
  my_job:
    runs-on: ubuntu-latest
    steps:
      - name: Run custom action
        uses: your-username/your-repo-name@main
        with:
          condition: ${{ <your-condition> }}
          array1: |
            - suite_name: 'A'
              test_command: 'command1'
            - suite_name: 'B'
              test_command: 'command2'
          array2: |
            - suite_name: 'C'
              test_command: 'command3'
      - name: Use Selected Array
        run: echo "The selected array is ${{ steps.select_array.outputs.selectedArray }}"
