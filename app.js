const target = document.querySelector(".header-user-cart-ul");
if (!document.querySelector("#vl-notification-container") && target) {
    addNotification();
}

function addNotification() {
    try {
        const campName = "Notification Icon";
        let items =
            [
                {
                    title: "CUMAFIRSATLARI Koduyla Sepette %11 İndirim 😍",
                    url: "https://flavus.com",
                    endDate: "Nov 26 2023 20:00 GMT+0300 (GMT+03:00)",
                },
                {
                    title: "Sevilen Skin401 Ürünlerinde %25 İndirim❤️",
                    url: "https://flavus.com/collections/skin401",
                    endDate: null,
                },
                {
                    title: "The Purest Solution’da %40 İndirim",
                    url: "https://flavus.com/collections/the-purest-solutions",
                    endDate: "Nov 30 2023 23:59 GMT+0300 (GMT+03:00)",
                },
                {
                    title: "Cream Co. Net %40 İndirim Fırsatı",
                    url: "https://flavus.com/collections/cream-co",
                    endDate: "Nov 25 2023 23:59 GMT+0300 (GMT+03:00)",
                },
                {
                    title: "Kore Güzelliğinde %50’ye Varan İndirim",
                    url: "https://flavus.com/collections/kore-kozmetik",
                    endDate: "Nov 26 2023 23:59 GMT+0300 (GMT+03:00)",
                },
                {
                    title: "Skinmaster’da Net %60 İndirim",
                    url: "https://flavus.com/collections/skinmaster",
                    endDate: null,
                },
            ];
        items = items.filter(item => { if (!item.endDate || new Date(item.endDate) >= new Date()) return item; });
        if (items.length === 0) return;
        const style = document.createElement("style");
        style.innerHTML = `
        #vl-notification-container {
            position: absolute;
            align-self: flex-start;
            user-select: none;
            z-index: 999;
            font-size: 14px;
            right: -3vw;
        }
        
        #vl-notification-container #vl-notification {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 2.5em;
            width: 2.5em;
            border: 1px solid rgb(241, 214, 0);
            cursor: pointer;
            user-select: none;
        }

        #vl-notification-container #vl-notification:after {
            content: attr(data-count);
            position: absolute;
            top: -0.5em;
            right: -0.5em;
            width: 1.25em;
            height: 1.25em;
            border-radius: 50%;
            background-color: rgb(241, 214, 0);
            color: black;
            display: flex;
            justify-content: center;
            align-items: center;
            user-select: none;
            font-size: 0.825em;
        }
        
        #vl-notification-container .vl-notification:hover {
            background: white;
        }
        
        #vl-notification-container #vl-notification-list {
            position: absolute;
            width: 20em;
            max-width: 80vw;
            top: calc(100% + 2em);
            left: 50%;
            line-height: 0.5em;
            flex-direction: column;
            padding: 0.5em;
            z-index: 10;
            background: #ebebeb;
            align-items: center;
            justify-content: center;
            box-shadow: 0px 2px 10px 0px grey;
            display: flex;
            transform: scale(0) translateX(-50%);
            transform-origin: top left;
            opacity: 0;
            filter: blur(20px);
            height: auto;
            transition: all 0.5s ease-in-out;
            isolation: isolate;
        }

        #vl-notification-container:hover #vl-notification-list {
            transform: scale(1) translateX(-50%);
            opacity: 1;
            filter: blur(0);
        }

        #vl-notification-container #vl-notification-list.vl-active {
            transform: scale(1) translateX(-50%);
            opacity: 1;
            filter: blur(0);
        }
        
        #vl-notification-container #vl-notification-list > a {
            padding: 0.5em;
            width: 100%;
            line-height: 1.25em;
            font-size: 1.1em;
            text-align: left;
            text-decoration: none;
            user-select: none;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 0.5em;
            flex-direction: column;
            border-bottom: 1px solid rgba(0, 0, 0, .1);
            color: black;
        }

        #vl-notification-container #vl-notification-list > a:last-child {
            border-bottom: none;
        }
        
        #vl-notification-container #vl-notification-list > a:hover {
            background: #f0f0f0;
        }
        
        #vl-notification-container #vl-notification-list > a span {
            width: 100%;
        }

        #vl-notification-container #vl-notification-list > a .vl-notify-countdown {
            width: 100%;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
        }
        
        #vl-notification-container #vl-arrow {
            position: absolute;
            display: inline-block;
            transform: translateX(-50%) translateY(-100%);
            left: 50%;
            top: 0;
            height: 1.5em;
            width: 1.5em;
            -webkit-clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
            clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
            background-color: #0A2240;
            box-shadow: 0px 2px 10px 0px grey;
        }
        
        #vl-notification-container .vl-notify {
            animation: vl-bell 3s ease-in-out;
            animation-iteration-count: infinite;
            transform-origin: center top;
        }
        
        @keyframes vl-bell {
            0% {
                transform: rotate(35deg);
            }
        
            4.5% {
                transform: rotate(-30deg);
            }
        
            8.5% {
                transform: rotate(25deg);
            }
        
            12.5% {
                transform: rotate(-20deg);
            }
        
            16.5% {
                transform: rotate(15deg);
            }
        
            20.5% {
                transform: rotate(-10deg);
            }
        
            25% {
                transform: rotate(5deg);
            }
        
            33% {
                transform: rotate(0);
            }

            100% {
                transform: rotate(0);
            }
        }
        
        @media screen and (max-width: 768px) {
            #vl-notification-container {
                font-size: 12px;
            }

            #vl-notification-container #vl-notification {
                height: 2em;
                width: 2em;
            }
        }
        `;
        document.head.appendChild(style);

        const notificationContainer = document.createElement("div");
        notificationContainer.id = "vl-notification-container";

        const notification = document.createElement("div");
        notification.id = "vl-notification";
        notification.dataset.count = items.length;
        notification.innerHTML = `
            <img class="vl-notify" style="width: auto; height: 100%;" src="https://imgvisilabsnet.azureedge.net/banner/uploaded_images/454_1490_20231121151023133.png" alt="vl-notification-icon" >
        `;

        notificationContainer.append(notification);

        const listContainer = document.createElement("div");
        listContainer.id = "vl-notification-list";
        const arrow = document.createElement("span");
        arrow.id = "vl-arrow";
        listContainer.append(arrow);

        items.forEach(item => {
            const listItem = document.createElement("a");
            if (item.endDate && item.endDate instanceof Date) {
                listItem.innerHTML = `
                <span>${item.title}</span>
                <div class="vl-notify-countdown">
                    <div class="vl-days-container"><span class="vl-days"></span> Gün</div>
                    <div class="vl-hours-container"><span class="vl-hours"></span> Saat</div>
                    <div class="vl-minutes-container"><span class="vl-minutes"></span> Dakika</div>
                    <div class="vl-seconds-container"><span class="vl-seconds"></span> Saniye</div>
                </div>`;
            } else {
                listItem.innerHTML = `<span>${item.title}</span>`;
            }
            listItem.href = item.url;
            listItem.dataset.title = item.title;
            listContainer.append(listItem);

            if (item.endDate && item.endDate instanceof Date) {
                countdown(new Date(), item.endDate, listItem);
                const _interval = setInterval(function () {
                    try {
                        const distance = countdown(new Date(), item.endDate, listItem);
                        if (distance <= 0) {
                            clearInterval(_interval);
                            listItem.remove();
                        };
                    } catch (ex) {
                        clearInterval(_interval);
                        return false;
                    }
                }, 1000);
            }
        });
        notificationContainer.append(listContainer);

        target.prepend(notificationContainer);

        notification.addEventListener("click", function (e) {
            toggleList();
        });

        document.querySelectorAll("#vl-notification-list > a").forEach(item => {
            item.addEventListener("click", clickItem);
        });

        function clickItem() {
            const title = this.dataset.title;
            var vl = new Visilabs();
            vl.AddParameter('OM.click', campName);
            vl.AddParameter("OM.clickDet", title);
            vl.Collect();
        }

        function toggleList() {
            listContainer.classList.toggle("vl-active");
        }

        function countdown(start, end, element) {
            const now = new Date(start);
            const finish = new Date(end);
            const distance = finish.getTime() - now.getTime();
            let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);
            days = days < 10 ? "0" + days : days;
            hours = hours < 10 ? "0" + hours : hours;
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            element.querySelector('.vl-days').innerText = days;
            element.querySelector('.vl-hours').innerText = hours;
            element.querySelector('.vl-minutes').innerText = minutes;
            element.querySelector('.vl-seconds').innerText = seconds;
            if (days === "00") element.querySelector('.vl-days-container').style.display = 'none';
            return distance;
        }
    } catch (error) {
        console.log("Notification Icon cannot be added");
    }
}
