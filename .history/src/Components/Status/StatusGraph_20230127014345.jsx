import React from 'react';

const StatusGraph = () => {
    return (
        <div>
             <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="500"
            />
        </div>
    );
}

export default StatusGraph;
