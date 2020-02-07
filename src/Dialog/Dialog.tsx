/** @jsx jsx */
import {Fragment} from 'react';
import {css, jsx} from '@emotion/core';
import Emoji from '../Emoji/Emoji';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import Button from '../Button/Button';
import {useTransition, animated} from 'react-spring/web.cjs';
import * as color from '../shared/constants/colors';

export type DialogProps = {
    type?: 'normal' | 'emoji' | 'loader';
    emoji?: React.ReactNode;
    visible: boolean;
    title?: string;
    description?: string;
    children?: React.ReactNode;
    hideButtons?: boolean;
    cancellable?: boolean;
    confirmTheme?: 'primary' | 'secondary' | 'tertiary' | 'positive' | 'negative' | 'supportive';
    cancelTheme?: 'primary' | 'secondary' | 'tertiary' | 'positive' | 'negative' | 'supportive';
    cancelText: string;
    confirmText: string;
    onCancel?: () => void;
    onConfirm?: () => void;
};

const Dialog = ({
                    type,
                    visible,
                    emoji,
                    title,
                    description,
                    hideButtons,
                    cancellable,
                    cancelTheme,
                    confirmTheme,
                    cancelText,
                    confirmText,
                    children,
                    onCancel,
                    onConfirm
                }: DialogProps) => {
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

    return (
        <Fragment>
            {fadeTransition.map(({item, key, props}) =>
                item ? (
                    <animated.div
                        css={[fullscreen, darkLayer]}
                        key={key}
                        style={props}
                    ></animated.div>
                ) : null
            )}

            {slideUpTransition.map(({item, key, props}) =>
                item ? (
                    <animated.div
                        css={[fullscreen, whiteBoxWrapper]}
                        style={props}
                        key={key}
                    >
                        {
                            type === 'normal' && <div css={whiteBox}>
                                <div css={dialogHeader[type]}>
                                    {title && <h3>{title}</h3>}
                                </div>
                                <div css={dialogBody[type]}>
                                    {description && <p>{description}</p>}
                                    {children}
                                </div>
                                {!hideButtons && (
                                    <ButtonGroup css={{marginTop: '8px'}} align='right'>
                                        {cancellable && (
                                            <Button theme={cancelTheme} onClick={onCancel}>
                                                {cancelText}
                                            </Button>
                                        )}
                                        <Button theme={confirmTheme} onClick={onConfirm}>{confirmText}</Button>
                                    </ButtonGroup>
                                )}
                            </div>
                        }

                        {
                            type === 'emoji' && <div css={whiteCenterBox}>
                                <div css={dialogHeader[type]}>
                                    <h2 css={emojiStyle}>
                                        {emoji}
                                    </h2>
                                    {title && <h3>{title}</h3>}
                                </div>
                                <div css={dialogBody[type]}>
                                    {description && <p>{description}</p>}
                                    {children}
                                </div>
                                {!hideButtons && (
                                    <ButtonGroup css={{marginTop: '8px'}} align='center'>
                                        {cancellable && (
                                            <Button theme={cancelTheme} onClick={onCancel}>
                                                {cancelText}
                                            </Button>
                                        )}
                                        <Button theme={confirmTheme} onClick={onConfirm}>{confirmText}</Button>
                                    </ButtonGroup>
                                )}
                            </div>
                        }

                        {
                            type === 'loader' && <div css={whiteCenterBox}>
                                <div css={dialogHeader[type]}>
                                    {title && <h3>{title}</h3>}
                                </div>
                                <div css={dialogBody[type]}>
                                    {description && <p>{description}</p>}
                                    <div css={loader}>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                    {children}
                                </div>
                                {!hideButtons && (
                                    <ButtonGroup css={{marginTop: '8px'}} align='center'>
                                        {cancellable && (
                                            <Button theme={cancelTheme} onClick={onCancel}>
                                                {cancelText}
                                            </Button>
                                        )}
                                        <Button theme={confirmTheme} onClick={onConfirm}>{confirmText}</Button>
                                    </ButtonGroup>
                                )}
                            </div>
                        }

                    </animated.div>
                ) : null
            )}
        </Fragment>
    );
};

Dialog.defaultProps = {
    type: 'normal',
    cancelTheme: 'secondary',
    confirmTheme: 'primary',
    cancelText: '닫기',
    confirmText: '확인',
};

const fullscreen = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const darkLayer = css`
  z-index: 10;
  background: rgba(0, 0, 0, 0.5);
`;

const whiteBoxWrapper = css`
  z-index: 15;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const whiteBox = css`
  box-sizing: border-box;
  border-radius: 4px;
  width: 360px;
  background: white;
  box-shadow: 0px 4px 8px 8px rgba(0, 0, 0, 0.05);
  padding: 28px 16px 16px 24px;

  h3 {
    //font-family: SpoqaHanSans;
    font-size: 24px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.53;
    letter-spacing: -0.3px;
    color: ${color.grey9};
    margin-top: 0;
    margin-bottom: 1rem;
  }

  p {
    font-size: 15px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.53;
    letter-spacing: -0.3px;
    margin: 0;
    color: ${color.grey9};
    word-break: keep-all;
    padding-right: 8px;
  }
`;

const whiteCenterBox = css`
  box-sizing: border-box;
  border-radius: 4px;
  width: 360px;
  background: white;
  box-shadow: 0px 4px 8px 8px rgba(0, 0, 0, 0.05);
  padding: 32px 24px;

  h3 {
    text-align: center;
    //font-family: SpoqaHanSans;
    font-size: 24px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.53;
    letter-spacing: -0.3px;
    color: ${color.grey9};
    margin-top: 0;
    margin-bottom: 0;
  }

  p {
    text-align: center;
    font-size: 15px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.53;
    letter-spacing: -0.3px;
    margin: 0;
    padding: 0;
    color: ${color.grey7};
    word-break: keep-all;
  }
`;

const dialogHeader = {
    normal: css``,
    emoji: css`
    `,
    loader: css`
    `,
}
const dialogBody = {
    normal: css`
      min-height: 176px;
    `,
    emoji: css`
      min-height: 120px;
    `,
    loader: css`
    `,
}

const emojiStyle = css`
  font-size: 42px;
  text-align: center;
  margin: 0 0 16px 0;
`

const loader = css`
  display: block;
  position: relative;
  width: 60px;
  height: 60px;
  margin: auto;
  padding: 40px 0 56px;

  div {
      box-sizing: border-box;
      display: block;
      position: absolute;
      width: 47px;
      height: 47px;
      margin: 8px;
      border: 4px solid ${color.blue7};
      border-radius: 50%;
      animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
      border-color: ${color.blue7} transparent transparent transparent;
  }

  div:nth-child(1) {
    animation-delay: -0.45s;
  }
  div:nth-child(2) {
    animation-delay: -0.3s;
  }
  div:nth-child(3) {
    animation-delay: -0.15s;
  }

  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

export default Dialog;
