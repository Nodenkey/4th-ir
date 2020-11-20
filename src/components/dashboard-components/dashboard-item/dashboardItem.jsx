import React, {useEffect, useState} from 'react';
import Modal from "../modal/modal";
import {v4} from "uuid";
import {Bar, DashboardItemWrapper} from "./dashboardItemStyles";

const DashboardItem = ({name, email, city, country, channel, num}) => {
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        const html = document.querySelector('html');
        showModal ? html.classList.add('freeze') : html.classList.remove('freeze');
    }, [showModal]);

    const x = window.matchMedia("(max-width: 600px)")

    return (
        <>
            {
                showModal && <Modal key={v4()} setShowModal={setShowModal} name={name} email={email} country={country}
                                    city={city} channel={channel}/>
            }
            {
                x.matches ?
                    <DashboardItemWrapper onClick={() => setShowModal(!showModal)}>
                        <div>
                            <div>
                                <span style={{marginRight: 5}}>{num}. </span>
                                {name}
                            </div>
                            <Bar/>
                        </div>
                        <div>
                            {email}
                        </div>
                    </DashboardItemWrapper> :
                    <DashboardItemWrapper onClick={() => setShowModal(!showModal)}>
                        <div>
                            <div>
                                <span style={{marginRight: 5}}>{num}. </span>
                                {name}
                            </div>
                            <Bar/>
                        </div>
                        <div>
                            {email}
                            <Bar/>
                        </div>
                        <div>
                            {country}
                            <Bar/>
                        </div>
                        <div>
                            {city}
                            <Bar/>
                        </div>
                        <div>
                            {channel}
                        </div>
                    </DashboardItemWrapper>
            }

        </>
    );
};

export default DashboardItem;
