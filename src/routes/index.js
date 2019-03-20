import Hook from "../components/Hook/Hook";
import Lazy from "../components/Lazy";
import Memo from "../components/Memo/Memo";
import Pure from "../components/PureComponent/Pure";
import Refs from "../components/Refs";
import Redux from "../components/Redux";
import Webworker from "../components/Webworker";

export default [
    {
        path: '/',
        component: Redux,
        name: 'Home',
        exact: true
    },
    {
        path: '/redux',
        component: Redux,
        name: 'Redux'
    },
    {
        path: '/hook',
        component: Hook,
        name: 'Hook'
    },
    {
        path: '/lazy',
        component: Lazy,
        name: 'Lazy'
    },
    {
        path: '/memo',
        component: Memo,
        name: 'Memo'
    },
    {
        path: '/pure',
        component: Pure,
        name: 'Pure'
    },
    {
        path: '/refs',
        component: Refs,
        name: 'Refs'
    },
    {
        path: '/webworker',
        component: Webworker,
        name: 'Webworker'
    },
];