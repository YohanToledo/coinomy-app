import axios from "axios";

class Api {
    BASE_URL: string | undefined;

    constructor() {
        this.BASE_URL = process.env.REACT_APP_BACKEND_URL;
    }

    login = async (email: string, password: string) => {
        let result;

        try {
            result = await axios
                .post(`${this.BASE_URL}/auth/login`, {
                    email,
                    password,
                })

            if (result.status === 201) {
                window.localStorage.setItem("coinomy_token", result.data.token);
            }
        }
        catch (e: any) {
            // console.log(e.response)
            return e.response
        }

        return result;
    };

    register = async (name: string, email: string, password: string) => {
        let result;

        try {
            result = await axios
                .post(`${this.BASE_URL}/users`, {
                    fullName: name,
                    email,
                    password,
                })

            console.log(result)
        }
        catch (e: any) {
            // console.log(e.response)
            return e.response
        }

        return result;
    };
}

export default Api;