/*
 * @Descripttion: ''
 * @version: ''
 * @Author: 周涛
 * @Date: 2022-02-26 14:04:18
 * @LastEditors: 周涛
 * @LastEditTime: 2022-03-07 23:44:20
 */
import Vue from 'vue'
import {
    Container,
    Header,
    Aside, Main,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Button,
    Form,
    FormItem,
    Input,
    Message,
    MessageBox,
    Menu,
    Submenu,
    MenuItemGroup,
    MenuItem,
    Table,
    TableColumn,
    Pagination,
    Tabs,
    TabPane,
    Select,
    Option,
    Col,
    Switch,
    Checkbox,
    CheckboxGroup,
    Upload,
    Dialog,
} from 'element-ui'

Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(MenuItem)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Pagination)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Select)
Vue.use(Option)
Vue.use(Col)
Vue.use(Switch)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.use(Upload)
Vue.use(Dialog)

Vue.prototype.$message = Message;
Vue.prototype.$confirm = MessageBox.confirm;