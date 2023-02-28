<template>
  <div id="app">
    <ShapeShifterTable :headers="headers" :tableData="rows" :footers="footers" @addColumn="addColumn" @addRow="addRow"/>
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
    // this.footers.push({ field: '+', key:'row-action', event: true, fixed:'fixed-footer', eventName:"addRow" });
    // this.headers.push({ field: '+', key: 'action', event: true, fixed: 'fixed-right', eventName: "addColumn" });
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

