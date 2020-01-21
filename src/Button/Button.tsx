import React from 'react';
import * as color from '../shared/constants/colors'
import * as shadow from '../shared/constants/shadow'

/** @jsx jsx */
import {jsx, css} from '@emotion/core';

type ButtonProps = {
    /** 버튼 안의 내용 */
    type?: 'submit' | 'button' | 'reset';
    /** 버튼 안의 내용 */
    children: React.ReactNode;
    /** 클릭했을 때 호출할 함수 */
    onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
    /** 버튼의 생김새를 설정합니다. */
    theme: 'primary' | 'secondary' | 'tertiary' | 'positive' | 'negative' | 'supportive';
    /** 버튼의 크기를 설정합니다 */
    size: 'xsmall' |'small' | 'medium' | 'large'| 'xlarge';
    /** 버튼을 비활성화 시킵니다. */
    disabled?: boolean;
    /** 버튼의 너비를 임의로 설정합니다. */
    width?: string | number;
};

/** `Button` 컴포넌트는 어떠한 작업을 트리거 할 때 사용합니다.  */
function Button({type, children, theme, size, disabled, width, onClick}: ButtonProps) {
    return (
        <button
            type={type}
            css={[style, themes[theme], sizes[size], { width }]}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
}

Button.defaultProps = {
    theme: 'primary',
    size: 'medium',
    type: 'submit'
};

const style = css`
  outline: none;
  border: solid 1px transparent;
  box-sizing: border-box;
  height: 2rem;
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.2px;
  text-align: center;
  color: #ffffff;
  padding: 0.5rem 1rem;
  background: ${color.blue8};
  border-radius: 0.25rem;
  cursor: pointer;
  transition: all 0.3s;
  
  &:focus {
    box-shadow: 0 0 4px 2px rgba(44, 90, 233, 0.48);
    border-color: ${color.blue8};
  }
  &:disabled {
    cursor: not-allowed;
  }
`;

const themes = {
    primary: css`
    background: ${color.blue8};
    color: white;
    &:hover, &:active, &:hover:enabled {
      background: ${color.blue9};
    }
    &:active:enabled {
      background: ${color.blue8};
    }
    &:disabled {
      background: ${color.blue3};
    }
  `,
    secondary: css`
    font-weight: normal;
    background: ${color.grey2};
    color: ${color.grey9};
    &:hover, &:active, &:hover:enabled {
      background: ${color.grey3};
    }
    &:active:enabled {
      background: ${color.grey2};
    }
    &:disabled {
      color: ${color.grey5};
      background: ${color.grey1};
    }
  `,
    tertiary: css`
    font-weight: normal;
    background: none;
    color: ${color.grey7};
    &:hover:enabled {
      background: ${color.blue2};
    }
    &:active:enabled {
      background: ${color.blue1};
    }
    &:disabled {
      color: ${color.grey4};
      background: ${color.blue1};
    }
  `,
    positive: css`
    background: ${color.green8};
    color: white;
    &:hover:enabled {
      background: ${color.green9};
    }
    &:active:enabled {
      background: ${color.green8};
    }
    &:disabled {
      background: ${color.green3};
    }
  `,
    negative: css`
    background: ${color.red8};
    color: white;
    &:hover:enabled {
      background: ${color.red9};
    }
    &:active:enabled {
      background: ${color.red8};
    }
    &:disabled {
      background: ${color.red2};
    }
  `,
    supportive: css`
    background: ${color.blue1};
    color: ${color.blue8};
    &:hover:enabled {
      background: ${color.blue2};
    }
    &:active:enabled {
      background: ${color.blue1};
    }
    &:disabled {
      color: ${color.blue5};
      background: ${color.blue1};
    }
  `
};

const sizes = {
    xsmall: css`
    height: 26px;
    line-height: 26px;
    padding: 0 0.875rem;
  `,
    small: css`
    height: 32px;
    line-height: 32px;
    padding: 0 0.875rem;
  `,
    medium: css`
    height: 40px;
    line-height: 40px;
    padding: 0 1rem;
  `,
    large: css`
    height: 48px;
    line-height: 48px;
    padding: 0 1.5rem;
  `,
    xlarge: css`
    height: 56px;
    line-height: 56px;
    padding: 0 1.5rem;
  `
};

export default Button;
