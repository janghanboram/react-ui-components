/** @jsx jsx */
import { css, jsx } from '@emotion/core';

export type ButtonGroupProps = {
    /** 버튼을 보여줄 방향 */
    direction: 'row' | 'column';
    /** 버튼을 정렬합니다. */
    align: 'left' | 'center' | 'right';
    /** 버튼과 버튼사이의 간격을 설정합니다. */
    gap: number | string;
    /** 버튼 그룹에서 보여줄 버튼들 */
    children: React.ReactNode;
    /* 스타일 커스터마이징 하고싶을 때 사용 */
    className?: string;
};

/**
 * 여러개의 `Button` 컴포넌트를 보여주고 싶거나, 버튼을 우측에 정렬하고 싶을 땐 `ButtonGroup` 컴포넌트를 사용하세요.
 */
const ButtonGroup = ({
                         direction,
                         align,
                         children,
                         gap,
                         className
                     }: ButtonGroupProps) => {
    return (
        <div
            css={[
                {
                    display: 'flex',
                    flexDirection: direction
                },
                gapStyle(direction, gap),
                alignStyle[align]
            ]}
            className={className}
        >
            {children}
        </div>
    );
};

ButtonGroup.defaultProps = {
    direction: 'row',
    gap: '8px',
    align: 'right'
};

// direction 에 따라 margin-left 또는 margin-top 설정
const gapStyle = (direction: 'row' | 'column', gap: number | string) => {
    const marginType = direction === 'row' ? 'marginLeft' : 'marginTop';
    return css({
        'button + button': {
            [marginType]: gap
        }
    });
};

const alignStyle = {
    center: css`
      justify-content: center;
    `,
    left: css`
      justify-content: flex-start;
    `,
    right: css`
      justify-content: flex-end;
    `,
}

export default ButtonGroup;
