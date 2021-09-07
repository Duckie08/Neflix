import React from 'react';
import { BrowseContainer } from '../container/browse';
import { useContent } from '../hook';
import selectionFilter from '../utils/selection-filter';

export default function Browse() {
    const { series } = useContent('series')
    const { films } = useContent('films')
    const slides = selectionFilter({ series, films });

    //pass it to the browse container

    return <BrowseContainer slides={slides} />;
}