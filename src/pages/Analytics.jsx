import React, { PureComponent } from 'react';
import { LineChart, Sector, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ComposedChart, BarChart, Bar, Area, PieChart, Pie, } from 'recharts';

const data = [
    { name: '00:00', Vehicles: 20, Velocity: 60, },
    { name: '01:00', Vehicles: 10, Velocity: 70, },
    { name: '02:00', Vehicles: 12, Velocity: 71.5, },
    { name: '03:00', Vehicles: 14, Velocity: 90, },
    { name: '04:00', Vehicles: 10, Velocity: 60.7, },
    { name: '05:00', Vehicles: 32, Velocity: 56.7, },
    { name: '06:00', Vehicles: 79, Velocity: 45.1, },
    { name: '07:00', Vehicles: 100, Velocity: 60, },
    { name: '08:00', Vehicles: 323, Velocity: 30.8, },
    { name: '09:00', Vehicles: 301, Velocity: 35.7, },
    { name: '10:00', Vehicles: 250, Velocity: 45.8, },
    { name: '11:00', Vehicles: 340, Velocity: 25.3, },
    { name: '12:00', Vehicles: 367, Velocity: 20.6, },
    { name: '13:00', Vehicles: 301, Velocity: 30.5, },
    { name: '14:00', Vehicles: 225, Velocity: 41.3, },
    { name: '15:00', Vehicles: 195, Velocity: 43.8, },
    { name: '16:00', Vehicles: 213, Velocity: 45.9, },
    { name: '17:00', Vehicles: 354, Velocity: 30.9, },
    { name: '18:00', Vehicles: 342, Velocity: 25.4, },
    { name: '19:00', Vehicles: 270, Velocity: 35.1, },
    { name: '20:00', Vehicles: 240, Velocity: 43.5, },
    { name: '21:00', Vehicles: 190, Velocity: 54.8, },
    { name: '22:00', Vehicles: 160, Velocity: 54.7, },
    { name: '23:00', Vehicles: 130, Velocity: 60.7, },
];
const data1 = [
    { name: '00:00', Vehicles: 20, },
    { name: '01:00', Vehicles: 10, },
    { name: '02:00', Vehicles: 12, },
    { name: '03:00', Vehicles: 14, },
    { name: '04:00', Vehicles: 10, },
    { name: '05:00', Vehicles: 32, },
    { name: '06:00', Vehicles: 79, },
    { name: '07:00', Vehicles: 100, },
    { name: '08:00', Vehicles: 323, },
    { name: '09:00', Vehicles: 301, },
    { name: '10:00', Vehicles: 250, },
    { name: '11:00', Vehicles: 340, },
    { name: '12:00', Vehicles: 367, },
    { name: '13:00', Vehicles: 301, },
    { name: '14:00', Vehicles: 225, },
    { name: '15:00', Vehicles: 195, },
    { name: '16:00', Vehicles: 213, },
    { name: '17:00', Vehicles: 354, },
    { name: '18:00', Vehicles: 342, },
    { name: '19:00', Vehicles: 270, },
    { name: '20:00', Vehicles: 240, },
    { name: '21:00', Vehicles: 190, },
    { name: '22:00', Vehicles: 160, },
    { name: '23:00', Vehicles: 130, },
];
const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    return (
        <g>
            <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
                {payload.name}
            </text>
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}
            />
            <Sector
                cx={cx}
                cy={cy}
                startAngle={startAngle}
                endAngle={endAngle}
                innerRadius={outerRadius + 6}
                outerRadius={outerRadius + 10}
                fill={fill}
            />
            <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
            <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
            <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`Vehicles ${value}`}</text>
            <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
                {`(Rate ${(percent * 100).toFixed(2)}%)`}
            </text>
        </g>
    );
};
export default class Example extends PureComponent {
    // static demoUrl1 = 'https://codesandbox.io/s/simple-line-chart-kec3v';
    state = {
        activeIndex: 0,
    };

    onPieEnter = (_, index) => {
        this.setState({
            activeIndex: index,
        });
    };
    render() {
        return (
            <div className='mb-5 flex w-full flex-col rounded-[10px]  border-gray-300 bg-gray-50 p-5 dark:border-gray-700 dark:bg-gray-800'>
                <div>
                    <ResponsiveContainer className="chart" height={300}>
                        <LineChart
                            width={600}
                            height={300}
                            data={data}
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                        >
                            <XAxis dataKey="name" />
                            <YAxis />
                            <CartesianGrid strokeDasharray="3 3" />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="Vehicles" stroke="#8884d8" activeDot={{ r: 8 }} />
                            <Line type="monotone" dataKey="Velocity" stroke="#82ca9d" />
                        </LineChart>
                    </ResponsiveContainer>

                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart
                            width={500}
                            height={300}
                            data={data}
                            margin={{
                                top: 20,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="Velocity" stackId="a" fill="#8884d8" />
                            <Bar dataKey="Vehicles" stackId="a" fill="#82ca9d" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <div className='flex place-items-center'>
                    <ResponsiveContainer width="50%" height={300}>
                        <ComposedChart
                            layout="vertical"
                            width={500}
                            height={400}
                            data={data}
                            margin={{
                                top: 20,
                                right: 20,
                                bottom: 20,
                                left: 20,
                            }}
                        >
                            <CartesianGrid stroke="#f5f5f5" />
                            <XAxis type="number" />
                            <YAxis dataKey="name" type="category" scale="band" />
                            <Tooltip />
                            <Legend />
                            {/* <Area dataKey="amt" fill="#8884d8" stroke="#8884d8" /> */}
                            <Bar dataKey="Velocity" barSize={20} fill="#413ea0" />
                            <Line dataKey="Vehicles" stroke="#ff7300" />
                        </ComposedChart>
                    </ResponsiveContainer>
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart width={200} height={300}>
                            <Pie
                                activeIndex={this.state.activeIndex}
                                activeShape={renderActiveShape}
                                data={data1}
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="Vehicles"
                                onMouseEnter={this.onPieEnter}
                            />
                        </PieChart>
                    </ResponsiveContainer>
                </div>

            </div>
        );
    }
}

