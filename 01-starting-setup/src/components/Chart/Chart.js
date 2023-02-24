import './Chart.css';
import ChartBar from './ChartBar';

const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(dataPoint => {
        //console.log(dataPoint)
        return dataPoint.value
    });

    // Spread Operator can pull array values and use them as arguments in a function
    const totalMaximum = Math.max(...dataPointValues);
    //console.log(dataPointValues);
    return (
        <div className="chart">
            {props.dataPoints.map(dataPoint => (
                <ChartBar 
                    key={dataPoint.label}
                    label={dataPoint.label}
                    value={dataPoint.value} 
                    maxValue={totalMaximum}
                />
            ))}
        </div>
    )
}

export default Chart;