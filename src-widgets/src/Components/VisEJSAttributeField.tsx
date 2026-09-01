import React, { useState } from 'react';

import { TextField, Button } from '@mui/material';
import { Edit as EditIcon } from '@mui/icons-material';
import { I18n } from '@iobroker/adapter-react-v5';

import EJSDialog from './EJSDialog';

interface VisEJSAttributeFieldProps {
    field: {
        name?: string;
    };
    data: any;
    onDataChange: (data: any) => void;
    props: any;
}
const VisEJSAttributeField = ({
    field, // field properties: {name, label, type, set, singleName, component,...}
    data, // widget data
    onDataChange, // project object: {VIEWS..., [view]: {widgets: {[widgetID]: {tpl, data, style}}, settings, parentId, rerender, filterList, activeWidgets}, __settings: {}}
    props,
}: VisEJSAttributeFieldProps): React.JSX.Element => {
    const error = '';
    const fieldName = field.name || '';

    const [idDialog, setIdDialog] = useState(false);

    return (
        <>
            <TextField
                sx={{
                    '.MuiInputBase-input': {
                        fontSize: '80%',
                    },
                }}
                size="small"
                // placeholder={isDifferent ? t('different') : null}
                variant="standard"
                value={data && data[fieldName]}
                fullWidth
                error={!!error}
                helperText={typeof error === 'string' ? I18n.t(error) : null}
                onChange={e => {
                    onDataChange({
                        [fieldName]: e.target.value,
                    }); // returns all changed field as object.
                    // If some propertiy is null, so it will be deleted from data
                }}
                InputProps={{
                    endAdornment: (
                        <Button
                            size="small"
                            onClick={() => setIdDialog(true)}
                        >
                            <EditIcon />
                        </Button>
                    ),
                }}
                rows={2}
            />
            {idDialog ? (
                <EJSDialog
                    open={!0}
                    value={data[fieldName]}
                    onChange={newValue => onDataChange({ [fieldName]: newValue })}
                    onClose={() => setIdDialog(false)}
                    themeType={props.context.theme.name}
                />
            ) : null}
        </>
    );
};
export default VisEJSAttributeField;
