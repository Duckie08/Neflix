import React from 'react';
import {
         Input, 
         Button, 
         Text, 
         Container,
         Break
        } from './styles/otp-form';

export default function OtpForm({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

OtpForm.Input = function OtpFormInput({...restProps}) {
    return <Input {...restProps} />;
};

OtpForm.Button = function OtpButton({children, ...restProps}) {
    return (
        <Button {...restProps}>
            {children} <img src='/images/icons/chevron-right.png' alt="Try Now" />
        </Button>
    );
};

OtpForm.Text = function OtpFormText({children, ...restProps}) {
    return <Text {...restProps}>{children}</Text>;
};

OtpForm.Break = function OtpFormBreak({...restProps}) {
    return <Break {...restProps} />
}

