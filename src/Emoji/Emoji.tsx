import React from 'react';

import alarm_clock from './alarm_clock.png'
import checkmark from './checkmark.png'
import construction_sign from './construction_sign.png'
import counter_clockwise_arrows from './counter_clockwise_arrows.png'
import desert_island from './desert_island.png'
import disappointed_but_relieved_face from './disappointed_but_relieved_face.png'
import eyes from './eyes.png'
import fire from './fire.png'
import grinning_face_with_squinting_eyes_and_sweat_drop from './grinning_face_with_squinting_eyes_and_sweat_drop.png'
import grinning_face_with_open_mouth from './grinning_face_with_open_mouth.png'
import grinning_face_with_sweat from './grinning_face_with_sweat.png'
import hourglass from './hourglass.png'
import money_with_wings from './money_with_wings.png'
import no_entry from './no_entry.png'
import prohibited from './prohibited.png'
import smiling_face_with_heart_shaped_eyes from './smiling_face_with_heart_shaped_eyes.png'
import sweat_droplets from './sweat_droplets.png'
import thumbs_up from './thumbs_up.png'
import waving_hand_light_skin_tone from './waving_hand_light_skin_tone.png'
import weary_face from './weary_face.png'
import yawning_face from './yawning_face.png'
import red_circle from './red_circle.png'
import blue_circle from './blue_circle.png'
import chart_with_upwards_trend from './chart_with_upwards_trend.png'
import disappointed_face from './disappointed_face.png'
import winking_face from './winking_face.png'
import rocket from './rocket.png'
import white_heavy_check_mark from './white_heavy_check_mark.png'
import party_popper from './party_popper.png'

const ValueMap: {
    [key: string]: string;
} = {
        [escape('⏰')]: alarm_clock,
        [escape('✔️')]: checkmark,
        [escape('🚧')]: construction_sign,
        [escape('🔄')]: counter_clockwise_arrows,
        [escape('🏝')]: desert_island,
        [escape('😥')]: disappointed_but_relieved_face,
        [escape('👀')]: eyes,
        [escape('🔥')]: fire,
        [escape('😅')]: grinning_face_with_squinting_eyes_and_sweat_drop,
        [escape('😃')]: grinning_face_with_open_mouth,
        [escape('🤔')]: grinning_face_with_sweat,
        [escape('⌛️')]: hourglass,
        [escape('💸')]: money_with_wings,
        [escape('⛔️')]: no_entry,
        [escape('🚫')]: prohibited,
        [escape('😍')]: smiling_face_with_heart_shaped_eyes,
        [escape('💦')]: sweat_droplets,
        [escape('👍')]: thumbs_up,
        [escape('👋')]: waving_hand_light_skin_tone,
        [escape('😩')]: weary_face,
        [escape('🥱')]: yawning_face,
        [escape('🔴')]: red_circle,
        [escape('🔵')]: blue_circle,
        [escape('📈')]: chart_with_upwards_trend,
        [escape('😞')]: disappointed_face,
        [escape('😉')]: winking_face,
        [escape('🚀')]: rocket,
        [escape('✅')]: white_heavy_check_mark,
        [escape('🎉')]: party_popper,
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
