<template>
  <div id="app">
    <ShapeShifterTable :headers="headers" :tableData="rows" :footers="footers"/>
  </div>
</template>

<script>
import ShapeShifterTable from './components/ShapeShifterTable.vue'

export default {
  name: 'App',
  components: {
    ShapeShifterTable
  },
  data () {
    return {
      headers: [],
			rows: [],
      footers: []
    }
  },
  mounted() {
    let row= [];
    row.push({ field: 'mubu', key:'row-action', editable: true});
    this.rows.push(row);
    this.headers.push({ field: 'habu', key: 'col-action', editable: true });
  },
  methods:{
    addColumn(){
      if(this.rows.length == 0)
        this.headers.push({ field: 'sample', key: 'col_' + this.headers.length, editable: true });
      else {
        this.headers.push({ field: 'sample', key: 'col_' + this.headers.length, editable: true });
        this.rows.map((row, index) => {
            return row.push({ field: 'sample', key: 'row_' + index + this.headers.length, editable: true });
        })  
      }
    },
    addRow(){
      let row = [];
      this.headers.forEach((header, index) => {
        row.push({ field: 'sample', key: 'row_' + this.rows.length + index, editable: true });
      })
      this.rows.push(row);
    },
  }
}
</script>

