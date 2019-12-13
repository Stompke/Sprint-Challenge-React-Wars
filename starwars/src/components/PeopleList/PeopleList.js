import React from 'react';
import PersonCard from '../PersonCard/PersonCard';
import { PeopleListStyles } from './PeopleListStyles';
import { PaginationContainer, PaginationButton } from './PaginationButtonStyles';

const PeopleList = (props) => {

    const paginationButtons = {
        width: '50%'
    }

    return (
        <PeopleListStyles>
            <PaginationContainer>
            <PaginationButton style={paginationButtons} onClick={() => {props.setAxiosCall(props.data.previous)}} >Previous</PaginationButton>
            <PaginationButton style={paginationButtons} onClick={() => {props.setAxiosCall(props.data.next)}} >Next</PaginationButton>
            </PaginationContainer>
            {props.peopleData.map((person, index) => {
                return (
                    <PersonCard key={index} personData={person} />
                    
                )
            })}

        </PeopleListStyles>
    );
}

export default PeopleList;