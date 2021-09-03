import React from 'react';
import { Feature, OtpForm } from '../components';
import { JumbotronContainer } from '../container/jumbotron';
import { FaqsContainer } from '../container/faqs';
import { FooterContainer } from '../container/footer';
import { HeaderContainer } from '../container/header';

export default function Home() {
    return (
        <>
        <HeaderContainer>
            <Feature>
                <Feature.Title>
                    Unlimited films, TV programes and more.
                </Feature.Title>
                <Feature.SubTitle>
                    Watch anywhere. Cancel at any time.
                </Feature.SubTitle>

                <OtpForm>
                <OtpForm.Input placeholder="Email address" />
                <OtpForm.Button>Try it now</OtpForm.Button>
                <OtpForm.Break />
                <OtpForm.Text>
                    Ready to watch  Enter your email to create or restart your membership
                </OtpForm.Text>
            </OtpForm>
            </Feature>
     

        </HeaderContainer>
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
        </>
    )
}