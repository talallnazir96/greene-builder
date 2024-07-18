import axios from "axios";
const baseUrl = "https://admin.greenebuilders.net/index.php/wp-json/custom/v1/";

export const getPosts =  (perPage) => {
    return axios.get(baseUrl + "post_data/?per_page="+perPage);
}
export const getPostsList =  (perPage, offset) => {
    return axios.get(baseUrl + "post_data/?per_page="+perPage+"&offset="+offset);
}
export const getPostbyID =  (ID) => {
    return axios.get(baseUrl + "post/?id="+ID);
}