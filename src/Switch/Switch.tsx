/** @jsx jsx */
import {jsx, css} from '@emotion/core';
import * as color from '../shared/constants/colors'

type SwitchProps = {
    checked?: boolean;
    /** Toggle 했을 때 호출 할 함수 */
    onToggle?: () => void;
    /** input #id, label name */
    domId?: string;
};

/**
 *  단순하게 **on**, **off** 상태를 나타낼 때, `Swtich` 컴포넌트를 사용하세요.
 *
 * - `checked` 값을 `true`로 설정하면 **active** 상태입니다.
 * - `onToggle`을 props로 설정하여 상태가 변했을 때, 호출 할 함수를 지정 할 수 있습니다.
 */
const Switch = ({onToggle, checked, domId}: SwitchProps) => {
    return (
        <label>
            <input
                css={[inputStyle]}
                onChange={onToggle}
                checked={checked}
                className="container_toggle"
                type="checkbox"
                id={domId}
                name="mode"
            />
            <label
                css={[labelStyle]}
                htmlFor={domId}
            >
                Toggle
            </label>
        </label>
    );
};

Switch.defaultProps = {
    checked: false,
    domId: `switch-${new Date().getTime()}`,
};

const inputStyle = css`
      &[type='checkbox'] {
          height: 0;
          width: 0;
          visibility: hidden;
        }

        &:checked + label {
          background: ${color.blue8};
        }

        &:checked + label:after {
          left: calc(100% + 4px);
          -webkit-transform: translateX(-100%);
          -moz-transform: translateX(-100%);
          -ms-transform: translateX(-100%);
          -o-transform: translateX(-100%);
          transform: translateX(-100%);
        }

        html.transition,
        html.transition *,
        html.transition *:before,
        html.transition *:after {
          transition: cubic-bezier(0.68, -0.55, 0.27, 01.55) 420ms !important;
          transition-delay: 0 !important;
        }
`

const labelStyle = css`
          cursor: pointer;
          text-indent: -9999px;
          width: 34px;
          height: 14px;
          background: ${color.grey4};
          margin: 0 auto;
          display: flex;
          justify-content: center;
          align-items: center;
          -webkit-border-radius: 100px;
          -moz-border-radius: 100px;
          border-radius: 100px;
          position: relative;

        &:after {
          content: '';
          background: #fff;
          width: 20px;
          height: 20px;
          -webkit-border-radius: 50%;
          -moz-border-radius: 50%;
          border-radius: 50%;
          position: absolute;
          top: -5px;
          left: 0;
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 2px 1px -1px rgba(0, 0, 0, 0.12),
            0 1px 1px 0 rgba(0, 0, 0, 0.14);
          transition: cubic-bezier(0.68, -0.55, 0.27, 01.55) 320ms;
        }
`


export default Switch;
