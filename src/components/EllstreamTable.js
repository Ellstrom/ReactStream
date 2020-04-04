import React from 'react'
import { Table } from "react-bootstrap";
import { FaAngleDown } from 'react-icons/fa';
import YoutubeComponent from "./YoutubeComponent";

class EllstreamTable extends React.Component {
    constructor() {
        super()
        this.state = {
            data_executes : {
                id : 1,
                name : "Executes",
                isExpanded : false
            },
            data_t : {
                id : 2,
                name : "T",
                isExpanded : false
            },
            data_ct : {
                id : 3,
                name : "CT",
                isExpanded : false
            },
            data_execute_a : {
                id : 11,
                name : "A",
                isExpanded : false
            },
            data_execute_b : {
                id : 12,
                name : "B",
                isExpanded : false
            }
        }
    }

    handleRowClick(rowId) {
        console.log("inside handleRowClick, rowId=", rowId)

        if(rowId === this.state.data_executes.id){
            this.setState(
                {
                    data_executes : {
                        id : this.state.data_executes.id,
                        name : this.state.data_executes.name,
                        isExpanded : !this.state.data_executes.isExpanded
                    },
                    data_execute_a : {
                        id : this.state.data_execute_a.id,
                        name : this.state.data_execute_a.name,
                        isExpanded : false
                    },
                    data_execute_b : {
                        id : this.state.data_execute_b.id,
                        name : this.state.data_execute_b.name,
                        isExpanded : false
                    }
                },
                () => {
                    console.log("Callback value", this.state.data_executes)
                }
            )
        }else if(rowId === this.state.data_t.id){
            this.setState(
                {
                    data_t : {
                        id : this.state.data_t.id,
                        name : this.state.data_t.name,
                        isExpanded : !this.state.data_t.isExpanded
                    }
                },
                () => {
                    console.log("Callback value", this.state.data_t)
                }
            )
        }else if(rowId === this.state.data_ct.id){
            this.setState(
                {
                    data_ct : {
                        id : this.state.data_ct.id,
                        name : this.state.data_ct.name,
                        isExpanded : !this.state.data_ct.isExpanded
                    }
                },
                () => {
                    console.log("Callback value", this.state.data_ct)
                }
            )
        }else if(rowId === this.state.data_execute_a.id){
            this.setState(
                {
                    data_execute_a : {
                        id : this.state.data_execute_a.id,
                        name : this.state.data_execute_a.name,
                        isExpanded : !this.state.data_execute_a.isExpanded
                    }
                },
                () => {
                    console.log("Callback value", this.state.data_execute_a)
                }
            )
        }else if(rowId === this.state.data_execute_b.id){
            this.setState(
                {
                    data_execute_b : {
                        id : this.state.data_execute_b.id,
                        name : this.state.data_execute_b.name,
                        isExpanded : !this.state.data_execute_b.isExpanded
                    }
                },
                () => {
                    console.log("Callback value", this.state.data_execute_b)
                }
            )
        }
    }

    disablePropagation(event) {
        event.stopPropagation()
    }




    render() {
        return (
            <div className="flexibleDiv">
                <Table striped bordered hover variant="dark">
                    <tbody>
                        <tr onClick={() => this.handleRowClick(1)}>
                            <td>
                                <FaAngleDown size='1.5rem'/>
                                {this.state.data_executes.name}
                                {this.state.data_executes.isExpanded === true &&
                                    <div onClick={this.disablePropagation}>
                                        <table>
                                            <tbody>
                                            <tr onClick={() => this.handleRowClick(11)}>
                                                <td>
                                                    <FaAngleDown size='1.5rem'/>
                                                    {this.state.data_execute_a.name}
                                                </td>
                                                {this.state.data_execute_a.isExpanded === true &&
                                                <td>
                                                    <YoutubeComponent/>
                                                </td>
                                                }
                                            </tr>
                                            <tr onClick={() => this.handleRowClick(12)}>
                                                <td>
                                                    <FaAngleDown size='1.5rem'/>
                                                    {this.state.data_execute_b.name}
                                                </td>
                                                {this.state.data_execute_b.isExpanded === true &&
                                                <td>
                                                    <YoutubeComponent/>
                                                </td>
                                                }
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                }
                            </td>
                        </tr>
                        <tr onClick={() => this.handleRowClick(2)}>
                            <td>
                                <FaAngleDown size='1.5rem'/>
                                {this.state.data_t.name}
                                {this.state.data_t.isExpanded === true &&
                                <div onClick={this.disablePropagation}>
                                    <td>
                                        <YoutubeComponent/>
                                    </td>
                                </div>
                                }
                            </td>
                        </tr>
                        <tr onClick={() => this.handleRowClick(3)}>
                            <td>
                                <FaAngleDown size='1.5rem'/>
                                {this.state.data_ct.name}
                                {this.state.data_ct.isExpanded === true &&
                                <div onClick={this.disablePropagation}>
                                    <td>
                                        <YoutubeComponent/>
                                    </td>
                                </div>
                                }
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default EllstreamTable;

/*
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
 */


/*

import React from 'react'
import { Table } from "react-bootstrap";
import { FaAngleDown } from 'react-icons/fa';

const EllstreamTable = (props) => {
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

export default EllstreamTable;
 */