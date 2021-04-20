import React from 'react';
import {useDispatch} from 'react-redux';
import { startLogout } from '../../actions/auth';
import { NotesEntries } from './NotesEntries';

export const Sidebar = () => {

    const dispatch = useDispatch();
 
    const handleLogout =() => {
        dispatch( startLogout())
    }


    return (
        <aside className="notes__sidebar">
            <div className="notes__sidebar-navbar">
                <h3 className="mt-5">
                    <i className="far fa-moon"></i>
                    <span> María</span>
                </h3>
                <button 
                    className="btn"
                    onClick={handleLogout}
                >
                    Logout
                </button>
            </div>
            <div className="notes__new-entry">
                <i className="far fa-calendar-plus fa-5x"></i>
                <p className="mt-5">New entry</p>
            </div>
            <NotesEntries/>
        </aside>
    )
}
