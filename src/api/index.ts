import axios from "axios";
interface Coordinates {
  lat: number;
  lng: number;
}

export const getPlacesData = async (type: string, sw: any, ne: any) => {
  console.log("sw", sw);
  console.log("ne", ne);
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: sw.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
          tr_latitude: ne.lat,
        },
        headers: {
          "X-RapidAPI-Key":
            "d8bd8740b5msh5971e39160c91fap19b0a9jsn5e866ac9ca8b",
          "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
        },
      }
    );
    console.log(data);
    return data;
  } catch (e) {}
};

// export const getWeather = async (
//   lat: string | number,
//   lng: string | number
// ) => {
//   try {
//     const apiKey = "2de482ad89d692a3e13e25c8380ca5ea";
//     const city = "London";
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

//     fetch(url)
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   } catch (e) {
//     console.log(e);
//   }
// };

// export const getPlacesData = async (sw:any, ne:any) => {
//     try {
//       const { data: { data } } = await axios.get(URL, {
//         params: {
//           bl_latitude: sw.lat,
//           bl_longitude: sw.lng,
//           tr_longitude: ne.lng,
//           tr_latitude: ne.lat,
//         },
//         headers: {
//           'x-rapidapi-key':"d8bd8740b5msh5971e39160c91fap19b0a9jsn5e866ac9ca8b",
//           'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
//         },
//       });
//       console.log(data)
//       return data;
//     } catch (error) {
//       console.log(error);
//     }
//   };
