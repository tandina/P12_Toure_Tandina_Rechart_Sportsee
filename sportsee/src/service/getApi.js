export const getUserById = async (id) => {
	try {
	  const response = await fetch(`http://localhost:3000/user/${id}`);
	  const data = await response.json();
	  return data.data;
	} catch (error) {
	  console.log(error);
	}
  };
  
  export const getActivityByUserId = async (userId) => {
	try {
	  const response = await fetch(`http://localhost:3000/user/${userId}/activity`);
	  const data = await response.json();
	  return data.data;
	} catch (error) {
	  console.log(error);
	}
  };
  
  export const getSessionsByUserId = async (userId) => {
	try {
	  const response = await fetch(`http://localhost:3000/user/${userId}/average-sessions`);
	  const data = await response.json();
	  return data.data;
	} catch (error) {
	  console.log(error);
	}
  };
  
  export const getPerformanceByUserId = async (userId) => {
	try {
	  const response = await fetch(`http://localhost:3000/user/${userId}/performance`);
	  const data = await response.json();
	  return data.data;
	} catch (error) {
	  console.log(error);
	}
  };
