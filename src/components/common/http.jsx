export const apiUrl = 'http://localhost:8000/api/'

export const token = () => {
    const userinfo = localStorage.getItem('userinfo');
    const data = JSON.parse(userinfo);
    return data.token;
}