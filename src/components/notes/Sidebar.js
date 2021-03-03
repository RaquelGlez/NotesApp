import React from 'react'
import { NotesEntries } from './NotesEntries'

export const Sidebar = () => {
    return (
        <aside className="notes__sidebar">
            <div className="notes__sidebar-navbar">
                <h3 className="mt-5">
                    <i className="far fa-moon"></i>
                    <span> María</span>
                </h3>
                <button className="btn">
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
