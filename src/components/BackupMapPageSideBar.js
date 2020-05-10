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
                    <h3>CT</h3>
                    <ToggleCheckbox/>
                </Menu.Item>
                <Menu.Item as='a'>
                    <h3>T</h3>
                    <ToggleCheckbox/>
                </Menu.Item>
                <Menu.Item as='a'>
                    <h3>Strats</h3>
                    <ToggleCheckbox/>
                </Menu.Item>
                <Menu.Item as='a'>
                    <h3>A</h3>
                    <ToggleCheckbox/>
                </Menu.Item>
                <Menu.Item as='a'>
                    <h3>Mid</h3>
                    <ToggleCheckbox/>
                </Menu.Item>
                <Menu.Item as='a'>
                    <h3>B</h3>
                    <ToggleCheckbox/>
                </Menu.Item>
                <Menu.Item as='a'>
                    <h3>Smoke</h3>
                    <ToggleCheckbox/>
                </Menu.Item>
                <Menu.Item as='a'>
                    <h3>Flash</h3>
                    <ToggleCheckbox/>
                </Menu.Item>
                <Menu.Item as='a'>
                    <h3>Molotov</h3>
                    <ToggleCheckbox/>
                </Menu.Item>
                <Menu.Item as='a'>
                    <h3>Grenade</h3>
                    <ToggleCheckbox/>
                </Menu.Item>
            </Sidebar>
        </Sidebar.Pushable>
    )
}

export default MapPageSidebar
