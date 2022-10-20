function ButtonKomlo({
     type = 'primary',      //or 'secondary'
     children,
     onClick,
     className = '',
     disabled = false,
     isBlock = true,        //if the button is a block element (class block)
    }){

    const textSize = 'text-base lg:text-lg';

    const padding = 'px-7 lg:px-10 py-3 lg:py-4';

    const color = {
        primary: 'text-white',
        secondary: 'text-slate-700 dark:text-slate-200',
    };

    const backgroundColors = {
        primary: 'bg-blue-500',
        secondary: 'bg-transparent',
    };

    const border = {
        primary: 'border-none',
        secondary: 'border-2 border-gray-800 dark:border-white',
    };

    const disabledStyle = disabled
        ? 'opacity-50 cursor-not-allowed'
        : 'transition ease-in-out duration-300 hover:cursor-pointer';

    let baseClasses = [
        'uppercase',
        'font-oswald',
        textSize,
        border[type],
        backgroundColors[type],
        color[type],
        padding,
        disabledStyle,
    ];

    if (className) {
        baseClasses = [...baseClasses, ...className.split(' ')];
    }
    if (isBlock) {
        baseClasses = [...baseClasses, 'block w-full'];
    }

    return (
        <button onClick={onClick} className={baseClasses.join(' ')} disabled={disabled}>
            {children}
        </button>
    )
}

export default ButtonKomlo;