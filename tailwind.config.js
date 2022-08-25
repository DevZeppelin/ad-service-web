module.exports = {
    purge: false,
    content: [
        './pages/**/*.{html,js}',
        './components/**/*.{html,js}',
      ],
    theme: {
        screens: {
            'md': '850px',
        },
        extend: {
            colors : {
                primary : '#FFF',
                secundary: '#353B48',                
                gray: '#545454',
                lightGray: '#ADADAD',
                darkGray: '#1d1d1d',
                lowContrast: '#15536b' ,
                background: '#d6d4d4',
                backgroundSecundary: '#608b9b',
                dgreen: '#2d669a',
                lgreen: '#0a9ee6'
            },
            
            backgroundImage: theme => ({
                'hero': "url('/hero.png')",  
                'hero2': "url('/hero2.png')"                     
               })
        },
        grayscale: {
            100: '100%',
        },
        grayscale: ['hover']
    },
    
    variants: {
       
        borderColor: ["hover", "focus"],
        borderStyle: ['hover', 'focus'], 
          
    },
    plugins: []
}