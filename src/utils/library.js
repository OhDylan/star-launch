// This is called when send request button is pressed at Launch Page
export const getAllFailedLaunches = async (launchpadId) => {
    try{
        let launches = []
        let results = await fetch(`https://api.spacexdata.com/v4/launchpads/${launchpadId}`)
        let data = await results.json()
        if(data?.launches)
        {
            launches = data
            console.log(launches)
        }
        return launches;
    }
    catch(err){
        console.log("ERROR")
        console.log("Error: " + err)
        return [];
    }
}

export const getAllFailedLaunchesDetails = async (launches) => {

    return Promise.all(launches.map(launchId => {
        return fetch(`https://api.spacexdata.com/v4/launches/${launchId}`)
        .then(res => res.json())
    }))
}

// This is called when the form is submitted at Star Link Page
export function getAllSatellites(){
    if(!localStorage.getItem("satellites")){
      fetch(`https://api.spacexdata.com/v4/starlink`)
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("satellites",JSON.stringify(data))
        return data
      })
    }
    else {
      return JSON.parse(localStorage.getItem("satellites"));
    }
}

export const filterByDate = (satellites, dateString) => {
    return satellites.filter((satellite => {
      return satellite?.spaceTrack.LAUNCH_DATE.startsWith(dateString)
    }))
}