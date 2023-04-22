import PropTypes from 'prop-types';
import React from 'react';
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';
import { useData } from "../../context/UserDataContext"
import { useParams } from 'react-router-dom';
import "./Piechart.css"

/**
 * @module RadialBarChart to export the radial bar chart
 * @requires React
 * @requires recharts to import the library and the Radar model
 */


export default function Piechart() {
    const { id } = useParams();
    const { userMainData } = useData(id);
    // data mocké
        //we need this code to check if the id and useId match, in the api context id is set in url
      const userData = userMainData.find(user => user.id === Number(id));
    // data mocké

        // // data api
        // const userData=userMainData;
        // // data api
    console.log(userData)

      //we create an array of all propreties values of the object in todayScore, multiply by 100 to get a percentage of the number
    const todayScore = Object.values(userData);
    const score = todayScore[2];
    const percent = score*100;

  
    console.log(score)

    console.log(todayScore)

    // with 'data" we setup all the informations required to daisplay the graph uv:100 = the total achievement, uv:percent = the actualy percentage of achievement
    const data = [
        {
          name: 'full',
          uv: 100,
          fill: 'transparent',
          opacity:0
        },
        {
          name: 'achievement',
          uv: percent,
          fill: 'red',
          }
      
      ];
    return (<>
        <section className='radial-chart-container'>
            <div className='radial-chart-score'>Score</div>
            <div className='radial-chart-text'>
                <h1>{percent}%</h1>
                <h2>de votre objectif</h2>
                
            </div> 
            <span className='circle'></span>
            <div className='radial-chart'>
                <ResponsiveContainer width={350} height={350}>
                    <RadialBarChart 
                        cx="50%" 
                        cy="50%" 
                        innerRadius="10%" 
                        outerRadius="80%" 
                        barSize={10} 
                        data={data}
                        startAngle={90}
                        >
                        
                    <RadialBar
                        cornerRadius="10"
                        minAngle={15}
                        background={false}
                        clockWise
                        dataKey="uv"
                    />
                    </RadialBarChart>
                </ResponsiveContainer>
        </div>
      </section>
      </>
    );
  }

  Piechart.propTypes = {
    data: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object,
    ]
    ),
    dataKey: PropTypes.number,
  }