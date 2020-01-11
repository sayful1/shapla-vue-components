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
import TestMediaUploader from "./components/TestMediaUploader";
import TestModal from "./components/TestModal";
import TestMonthNavigation from "./components/TestMonthNavigation";
import TestNotifications from "./components/TestNotifications";
import TestRadio from "./components/TestRadio";
import TestRadioButtons from "./components/TestRadioButtons";
import TestSideNavigation from "./components/TestSideNavigation";
import TestSignatureCanvas from "./components/TestSignatureCanvas";
import TestSpinner from "./components/TestSpinner";
import TestStarRating from "./components/TestStarRating";
import TestStatusList from "./components/TestStatusList";
import TestSwitch from "./components/TestSwitch";
import TestTabs from "./components/TestTabs";
import TestToggles from "./components/TestToggles";
import TestTextField from "./components/TestTextField";
import TestSelectField from "./components/TestSelectField";
import TestChip from "./components/TestChip";

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
    {path: '/media-uploader', name: 'MediaUploader', component: TestMediaUploader},
    {path: '/modal', name: 'Modal', component: TestModal},
    {path: '/month-nav', name: 'MonthNavigation', component: TestMonthNavigation},
    {path: '/notifications', name: 'Notifications', component: TestNotifications},
    {path: '/radio', name: 'Radio', component: TestRadio},
    {path: '/radio-button', name: 'RadioButton', component: TestRadioButtons},
    {path: '/side-nav', name: 'SideNavigation', component: TestSideNavigation},
    {path: '/signature-canvas', name: 'SignatureCanvas', component: TestSignatureCanvas},
    {path: '/spinner', name: 'Spinner', component: TestSpinner},
    {path: '/star-rating', name: 'StarRating', component: TestStarRating},
    {path: '/status-list', name: 'StatusList', component: TestStatusList},
    {path: '/switch', name: 'Switch', component: TestSwitch},
    {path: '/tabs', name: 'Tabs', component: TestTabs},
    {path: '/toggles', name: 'Toggles', component: TestToggles},
    {path: '/text-field', name: 'TextField', component: TestTextField},
    {path: '/select-field', name: 'SelectField', component: TestSelectField},
    {path: '/chip', name: 'Chip', component: TestChip},
];

export default new VueRouter({
    routes // short for `routes: routes`
});