(()=>{

    const Second = 1000;
    const Minute = Second * 60;
    const Hour = Minute * 60;
    const Day = Hour * 24;


    function setElementInnerText(id,text){
        const element = document.getElementById(id);
        element.innerText = text;
    }
    function countDown(){
        const now = new Date().getTime();
        const newYear = new Date('December 31, 2020 23:59:59').getTime();
        const unixTimeLeft = newYear - now;

        console.log(unixTimeLeft);

        // const daysElem = document.getElementById('day');
        // daysElem.innerText = Math.floor(unixTimeLeft / Day);
        // setElementnInerText('days', Math.floor(unixTimeLeft / Day));

        setElementInnerText('days', Math.floor(unixTimeLeft /Day));
        setElementInnerText('hours', Math.floor(unixTimeLeft % Day / Hour));
        setElementInnerText('minutes', Math.floor(unixTimeLeft % Hour / Minute ));
        setElementInnerText('seconds', Math.floor(unixTimeLeft % Minute / Second));

    }

    function run(){
        countDown();
        setInterval(countDown, Second);
    };
    run();
})();