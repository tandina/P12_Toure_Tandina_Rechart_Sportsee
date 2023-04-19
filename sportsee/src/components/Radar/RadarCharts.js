import React from 'react';
import { Radar, RadarChart,Tooltip , PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import "./RadarChart.css"
import { useData } from "../../context/UserDataContext"
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

/**
 * @module RadarCharts to export the radar
 * @requires React
 * @requires recharts to import the library and the Radar model
 */


export default function RadarCharts() {
  const { id } = useParams();
    const { userPerformance, userMainData } = useData(id);
    console.log(id)
        // data mocké
        //we need this code to check if the id and useId match, in the api context id is set in url
        const userData = userMainData.find(user => user.id === Number(id));
        const performanceData = userPerformance.find(performance => performance.userId === userData.id);
        console.log(performanceData.kind)
    // data mocké
   
  //  // data api
  //  const performanceData=userPerformance;
  //  // data api

  // mapping performance data keys and activity labels
    const vf = {
      'cardio': 'Cardio',
      'energy': 'Energie',
      'endurance': 'Endurance',
      'strength': 'Force',
      'speed': 'Vitesse',
      'intensity': 'Intensité'
    };
    const activity = Object.values(performanceData.kind).map(kind => vf[kind]);

    //we calculate the value and ad 10 for some space in the radar
    var dataActivity = Object.values(performanceData.data);
        console.log(dataActivity)
        const space =dataActivity.length+10;  
        console.log(space) 
       
        const valuesArray = performanceData.data.map(item => item.value);
        console.log(valuesArray); // display an array of all values
        const full = Math.max(...valuesArray.toString()) + 10;
        console.log(full)  

        const data = activity.map((subject, i) => ({
          subject: subject,
          A: dataActivity[i].value,
          fullMark: full.toString(),
        }));
        
    console.log(data)
  
    return (<>
      <section className='radarChart'>
      <div>
      <ResponsiveContainer 
        width={245} 
        height={245}>
        <RadarChart 
          cx="50%" 
          cy="50%" 
          innerRadius="10%"
          outerRadius="70%" 
          data={data}>
          <PolarGrid 
            radialLines={false}
          />
          <PolarAngleAxis 
            dataKey="subject" 
            tick={{ fontSize: 11, fontWeight: 400 }}
            stroke="white"
            dy={1} 
            tickLine={false}
            />
          <PolarRadiusAxis 
            angle={30}
							type="number"
							tick={false}
							axisLine={false}
							tickCount="5"
							line="0"
          />
          <Tooltip 
            position={{ y: 80,x:50 }}
          />
          <Radar 
          name="Performance" 
          dataKey="A" 
          stroke="none" 
          fill="red" 
          fillOpacity={0.6} 
          />
        </RadarChart>
      </ResponsiveContainer>
      </div>
      </section>
      
      </>
    );
}

RadarCharts.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]
  ),
  dataKey: PropTypes.number,
}

