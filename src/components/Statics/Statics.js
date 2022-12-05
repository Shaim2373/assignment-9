import React from 'react';
import ReactEcharts from "echarts-for-react";

const Statics = () => {
    const option = {
        xAxis: {
            type: 'category',
            data: ['React', 'JavaScript', 'CSS', 'GIT']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: [8, 9, 8, 11],
                type: 'bar'
            }
        ]
    };
    return (
        <div className=''>
            <ReactEcharts option={option} />

        </div>
    );
};

export default Statics;