import { useData } from "../../context/UserDataContext"
import { useParams,useNavigate } from 'react-router-dom';
import {Header, SideBar, Hello, Card, BarCharts, RadarCharts, Linechart, PieChart} from "../../components/index";
import apple from "../../assets/mainIcones/apple.svg"
import Cheeseburger from "../../assets/mainIcones/cheeseburger.svg"
import Flamme from "../../assets/mainIcones/flamme.svg"
import Poulet from "../../assets/mainIcones/poulet.svg"
import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
// api
import {
  getUserById,
  getActivityByUserId,
  getSessionsByUserId,
  getPerformanceByUserId
} from "../../service/getApi";


/** @function Dashboard */

// the Dashboard display all the components, but his most important action is to switch data between mocked data an api data, to switch you need to comment the source you don't want and keep the version you want in dashboard it will automatically refresh the react context, don't forget to do the same action in graphics components, there is only hide to comment

function Dashboard() {
    //data mocké
    const { id } = useParams();
    const { userActivity, userMainData } = useData(id);
    console.log(id)
    const userData = userMainData.find(user => user.id === Number(id));
    const activityData = userActivity.find(activity => activity.userId === userData.id);
    console.log(userData, activityData);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
      setIsLoading(false);
      // if(id.id === 12 || id.id === 18){
      //   userData(id.id)
      // } else {
      //   navigate("*")
      // }
    }, [id]);
    // useEffect(() => {
    //   if(params.id == 12 || params.id == 18){
    //     getFullDataFormat(params.id)
    //   } else {
    //     navigate("*")
    //   }
    // }, [])
    if (isLoading) {return <p>...loading</p>;} 
    else {
  //data mocké


  // //data api
    // const { id } = useParams();
    // const userId = id;
    // const {
    //   setUserMainData,
    //   setUserActivity,
    //   setUserAverageSessions,
    //   setUserPerformance,
    //   userMainData,
    //   userActivity,
    //   userAverageSessions,
    //   userPerformance,
    // } = useData(id);
    // const [isLoading, setIsLoading] = useState(true);

    // useEffect(() => {
    //   async function fetchData() {
    //     try {
    //       const [userMainData, userActivity, userAverageSessions, userPerformance] = await Promise.all([
    //         getUserById(userId),
    //         getActivityByUserId(userId),
    //         getSessionsByUserId(userId),
    //         getPerformanceByUserId(userId)
    //       ]);

    //       setUserMainData(userMainData);
    //       setUserActivity(userActivity);
    //       setUserAverageSessions(userAverageSessions);
    //       setUserPerformance(userPerformance);

    //       setIsLoading(false);
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   }
    //   fetchData();
    // }, [id,setUserMainData,setUserActivity,setUserAverageSessions,setUserPerformance,userId]);
    // console.log(userActivity)
    // const userData=userMainData;
    // if (isLoading) {
    //   return <p>...loading</p>;
    // } else {
    //     // test first entry from the api
    //     // return (
    //     // 	<>
    //     // 		<h1>{userMainData.userInfos?.firstName}</h1>
    //     // 	</>
    //     // );
  //  //data Api

  return (
    <>
        <Header/>
        <SideBar/>
        <div className="core-content">
          <Hello 
            key={userData.id}
            firstname={userData.userInfos?.firstName}
          />
          <div className="chart-container">
            <BarCharts/>
            <div className="mini-chart-container">
              <div><Linechart/></div>
              <div><RadarCharts/></div>
              <div><PieChart/></div>
            </div>
          </div>
          <div className="card-container">
          <Card 
            css='apple'
            picture={apple}
            cardName={'Calories'}
            cardData={userData.keyData?.calorieCount}
            unit={'Kcal'}
          />
          <Card 
            css='poulet'
            cardName={'Proteines'}
            picture={Poulet}
            cardData={userData.keyData?.proteinCount}
            unit={'g'}
          />
          <Card 
            css='cheese'
            cardName={'Glucides'}
            picture={Cheeseburger}
            cardData={userData.keyData?.carbohydrateCount}
            unit={'g'}
          />
          <Card 
            css='fire'
            cardName={'Lipides'}
            picture={Flamme}
            cardData={userData.keyData?.lipidCount}
            unit={'g'}
          />
          </div>
          
        </div>
    </>
  );
}}

Hello.propTypes = {
  firstname: PropTypes.string.isRequired
};
Card.propTypes = {
  css: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  cardName: PropTypes.string.isRequired,
  cardData: PropTypes.number,
  unit: PropTypes.string.isRequired
};

export default Dashboard;
