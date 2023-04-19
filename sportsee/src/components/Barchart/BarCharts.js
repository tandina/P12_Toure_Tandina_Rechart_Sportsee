import PropTypes from 'prop-types';
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { useData } from "../../context/UserDataContext"
import { useParams } from 'react-router-dom';
import "./Barchart.css"
import { getUserById,getActivityByUserId,getSessionsByUserId,getPerformanceByUserId } from "../../service/getApi";
import { useEffect, useState } from "react";

/**
 * @module RadarCharts to export the radar
 * @requires React
 * @requires recharts to import the library and the Radar model
 */

export default function BarCharts() {
  // data maocké
    const { id } = useParams();
    const { userActivity, userMainData } = useData(id);
    console.log(id)

    //we need this code to check if the id and useId match, in the api context id is set in url

    const userData = userMainData.find(user => user.id === Number(id));
    const activityData = userActivity.find(activity => activity.userId === userData.id);
  // data maocké
  
  // //  // //data Api
  //  const { id } = useParams();
  //  const {  userActivity} = useData(id);
  //  console.log(id);
  //  const activityData = userActivity;  
  //  console.log(activityData)
  // //  // //data Api


  //we create an array of all propreties name of the object in numbers than we map to reach sessions an finally map to get kilogram and calories
  const keys = Object.keys(activityData.sessions);
  const numbers = [];
  for (let i = 1; i <= keys.length; i++) {
    numbers.push(i);
  }

  const activityMap = { 
    sessions: activityData.sessions.map(session => ({ kilogram: session.kilogram, calories: session.calories })),
  };

  const data = numbers.map(number => ({
    name: numbers,
    "Poids (kg)": activityMap.sessions[number - 1].kilogram,
   "Calories brûlées (kCal)": activityMap.sessions[number - 1].calories,
  }));

  

  const CustomTooltip = ({ active, payload }) => {
    if (active) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${payload[0].value} Kg`}</p>
          <p className="label">{`${payload[1].value} Kcal`}</p>
        </div>
      );
      
    }
    CustomTooltip.propTypes = {
      active: PropTypes.bool,
      payload: PropTypes.array,
    };
    return null;
  };
  return (<>
    <div className='bar-container'>
    <div className="barLegend">
        <div className="barTitle">Activité quotidienne</div>
        <div className="legends">
        <ul>
          <li className="weight-circle"><p>Poids (kg)</p></li>
          <li className="kcal-circle"><p>Calories brûlées (kCal)</p></li>
        </ul>
        </div>
      </div>
      <BarChart
      width={750}
      height={300}
      data={data}
      margin={{
        top: 30,
        right: 30,
        left: 20,
        bottom: 5,
      }}
      barCategoryGap="30%"
        barGap={5}
    >
      <CartesianGrid 
        strokeDasharray="2 4"
        vertical={false} />
      <XAxis 
        dataKey="name"
        tickSize="20"
        tickLine={false} 
        tick={{ fill: "#9b9eac" }}
        axisLine={{
    stroke: "#DEDEDE",
    strokeWidth: 2
  }}
        />
      <YAxis 
        domain={[20, 'auto']}  
        tickCount={3}
        orientation='right'
        tickLine={false} 
        tick={{ dx: 40 ,fill: "#9b9eac"}}
        axisLine={false}
        dataKey="Poids (kg)"
        yAxisId="Poids (kg}"
      />
      <YAxis 
      
      domain={[0, 'dataMax + 10']} 
      dataKey="Calories brûlées (kCal)"
      hide={true}
      orientation='left'
      />  

      <Tooltip 
        position={{ y: 0 }}
        content={<CustomTooltip/>}
      />

      <Bar 
        radius={[20, 20, 0, 0]} maxBarSize={10}
        dataKey="Poids (kg)" fill="#282D30" />
      <Bar 
        radius={[20, 20, 0, 0]} maxBarSize={10}
        dataKey="Calories brûlées (kCal)" fill="#E60000" />
      </BarChart>
    </div>
    </>
  );
  
}
BarCharts.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]
  ),
  dataKey: PropTypes.number,
}


