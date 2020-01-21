import React from 'react';
import Dialog from './Dialog';
import {withKnobs, text, boolean, select} from '@storybook/addon-knobs';

export default {
    title: 'components|Dialog',
    component: Dialog,
    parameters: {
        docs: {
            inlineStories: false
        }
    },
    decorators: [withKnobs]
};

export const dialog = () => {
    const type = select(
        'type',
        ['normal', 'emoji', 'loader'],
        'normal'
    );
    const title = text('title', '결제 성공');
    const description = text('description', '결제가 성공적으로 이루어졌습니다.');
    const visible = boolean('visible', true);
    const confirmText = text('confirmText', '확인');
    const cancelText = text('cancelText', '취소');
    const cancellable = boolean('cancellable', false);

    return (
        <Dialog
            type={type}
            title={title}
            description={description}
            visible={visible}
            confirmText={confirmText}
            cancelText={cancelText}
            cancellable={cancellable}
        />
    );
};

dialog.story = {
    name: 'Default'
};

export const cancellable = () => {
    return (
        <Dialog
            title="거래요청 거절"
            description="구매자의 거래요청을 거절합니다. 거절 후 현재 매물은 거래취소 후 다른 회원이 거래가능한 [판매중] 상태로 자동 갱신 됩니다. "
            visible={true}
            confirmTheme="negative"
            confirmText="삭제"
            cancellable
        />
    );
};

export const emojiType = () => {
    return (
        <Dialog
            emoji="😩"
            type="emoji"
            visible={true}
            title="적정 판매금액 계산 실패"
            description="잠시 후 다시 시도해주세요. 판매금액 등록은 금액조회가 상관없이 이용할 수 있어요"
            confirmTheme="secondary"
            confirmText="확인"
            />
    );
};

export const LoaderType = () => {
    return (
        <Dialog
            type="loader"
            visible={true}
            title="적정 판매금액 계산중"
            description="최대 2분까지 소요될 수 있습니다."
            confirmTheme="secondary"
            confirmText="취소하기"
        />
    );
};

export const customContent = () => {
    return (
        <Dialog visible={true} hideButtons>
            Custom Content
        </Dialog>
    );
};
