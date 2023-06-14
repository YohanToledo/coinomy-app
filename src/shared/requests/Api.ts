import axios from "axios";
import { Category } from "../../ts/types/category.types";
import { getAuthToken } from "./get-auth-token";

class Api {
    BASE_URL: string | undefined;
    authToken: string;

    constructor() {
        this.BASE_URL = process.env.REACT_APP_BACKEND_URL;
        this.authToken = getAuthToken();
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

    createCategory = async (category: Category) => {
        let result;

        try {
            result = await axios
                .post(`${this.BASE_URL}/categories`, {
                    description: category.description,
                    type: category.type,
                    icon: category.icon
                }, {
                    headers: {
                        Authorization: `Bearer ${this.authToken}`
                    }
                })

            console.log(result)
        }
        catch (e: any) {
            // console.log(e.response)
            return e.response
        }

        return result;
    };

    findAllCategories = async () => {
        let result;

        try {
            result = await axios.get(`${this.BASE_URL}/categories`, {
                headers: {
                    Authorization: `Bearer ${this.authToken}`
                }
            })
            //console.log(result)
        }
        catch (e: any) {
            // console.log(e.response)
            return e.response
        }

        return result;
    };
}

export default Api;