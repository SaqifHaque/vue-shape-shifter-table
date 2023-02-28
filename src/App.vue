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
      this.headers.push({ field: 'sample', key: "action1", editable: true });
    },
    addRow(){
      this.rows.push({ field: 'sample', key: 'action5', editable: true });
    },
  }
}
</script>

