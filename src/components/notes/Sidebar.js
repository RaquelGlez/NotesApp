import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { startLogout } from '../../actions/auth';
import { startNewNote } from '../../actions/notes';
import { NotesEntries } from './NotesEntries';

export const Sidebar = () => {

    const dispatch = useDispatch();

    const { name } = useSelector(state => state.auth);
 
    const handleLogout =() => {
        dispatch( startLogout())
    }

    const handleAddNew =()=>{
        
        dispatch( startNewNote() );


    }


    return (
        <aside className="notes__sidebar">
            <div className="notes__sidebar-navbar">
                <h3 className="mt-5">
                    <i className="far fa-user"></i>
                    {/* <i className="far fa-moon"></i> */}
                    {/* <span> María</span> */}
                    <span> {name} </span>
                </h3>
                <button 
                    className="btn"
                    onClick={handleLogout}
                >
                    <i className="fas fa-sign-out-alt mr-1"></i>
                    Logout
                </button>
            </div>
            <div 
                className="notes__new-entry"
                onClick={handleAddNew}
                >
                <i className="far fa-calendar-plus fa-5x"></i>
                <p className="mt-5">New entry</p>
            </div>
            <NotesEntries/>
        </aside>
    )
}
