document.getElementById('debounce').addEventListener('keyup', (() => {
            let timeControl;
            return ({ target: { value } }) => {
                clearTimeout(timeControl);
                timeControl = setTimeout(() => {
                    console.log(value);
                }, 500);

            }
        })());//addEventListener
