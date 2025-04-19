import { Route, Router } from '@vaadin/router';
import './elements/int-app.js';
import './elements/int-fade-blocks.js';
import './elements/int-markdown.js';
import './elements/int-404.js';

export const views: Route[] = [
    {
        path: '/',
        component: 'int-fade-blocks',
        // title: '',
    },
    {
        path: '/:markdown',
        component: 'int-markdown',
        // title: 'Hello World',
    },
    // {
    //     path: 'about',
    //     component: 'about-view',
    //     title: 'About',
    //     action: async () => await import('./views/about/about-view'),
    // },
];

export const routes: Route[] = [
    {
        path: '/404',
        component: 'int-404',
    },
    {
        path: '/',
        component: 'int-app',
        children: [
            {
                path: '/',
                component: 'int-fade-blocks',
                // title: '',
            },
            {
                path: '/:markdownPath',
                component: 'int-markdown',
                // title: 'Hello World',
            }
        ],
    },
    {
        path: '(.*)',
        component: 'int-404',
    },
];

const router = new Router(document.getElementById('outlet'));
router.setRoutes(routes);