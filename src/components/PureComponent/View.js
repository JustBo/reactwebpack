import {memo} from 'react';

const View = ({name}) => `Hi, I'm ${name}`;
export default memo(View);