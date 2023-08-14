import React from 'react';
import Table from 'react-bootstrap/Table';

const ReusableTable = ({ data, columns }) => {
    return (
        <Table bordered hover >
            <thead>
                <tr>
                    {columns.map((column, index) => (
                        <th key={index}>{column}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data?.map((row, rowIndex) => (
                    <tr key={rowIndex} style={{ backgroundColor: rowIndex % 2 === 0 ? 'rgba(0,203,215,0.10)' : '' }}>
                        {row?.map((cell, cellIndex) => (
                            <td key={cellIndex}>{cell}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default ReusableTable;
