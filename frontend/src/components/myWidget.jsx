import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import '../index.css';
import '../App.css';
import axios from "axios";

function myWidget() {
    const [pres, setpres] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3002/profiles").then((response) => {
            setpres(response.data);
        });
    }, []);

    return (
        <div>

            {
                pres.map((val, key) => (
                    <div key={`president : ${key}`}>
                        <div class="container-fluid">
                            <div class="pres">
                                <div class="pres2">
                                <div class="row">
                                    <div class="col-1" />
                                    <div class="col-2">
                                        <h7>Age</h7>
                                        <h6> {val.age} </h6>
                                    </div>
                                    <div class="col-3">
                                        
                                        <h6>  <br></br>{val.city} </h6>
                                    </div>
                                    <div class="col-3">
                                        
                                        <h6 >  <br></br>{val.country} </h6>
                                    </div>
                                    <div class="col-3">
                                        <h7>Vote</h7>
                                        <h6> {val.president} </h6>
                                    </div>
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


export default myWidget;