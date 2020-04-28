//import { useBooleanKnob } from '@stardust-ui/docs-components'
import React from 'react'
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'
import ToggleCheckbox from "./ToggleCheckbox";

const MapPageSidebar = () => {
    //const [visible, setVisible] = useBooleanKnob({ name: 'visible' })
    const visible = true;
    //const [visible, setVisible] = useBooleanKnob({ name: 'visible' })
    function setVisible(boolean){

    }

    return (
        <Sidebar.Pushable as={Segment}>
            <Sidebar
                as={Menu}
                animation='overlay'
                icon='labeled'
                inverted
                onHide={() => setVisible(false)}
                vertical
                visible={visible}
                width='thin'
            >
                <Menu.Item as='a'>
                    <h2>CT</h2>
                    <ToggleCheckbox/>
                </Menu.Item>
                <Menu.Item as='a'>
                    <h2>T</h2>
                    <ToggleCheckbox/>
                </Menu.Item>
                <Menu.Item as='a'>
                    <h2>Strats</h2>
                    <ToggleCheckbox/>
                </Menu.Item>
            </Sidebar>
        </Sidebar.Pushable>
    )
}

export default MapPageSidebar
