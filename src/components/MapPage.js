import React, {useMemo, useState} from 'react';
import ContentGrid from "./ContentGrid";
import MapPageImage from "./MapPageImage";
import MapPageSidebar from "./MapPageSidebar";
import { FilterContext } from "./FilterContext";

const MapPage = ({mapName, mapSrc}) => {

    const [searchContent, setSearchContent] = useState('');
    const [isSmokeVisible, setSmokeVisible] = useState(false);
    const [isFlashVisible, setFlashVisible] = useState(false);
    const [isMolotovVisible, setMolotovVisible] = useState(false);
    const [isGrenadeVisible, setGrenadeVisible] = useState(false);
    const [isCTVisible, setCTVisible] = useState(false);
    const [isTVisible, setTVisible] = useState(false);
    const [isStratVisible, setStratVisible] = useState(false);
    const [isAVisible, setAVisible] = useState(false);
    const [isMidVisible, setMidVisible] = useState(false);
    const [isBVisible, setBVisible] = useState(false);
    const [isYardVisible, setYardVisible] = useState(false);
    const [isRampVisible, setRampVisible] = useState(false);
    const [isVentVisible, setVentVisible] = useState(false);
    const [isValueOneVisible, setValueOneVisible] = useState(false);
    const [isValueTwoVisible, setValueTwoVisible] = useState(false);
    const [isValueThreeVisible, setValueThreeVisible] = useState(false);
    const [isValueFourVisible, setValueFourVisible] = useState(false);
    const [isValueFiveVisible, setValueFiveVisible] = useState(false);

    const providerValue = useMemo(() => (
            {
                searchContent,
                isSmokeVisible,
                isFlashVisible,
                isMolotovVisible,
                isGrenadeVisible,
                isCTVisible,
                isTVisible,
                isStratVisible,
                isAVisible,
                isMidVisible,
                isBVisible,
                isYardVisible,
                isRampVisible,
                isVentVisible,
                isValueOneVisible,
                isValueTwoVisible,
                isValueThreeVisible,
                isValueFourVisible,
                isValueFiveVisible,
                setSearchContent,
                setSmokeVisible,
                setFlashVisible,
                setMolotovVisible,
                setGrenadeVisible,
                setCTVisible,
                setTVisible,
                setStratVisible,
                setAVisible,
                setMidVisible,
                setBVisible,
                setYardVisible,
                setRampVisible,
                setVentVisible,
                setValueOneVisible,
                setValueTwoVisible,
                setValueThreeVisible,
                setValueFourVisible,
                setValueFiveVisible
            }
        ),
        [
            searchContent,
            isSmokeVisible,
            isFlashVisible,
            isMolotovVisible,
            isGrenadeVisible,
            isCTVisible,
            isTVisible,
            isStratVisible,
            isAVisible,
            isMidVisible,
            isBVisible,
            isYardVisible,
            isRampVisible,
            isVentVisible,
            isValueOneVisible,
            isValueTwoVisible,
            isValueThreeVisible,
            isValueFourVisible,
            isValueFiveVisible,
            setSearchContent,
            setSmokeVisible,
            setFlashVisible,
            setMolotovVisible,
            setGrenadeVisible,
            setCTVisible,
            setTVisible,
            setStratVisible,
            setAVisible,
            setMidVisible,
            setBVisible,
            setYardVisible,
            setRampVisible,
            setVentVisible,
            setValueOneVisible,
            setValueTwoVisible,
            setValueThreeVisible,
            setValueFourVisible,
            setValueFiveVisible
        ]
    );

    return (
        <div>
            <div>
                <MapPageImage imageSrc={mapSrc} mapName={mapName}/>
                <br/><br/>
            </div>
            <div className="grid-container-map-page">
                <FilterContext.Provider value={providerValue}>
                    <div>
                        <MapPageSidebar mapName={mapName}/>
                    </div>
                    <div>
                        <div id={mapName}>
                            <ContentGrid mapName={mapName}/>
                        </div>
                    </div>
                </FilterContext.Provider>
            </div>
        </div>
    );
};

export default MapPage;