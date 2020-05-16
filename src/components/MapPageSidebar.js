import React, { useContext } from 'react'
import FilterImage from "./FilterImage";
import CTSrc from "../images/ct.png";
import TSrc from "../images/t.png";
import StratSrc from "../images/strats.png";
import SmokeSrc from "../images/smoke.PNG";
import FlashSrc from "../images/flash.PNG";
import MolotovSrc from "../images/molotov.jpg";
import GrenadeSrc from "../images/grenade.PNG";
import { FilterContext } from "./FilterContext";
import { Checkbox } from "semantic-ui-react";
import { LocationConfig} from "../configurations/LocationConfig";
import {VideoConfig} from "../configurations/VideoConfig";


const MapPageSidebar = (props) => {

    /*
    Modal code, can be useful for showing calls
            <button onClick={() => setModalIsOpen(true)}>Open modal</button>

            <Modal
                isOpen={modalIsOpen}
                shouldCloseOnOverlayClick={false}
                onRequestClose={() => setModalIsOpen(false)}
                style={
                    {
                        overlay: {
                            backgroundColor: 'grey'
                        },
                        content: {
                            color: 'orange'
                        }
                    }
                }
            >

            <button onClick={() => setModalIsOpen(false)}>Close</button>
                        </Modal>
     */

    const locationConfig = LocationConfig;

    const {
        setSmokeVisible,
        setFlashVisible,
        setMolotovVisible,
        setGrenadeVisible,
        setCTVisible,
        setTVisible,
        setStratVisible,
        setAVisible,
        setMidVisible,
        setBVisible,
        setYardVisible,
        setRampVisible,
        setVentVisible
    } = useContext(FilterContext);

    return (
        <div className="sideBar">
            <table>
                <tbody>
                    <tr>
                        <td><FilterImage imageSrc={SmokeSrc} imageAlt="Smoke"/></td>
                        <td><h3>Smoke</h3></td>
                        <td className="paddingLeft">
                            <Checkbox
                                toggle
                                onChange={(formEvent, checkBoxProps)=> setSmokeVisible(checkBoxProps.checked)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td><FilterImage imageSrc={FlashSrc} imageAlt="Flash"/></td>
                        <td><h3>Flash</h3></td>
                        <td className="paddingLeft">
                            <Checkbox
                                toggle
                                onChange={(formEvent, checkBoxProps)=> setFlashVisible(checkBoxProps.checked)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td><FilterImage imageSrc={MolotovSrc} imageAlt="Molotov"/></td>
                        <td><h3>Molotov</h3></td>
                        <td className="paddingLeft">
                            <Checkbox
                                toggle
                                onChange={(formEvent, checkBoxProps)=> setMolotovVisible(checkBoxProps.checked)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td><FilterImage imageSrc={GrenadeSrc} imageAlt="Grenade"/></td>
                        <td><h3>Grenade</h3></td>
                        <td className="paddingLeft">
                            <Checkbox
                                toggle
                                onChange={(formEvent, checkBoxProps)=> setGrenadeVisible(checkBoxProps.checked)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td><FilterImage imageSrc={StratSrc} imageAlt="Strat"/></td>
                        <td><h3>Strat</h3></td>
                        <td className="paddingLeft">
                            <Checkbox
                                toggle
                                onChange={(formEvent, checkBoxProps)=> setStratVisible(checkBoxProps.checked)}
                            />
                        </td>
                    </tr>
                    <br/><br/>
                    <tr>
                        <td><FilterImage imageSrc={CTSrc} imageAlt="CT"/></td>
                        <td><h3>CT</h3></td>
                        <td className="paddingLeft">
                            <Checkbox
                                toggle
                                onChange={(formEvent, checkBoxProps)=> setCTVisible(checkBoxProps.checked)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td><FilterImage imageSrc={TSrc} imageAlt="T"/></td>
                        <td><h3>T</h3></td>
                        <td className="paddingLeft">
                            <Checkbox
                                toggle
                                onChange={(formEvent, checkBoxProps)=> setTVisible(checkBoxProps.checked)}
                            />
                        </td>
                    </tr>
                    <br/><br/>
                    <tr>
                        <td></td>
                        <td><h3>A</h3></td>
                        <td className="paddingLeft">
                            <Checkbox
                                toggle
                                onChange={(formEvent, checkBoxProps)=> setAVisible(checkBoxProps.checked)}
                            />
                        </td>
                    </tr>
                    {locationConfig.maps[props.mapName].locationMidExists &&
                        <tr>
                            <td></td>
                            <td><h3>Mid</h3></td>
                            <td className="paddingLeft">
                                <Checkbox
                                    toggle
                                    onChange={(formEvent, checkBoxProps) => setMidVisible(checkBoxProps.checked)}
                                />
                            </td>
                        </tr>
                    }
                    {locationConfig.maps[props.mapName].locationBExists &&
                        <tr>
                            <td></td>
                            <td><h3>B</h3></td>
                            <td className="paddingLeft">
                                <Checkbox
                                    toggle
                                    onChange={(formEvent, checkBoxProps) => setBVisible(checkBoxProps.checked)}
                                />
                            </td>
                        </tr>
                    }
                    {locationConfig.maps[props.mapName].locationYardExists &&
                        <tr>
                            <td></td>
                            <td><h3>Yard</h3></td>
                            <td className="paddingLeft">
                                <Checkbox
                                    toggle
                                    onChange={(formEvent, checkBoxProps)=> setYardVisible(checkBoxProps.checked)}
                                />
                            </td>
                        </tr>
                    }
                    {locationConfig.maps[props.mapName].locationRampExists &&
                        <tr>
                            <td></td>
                            <td><h3>Ramp</h3></td>
                            <td className="paddingLeft">
                                <Checkbox
                                    toggle
                                    onChange={(formEvent, checkBoxProps) => setRampVisible(checkBoxProps.checked)}
                                />
                            </td>
                        </tr>
                    }
                    {locationConfig.maps[props.mapName].locationVentExists &&
                        <tr>
                            <td></td>
                            <td><h3>Vent</h3></td>
                            <td className="paddingLeft">
                                <Checkbox
                                    toggle
                                    onChange={(formEvent, checkBoxProps) => setVentVisible(checkBoxProps.checked)}
                                />
                            </td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    )
}

export default MapPageSidebar
