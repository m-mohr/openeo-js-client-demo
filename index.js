import { OpenEO } from '@openeo/js-client';

OpenEO.connect('https://earthengine.openeo.org/v1.0')
    .then(connection => {
        console.log(
            'Connected to Google Earth Engine OpenEO backend version: ',
            connection.capabilities().toJSON()
        );
    })
    .catch(error => {
        console.error(
            'Connection to Google Earth Engine OpenEO backend failed',
            error
        );
    });