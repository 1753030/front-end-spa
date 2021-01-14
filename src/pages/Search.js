import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchComponent from '../components/SearchCompnent';
import axios from "axios";
import HeaderComponent from "../components/header";

const SearchPage = (props) => {
    const [listSearch, setListSearch] = useState([]);

    useEffect(() => {
        let temp1;
        async function searchData() {
            try {
                temp1 = await axios
                    .get(`http://localhost:1337/courses?title_contains=${props.location.state.key}`)
                    .then((res) => setListSearch(res.data))
            } catch {
                console.log("Bug")
            }
        }
        searchData();
    }, []);
    return (
        <div>
            <HeaderComponent />
            <SearchComponent listSearch={listSearch} />
        </div>
    );
}

export default SearchPage;