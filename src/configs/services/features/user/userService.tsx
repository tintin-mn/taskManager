import axios from "axios";

const API_URL = "http://185.8.174.74:8000/accounts";

const updateAccount = async (
    id: string,
    payload: {
        firstName: string;
        lastName: string;
        phoneNumber: string;
    },
) => {
    const response = await axios.patch(`${API_URL}/${id}/`, {
        ...payload,
    });
    return response.data;
};

const accountServices = {
    updateAccount,
};

export default accountServices;