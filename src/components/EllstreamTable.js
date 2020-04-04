import React from 'react'
import { Table } from "react-bootstrap";
import { FaAngleDown } from 'react-icons/fa';
import YoutubeComponent from "./YoutubeComponent";

class EllstreamTable extends React.Component {
    constructor() {
        super();

        this.state = {
            data : [
                {
                    id : 1,
                    name : "Executes",
                },
                {
                    id : 2,
                    name : "T"
                },
                {
                    id : 3,
                    name : "CT"
                },
            ],
            expandedRows : []
        };
    }

    handleRowClick(rowId) {
        const currentExpandedRows = this.state.expandedRows;
        const isRowCurrentlyExpanded = currentExpandedRows.includes(rowId);

        const newExpandedRows = isRowCurrentlyExpanded ?
            currentExpandedRows.filter(id => id !== rowId) :
            currentExpandedRows.concat(rowId);

        this.setState({expandedRows : newExpandedRows});
    }

    renderItem(item) {
        const clickCallback = () => this.handleRowClick(item.id);
        const itemRows = [
            <tr onClick={clickCallback} key={"row-data-" + item.id}>
                <td>
                    <FaAngleDown size='1.5rem'/>
                    {item.name}
                </td>
            </tr>
        ];

        if(this.state.expandedRows.includes(item.id)) {
            itemRows.push(
                <tr key={"row-expanded-" + item.id}>
                    <td>
                        <tr>
                            <td>
                                <YoutubeComponent/>
                            </td>
                            <td>
                                <YoutubeComponent/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <YoutubeComponent/>
                            </td>
                        </tr>
                    </td>
                </tr>
            );
        }

        return itemRows;
    }

    render() {
        let allItemRows = [];

        this.state.data.forEach(item => {
            const perItemRows = this.renderItem(item);
            allItemRows = allItemRows.concat(perItemRows);
        });

        return (
            <div class="flexibleDiv">
                <Table striped bordered hover variant="dark">
                    {allItemRows}
                </Table>
            </div>
        );
    }
}

export default EllstreamTable;

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