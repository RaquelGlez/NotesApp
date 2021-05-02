import React from 'react';
import { NoteScreen } from '../manageNotes/NoteScreen';
import {Sidebar} from './Sidebar'
import { useSelector } from 'react-redux';
import { WithoutSelection } from './WithoutSelection';


// journalScreen
export const Notes = () => {

    const { active } = useSelector(state => state.notes)

    return (
        <div 
            className="notes__main-content animate__animated animate__fadeIn animate__faster"
        >
            
            <Sidebar />

            <main>

                { 
                    ( active )
                        ? ( <NoteScreen/> ) 
                        : ( <WithoutSelection/> )  
                }

            </main>
        </div>
    )
}


