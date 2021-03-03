import React from 'react';
import {Sidebar} from './Sidebar'


// esto es el journalScreen
export const Notes = () => {
    return (
        <div className="notes__main-content">
            
            <Sidebar />

            <main>
                <h1>Main content</h1>
            </main>
        </div>
    )
}
