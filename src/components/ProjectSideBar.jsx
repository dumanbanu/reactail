import React from 'react';

const ProjectSideBar = () => {
    return (
        <aside className='w-1/3  px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl'>
            <h2 className='mb-8 front-bold  uppercase md:text-xl text-stone-200'>Your Project</h2>
            <div>
                <button className='px-4 text-xs md-text-base rounded-md  bg-stone-700 text-color-400 hover:bg-stone-600 hover:text-stone-100'> + Add Project</button>
            </div>
            <ul>
            </ul>
        </aside>
    );
};

export default ProjectSideBar;