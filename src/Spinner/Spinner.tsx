/** @jsx jsx */
import {Fragment} from 'react';
import {css, jsx} from '@emotion/core';
import {useTransition, animated} from 'react-spring/web.cjs';
import * as color from '../shared/constants/colors';

const Spinner = ({
    type,
    visible
}) => {

    const fadeTransition = useTransition(visible, null, {
        from: {opacity: 0},
        enter: {opacity: 1},
        leave: {opacity: 0}
    });

    const slideUpTransition = useTransition(visible, null, {
        from: {
            transform: `translateY(24px)`,
            opacity: 0
        },
        enter: {
            transform: `translateY(0)`,
            opacity: 1
        },
        leave: {
            transform: `translateY(24px)`,
            opacity: 0
        },
        config: {
            tension: 400,
            friction: 30
        }
    });

    return <animated.div
        css={[fullscreen, whiteBoxWrapper]}
        style={props}
        key={key}
    >

    </animated.div>
}
