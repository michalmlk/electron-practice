import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ArrowDownward from '@mui/icons-material/ArrowDownward';
import { ChartSettings } from './ChartSettings/ChartSettings.tsx';
import './index.css';

export const AdjustCharts = () => {
    return (
        <div className="adjust-charts">
            <h1>Adjust chars</h1>
            <div className="adjust-charts-settings">
                <Accordion>
                    <AccordionSummary expandIcon={<ArrowDownward />} aria-controls="panel1-content" id="panel1-header">
                        <Typography>CPU usage</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <ChartSettings type="cpuUsage" />
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary expandIcon={<ArrowDownward />} aria-controls="panel1-content" id="panel1-header">
                        <Typography>Free memory</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <ChartSettings type="freeOperatingMemory" />
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    );
};
