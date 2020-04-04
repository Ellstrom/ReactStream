import React from 'react'
import { Table } from "react-bootstrap";
import { FaAngleDown } from 'react-icons/fa';

const Tmp = (props) => {
    return (
        <div class="flexibleDiv">
            <Table striped bordered hover variant="dark">
                <tbody>
                <tr>
                    <td>
                        <FaAngleDown size='1.5rem'/>
                        Executes
                    </td>
                </tr>
                <tr>
                    <td>
                        <FaAngleDown size='1.5rem'/>
                        T
                    </td>
                </tr>
                <tr>
                    <td>
                        <FaAngleDown size='1.5rem'/>
                        CT
                    </td>
                </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default Tmp;