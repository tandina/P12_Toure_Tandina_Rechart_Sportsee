import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';
import { useData } from "../../context/UserDataContext"
import { useParams } from 'react-router-dom';
import "./Linechart.css"
import PropTypes from 'prop-types';

/**
 * @module LineChart to export the LineChart dynamic curve from rechart
 * @requires React
 * @requires recharts to import the library and the Radar model
 * This function is used to display the duration of dayly exercices.
 * @param {number} id - Id number of a registered user.
 * @returns A curved line showing the evolution of user's activity.
 */
const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip-minute ">
          <p className="label-minute">{` ${payload[0].payload.Minutes} Min`}</p>
        </div>
      );
    }
    return null;
  };
  
  const AverageGraph = () => {
    const { id } = useParams();
    const { userMainData, userAverageSessions } = useData(id);
    
    // data mocké
    //we need this code to check if the id and useId match, in the api context id is set in url
     const userData = userMainData.find(user => user.id === Number(id));
      const averageData = userAverageSessions.find(data => data.userId === userData.id);
    // data mocké
    
    // // data api
    // const averageData=userAverageSessions;
    // // data api
    // we create an array of all days for xAis and use map to display the data with the session length
    const days = ["L", "M", "M","J","V","S","D"];

    const data = averageData.sessions.map((session, index) => ({
      day: days,
      Minutes: session.sessionLength,
    }));
  
    return (<>
    <section className='linearchart-container'>
      <div className='linearchart-title'>Durée moyenne des sessions</div>
      <LineChart
        width={258}
        height={200}
        data={data}
        margin={{
          top: 0,
          right: 40,
          left: 20,
          bottom: -10,
        }}
        // style={{ backgroundColor: '#ff0000' }}
      >
        <XAxis 
        axisLine={false}
        tick={{ fill: 'rgba(255, 255, 255, 0.6)' }}
        tickLine={false} 
        dataKey="day"
        style={{ color: "white" ,fontSize: 12}}
       
        
        />
        <YAxis 

            hide={true}
            axisLine={false}
            tick={false}
             tickLine={false} 
            domain={["dataMin-50", "dataMax+50"]}
            padding={{ top: 10, bottom: -20 }}
            
           
        />
        <Tooltip 
            position={{ y: 0 }}
            content={<CustomTooltip />} 
            cursor={{
              stroke: "black",
              strokeOpacity: 0.08,
              strokeWidth: 40,

            }}
        />
        <Line
            dot={false}
            stroke="rgba(255, 255, 255, 0.6)"
            type="natural" dataKey="Minutes" 
            
            activeDot={{ r: 4,
              fill: "white",
             }}
            strokeWidth={3}
             />
        
      </LineChart>
      </section>
      </>);
      
  };
  
  export default AverageGraph;
  CustomTooltip.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.array,
};