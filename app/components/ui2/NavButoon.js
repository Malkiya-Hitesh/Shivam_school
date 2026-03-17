import React from 'react';

function NavButoon(props) {
    const { children, theme } = props;

    return (
        <button className={`px-4 py-2 rounded-[10px] text-lg  font-semibold ${theme === 'dark' ? 'bg-[var(--primary)] text-[var(--text-w)] hover:bg-[var(--secondary)]' : 'bg-[var(--bg-light)] text-[var(--text-p)] border border-[var(--color-primary)]'} hover:scale-[1.03] active:scale-[0.97] transition-all duration-300 ease-out shadow-md hover:shadow-lg `}>
            {children}
        </button>
    );
}

export default NavButoon;
