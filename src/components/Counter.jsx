import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';
import { useState } from "react";

const Counter = ({endCount}) => {
    const [viewPortEntered, setViewPortEntered] = useState(false);
    return (
        <CountUp duration={5} start={viewPortEntered ? null : 1} end={endCount} redraw={false}>
            {({ countUpRef }) => (
                <VisibilitySensor
                    active={!viewPortEntered}
                    onChange={isVisible => {
                        if (isVisible) {
                            setViewPortEntered(true);
                        }
                    }}
                    delayedCall
                >
                    <span ref={countUpRef} />
                </VisibilitySensor>
            )}
        </CountUp>
    )
}

export default Counter