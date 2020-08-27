import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

const Portal: React.FC = ({ children }) => {  
    const modalRoot: any = document.getElementById("content");
    const el = document.createElement("div");
    
    useEffect(() => {    
        modalRoot.appendChild(el);  
    }, []);   
    useEffect(() => {  
        return () => modalRoot.removeChild(el); 
    });   
    return createPortal(children, el);
};

const ModalWrapper = styled.div`
  position: fixed;  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ModalCard = styled.div`
  position: relative;
  min-width: 320px;
  z-index: 10;
  margin-bottom: 100px;
  background: white;
  border-radius: 5px;
  padding: 15px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
`; 
const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  background: transparent;
  margin: 1rem;
  font-size: 2rem;
  &:hover {    
    cursor: pointer;
  }`; 

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: black;
  opacity: 0.5;
  transition-property: opacity;
  pointer-events: none;
`;

interface ModalProps {
    children: React.ReactNode;
    open: boolean;
    closeable?: boolean;
}

const Modal: React.FC<ModalProps> = ({ children, closeable=true, open }) => { 
    const [modalOpen, setModalOpen] = useState(open);

    const toggle = () => {
        if(closeable !== undefined && closeable) setModalOpen(!modalOpen);
    }

    return (
        <Portal>
    {modalOpen && (      
    <ModalWrapper>       
        <ModalCard>
            {closeable ? (
                <CloseButton onClick={toggle}>            
                    &times;
                </CloseButton>
            ) : null }          
        {children}
        </ModalCard>
        <Background onClick={toggle} />      
    </ModalWrapper>    
    )}  
    </Portal>
    );
}; 

export default Modal; 

