import React, { useContext } from 'react';
import Table from 'react-bootstrap/Table';
import { ThemeContext } from '../../App';

const ReusableTable = ({ data, columns }) => {
    const { theme } = useContext(ThemeContext);
    return (
        <Table className={`mt-3 text-center ${theme === "dark" ? "dark-table" : ""}`}>
            <thead>
                <tr>
                    {columns.map((column, index) => (
                        <th key={index}>{column}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, rowIndex) => (
                    <tr key={rowIndex} style={{ backgroundColor: rowIndex % 2 === 0 ? 'rgba(0,203,215,0.10)' : '' }}>
                        {row.map((cell, cellIndex) => (
                            <td key={cellIndex}>{cell}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default ReusableTable;
