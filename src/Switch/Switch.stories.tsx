/** @jsx jsx */
import Switch from './Switch';
import {jsx, css} from '@emotion/core';
import {boolean, select, text, withKnobs} from "@storybook/addon-knobs";
import {action} from "@storybook/addon-actions";

export default {
    title: 'components|Switch',
    component: Switch,
    decorators: [withKnobs]
};

export const switchComponent = () => {
    const checked = boolean('checked', true);
    //TODO: 추후 업데이트

    // const size = select('size', ['xsmall', 'small', 'medium', 'large', 'xlarge'], 'medium');
    // const theme = select(
    //     'theme',
    //     ['primary', 'secondary', 'tertiary', 'positive', 'negative'],
    //     'primary'
    // );
    // const width = text('width', '');

    return (
        <Switch
            checked={checked}
            onToggle={action('onChange')}
            // size={size}
            // theme={theme}
            // width={width}
        />
    );
};
switchComponent.story = {
    name: 'Default'
};

// export const primaryButton = () => {
//     return <Button>PRIMARY</Button>;
// };
//
// export const secondaryButton = () => {
//     return <Button theme="secondary">SECONDARY</Button>;
// };
//
// export const tertiaryButton = () => {
//     return <Button theme="tertiary">TERTIARY</Button>;
// };
//
// export const positiveButton = () => {
//     return <Button theme="positive">POSITIVE</Button>;
// };
//
// export const negativeButton = () => {
//     return <Button theme="negative">NEGATIVE</Button>;
// };
//
// export const supportiveButton = () => {
//     return <Button theme="supportive">SUPPORTIVE</Button>;
// };
//
// const buttonWrapper = css`
//   .description {
//     margin-bottom: 0.5rem;
//   }
//   & > div + div {
//     margin-top: 2rem;
//   }
// `;

// export const sizes = () => {
//     return (
//         <div css={buttonWrapper}>
//             <div>
//                 <div className="description">XSmall</div>
//                 <Button size="xsmall">BUTTON</Button>
//             </div>
//             <div>
//                 <div className="description">Small</div>
//                 <Button size="small">BUTTON</Button>
//             </div>
//             <div>
//                 <div className="description">Medium</div>
//                 <Button size="medium">BUTTON</Button>
//             </div>
//             <div>
//                 <div className="description">Large</div>
//                 <Button size="large">BUTTON</Button>
//             </div>
//             <div>
//                 <div className="description">XLarge</div>
//                 <Button size="xlarge">BUTTON</Button>
//             </div>
//         </div>
//     );
// };
//
// export const disabled = () => {
//     return (
//         <Switch checked={false} />
//     );
// };
//
// export const customSized = () => {
//     return (
//         <div css={buttonWrapper}>
//             <div>
//                 <Button width="20rem">CUSTOM WIDTH</Button>
//             </div>
//             <div>
//                 <Button width="100%">FULL WIDTH</Button>
//             </div>
//         </div>
//     );
// };
