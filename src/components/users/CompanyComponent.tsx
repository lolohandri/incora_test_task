import React, {FC} from 'react';
import {Company} from "../../models/users/Company";

const CompanyComponent: FC<Company> = (company) => {
    return (
        <div className="flex flex-col p-1">
            {
                Object.keys(company).map((key)  => {
                    return (
                        <span key={key}>
                            <strong>
                                {key.toUpperCase()}:&nbsp;
                            </strong>
                            {company[key]}
                        </span>
                    )
                })
            }
        </div>
    );
};

export default CompanyComponent;
