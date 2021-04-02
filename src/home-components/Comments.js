import React from 'react';
import { tokenState as tokenStateAtom } from '../landing-page-components/LandingCarousel';
import { useRecoilState } from 'recoil';

const Comments = () => {
const [token, setToken] = useRecoilState(tokenStateAtom);

    return (
        <div>
            <h1>Test from comments</h1>
        </div>
    );
};

export default Comments;