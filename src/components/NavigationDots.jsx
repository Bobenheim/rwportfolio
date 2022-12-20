import React from 'react';


const NavigationDots = ({ active }) => {
  return (
    <div className='app__navigation'>
        {['robert', 'o mně', 'dovednosti', 'weby', 'grafika', 'kontakt'].map((item, index) => (
                <a 
                href={`#${item}`}
                key={item + index}
                className="app__navigation-dot"
                style={active === item ? { backgroundColor: '#313BAC' } : { }}
                />
            ))}
    </div>
  )
}

export default NavigationDots