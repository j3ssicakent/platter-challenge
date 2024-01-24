tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                "heading": ["Source Serif 4", "serif"],
                "body": ["Poppins", "sans-serif"],
                "display": ["Bebas Neue", "sans-serif"],
            },
            colors: {
                primary: {
                    100: "#707070",
                    300: "#DDD6D7",
                    500: "#231F20",
                    600: "#1C1D1D",
                    900: "#000000"
                },
                secondary: {
                    100: "#5C553A",
                    500: "#5C7962"
                }
            },
            backgroundColor: '#ffffff',
            borderRadius: {
                DEFAULT: "10px",
                "button": "100px"
            }
        }
    }
}
