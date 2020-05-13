import React, {useContext, useMemo, useState} from 'react'
import { Table } from "react-bootstrap";
import { FaAngleDown, FaAngleUp} from 'react-icons/fa';
import ParentYoutubeComponent from "./ParentYoutubeComponent";
import { Container, Row, Col } from "react-bootstrap";
import { FilterContext } from "./FilterContext";
import YoutubeComponent from "./YoutubeComponent";

const ContentGrid = (props) => {

    const { isSmokeVisible, isFlashVisible} = useContext(FilterContext);


    return (
        <div>
            {/*
            <div>
                <button onClick={() => setSmokeVisible(true)}>SHOW SMOKES</button>
                <button onClick={() => setSmokeVisible(false)}>HIDE SMOKES</button>
            </div>
            <div>
                <button onClick={() => setFlashVisible(true)}>SHOW FLASHES</button>
                <button onClick={() => setFlashVisible(false)}>HIDE FLASHES</button>
            </div>
            */}
            <div className="grid-container-videos">

                <YoutubeComponent visible={ isSmokeVisible } videoId={props.props.executes.execute_1.videoIds.videoId1}/>
                <YoutubeComponent visible={ isSmokeVisible } videoId={props.props.executes.execute_1.videoIds.videoId2}/>
                <YoutubeComponent visible={isFlashVisible} videoId={props.props.executes.execute_1.videoIds.videoId1}/>
                <YoutubeComponent visible={isSmokeVisible && isFlashVisible} videoId={props.props.executes.execute_1.videoIds.videoId2}/>
            </div>
        </div>

    )

    /*
    return (
        <div className="flexibleDiv">
            <table>
                <tbody>
                    <tr>
                        <td>
                            <YoutubeComponent videoId={props.props.executes.execute_1.videoIds.videoId1}/>
                            <YoutubeComponent videoId={props.props.executes.execute_1.videoIds.videoId1}/>
                        </td>
                    </tr>

    
                    <ParentYoutubeComponent hidden={false} videoId1={props.props.executes.execute_1.videoIds.videoId1} videoId2={props.props.executes.execute_1.videoIds.videoId2}/>
                    <ParentYoutubeComponent videoId1={props.props.executes.execute_1.videoIds.videoId3} videoId2={props.props.executes.execute_1.videoIds.videoId4}/>
                    <ParentYoutubeComponent videoId1={props.props.executes.execute_1.videoIds.videoId5} videoId2={props.props.executes.execute_1.videoIds.videoId6}/>
                    <ParentYoutubeComponent videoId1={props.props.executes.execute_1.videoIds.videoId7} videoId2={props.props.executes.execute_1.videoIds.videoId8}/>
                    <ParentYoutubeComponent videoId1={props.props.executes.execute_1.videoIds.videoId9} videoId2={props.props.executes.execute_1.videoIds.videoId10}/>

                    <ParentYoutubeComponent videoId1={props.props.executes.execute_2.videoIds.videoId1} videoId2={props.props.executes.execute_2.videoIds.videoId2}/>
                    <ParentYoutubeComponent videoId1={props.props.executes.execute_2.videoIds.videoId3} videoId2={props.props.executes.execute_2.videoIds.videoId4}/>
                    <ParentYoutubeComponent videoId1={props.props.executes.execute_2.videoIds.videoId5} videoId2={props.props.executes.execute_2.videoIds.videoId6}/>
                    <ParentYoutubeComponent videoId1={props.props.executes.execute_2.videoIds.videoId7} videoId2={props.props.executes.execute_2.videoIds.videoId8}/>
                    <ParentYoutubeComponent videoId1={props.props.executes.execute_2.videoIds.videoId9} videoId2={props.props.executes.execute_2.videoIds.videoId10}/>

                    <ParentYoutubeComponent videoId1={props.props.executes.execute_3.videoIds.videoId1} videoId2={props.props.executes.execute_3.videoIds.videoId2}/>
                    <ParentYoutubeComponent videoId1={props.props.executes.execute_3.videoIds.videoId3} videoId2={props.props.executes.execute_3.videoIds.videoId4}/>
                    <ParentYoutubeComponent videoId1={props.props.executes.execute_3.videoIds.videoId5} videoId2={props.props.executes.execute_3.videoIds.videoId6}/>
                    <ParentYoutubeComponent videoId1={props.props.executes.execute_3.videoIds.videoId7} videoId2={props.props.executes.execute_3.videoIds.videoId8}/>
                    <ParentYoutubeComponent videoId1={props.props.executes.execute_3.videoIds.videoId9} videoId2={props.props.executes.execute_3.videoIds.videoId10}/>

                    <ParentYoutubeComponent videoId1={props.props.executes.execute_4.videoIds.videoId1} videoId2={props.props.executes.execute_4.videoIds.videoId2}/>
                    <ParentYoutubeComponent videoId1={props.props.executes.execute_4.videoIds.videoId3} videoId2={props.props.executes.execute_4.videoIds.videoId4}/>
                    <ParentYoutubeComponent videoId1={props.props.executes.execute_4.videoIds.videoId5} videoId2={props.props.executes.execute_4.videoIds.videoId6}/>
                    <ParentYoutubeComponent videoId1={props.props.executes.execute_4.videoIds.videoId7} videoId2={props.props.executes.execute_4.videoIds.videoId8}/>
                    <ParentYoutubeComponent videoId1={props.props.executes.execute_4.videoIds.videoId9} videoId2={props.props.executes.execute_4.videoIds.videoId10}/>

                    <ParentYoutubeComponent videoId1={props.props.executes.execute_5.videoIds.videoId1} videoId2={props.props.executes.execute_5.videoIds.videoId2}/>
                    <ParentYoutubeComponent videoId1={props.props.executes.execute_5.videoIds.videoId3} videoId2={props.props.executes.execute_5.videoIds.videoId4}/>
                    <ParentYoutubeComponent videoId1={props.props.executes.execute_5.videoIds.videoId5} videoId2={props.props.executes.execute_5.videoIds.videoId6}/>
                    <ParentYoutubeComponent videoId1={props.props.executes.execute_5.videoIds.videoId7} videoId2={props.props.executes.execute_5.videoIds.videoId8}/>
                    <ParentYoutubeComponent videoId1={props.props.executes.execute_5.videoIds.videoId9} videoId2={props.props.executes.execute_5.videoIds.videoId10}/>

                    <ParentYoutubeComponent videoId1={props.props.T.videoIds.videoId1} videoId2={props.props.T.videoIds.videoId2}/>
                    <ParentYoutubeComponent videoId1={props.props.T.videoIds.videoId3} videoId2={props.props.T.videoIds.videoId4}/>
                    <ParentYoutubeComponent videoId1={props.props.T.videoIds.videoId5} videoId2={props.props.T.videoIds.videoId6}/>
                    <ParentYoutubeComponent videoId1={props.props.T.videoIds.videoId7} videoId2={props.props.T.videoIds.videoId8}/>
                    <ParentYoutubeComponent videoId1={props.props.T.videoIds.videoId9} videoId2={props.props.T.videoIds.videoId10}/>
                    <ParentYoutubeComponent videoId1={props.props.T.videoIds.videoId11} videoId2={props.props.T.videoIds.videoId12}/>
                    <ParentYoutubeComponent videoId1={props.props.T.videoIds.videoId13} videoId2={props.props.T.videoIds.videoId14}/>
                    <ParentYoutubeComponent videoId1={props.props.T.videoIds.videoId15} videoId2={props.props.T.videoIds.videoId16}/>
                    <ParentYoutubeComponent videoId1={props.props.T.videoIds.videoId17} videoId2={props.props.T.videoIds.videoId18}/>
                    <ParentYoutubeComponent videoId1={props.props.T.videoIds.videoId19} videoId2={props.props.T.videoIds.videoId20}/>
                    <ParentYoutubeComponent videoId1={props.props.T.videoIds.videoId21} videoId2={props.props.T.videoIds.videoId22}/>
                    <ParentYoutubeComponent videoId1={props.props.T.videoIds.videoId23} videoId2={props.props.T.videoIds.videoId24}/>
                    <ParentYoutubeComponent videoId1={props.props.T.videoIds.videoId25} videoId2={props.props.T.videoIds.videoId26}/>
                    <ParentYoutubeComponent videoId1={props.props.T.videoIds.videoId27} videoId2={props.props.T.videoIds.videoId28}/>
                    <ParentYoutubeComponent videoId1={props.props.T.videoIds.videoId29} videoId2={props.props.T.videoIds.videoId30}/>


                    <ParentYoutubeComponent videoId1={props.props.CT.videoIds.videoId1} videoId2={props.props.CT.videoIds.videoId2}/>
                    <ParentYoutubeComponent videoId1={props.props.CT.videoIds.videoId3} videoId2={props.props.CT.videoIds.videoId4}/>
                    <ParentYoutubeComponent videoId1={props.props.CT.videoIds.videoId5} videoId2={props.props.CT.videoIds.videoId6}/>
                    <ParentYoutubeComponent videoId1={props.props.CT.videoIds.videoId7} videoId2={props.props.CT.videoIds.videoId8}/>
                    <ParentYoutubeComponent videoId1={props.props.CT.videoIds.videoId9} videoId2={props.props.CT.videoIds.videoId10}/>
                    <ParentYoutubeComponent videoId1={props.props.CT.videoIds.videoId11} videoId2={props.props.CT.videoIds.videoId12}/>
                    <ParentYoutubeComponent videoId1={props.props.CT.videoIds.videoId13} videoId2={props.props.CT.videoIds.videoId14}/>
                    <ParentYoutubeComponent videoId1={props.props.CT.videoIds.videoId15} videoId2={props.props.CT.videoIds.videoId16}/>
                    <ParentYoutubeComponent videoId1={props.props.CT.videoIds.videoId17} videoId2={props.props.CT.videoIds.videoId18}/>
                    <ParentYoutubeComponent videoId1={props.props.CT.videoIds.videoId19} videoId2={props.props.CT.videoIds.videoId20}/>
                    <ParentYoutubeComponent videoId1={props.props.CT.videoIds.videoId21} videoId2={props.props.CT.videoIds.videoId22}/>
                    <ParentYoutubeComponent videoId1={props.props.CT.videoIds.videoId23} videoId2={props.props.CT.videoIds.videoId24}/>
                    <ParentYoutubeComponent videoId1={props.props.CT.videoIds.videoId25} videoId2={props.props.CT.videoIds.videoId26}/>
                    <ParentYoutubeComponent videoId1={props.props.CT.videoIds.videoId27} videoId2={props.props.CT.videoIds.videoId28}/>
                    <ParentYoutubeComponent videoId1={props.props.CT.videoIds.videoId29} videoId2={props.props.CT.videoIds.videoId30}/>
                </tbody>
            </table>
        </div>
    )

     */
}

export default ContentGrid;