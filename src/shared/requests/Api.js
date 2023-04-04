import axios from "axios";

class Api {
    constructor() {
        this.BASE_URL = process.env.REACT_APP_BACKEND_URL;
    }

    login = async (email, password) => {
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
        catch (e) {
            // console.log(e.response)
            return e.response
        }

        return result;
    };

    register = async (name, email, password) => {
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
        catch (e) {
            // console.log(e.response)
            return e.response
        }

        return result;
    };
}

export default Api;