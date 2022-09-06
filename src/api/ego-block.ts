import { User } from "../models/User";

export const getUserInfo = async (token: string): Promise<User> => {
    const response = await fetch('https://europe-west1-egoblock-b17ad.cloudfunctions.net/getUser', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })

    return response.json();
}