const fetchMockData= async (id) => {
    try {
      const res = await fetch(`http://localhost:8000/${id}`);
      const parseRes = await res.json();
      return parseRes;
    } catch (err) {
      console.log(err);
      return { success: false };
    }
  };

const fetchResult=async (data)=>{
  try {
    console.log(data);
    const res = await fetch(`http://localhost:8000/result`,{
      headers: {
        "Content-Type": "application/json",
      },
      method: 'POST',
      body: JSON.stringify(data),
    });
    const parseRes = await res.json();
    return parseRes;
  } catch (err) {
    console.log(err);
    return { success: false };
  }
}

  export { fetchMockData, fetchResult};
  