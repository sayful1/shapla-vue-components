import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from "./Home.vue";
import TestButton from "./components/TestButton.vue";
import TestCheckbox from "./components/TestCheckbox.vue";
import TestColorSystem from "./components/TestColorSystem.vue";
import TestColumns from "./components/TestColumns.vue";
import TestConfirmationDialogs from "./components/TestConfirmationDialogs.vue";
import TestDataTable from "./components/TestDataTable.vue";
import TestDelete from "./components/TestDelete.vue";
import TestDropdown from "./components/TestDropdown.vue";
import TestModal from "./components/TestModal.vue";
import TestNotifications from "./components/TestNotifications.vue";
import TestRadio from "./components/TestRadio.vue";
import TestRadioButtons from "./components/TestRadioButtons.vue";
import TestSideNavigation from "./components/TestSideNavigation.vue";
import TestSpinner from "./components/TestSpinner.vue";
import TestStarRating from "./components/TestStarRating.vue";
import TestStatusList from "./components/TestStatusList.vue";
import TestSwitch from "./components/TestSwitch.vue";
import TestTabs from "./components/TestTabs.vue";
import TestToggles from "./components/TestToggles.vue";
import TestTextField from "./components/TestTextField.vue";
import TestSelectField from "./components/TestSelectField.vue";
import TestChip from "./components/TestChip.vue";
import TestPagination from "./components/TestPagination.vue";
import TestFileUploader from "./components/TestFileUploader.vue";

Vue.use(VueRouter);

const routes = [
  {path: '/', name: 'Home', component: Home},
  {path: '/button', name: 'Button', component: TestButton},
  {path: '/checkbox', name: 'Checkbox', component: TestCheckbox},
  {path: '/color', name: 'ColorSystem', component: TestColorSystem},
  {path: '/columns', name: 'Columns', component: TestColumns},
  {path: '/confirm', name: 'Confirm', component: TestConfirmationDialogs},
  {path: '/data-table', name: 'DataTable', component: TestDataTable},
  {path: '/delete', name: 'Delete', component: TestDelete},
  {path: '/dropdown', name: 'Dropdown', component: TestDropdown},
  {path: '/file-uploader', name: 'TestFileUploader', component: TestFileUploader},
  {path: '/modal', name: 'Modal', component: TestModal},
  {path: '/notifications', name: 'Notifications', component: TestNotifications},
  {path: '/radio', name: 'Radio', component: TestRadio},
  {path: '/radio-button', name: 'RadioButton', component: TestRadioButtons},
  {path: '/side-nav', name: 'SideNavigation', component: TestSideNavigation},
  {path: '/spinner', name: 'Spinner', component: TestSpinner},
  {path: '/star-rating', name: 'StarRating', component: TestStarRating},
  {path: '/status-list', name: 'StatusList', component: TestStatusList},
  {path: '/switch', name: 'Switch', component: TestSwitch},
  {path: '/tabs', name: 'Tabs', component: TestTabs},
  {path: '/toggles', name: 'Toggles', component: TestToggles},
  {path: '/text-field', name: 'TextField', component: TestTextField},
  {path: '/select-field', name: 'SelectField', component: TestSelectField},
  {path: '/chip', name: 'Chip', component: TestChip},
  {path: '/pagination', name: 'DataTablePagination', component: TestPagination},
];

export default new VueRouter({routes});
