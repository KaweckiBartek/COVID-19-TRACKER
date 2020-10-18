
import './LineGraph.css'
import React, {useState} from 'react';
import {Line} from "react-chartjs-2";

function LineGraph() {
    const [data, setData] = useState({});
    return (
        <div className="line__graph">
            <Line data={} options={} />
        </div>
    );
}


export default LineGraph;