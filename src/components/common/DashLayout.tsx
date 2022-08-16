import React from 'react';

export const DashLayout = (props:any)=>{
    return (
        <div style={{width:'100%'}}>
            <div className={'dash-content'}>
                {props.children}
            </div>
        </div>
    );
}

export default DashLayout;