import { Settings as LayoutSettings } from '@ant-design/pro-layout';

export default {
  navTheme: 'light',
  // 拂晓蓝
  primaryColor: '#1890ff',
  layout: 'top', // 顶部菜单
  contentWidth: 'Fluid',
  fixedHeader: true, // 固定顶部菜单
  fixSiderbar: true,
  colorWeak: false,
  menu: {
    locale: true,
  },
  title: '卫生标准平台',
  pwa: false,
  iconfontUrl: '',
} as LayoutSettings & {
  pwa: boolean;
};
