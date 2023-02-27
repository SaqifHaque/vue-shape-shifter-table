import ShapeShifterTable from "./components/ShapeShifterTable.vue";

const ShapeShifter = {
 install(Vue) {
  // Let's register our component globally
  // https://vuejs.org/v2/guide/components-registration.html
  Vue.component("vue-shape-shifter-table", ShapeShifterTable);
 }
};

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(ShapeShifter);
}

export default ShapeShifter;