import React from 'react';
import {CounterMoreWrapper} from "./counterChallengeMoreStyles";
import {PageHeader} from "../../toolbelt/toolbelt.style";
import Button from "../../button/button.component";
import {darkBlue} from "../../../utils";

const CounterChallengeMore = () => {
    return (
        <CounterMoreWrapper>
            <PageHeader>Find out more about the 4th-IR People Counter Virtual Challenge!</PageHeader>
            <Button type="download" link="#" color={darkBlue[400]}>Challenge Rules</Button>
            <Button link="#">Challenge Rules</Button>
        </CounterMoreWrapper>
    );
};

export default CounterChallengeMore;