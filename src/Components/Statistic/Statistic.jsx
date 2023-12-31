
import {  Pie, PieChart, Cell, Legend } from 'recharts';
import { getStoredDonation } from '../../localStorage';


const Statistic = () => {
      const myDonations = getStoredDonation();
      const donationLength = myDonations.length ;
      const remainingDonation = 12 - donationLength;
      const data = [
        { name: 'Total Donation', value: remainingDonation },
        { name: 'Your Donation', value: donationLength }
      ];

      const COLORS = ['#FF444A', '#00C49F'];

      const RADIAN = Math.PI / 180;
      const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
      
        return (
          <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(2)}%`}
          </text>
        );
      };
      
    return (
        <div className='flex justify-center mt-8 mb-4'>
            
            <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={180}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend></Legend>
        </PieChart>

            
        </div>
    );
};


export default Statistic;