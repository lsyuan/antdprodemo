// https://umijs.org/config/
import { defineConfig } from 'umi';
import defaultSettings from './defaultSettings';
// import proxy from './proxy';
// const { REACT_APP_ENV } = process.env;
export default defineConfig({
  hash: true,
  antd: {},
  dva: {
    hmr: true,
  },
  layout: {
    name: '智物云卫生信息标准应用服务平台',
    locale: true,
    siderWidth: 208,
  },
  locale: {
    // default zh-CN
    default: 'zh-CN',
    // default true, when it is true, will use `navigator.language` overwrite default
    antd: true,
    baseNavigator: true,
  },
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/docs/routing
  routes: [
    {
      path: '/user',
      layout: false,
      routes: [
        {
          name: 'login',
          path: '/user/login',
          component: './user/login',
        },
        {
          name: '注册页',
          icon: 'smile',
          path: '/user/register',
          component: './user/Register',
        },
      ],
    },
    {
      path: '/dashboard',
      name: '主页',
      icon: 'home',
      component: './dashboard',
    },
    {
      name: 'list.table-list',
      icon: 'table',
      path: '/list',
      component: './ListTableList',
    },
    {
      path: '/admin',
      name: 'admin',
      icon: 'home',
      access: 'canAdmin',
      component: './Admin',
      routes: [
        {
          path: '/admin/sub-page',
          name: 'sub-page',
          icon: 'smile',
          component: './Welcome',
        },
      ],
    },
    {
      path: '/',
      redirect: '/dashboard',
    },
    {
      name: '系统报告',
      icon: 'home',
      path: '/formadvancedform',
      component: './FormAdvancedForm',
    },
    {
      name: '索引编制',
      icon: 'home',
      path: '/formadvancedform4',
      component: './FormAdvancedForm',
    },
    {
      name: '系统管理',
      icon: 'setting',
      path: '/formadvancedform1',
      component: './FormAdvancedForm',
    },
    {
      name: '联系我们',
      icon: 'home',
      path: '/formadvancedform2',
      component: './FormAdvancedForm',
    },
    {
      name: '使用帮助',
      icon: 'read',
      path: '/formadvancedform3',
      component: './FormAdvancedForm',
    },
    {
      component: './404',
    },
  ],
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    // ...darkTheme,
    'primary-color': defaultSettings.primaryColor,
  },
  // @ts-ignore
  title: false,
  ignoreMomentLocale: true,
  // 不使用代理!!!
  // proxy: proxy[REACT_APP_ENV || 'dev'],
  manifest: {
    basePath: '/',
  },
});
