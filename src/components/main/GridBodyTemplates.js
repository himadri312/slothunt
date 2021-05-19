import React from 'react';
import { Badge } from 'primereact/badge'

const nameBodyTemplate = (rowData) => {
    return (
        <React.Fragment>
            <h3 className="nameColumn p-m-0 p-p-0">
                {rowData.name}, {rowData.district_name}</h3>
                <br/>
                <h5 className="p-m-0 p-p-0" style={{color: 'blue'}}>
                    <i className="pi pi-map-marker"/>
                    <span className="p-ml-1">{rowData.address}, {rowData.district_name}</span>
                </h5>
        </React.Fragment>
    )
};

const pincodeBodyTemplate = (rowData) => {
    return (
        <React.Fragment>
            <span className="p-column-title">District</span>
            <span className="image-text">{rowData.pincode}</span>
        </React.Fragment>
    );
};

const doseBodyTemplate = (rowData) => {
    return (
        <React.Fragment>
            <span className="p-column-title">Dose (Slots)</span>
            <span className="image-text">{rowData.dose}</span>
            <Badge value={rowData.doseCapacity} severity="success" className="p-ml-2"/>
        </React.Fragment>
    );
};

const feeTypeBodyTemplate = (rowData) => {
    return (
        <React.Fragment>
            <span className="p-column-title">Fee (Price)</span>
            <span className="image-text">{rowData.fee_type}</span>
            {rowData.fee_type === 'Paid' && <Badge value={rowData.fee} severity="danger" className="p-ml-2"/>}
        </React.Fragment>
    );
};

const ageLimitBodyTemplate = (rowData) => {
    return (
        <React.Fragment>
            <span className="p-column-title">Age</span>
            <span className="image-text">{rowData.age}</span>
        </React.Fragment>
    );
};

const vaccineTypeBodyTemplate = (rowData) => {
    return (
        <React.Fragment>
            <span className="p-column-title">Vaccine</span>
            <span className="image-text">{rowData.vaccine}</span>
        </React.Fragment>
    );
};

const dateBodyTemplate = (rowData) => {
    return (
        <React.Fragment>
            <span className="p-column-title">Date</span>
            <span>{rowData.date}</span>
        </React.Fragment>
    );
};

export { nameBodyTemplate, pincodeBodyTemplate, dateBodyTemplate, doseBodyTemplate, feeTypeBodyTemplate, ageLimitBodyTemplate, vaccineTypeBodyTemplate }