import React from 'react'
import { Table } from "react-bootstrap";
import { FaAngleDown, FaAngleUp} from 'react-icons/fa';
import YoutubeComponent from "./YoutubeComponent";
import ParentYoutubeComponent from "./ParentYoutubeComponent";

class EllstreamTable extends React.Component {

    constructor(props) {
        super(props)
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
            data_execute_1 : {
                id : 11,
                name : props.props.executes.execute_1.name,
                isExpanded : false
            },
            data_execute_2 : {
                id : 12,
                name : props.props.executes.execute_2.name,
                isExpanded : false
            },
            data_execute_3 : {
                id : 13,
                name : props.props.executes.execute_3.name,
                isExpanded : false
            },
            data_execute_4 : {
                id : 14,
                name : props.props.executes.execute_4.name,
                isExpanded : false
            },
            data_execute_5 : {
                id : 15,
                name : props.props.executes.execute_5.name,
                isExpanded : false
            }
        }
    }

    handleRowClick(rowId) {
        if(rowId === this.state.data_executes.id){
            this.setState(
                {
                    data_executes : {
                        id : this.state.data_executes.id,
                        name : this.state.data_executes.name,
                        isExpanded : !this.state.data_executes.isExpanded
                    },
                    data_execute_1 : {
                        id : this.state.data_execute_1.id,
                        name : this.state.data_execute_1.name,
                        isExpanded : false
                    },
                    data_execute_2 : {
                        id : this.state.data_execute_2.id,
                        name : this.state.data_execute_2.name,
                        isExpanded : false
                    }
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
                }
            )
        }else if(rowId === this.state.data_execute_1.id){
            this.setState(
                {
                    data_execute_1 : {
                        id : this.state.data_execute_1.id,
                        name : this.state.data_execute_1.name,
                        isExpanded : !this.state.data_execute_1.isExpanded
                    }
                }
            )
        }else if(rowId === this.state.data_execute_2.id){
            this.setState(
                {
                    data_execute_2 : {
                        id : this.state.data_execute_2.id,
                        name : this.state.data_execute_2.name,
                        isExpanded : !this.state.data_execute_2.isExpanded
                    }
                }
            )
        }else if(rowId === this.state.data_execute_3.id){
            this.setState(
                {
                    data_execute_3 : {
                        id : this.state.data_execute_3.id,
                        name : this.state.data_execute_3.name,
                        isExpanded : !this.state.data_execute_3.isExpanded
                    }
                }
            )
        }else if(rowId === this.state.data_execute_4.id){
            this.setState(
                {
                    data_execute_4 : {
                        id : this.state.data_execute_4.id,
                        name : this.state.data_execute_4.name,
                        isExpanded : !this.state.data_execute_4.isExpanded
                    }
                }
            )
        }else if(rowId === this.state.data_execute_5.id){
            this.setState(
                {
                    data_execute_5 : {
                        id : this.state.data_execute_5.id,
                        name : this.state.data_execute_5.name,
                        isExpanded : !this.state.data_execute_5.isExpanded
                    }
                }
            )
        }
    }

    //Prevent parent row from being clicked when child row is clicked
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
                                {this.state.data_executes.isExpanded ? (
                                    <FaAngleUp size='1.5rem'/>
                                ) : (
                                    <FaAngleDown size='1.5rem'/>
                                )}
                                {this.state.data_executes.name}
                                {this.state.data_executes.isExpanded &&
                                    <div onClick={this.disablePropagation}>
                                        <table>
                                            <tbody>
                                                {this.state.data_execute_1.name !== "hidden" &&
                                                <tr onClick={() => this.handleRowClick(11)}>
                                                    <td>
                                                        {this.state.data_execute_1.isExpanded ? (
                                                            <FaAngleUp size='1.5rem'/>
                                                        ) : (
                                                            <FaAngleDown size='1.5rem'/>
                                                        )}
                                                        {this.state.data_execute_1.name}
                                                    </td>
                                                    {this.state.data_execute_1.isExpanded &&
                                                    <td>
                                                        <div>
                                                            <table>
                                                                <tbody>
                                                                    <ParentYoutubeComponent videoId1={this.props.props.executes.execute_1.videoIds.videoId1} videoId2={this.props.props.executes.execute_1.videoIds.videoId2}/>
                                                                    <ParentYoutubeComponent videoId1={this.props.props.executes.execute_1.videoIds.videoId3} videoId2={this.props.props.executes.execute_1.videoIds.videoId4}/>
                                                                    <ParentYoutubeComponent videoId1={this.props.props.executes.execute_1.videoIds.videoId5} videoId2={this.props.props.executes.execute_1.videoIds.videoId6}/>
                                                                    <ParentYoutubeComponent videoId1={this.props.props.executes.execute_1.videoIds.videoId7} videoId2={this.props.props.executes.execute_1.videoIds.videoId8}/>
                                                                    <ParentYoutubeComponent videoId1={this.props.props.executes.execute_1.videoIds.videoId9} videoId2={this.props.props.executes.execute_1.videoIds.videoId10}/>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </td>
                                                    }
                                                </tr>
                                                }
                                                {this.state.data_execute_2.name !== "hidden" &&
                                                <tr onClick={() => this.handleRowClick(12)}>
                                                    <td>
                                                        {this.state.data_execute_2.isExpanded ? (
                                                            <FaAngleUp size='1.5rem'/>
                                                        ) : (
                                                            <FaAngleDown size='1.5rem'/>
                                                        )}
                                                        {this.state.data_execute_2.name}
                                                    </td>
                                                    {this.state.data_execute_2.isExpanded &&
                                                    <td>
                                                        <div>
                                                            <table>
                                                                <tbody>
                                                                <ParentYoutubeComponent videoId1="-8pgTeBCms4" videoId2="-8pgTeBCms4"/>
                                                                <ParentYoutubeComponent videoId1="-8pgTeBCms4" videoId2="hidden"/>
                                                                <ParentYoutubeComponent videoId1="hidden" videoId2="hidden"/>
                                                                <ParentYoutubeComponent videoId1="hidden" videoId2="hidden"/>
                                                                <ParentYoutubeComponent videoId1="hidden" videoId2="hidden"/>
                                                                <ParentYoutubeComponent videoId1="hidden" videoId2="hidden"/>
                                                                <ParentYoutubeComponent videoId1="hidden" videoId2="hidden"/>
                                                                <ParentYoutubeComponent videoId1="hidden" videoId2="hidden"/>
                                                                <ParentYoutubeComponent videoId1="hidden" videoId2="hidden"/>
                                                                <ParentYoutubeComponent videoId1="hidden" videoId2="hidden"/>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </td>
                                                    }
                                                </tr>
                                                }
                                                {this.state.data_execute_3.name !== "hidden" &&
                                                    <tr onClick={() => this.handleRowClick(13)}>
                                                        <td>
                                                            {this.state.data_execute_3.isExpanded ? (
                                                                <FaAngleUp size='1.5rem'/>
                                                            ) : (
                                                                <FaAngleDown size='1.5rem'/>
                                                            )}
                                                            {this.state.data_execute_3.name}
                                                        </td>
                                                        {this.state.data_execute_3.isExpanded &&
                                                        <td>
                                                            <div>
                                                                <table>
                                                                    <tbody>
                                                                    <ParentYoutubeComponent videoId1="-8pgTeBCms4" videoId2="-8pgTeBCms4"/>
                                                                    <ParentYoutubeComponent videoId1="-8pgTeBCms4" videoId2="hidden"/>
                                                                    <ParentYoutubeComponent videoId1="hidden" videoId2="hidden"/>
                                                                    <ParentYoutubeComponent videoId1="hidden" videoId2="hidden"/>
                                                                    <ParentYoutubeComponent videoId1="hidden" videoId2="hidden"/>
                                                                    <ParentYoutubeComponent videoId1="hidden" videoId2="hidden"/>
                                                                    <ParentYoutubeComponent videoId1="hidden" videoId2="hidden"/>
                                                                    <ParentYoutubeComponent videoId1="hidden" videoId2="hidden"/>
                                                                    <ParentYoutubeComponent videoId1="hidden" videoId2="hidden"/>
                                                                    <ParentYoutubeComponent videoId1="hidden" videoId2="hidden"/>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </td>
                                                        }
                                                    </tr>
                                                }
                                                {this.state.data_execute_4.name !== "hidden" &&
                                                    <tr onClick={() => this.handleRowClick(14)}>
                                                        <td>
                                                            {this.state.data_execute_4.isExpanded ? (
                                                                <FaAngleUp size='1.5rem'/>
                                                            ) : (
                                                                <FaAngleDown size='1.5rem'/>
                                                            )}
                                                            {this.state.data_execute_4.name}
                                                        </td>
                                                        {this.state.data_execute_4.isExpanded &&
                                                        <td>
                                                            <div>
                                                                <table>
                                                                    <tbody>
                                                                    <ParentYoutubeComponent videoId1="-8pgTeBCms4" videoId2="-8pgTeBCms4"/>
                                                                    <ParentYoutubeComponent videoId1="-8pgTeBCms4" videoId2="hidden"/>
                                                                    <ParentYoutubeComponent videoId1="hidden" videoId2="hidden"/>
                                                                    <ParentYoutubeComponent videoId1="hidden" videoId2="hidden"/>
                                                                    <ParentYoutubeComponent videoId1="hidden" videoId2="hidden"/>
                                                                    <ParentYoutubeComponent videoId1="hidden" videoId2="hidden"/>
                                                                    <ParentYoutubeComponent videoId1="hidden" videoId2="hidden"/>
                                                                    <ParentYoutubeComponent videoId1="hidden" videoId2="hidden"/>
                                                                    <ParentYoutubeComponent videoId1="hidden" videoId2="hidden"/>
                                                                    <ParentYoutubeComponent videoId1="hidden" videoId2="hidden"/>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </td>
                                                        }
                                                    </tr>
                                                }
                                                {this.state.data_execute_5.name !== "hidden" &&
                                                <tr onClick={() => this.handleRowClick(15)}>
                                                    <td>
                                                        {this.state.data_execute_5.isExpanded ? (
                                                            <FaAngleUp size='1.5rem'/>
                                                        ) : (
                                                            <FaAngleDown size='1.5rem'/>
                                                        )}
                                                        {this.state.data_execute_5.name}
                                                    </td>
                                                    {this.state.data_execute_5.isExpanded &&
                                                    <td>
                                                        <div>
                                                            <table>
                                                                <tbody>
                                                                <ParentYoutubeComponent videoId1="-8pgTeBCms4" videoId2="-8pgTeBCms4"/>
                                                                <ParentYoutubeComponent videoId1="-8pgTeBCms4" videoId2="hidden"/>
                                                                <ParentYoutubeComponent videoId1="hidden" videoId2="hidden"/>
                                                                <ParentYoutubeComponent videoId1="hidden" videoId2="hidden"/>
                                                                <ParentYoutubeComponent videoId1="hidden" videoId2="hidden"/>
                                                                <ParentYoutubeComponent videoId1="hidden" videoId2="hidden"/>
                                                                <ParentYoutubeComponent videoId1="hidden" videoId2="hidden"/>
                                                                <ParentYoutubeComponent videoId1="hidden" videoId2="hidden"/>
                                                                <ParentYoutubeComponent videoId1="hidden" videoId2="hidden"/>
                                                                <ParentYoutubeComponent videoId1="hidden" videoId2="hidden"/>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </td>
                                                    }
                                                </tr>
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                }
                            </td>
                        </tr>
                        <tr onClick={() => this.handleRowClick(2)}>
                            <td>
                                {this.state.data_t.isExpanded ? (
                                    <FaAngleUp size='1.5rem'/>
                                ) : (
                                    <FaAngleDown size='1.5rem'/>
                                )}
                                {this.state.data_t.name}
                                {this.state.data_t.isExpanded &&
                                <div onClick={this.disablePropagation}>
                                    <YoutubeComponent/>
                                </div>
                                }
                            </td>
                        </tr>
                        <tr onClick={() => this.handleRowClick(3)}>
                            <td>
                                {this.state.data_t.isExpanded ? (
                                    <FaAngleUp size='1.5rem'/>
                                ) : (
                                    <FaAngleDown size='1.5rem'/>
                                )}
                                {this.state.data_ct.name}
                                {this.state.data_ct.isExpanded &&
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