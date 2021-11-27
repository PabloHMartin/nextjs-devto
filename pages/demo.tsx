import {AgGridColumn, AgGridReact} from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { AgChartsReact } from 'ag-charts-react';

const DemoPage = () => {

    
    const rowData =  [
        {
            "skuid": 12979917,
            "barcode": "888951027402",
            "unit": 5
        },
        {
            "skuid": 12979918,
            "barcode": "888951027389",
            "unit": 18
        },
        {
            "skuid": 12979919,
            "barcode": "888951027372",
            "unit": 7
        },
        {
            "skuid": 12979920,
            "barcode": "888951027396",
            "unit": 7
        },
        {
            "skuid": 12979923,
            "barcode": "888951027327",
            "unit": 11
        },
        {
            "skuid": 12979924,
            "barcode": "888951027334",
            "unit": 2
        },
        {
            "skuid": 12979925,
            "barcode": "888951027365",
            "unit": 1
        }
    ];
    const options = {
        data: rowData,
        series: [{
            type: 'column',
            xKey: 'skuid',
            yKeys: ['unit'],
        }],
    }
    const optionsPie = {
        autoSize: true,
        data: rowData,
        series: [{
            type: 'pie',
            innerRadiusOffset: -100,
            labelKey: 'skuid',
            angleKey: 'unit',
            fills: [
                '#febe76',
                '#ff7979',
                '#badc58',
                '#f9ca23',
                '#f0932b',
                '#eb4c4b',
                '#6ab04c',
                '#7ed6df',
              ],
              strokes: [
                '#b28553',
                '#b35555',
                '#829a3e',
                '#ae8d19',
                '#a8671e',
                '#a43535',
                '#4a7b35',
                '#58969c',
              ],
        }],
    }
    const optionsPie2 = {
        autoSize: true,
        data: rowData,
        series: [{
            type: 'pie',

            labelKey: 'skuid',
            angleKey: 'unit',
            fills: [
                '#febe76',
                '#ff7979',
                '#badc58',
                '#f9ca23',
                '#f0932b',
                '#eb4c4b',
                '#6ab04c',
                '#7ed6df',
              ],
              strokes: [
                '#b28553',
                '#b35555',
                '#829a3e',
                '#ae8d19',
                '#a8671e',
                '#a43535',
                '#4a7b35',
                '#58969c',
              ],
        }],
    }


    
    return ( 
        <div className="ag-theme-alpine" style={{height: 400, width: '100%'}}>
            <AgGridReact
                rowData={rowData}>
                <AgGridColumn field="skuid" flex={2} resizable={true} sortable={ true } filter={ true }></AgGridColumn>
                <AgGridColumn field="barcode" sortable={ true } filter={ true }></AgGridColumn>
                <AgGridColumn field="unit" sortable={ true }></AgGridColumn>
            </AgGridReact>
            <br />

            <div style={{ display: 'flex' , height: 400}} >
                <AgChartsReact options={options} />;
                <AgChartsReact options={optionsPie} />;
                <AgChartsReact options={optionsPie2} />;
            </div>
        </div>
     );
}
 
export default DemoPage;