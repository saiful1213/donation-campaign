import { useLoaderData } from 'react-router-dom';
import { getDataFromLS } from '../../Components/utility/LocalStorage';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const Statistics = () => {

   const allDataNum = useLoaderData().length;
   const storageData = getDataFromLS().length;

   const totalDonation = allDataNum - storageData;

   const data = [
      { name: 'Group A', value: totalDonation },
      { name: 'Group B', value: storageData },
   ];

   const COLORS = ['#FF444A', '#00C49F'];

   const RADIAN = Math.PI / 180;
   const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
      const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
      const x = cx + radius * Math.cos(-midAngle * RADIAN);
      const y = cy + radius * Math.sin(-midAngle * RADIAN);

      return (
         <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(1)}%`}
         </text>
      );
   };

   return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
         <ResponsiveContainer width="100%" height={400}>
            <PieChart width={300} height={300}>
               <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={150}
                  fill="#8884d8"
                  dataKey="value"
               >
                  {data.map((entry, index) => (
                     <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
               </Pie>
            </PieChart>
         </ResponsiveContainer>
         <div style={{ marginTop: '20px' }}>
            <div className='gap-5 md:gap-10' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '300px', margin: '0 auto', marginBottom: '10px' }}>
               <div className='md:flex' style={{ flexDirection: 'row', alignItems: 'center', padding: '10px' }}>
                  <p style={{ marginRight: '10px', width: '110px' }}>Your Donation</p>
                  <div
                     style={{
                        borderRadius: '5px',
                        width: '100px',
                        backgroundColor: COLORS[1],
                        height: '15px',
                     }}
                  ></div>
               </div>
               <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '10px' }}>
                  <p style={{ marginRight: '10px', width: '110px' }}>Total Donation</p>
                  <div
                     style={{
                        borderRadius: '5px',
                        width: '100px',
                        backgroundColor: COLORS[0],
                        height: '15px',
                     }}
                  ></div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Statistics;