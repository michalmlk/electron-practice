import { ChangeEvent, useEffect, useState } from 'react';
import { Button, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { chartActions, ChartConfiguration, ChartConfigurationRequest } from '../../../../../store/slices/chartsSlice.ts';
import { useAppDispatch, useAppSelector } from '../../../../../store/hooks.ts';
import { ChartIds } from '../../../../../components/BaseChart/BaseChart.tsx';

import './index.css';

export type ChartSettingsProps = {
    type: ChartIds;
};

export const ChartSettings = ({ type }: ChartSettingsProps) => {
    const { charts } = useAppSelector((state) => state.charts);
    const { fill, stroke, fillOpacity, dataLabel } = charts[type];

    const appDispatch = useAppDispatch();

    const [fillColor, setFillColor] = useState(fill);
    const [strokeColor, setStrokeColor] = useState(stroke);
    const [opacity, setOpacity] = useState(fillOpacity);
    const [label, setLabel] = useState(dataLabel);
    const [isFormValid, setIsFormValid] = useState(false);
    const [isUpdated, setIsUpdated] = useState(false);
    const [anyChanges, setAnyChanges] = useState(false);

    useEffect(() => {
        if (!opacity || !strokeColor || !fillColor) {
            setIsFormValid(false);
            setAnyChanges(true);
        } else {
            setIsFormValid(true);
        }
    }, [fillColor, strokeColor, opacity, label]);

    const handleOpacityChange = (e: ChangeEvent<HTMLInputElement>) => {
        setOpacity(e.target.value);
    };

    const handleLabelChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLabel(e.target.value);
    };

    const handleFilLColorChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFillColor(e.target.value);
    };

    const handleStrokeColorChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStrokeColor(e.target.value);
    };

    const handleSave = () => {
        appDispatch(
            chartActions.adjustChart({
                type,
                configuration: {
                    fill: fillColor,
                    fillOpacity: opacity,
                    stroke: strokeColor,
                    dataLabel: label,
                } as ChartConfiguration,
            } as ChartConfigurationRequest)
        );
        setIsUpdated(true);
        setAnyChanges(false);
    };

    return (
        <div className="chart-settings">
            <TextField label="Data label" variant="outlined" type="text" value={label} onChange={handleLabelChange} />
            <TextField label="Opacity" variant="outlined" type="number" value={opacity} onChange={handleOpacityChange} />
            <>
                <InputLabel id="fill-color-select-label">Fill color</InputLabel>
                <Select labelId="fill-color-select-label" value={fillColor} onChange={handleFilLColorChange}>
                    <MenuItem value="#32a852">Green</MenuItem>
                    <MenuItem value="#348dd1">Blue</MenuItem>
                    <MenuItem value="#b243ba">Pink</MenuItem>
                </Select>
            </>
            <>
                <InputLabel id="stroke-color-select-label">Stroke color</InputLabel>
                <Select labelId="stroke-color-select-label" value={strokeColor} onChange={handleStrokeColorChange}>
                    <MenuItem value="#3bdb41">Green</MenuItem>
                    <MenuItem value="#4a48c7">Blue</MenuItem>
                    <MenuItem value="#9933a1">Pink</MenuItem>
                </Select>
            </>
            <div className="form-footer">
                <Button variant="contained" onClick={handleSave} disabled={!isFormValid}>
                    Save
                </Button>
                {isUpdated && !anyChanges && (
                    <Typography variant="p" color="success">
                        Chart updated successfully
                    </Typography>
                )}
            </div>
        </div>
    );
};
