import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from "./Home.vue";
import TestButton from "./pages/TestButton.vue";
import TestCheckbox from "./pages/TestCheckbox.vue";
import TestColorSystem from "./pages/TestColorSystem.vue";
import TestColumns from "./pages/TestColumns.vue";
import TestConfirmationDialogs from "./pages/TestConfirmationDialogs.vue";
import TestDataTable from "./pages/TestDataTable.vue";
import TestDelete from "./pages/TestDelete.vue";
import TestDropdown from "./pages/TestDropdown.vue";
import TestModal from "./pages/TestModal.vue";
import TestNotifications from "./pages/TestNotifications.vue";
import TestRadio from "./pages/TestRadio.vue";
import TestRadioButtons from "./pages/TestRadioButtons.vue";
import TestSideNavigation from "./pages/TestSideNavigation.vue";
import TestSpinner from "./pages/TestSpinner.vue";
import TestStarRating from "./pages/TestStarRating.vue";
import TestStatusList from "./pages/TestStatusList.vue";
import TestSwitch from "./pages/TestSwitch.vue";
import TestTabs from "./pages/TestTabs.vue";
import TestToggles from "./pages/TestToggles.vue";
import TestTextField from "./pages/TestTextField.vue";
import TestSelectField from "./pages/TestSelectField.vue";
import TestChip from "./pages/TestChip.vue";
import TestPagination from "./pages/TestPagination.vue";
import TestFileUploader from "./pages/TestFileUploader.vue";

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
