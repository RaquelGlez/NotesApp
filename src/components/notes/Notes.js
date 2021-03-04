import React from 'react';
import { NoteScreen } from '../manageNotes/NoteScreen';
import {Sidebar} from './Sidebar'
import { WithoutSelection } from './WithoutSelection';


// esto es el journalScreen
export const Notes = () => {
    return (
        <div className="notes__main-content">
            
            <Sidebar />

            <main>
                {/* <WithoutSelection/> */}
                <NoteScreen/>

            </main>
        </div>
    )
}
