import Vue from 'vue'
import { Loading, Message, Notification, MessageBox } from 'element-ui';
import * as components from './components';
console.log('components', components)

const install = (Vue: any) => {
  if ((install as any).installed) return;

  Object.keys(components.default).forEach((key) => {
    console.log('key', key)
    const c = (components as any).default[key];
    Vue.component(key, c);
  });

  Vue.use(Loading.directive);

  /* eslint-disable no-param-reassign */
  Vue.prototype.$notify = Notification;
  Vue.prototype.$message = Message;
  Vue.prototype.$prompt = MessageBox.prompt;

  Vue.prototype.$ELEMENT = { size: 'small' };
}

const API = {
  version: '0.0.1',
  install,
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export * from './components';
// export * from './constants';
// export * from './staticAPI';
// export * from './utils';
export default API;

