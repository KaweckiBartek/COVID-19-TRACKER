import React from 'react';
import Card from "@material-ui/core/Card";
import {CardContent, Typography} from "@material-ui/core";

function InfoBox ({ title, cases, total}) {
    return (
        <Card>
            <CardContent>
                {/*Title*/}
                <Typography className="infoBox__title" color="textSecondary">
                    {title}
                </Typography>

                {/*+20k Number of cases*/}
                <h2 className="ingoBox__cases">{cases}</h2>

                {/*1.2M Total*/}
                <Typography className="infoBox__total">
                    {total} Total
                </Typography>
            </CardContent>
        </Card>
    );
}


export default InfoBox;