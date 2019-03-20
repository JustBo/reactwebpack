import React, { Suspense, lazy } from 'react';

const Artists = lazy(() => import('./Artists'));
const Header = lazy(() => import('./Header'));

class Lazy extends React.Component {
    render() {
        return (
            <Suspense fallback={<div>Loading...</div>}>
                <h2>lazy</h2>
                <Header />
                <Artists />
            </Suspense>
        );
    }
}
export default Lazy;