import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from "./Home";
import TestButton from "./components/TestButton";
import TestCheckbox from "./components/TestCheckbox";
import TestColorSystem from "./components/TestColorSystem";
import TestColumns from "./components/TestColumns";
import TestConfirmationDialogs from "./components/TestConfirmationDialogs";
import TestDataTable from "./components/TestDataTable";
import TestDataTableFull from "./components/TestDataTableFull";
import TestDelete from "./components/TestDelete";
import TestDropdown from "./components/TestDropdown";

Vue.use(VueRouter);

const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/button', name: 'Button', component: TestButton},
    {path: '/checkbox', name: 'Checkbox', component: TestCheckbox},
    {path: '/color', name: 'ColorSystem', component: TestColorSystem},
    {path: '/columns', name: 'Columns', component: TestColumns},
    {path: '/confirm', name: 'Confirm', component: TestConfirmationDialogs},
    {path: '/data-table', name: 'DataTable', component: TestDataTable},
    {path: '/data-table-full', name: 'DataTableFull', component: TestDataTableFull},
    {path: '/delete', name: 'Delete', component: TestDelete},
    {path: '/dropdown', name: 'Dropdown', component: TestDropdown},
];

export default new VueRouter({
    routes // short for `routes: routes`
});