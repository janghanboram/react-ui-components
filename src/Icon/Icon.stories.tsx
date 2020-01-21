/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Icon, { iconTypes } from './Icon';

export default {
    component: Icon,
    title: 'components|Icon'
};

export const icon = () => <Icon icon="bookmark" />;
icon.story = {
    name: 'Default'
};

export const customSize = () => <Icon icon="addCircle" size="4rem" />;

export const customColor = () => <Icon icon="bookmark" color="red" />;

export const customizedWithStyle = () => (
    <Icon icon="bookmark" css={{ fill: 'red', width: '4rem' }} />
);

export const listOfIcons = () => {
    return (
        <ul css={iconListStyle}>
            {iconTypes.map(icon => (
                <li key={icon}>
                    <Icon icon={icon} />
                    {icon}
                </li>
            ))}
        </ul>
    );
};

const iconListStyle = css`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  li {
    box-sizing: border-box;
    width: 25%;
    padding: 1rem;
    display: flex;
    align-items: center;
    svg {
      margin-right: 1rem;
    }
  }
`;
