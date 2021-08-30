import faqsData from '../fixtures/faqs.json';
import { Accordion } from '../components';
import React from 'react';

export function FaqsContainer() {
    return (
        <Accordion>

            <Accordion.Title>Frequently Asked Question</Accordion.Title>
            {faqsData.map((item) => (
                <Accordion.Item key={item.id}>
                    <Accordion.Header>{item.header}</Accordion.Header>
                    <Accordion.Body>{item.body}</Accordion.Body>
                </Accordion.Item>
            ))
            }
            <Accordion.Item />
        </Accordion>
    );
}