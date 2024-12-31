import NProgress from 'nprogress';
import { createRouter, createWebHistory } from 'vue-router';

export const ROUTERS = [
  {
    path: '/background',
    name: 'background',
    component: () => import('../view/background/index.vue'),
    meta: {
      title: '背景介绍'
    }
  },
  {
    path: '/problem',
    name: 'problem',
    component: () => import('../view/problem/index.vue'),
    meta: {
      title: '问题查找'
    }
  },
  {
    path: '/restructure',
    name: 'restructure',
    meta: {
      title: '重构事项'
    },
    children: [
      {
        path: '/restructure/plan',
        name: 'plan',
        component: () => import('../view/plan/index.md'),
        meta: {
          title: '重构规划'
        }
      },
      {
        path: '/restructure/component',
        name: 'component',
        component: () => import('../view/component/index.md'),
        meta: {
          title: '组件库'
        }
      },
      {
        path: '/restructure/framework',
        name: 'framework',
        component: () => import('../view/framework/index.vue'),
        meta: {
          title: '代码架构'
        }
      },
      {
        path: '/restructure/rule',
        name: 'rule',
        component: () => import('../view/rule/index.md'),
        meta: {
          title: '前端规范'
        }
      },
      {
        path: '/step4',
        name: 'step4',
        component: () => import('@/view/step/index.vue'),
        meta: {
          title: '步骤四'
        }
      }
    ]
  },
  {
    path: '/online',
    name: 'online',
    component: () => import('../view/online/index.vue'),
    meta: {
      title: '发布上线'
    }
  },
  {
    path: '/contrast',
    name: 'contrast',
    component: () => import('../view/contrast/index.vue'),
    meta: {
      title: '前后对比'
    }
  }
];

export const NOT_SHOW_IN_ROUTERS = [];

export const REDIRECT = {
  path: '/:pathMatch(.*)',
  redirect: ROUTERS[0].path
};

const router = createRouter({
  history: createWebHistory('/restructure/dist'),
  routes: [...ROUTERS, ...NOT_SHOW_IN_ROUTERS, REDIRECT],
  scrollBehavior() {
    document.getElementById('container').scrollTop = 0;
  }
});

router.beforeEach(async (to, from, next) => {
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
