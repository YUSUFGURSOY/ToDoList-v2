import React from 'react';
import styled from 'styled-components';

const Checkbox = ({ checked = false, todoKey }) => {
    const uniqueId = `cbx-${todoKey}`;

    return (
        <StyledWrapper>
            <div className="cntr">
                <input type="checkbox" checked={checked} readOnly id={uniqueId} className="hidden-xs-up" />
                <label htmlFor={uniqueId} className="cbx" />
            </div>
        </StyledWrapper>
    );
};

export default Checkbox;

const StyledWrapper = styled.div`
  .cbx {
    position: relative;
    top: 1px;
    width: 27px;
    height: 27px;
    border: 1px solid #c8ccd4;
    border-radius: 3px;
    vertical-align: middle;
    transition: background 0.1s ease;
    cursor: pointer;
    display: block;
  }

  .cbx:after {
    content: '';
    position: absolute;
    top: 2px;
    left: 8px;
    width: 7px;
    height: 14px;
    opacity: 0;
    transform: rotate(45deg) scale(0);
    border-right: 2px solid #fff;
    border-bottom: 2px solid #fff;
    transition: all 0.3s ease;
    transition-delay: 0.15s;
  }

  input:checked + .cbx {
    border-color: transparent;
    background: #099625ff;
    animation: jelly 0.6s ease;
  }

  input:checked + .cbx:after {
    opacity: 1;
    transform: rotate(45deg) scale(1);
  }

  .cntr {
    position: relative;
    display: inline-block;
  }

  @keyframes jelly {
    from { transform: scale(1, 1); }
    30% { transform: scale(1.25, 0.75); }
    40% { transform: scale(0.75, 1.25); }
    50% { transform: scale(1.15, 0.85); }
    65% { transform: scale(0.95, 1.05); }
    75% { transform: scale(1.05, 0.95); }
    to { transform: scale(1, 1); }
  }

  .hidden-xs-up {
    display: none !important;
  }
`;
