import React from 'react';

const ValueMap: {
    [key: string]: string;
} = {
        [escape('⏰')]: require('./alarm_clock.png'),
        [escape('✔️')]: require('./checkmark.png'),
        [escape('🚧')]: require('./construction_sign.png'),
        [escape('🔄')]: require('./counter_clockwise_arrows.png'),
        [escape('🏝')]: require('./desert_island.png'),
        [escape('😥')]: require('./disappointed_but_relieved_face.png'),
        [escape('👀')]: require('./eyes.png'),
        [escape('🔥')]: require('./fire.png'),
        [escape('😅')]: require('./grinning _face_with_squinting_eyes_and_sweat_drop.png'),
        [escape('😃')]: require('./grinning_face_with_open_mouth.png'),
        [escape('🤔')]: require('./grinning_face_with_sweat.png'),
        [escape('⌛️')]: require('./hourglass.png'),
        [escape('💸')]: require('./money_with_wings.png'),
        [escape('⛔️')]: require('./no_entry.png'),
        [escape('🚫')]: require('./prohibited.png'),
        [escape('😍')]: require('./smiling_face_with_heart_shaped_eyes.png'),
        [escape('💦')]: require('./sweat_droplets.png'),
        [escape('👍')]: require('./thumbs_up.png'),
        [escape('👋')]: require('./waving_hand_light_skin_tone.png'),
        [escape('😩')]: require('./weary_face.png'),
        [escape('🥱')]: require('./yawning_face.png'),
        [escape('🔴')]: require('./red_circle.png'),
        [escape('🔵')]: require('./blue_circle.png'),
        [escape('📈')]: require('./chart_with_upwards_trend.png'),
        [escape('😞')]: require('./disappointed_face.png'),
        [escape('😉')]: require('./winking_face.png'),
        [escape('🚀')]: require('./rocket.png'),
        [escape('✅')]: require('./white_heavy_check_mark.png'),
        [escape('🎉')]: require('./party_popper.png'),
    };

interface IEmoji {
    value: string;
    width?: number | string;
    height?: number | string;
    style?: any;
}

const Emoji: React.FC<IEmoji> = props => {
    const key = escape(props.value);
    const imageRes = ValueMap[key];
    if (!imageRes) {
        return (
            <span>
                {props.value}
                {key}
            </span>
        );
    }
    return <img style={props.style} src={imageRes} width={props.width} height={props.height} alt={props.value} />;
};

export default Emoji;
