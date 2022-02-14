import React from 'react'
import { CircularProgressbarWithChildren } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';
import './CircularProgress.css';


interface CircularProgressProps {
    value: number;
    percentage: number;
    label: string;
}

function pluralize(label: string, value: number) {
    return value < 1 ? label : label + 's'
}


export default function CircularProgress({ label, value, percentage }: CircularProgressProps) {

    return (
        <div className='progress-div'  >
            <CircularProgressbarWithChildren value={percentage} styles={{
                path: {
                    // Path color
                    stroke: 'gray'
                }
            }}>
                <div className='time-label'>
                    <strong>{value}</strong>
                </div>
                <div className='text-label'>
                    <strong>{pluralize(label, value)}</strong>
                </div>
            </CircularProgressbarWithChildren>
        </div >
    )
}