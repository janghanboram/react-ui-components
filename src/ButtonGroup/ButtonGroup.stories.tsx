import React from 'react';
import ButtonGroup from './ButtonGroup';
import Button from '../Button/Button';
import {withKnobs, text, radios, boolean, select} from '@storybook/addon-knobs';

export default {
    title: 'components|ButtonGroup',
    component: ButtonGroup,
    decorators: [withKnobs]
};

export const buttonGroup = () => {
    const direction = radios(
        'direction',
        {Row: 'row', Column: 'column'},
        'row'
    );
    const align = select(
        'align',
        ['left', 'center', 'right'],
        'right'
    )
    const gap = text('gap', '0.5rem');

    return (
        <ButtonGroup direction={direction} align={align} gap={gap}>
            <Button theme="tertiary">취소</Button>
            <Button>확인</Button>
        </ButtonGroup>
    );
};

buttonGroup.story = {
    name: 'Default'
};

export const leftAlign = () => {
    return (
        <ButtonGroup align="left">
            <Button theme="secondary">취소</Button>
            <Button theme="negative">삭제</Button>
        </ButtonGroup>
    );
};

export const centerAlign = () => {
    return (
        <ButtonGroup align="center">
            <Button theme="secondary">취소</Button>
            <Button theme="negative">삭제</Button>
        </ButtonGroup>
    );
};

export const column = () => {
    return (
        <ButtonGroup direction="column">
            <Button>CLICK ME</Button>
            <Button>CLICK ME</Button>
        </ButtonGroup>
    );
};

export const customGap = () => {
    return (
        <ButtonGroup gap="1rem">
            <Button theme="secondary">취소</Button>
            <Button>확인</Button>
        </ButtonGroup>
    );
};

export const customGapColumn = () => {
    return (
        <ButtonGroup direction="column" gap="1rem">
            <Button>CLICK ME</Button>
            <Button>CLICK ME</Button>
        </ButtonGroup>
    );
};
