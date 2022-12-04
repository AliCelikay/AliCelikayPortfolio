import React from 'react';
import '../css/footer.css';
import { Icon } from '@iconify/react';

export default function Footer() {
    return (
        <>
            <div>
                {/* <footer> */}
                    {/* <div>©AliCelikay</div> */}
                    <div className='footer'>
                        <div className='content'>
                            <a className='git-linked' target="_blank" href='https://github.com/AliCelikay' rel="noreferrer" ><Icon icon="mdi:github" width="55" height="55" /></a>

                            <a className='git-linked' target="_blank" href='https://www.linkedin.com/in/alicelikay/' rel="noreferrer" ><Icon icon="mdi:linkedin" width="55" height="55" /></a>
                            
                            <a className='codewars' href='https://www.codewars.com/users/AliCelikay129' target="_blank" rel="noreferrer" ><Icon icon="simple-icons:codewars" width="40" height="40" /></a>
                        </div>
                    </div>
                {/* </footer> */}
            </div>
        </>
    );
}


