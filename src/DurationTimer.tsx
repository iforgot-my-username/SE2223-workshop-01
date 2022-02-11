import React, { useState, useEffect } from 'react';
import humanizeDuration from 'humanize-duration';
import 'react-circular-progressbar/dist/styles.css';
import CircularProgress from './CircularProgress';

interface DurationTimerProps {
    end: Date;
}

type DurationType = "mo" | "w" | "d" | "h" | "m" | "s";

type Duration = {
    [key in DurationType]: number;
};




function getDuration(end: Date, now: Date) {
    const result: Duration = {
        'mo': 0,
        'w': 0,
        'd': 0,
        'h': 0,
        'm': 0,
        's': 0,
    };
    if (end < now) {
        return result;
    }

    const DurationHumanizer = humanizeDuration.humanizer({
        language: "shortEn",
        languages: {
            shortEn: {
                mo: () => "mo",
                w: () => "w",
                d: () => "d",
                h: () => "h",
                m: () => "m",
                s: () => "s",
            },
        },
    });



    const duration = DurationHumanizer(
        end.getTime() - now.getTime(), {
        units: ['mo', 'w', 'd', 'h', 'm', 's']
    });
    const durationList = duration.split(', ');

    durationList.forEach((item) => {
        const [value, type] = item.split(' ');
        result[type as DurationType] = Number(value);
    })

    return result;
}


function getDurationPercent(duration: Duration, type: DurationType): number {
    const FULLDURATION: Duration = {
        'mo': 12,
        'w': 4,
        'd': 7,
        'h': 24,
        'm': 60,
        's': 60,
    };

    const n = FULLDURATION[type] - (FULLDURATION[type] - duration[type])
    const result = n / FULLDURATION[type];
    return result * 100
}

export default function DurationTimer({ end }: DurationTimerProps) {
    const [duration, setDuration] = useState(getDuration(end, new Date()));

    useEffect(() => {

        const timer = setInterval(() => {
            setDuration(getDuration(end, new Date()));
        }, 1_000)

        return function cleanup() {
            clearInterval(timer);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <div className='d-inline-flex flex-row p-2 px-4 bd-highlight rounded-pill bg-warning  shadow bg-opacity-35'>
                <div className='p-1'>
                    <CircularProgress value={Math.trunc(duration['mo'])} percentage={getDurationPercent(duration, 'mo')} label={'month'} />
                </div>
                <div className='p-1'>
                    <CircularProgress value={Math.trunc(duration['w'])} percentage={getDurationPercent(duration, 'w')} label={'week'} />
                </div>
                <div className='p-1'>
                    <CircularProgress value={Math.trunc(duration['d'])} percentage={getDurationPercent(duration, 'd')} label={'day'} />
                </div>
                <div className='p-1'>
                    <CircularProgress value={Math.trunc(duration['h'])} percentage={getDurationPercent(duration, 'h')} label={'hour'} />
                </div>
                <div className='p-1'>
                    <CircularProgress value={Math.trunc(duration['m'])} percentage={getDurationPercent(duration, 'm')} label={'min'} />
                </div>
                <div className='p-1'>
                    <CircularProgress value={Math.trunc(duration['s'])} percentage={getDurationPercent(duration, 's')} label={'sec'} />
                </div>
            </div>
        </>

    )
}
