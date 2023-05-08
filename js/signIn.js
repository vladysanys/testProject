async function getData() {
  try {
    const response = await fetch("https://giving-oriole-32739.kv.vercel-storage.com/get/check", {
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
let check
const result = await getData();
if(result.result == "false"){
  check = false
} else if(result.result == "true"){
  check = true
}
// const parseData = JSON.parse(result.result)
// const {check} = parseData
export default check;
