import React, {useState} from 'react'
import ToggleCheckbox from "./ToggleCheckbox"
import FilterImage from "./FilterImage";
import {Col, Container, Row} from "react-bootstrap"
import CTSrc from "../images/ct.png";
import TSrc from "../images/t.png";
import StratSrc from "../images/strats.png";
import SmokeSrc from "../images/smoke.PNG";
import FlashSrc from "../images/flash.PNG";
import MolotovSrc from "../images/molotov.jpg";
import GrenadeSrc from "../images/grenade.PNG";


const MapPageSidebar = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false)

    /*
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
    return (
        <div className="roundedBorder">
            <table>
                <tbody>
                    <tr>
                        <td><FilterImage imageSrc={SmokeSrc} imageAlt="Smoke"/></td>
                        <td><h3>Smoke</h3></td>
                        <td className="paddingLeft"><ToggleCheckbox/></td>
                    </tr>
                    <tr>
                        <td><FilterImage imageSrc={FlashSrc} imageAlt="Flash"/></td>
                        <td><h3>Flash</h3></td>
                        <td className="paddingLeft"><ToggleCheckbox/></td>
                    </tr>
                    <tr>
                        <td><FilterImage imageSrc={MolotovSrc} imageAlt="Molotov"/></td>
                        <td><h3>Molotov</h3></td>
                        <td className="paddingLeft"><ToggleCheckbox/></td>
                    </tr>
                    <tr>
                        <td><FilterImage imageSrc={GrenadeSrc} imageAlt="Grenade"/></td>
                        <td><h3>Grenade</h3></td>
                        <td className="paddingLeft"><ToggleCheckbox/></td>
                    </tr>
                    <br/><br/>
                    <tr>
                        <td><FilterImage imageSrc={CTSrc} imageAlt="CT"/></td>
                        <td><h3>CT</h3></td>
                        <td className="paddingLeft"><ToggleCheckbox/></td>
                    </tr>
                    <tr>
                        <td><FilterImage imageSrc={TSrc} imageAlt="T"/></td>
                        <td><h3>T</h3></td>
                        <td className="paddingLeft"><ToggleCheckbox/></td>
                    </tr>
                    <tr>
                        <td><FilterImage imageSrc={StratSrc} imageAlt="Strat"/></td>
                        <td><h3>Strats</h3></td>
                        <td className="paddingLeft"><ToggleCheckbox/></td>
                    </tr>
                    <br/><br/>
                    <tr>
                        <td></td>
                        <td><h3>A</h3></td>
                        <td className="paddingLeft"><ToggleCheckbox/></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><h3>Mid</h3></td>
                        <td className="paddingLeft"><ToggleCheckbox/></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><h3>B</h3></td>
                        <td className="paddingLeft"><ToggleCheckbox/></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default MapPageSidebar
