import React from 'react';
import styled from 'styled-components';

const Button = ({ type = "button" }) => {
    return (
        <StyledWrapper>
            <button type={type} className="button">
                <span className="button__text">Add</span>
                <span className="button__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" stroke="currentColor" fill="none" className="svg">
                        <line y2={19} y1={5} x2={12} x1={12} />
                        <line y2={12} y1={12} x2={19} x1={5} />
                    </svg>
                </span>
            </button>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
  /* Tüm animasyon ve button CSS kodları buraya */
`;

export default Button;
