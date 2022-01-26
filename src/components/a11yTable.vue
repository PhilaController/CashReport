<template>
  <table>
    <caption>
      {{
        caption
      }}
    </caption>
    <!-- Header -->
    <thead>
      <tr>
        <th scope="col">Fiscal Year</th>
        <th
          v-for="(data, columnIndex) in data.datasets"
          :key="`column-header-${columnIndex}`"
          scope="col"
        >
          {{ data.label }}
        </th>
      </tr>
    </thead>
    <!-- Body -->
    <tbody>
      <tr
        v-for="(label, rowIndex) in data.labels"
        :key="`row-header-${rowIndex}`"
      >
        <th scope="row">{{ label }}</th>
        <td
          v-for="(data, columnIndex) in data.datasets"
          :key="`column-value-${columnIndex}`"
        >
          {{ formatFunction(parseFloat(data.data[rowIndex])) }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "a11yTable",
  props: ["caption", "data", "formatFunction"],
};
</script>
