import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import '../App.css';
import axios from "axios";

function widgetApi() {
    const [profilPresident, setprofilPresident] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3002/profiles").then((response) => {
            setprofilPresident(response.data);
        });
    }, []);

    return (
        <div>
            {
                profilPresident.map((val, key) => (
                    <div key={`profile : ${key}`}>
                        <div class="container-fluid">
                            <div class="pres">
                                <div class="row">
                                    <div class="col-1" />
                                    <div class="col-2">
                                        <h2 > {val.age} </h2>
                                    </div>
                                    <div class="col-3">
                                        <div >  {val.city} </div>
                                    </div>
                                    <div class="col-3">
                                        <div >  {val.country} </div>
                                    </div>
                                    <div class="col-3">
                                        <div >  {val.president} </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>

                ))
            }
        </div >

    );

}

export default widgetApi;