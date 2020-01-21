/** @jsx jsx */
import Button from './Button';
import { jsx, css } from '@emotion/core';
import {boolean, select, text, withKnobs} from "@storybook/addon-knobs";
import {action} from "@storybook/addon-actions";

export default {
    title: 'components|Button',
    component: Button,
    decorators: [withKnobs]
};

export const button = () => {
    const label = text('children', 'BUTTON');
    const size = select('size', ['xsmall', 'small', 'medium', 'large', 'xlarge'], 'medium');
    const theme = select(
        'theme',
        ['primary', 'secondary', 'tertiary', 'positive', 'negative'],
        'primary'
    );
    const disabled = boolean('disabled', false);
    const width = text('width', '');

    return (
        <Button
            size={size}
            theme={theme}
            disabled={disabled}
            width={width}
            onClick={action('onClick')}
        >
            {label}
        </Button>
    );
};
button.story = {
    name: 'Default'
};

export const primaryButton = () => {
    return <Button>PRIMARY</Button>;
};

export const secondaryButton = () => {
    return <Button theme="secondary">SECONDARY</Button>;
};

export const tertiaryButton = () => {
    return <Button theme="tertiary">TERTIARY</Button>;
};

export const positiveButton = () => {
    return <Button theme="positive">POSITIVE</Button>;
};

export const negativeButton = () => {
    return <Button theme="negative">NEGATIVE</Button>;
};

export const supportiveButton = () => {
    return <Button theme="supportive">SUPPORTIVE</Button>;
};

const buttonWrapper = css`
  .description {
    margin-bottom: 0.5rem;
  }
  & > div + div {
    margin-top: 2rem;
  }
`;

export const sizes = () => {
    return (
        <div css={buttonWrapper}>
            <div>
                <div className="description">XSmall</div>
                <Button  size="xsmall">BUTTON</Button>
            </div>
            <div>
                <div className="description">Small</div>
                <Button size="small">BUTTON</Button>
            </div>
            <div>
                <div className="description">Medium</div>
                <Button size="medium">BUTTON</Button>
            </div>
            <div>
                <div className="description">Large</div>
                <Button size="large">BUTTON</Button>
            </div>
            <div>
                <div className="description">XLarge</div>
                <Button size="xlarge">BUTTON</Button>
            </div>
        </div>
    );
};

export const disabled = () => {
    return (
        <div css={buttonWrapper}>
            <div>
                <Button disabled>PRIMARY</Button>
            </div>
            <div>
                <Button disabled theme="secondary">
                    SECONDARY
                </Button>
            </div>
            <div>
                <Button disabled theme="tertiary">
                    TERTIARY
                </Button>
            </div>
            <div>
                <Button disabled theme="positive">
                    POSITIVE
                </Button>
            </div>
            <div>
                <Button disabled theme="negative">
                    NEGATIVE
                </Button>
            </div>
            <div>
                <Button disabled theme="supportive">
                    SUPPORTIVE
                </Button>
            </div>
        </div>
    );
};

export const customSized = () => {
    return (
        <div css={buttonWrapper}>
            <div>
                <Button width="20rem">CUSTOM WIDTH</Button>
            </div>
            <div>
                <Button width="100%">FULL WIDTH</Button>
            </div>
        </div>
    );
};
