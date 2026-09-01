// TextDialog
import React, { useState } from 'react';

import { I18n } from '@iobroker/adapter-react-v5';
import RSSDialog from './RSSDialog';
import EJSAceEditor from './EJSAceEditor';

interface EJSDialogProps {
    onChange: (value: string) => void;
    onClose: () => void;
    open: boolean;
    value: string;
    themeType: string;
}

const EJSDialog = (props: EJSDialogProps): React.JSX.Element | null => {
    const [value, changeValue] = useState(props.value);

    return props.open ? (
        <RSSDialog
            keyboardDisabled
            title={I18n.t('vis_2_widgets_rssfeed_widget_title')}
            open={!0}
            actionTitle={I18n.t('vis_2_widgets_rssfeed_widget_save')}
            action={() => props.onChange(value)}
            onClose={props.onClose}
            minWidth={800}
            actionDisabled={value === props.value}
        >
            <EJSAceEditor
                value={value}
                focus
                height={400}
                onChange={newValue => changeValue(newValue)}
                themeType={props.themeType}
            />
        </RSSDialog>
    ) : null;
};

export default EJSDialog;
