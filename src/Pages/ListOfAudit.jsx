import React from 'react';
import ReusableTable from '../Components/common/ReusableTable';
 
const ListOfAudit = () => {
    const tableData = [
        ['John', 'Doe', 'john@example.com'],
        ['Jane', 'Smith', 'jane@example.com'],
        // ... more data
    ];

    const tableColumns = ['First Name', 'Last Name', 'Email'];

    return (
        <div>
            <h2>My Data Table</h2>
            <ReusableTable data={tableData} columns={tableColumns} />
        </div>
    );
};

export default ListOfAudit;
