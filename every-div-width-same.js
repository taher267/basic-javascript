 const allSp = document.querySelectorAll('.st-sp');
            const warr = [];
            let maxW = 0;
            for (i = 0; i < allSp.length; i++) {
                maxW = maxW > allSp[i].clientWidth ? maxW : allSp[i].clientWidth;
            }
            for (i = 0; i < allSp.length; i++) {
                allSp[i].style.width = maxW + "px";

            }
