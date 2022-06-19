import * as axios from 'axios';


export class usersApi {

    static getUsers = async (nextUrl) => {
        try {
            const response = await axios.get(nextUrl);
            if (response.data.success) {
                return response.data;
            }
        } catch (error) {
            console.log('API getUsers error: ', error);
            throw new Error(error.message);
        }
    };

    static getUsersPositions = async () => {
        try {
            const response = await axios.get('https://frontend-test-assignment-api.abz.agency/api/v1/positions');
            if (response.data.success) {
                return response.data.positions.map(obj => ({
                    value: obj.id,
                    label: obj.name,
                }));
            }
        } catch (error) {
            console.log('API getUsersPositions error: ', error);
        }
    };

    static getToken = async () => {
        try {
            const response = await axios.get('https://frontend-test-assignment-api.abz.agency/api/v1/token',);
            if (response.data.success) {
                return response.data.token;
            }
        } catch (error) {
            console.log('API getToken error: ', error);
        }
    };

    static addUser = async ({email, name, phone, photo, position, token}) => {
        try {
            const formData = new FormData();
            formData.append('position_id', +position);
            formData.append('name', name);
            formData.append('email', email);
            formData.append('phone', phone);
            formData.append('photo', photo);
            const response = await axios({
                method: 'post',
                url: 'https://frontend-test-assignment-api.abz.agency/api/v1/users',
                data: formData,
                headers: {
                    Token: token,
                },
            });
            if (response.data.success) {
                return response.data.message;
            }
        } catch (error) {
            console.log('API addUser error: ', error);
            return error.message;
        }
    };

};