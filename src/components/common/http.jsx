export const apiUrl = 'http://localhost:8000/api/'
export const fileUrl = 'http://localhost:8000/'
export const token = () => {
    const userinfo = localStorage.getItem('userinfo');
    if (userinfo) {
      const data = JSON.parse(userinfo);
      return data?.token;  // Safely access token if it exists
    }
    return null;  // Return null if no userinfo is found
  };
  