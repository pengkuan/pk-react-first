import Product from '../containers/product'
import Judge from '../containers/judge'
import Result from '../containers/result'
import PayInfo from '../containers/payInfo'
import orderResult from '../containers/orderResult'
const routes = [
    {
        path: '/',
        component: Product,
        exact: true,
    },
    {
        path: '/judge/:productId',
        component: Judge,
        exact: true,
    },
    {
        path: '/judge/:productId/result',
        component: Result,
        exact: true,
    },
    {
        path: '/payInfo',
        component: PayInfo,
        exact: true,
    },
    {
        path: '/orderResult',
        component: orderResult,
        exact: true,
    }
];

export default routes;