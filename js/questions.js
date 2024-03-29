async function getData() {
  try {
    const response = await fetch("https://giving-oriole-32739.kv.vercel-storage.com/get/questions", {
      headers: {
        Authorization:
          "Bearer AX_jASQgNWUwNGY4N2ItZDNhZS00OTAzLTkxOTQtNGYzNWRhZTMyM2Y0ZDY0MjBkZDdmMDBiNDRlOTlkMWVjNjM1MTkzM2Q2YWI=",
      },
    });
    const data = await response.json();
    if (data) {
      const data1 = data;
      return data1;
    }
  } catch (error) {
    console.log(error);
  }
}

const result = await getData();
const parseData = JSON.parse(result.result)
const {questions} = parseData
export default questions;
