// Función para obtener datos de la API mediante una solicitud HTTP GET
const fetchData = async () => {
  try {
    const URL = 'http://localhost:4000/shopify';
  
    const response = await fetch(URL, {
      method: "GET",
    });
  
    const data = await response.json();
    return data?.products;
  } catch (error) {
    throw new Error(error);
  }
}
  
  export default fetchData;
  