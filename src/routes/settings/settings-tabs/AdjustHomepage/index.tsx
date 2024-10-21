import { Accordion, AccordionDetails, AccordionSummary, Checkbox, Typography } from '@mui/material';
import ArrowDownward from '@mui/icons-material/ArrowDownward';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks.ts';
import { ChartIds } from '../../../../components/BaseChart/BaseChart.tsx';
import { homePageActions } from '../../../../store/slices/homePageSlice.ts';

export const AdjustHomepage = () => {
    const { charts } = useAppSelector((state) => state.charts);
    const { visibleChartIds } = useAppSelector((state) => state.homePage);

    const chartMap = Object.keys(charts).map((id) => ({
        [id]: charts[id].dataLabel,
    }));

    const appDispatch = useAppDispatch();

    const handleToggleChartVisiblity = (id: ChartIds): void => {
        if (visibleChartIds.includes(id)) {
            appDispatch(homePageActions.setCharts(visibleChartIds.filter((chartId) => chartId !== id)));
        } else {
            appDispatch(homePageActions.setCharts([...visibleChartIds, id]));
        }
    };

    return (
        <div className="adjust-charts">
            <h1>Homepage settings</h1>
            <div className="adjust-charts-settings">
                <Accordion>
                    <AccordionSummary expandIcon={<ArrowDownward />} aria-controls="panel1-content" id="panel1-header">
                        <Typography>Visible charts</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        {chartMap.map((chart) => {
                            const id = Object.keys(chart)[0];

                            return (
                                <div>
                                    <Checkbox
                                        key={id}
                                        aria-label={'test'}
                                        id={id}
                                        checked={visibleChartIds.includes(Object.keys(chart)[0])}
                                        onClick={() => handleToggleChartVisiblity(Object.keys(chart)[0] as ChartIds)}
                                        size="small"
                                    />
                                    {Object.values(chart)[0]}
                                </div>
                            );
                        })}
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    );
};
