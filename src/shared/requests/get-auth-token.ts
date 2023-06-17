export const getAuthToken = () => {
    return localStorage.getItem("coinomy_token") || ""
}